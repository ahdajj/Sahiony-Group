"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type Texts = {
  requestProposal: string;
  fullName: string;
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  inquiryPlaceholder: string;
  submitInquiry: string;
};

export default function InquiryForm({ text }: { text: Texts }) {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, companyName, emailAddress, phoneNumber, inquiry }),
      });

      if (res.ok) {
        setStatus('success');
        setFullName('');
        setCompanyName('');
        setEmailAddress('');
        setPhoneNumber('');
        setInquiry('');
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(body?.error || 'Failed to send');
        setStatus('error');
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Network error');
      setStatus('error');
    }
  }


  return (
    <form onSubmit={handleSubmit} className="card soft">
      <div className="card-body">
        <div className="kicker">{text.requestProposal}</div>
        <div className="spacer-24" />
        <div className="form-grid">
          <input className="input" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={text.fullName} required />
          <input className="input" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder={text.companyName} />
          <input className="input" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder={text.emailAddress} type="email" required />
          <input className="input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder={text.phoneNumber} />
        </div>
        <div className="spacer-16" />
        <textarea className="textarea" value={inquiry} onChange={(e) => setInquiry(e.target.value)} placeholder={text.inquiryPlaceholder} />
        <div className="spacer-24" />
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : text.submitInquiry} <ArrowRight size={16} />
        </button>

        {status === 'success' && <div className="spacer-16"><div className="toast">Inquiry sent — thank you.</div></div>}
        {status === 'error' && <div className="spacer-16"><div className="toast error">Error: {errorMsg}</div></div>}
      </div>
    </form>
  );
}
