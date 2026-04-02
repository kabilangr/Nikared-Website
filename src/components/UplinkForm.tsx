"use client";

import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: REPLACE THIS OBJECT WITH YOUR ACTUAL FIREBASE CONFIGURATION
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "YOUR_API_KEY",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "your-project",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:abcdef"
};

// Initialize Firebase safely
let db: any = null;
try {
    if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    }
} catch (e) {
    console.error("Firebase Initialization Error.", e);
}

export default function UplinkForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [isTransmitting, setIsTransmitting] = useState(false);
    const [statusColor, setStatusColor] = useState("var(--secondary)");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        setIsTransmitting(true);
        setStatusColor("var(--secondary)");
        setStatus("Establishing secure connection to database...");

        try {
            if (!db) {
                throw new Error("Missing Firebase Config: Please update the firebaseConfig object in UplinkForm.tsx.");
            }
            
            await addDoc(collection(db, "contacts"), {
                name: name,
                email: email,
                timestamp: new Date().toISOString()
            });
            
            setStatusColor("var(--primary)");
            setStatus("DATA UPLINK SUCCESSFUL.");
            setName("");
            setEmail("");
            
            setTimeout(() => {
                setStatus("");
            }, 5000);
            
        } catch (error: any) {
            console.error("Data Transmission Error:", error);
            setStatusColor("var(--on-error-container)");
            setStatus(`TRANSMISSION FAILED: ${error.message}`);
        } finally {
            setIsTransmitting(false);
        }
    };

    return (
        <form id="uplink-form" onSubmit={handleSubmit} className="flex-col gap-12 mt-12" style={{ maxWidth: '80%' }}>
            <div style={{ position: 'relative' }}>
                <input 
                    id="access-id" 
                    type="text" 
                    placeholder="Access ID / Name" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isTransmitting}
                />
                <span className="label-sm" style={{ position: 'absolute', right: 0, top: '0.5rem', opacity: 0.8 }}>REQ</span>
            </div>
            <div style={{ position: 'relative' }}>
                <input 
                    id="secure-frequency" 
                    type="email" 
                    placeholder="Secure Frequency / Email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isTransmitting}
                />
                <span className="label-sm" style={{ position: 'absolute', right: 0, top: '0.5rem', opacity: 0.8 }}>REQ</span>
            </div>
            <div>
                <button 
                    id="uplink-submit" 
                    type="submit" 
                    className="btn-primary label-md"
                    disabled={isTransmitting}
                >
                    {isTransmitting ? "TRANSMITTING..." : (status.includes("FAILED") ? "RETRY TRANSMISSION" : "TRANSMIT DATA")}
                </button>
                {status && (
                    <p id="uplink-status" className="label-sm mt-8" style={{ color: statusColor, display: 'block' }}>
                        {status}
                    </p>
                )}
            </div>
        </form>
    );
}
