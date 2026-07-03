"use client";

import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "your-project",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:abcdef",
};

let db: ReturnType<typeof getFirestore> | null = null;
try {
  if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
} catch (e) {
  console.error("Firebase Initialization Error.", e);
}

const SUBJECTS = [
  { value: "", label: "Choose one" },
  { value: "enterprise", label: "Engineering Foundry" },
  { value: "ai", label: "AI & Machine Learning" },
  { value: "xr", label: "XR & Spatial Computing" },
  { value: "other", label: "Other" },
];

export default function UplinkForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusColor, setStatusColor] = useState("var(--on-surface-variant)");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);
    setStatusColor("var(--on-surface-variant)");
    setStatus("Sending...");

    try {
      if (!db) {
        throw new Error("Missing Firebase config: please update firebaseConfig in UplinkForm.tsx.");
      }

      await addDoc(collection(db, "contacts"), {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });

      setStatusColor("var(--secondary)");
      setStatus("Message sent — we'll be in touch within 24–48 hours.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setTimeout(() => setStatus(""), 5000);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Unknown error";
      console.error("Message send error:", error);
      setStatusColor("var(--on-error-container)");
      setStatus(`Couldn't send that. ${msg}`);
    } finally {
      setIsSending(false);
    }
  };

  const buttonLabel = isSending
    ? "Sending..."
    : status.startsWith("Couldn't")
    ? "Try again"
    : "Send message";

  return (
    <form id="uplink-form" onSubmit={handleSubmit} className="flex-col gap-12 mt-12" style={{ maxWidth: "80%" }}>

      <div>
        <label htmlFor="access-id" className="label-sm" style={{ display: "block", marginBottom: "0.5rem" }}>
          Name *
        </label>
        <input
          id="access-id"
          type="text"
          placeholder="Your name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={isSending}
        />
      </div>

      <div>
        <label htmlFor="secure-frequency" className="label-sm" style={{ display: "block", marginBottom: "0.5rem" }}>
          Email *
        </label>
        <input
          id="secure-frequency"
          type="email"
          placeholder="you@company.com"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isSending}
        />
      </div>

      <div>
        <label htmlFor="mission-type" className="label-sm" style={{ display: "block", marginBottom: "0.5rem" }}>
          What are you looking to build? *
        </label>
        <select
          id="mission-type"
          required
          value={subject}
          onChange={e => setSubject(e.target.value)}
          disabled={isSending}
        >
          {SUBJECTS.map(s => (
            <option key={s.value} value={s.value} disabled={s.value === ""}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="payload" className="label-sm" style={{ display: "block", marginBottom: "0.5rem" }}>
          Message *
        </label>
        <textarea
          id="payload"
          placeholder="A few lines about what you're building"
          required
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          disabled={isSending}
        />
      </div>

      <div>
        <button
          id="uplink-submit"
          type="submit"
          className="btn-primary label-md"
          disabled={isSending}
        >
          {buttonLabel}
        </button>
        {status && (
          <p id="uplink-status" className="label-sm mt-8" style={{ color: statusColor, display: "block", textTransform: "none", letterSpacing: 0 }} role="status" aria-live="polite">
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
