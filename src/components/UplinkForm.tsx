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
  { value: "", label: "Select discipline" },
  { value: "enterprise", label: "Enterprise Foundry" },
  { value: "ai", label: "AI Core R&D" },
  { value: "xr", label: "XR Frontiers" },
  { value: "other", label: "Other" },
];

export default function UplinkForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [statusColor, setStatusColor] = useState("var(--secondary)");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsTransmitting(true);
    setStatusColor("var(--secondary)");
    setStatus("Initializing transmission...");

    try {
      if (!db) {
        throw new Error("Missing Firebase Config: Please update the firebaseConfig object in UplinkForm.tsx.");
      }

      await addDoc(collection(db, "contacts"), {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });

      setStatusColor("var(--primary)");
      setStatus("DATA UPLINK SUCCESSFUL.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setTimeout(() => setStatus(""), 5000);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Unknown error";
      console.error("Data Transmission Error:", error);
      setStatusColor("var(--on-error-container)");
      setStatus(`TRANSMISSION FAILED: ${msg}`);
    } finally {
      setIsTransmitting(false);
    }
  };

  const buttonLabel = isTransmitting
    ? "TRANSMITTING..."
    : status.includes("FAILED")
    ? "RETRY TRANSMISSION"
    : "TRANSMIT DATA";

  return (
    <form id="uplink-form" onSubmit={handleSubmit} className="flex-col gap-12 mt-12" style={{ maxWidth: "80%" }}>

      <div style={{ position: "relative" }}>
        <input
          id="access-id"
          type="text"
          placeholder="Access ID / Name"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={isTransmitting}
        />
        <span className="label-sm" style={{ position: "absolute", right: 0, top: "0.5rem", opacity: 0.8 }}>REQ</span>
      </div>

      <div style={{ position: "relative" }}>
        <input
          id="secure-frequency"
          type="email"
          placeholder="Secure Frequency / Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isTransmitting}
        />
        <span className="label-sm" style={{ position: "absolute", right: 0, top: "0.5rem", opacity: 0.8 }}>REQ</span>
      </div>

      <div style={{ position: "relative" }}>
        <label htmlFor="mission-type" className="label-sm" style={{ display: "block", marginBottom: "0.5rem", color: "var(--secondary)" }}>
          Mission Type
        </label>
        <select
          id="mission-type"
          required
          value={subject}
          onChange={e => setSubject(e.target.value)}
          disabled={isTransmitting}
        >
          {SUBJECTS.map(s => (
            <option key={s.value} value={s.value} disabled={s.value === ""}>
              {s.label}
            </option>
          ))}
        </select>
        <span className="label-sm" style={{ position: "absolute", right: 0, bottom: "0.5rem", opacity: 0.8 }}>REQ</span>
      </div>

      <div style={{ position: "relative" }}>
        <textarea
          id="payload"
          placeholder="Payload / Message"
          required
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          disabled={isTransmitting}
        />
        <span className="label-sm" style={{ position: "absolute", right: 0, top: "0.5rem", opacity: 0.8 }}>REQ</span>
      </div>

      <div>
        <button
          id="uplink-submit"
          type="submit"
          className="btn-primary label-md"
          disabled={isTransmitting}
        >
          {buttonLabel}
        </button>
        {status && (
          <p id="uplink-status" className="label-sm mt-8" style={{ color: statusColor, display: "block" }}>
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
