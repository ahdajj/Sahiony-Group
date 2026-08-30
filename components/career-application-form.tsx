"use client";

import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

type Texts = {
  applyFormTitle: string;
  applyFormDesc: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  position: string;
  experience: string;
  attachCv: string;
  submitApplication: string;
};

export default function CareerApplicationForm({ text }: { text: Texts }) {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [position, setPosition] = useState('');
  const [experience, setExperience] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('File size must be less than 10MB');
        setCvFile(null);
        return;
      }
      setCvFile(file);
      setErrorMsg('');
    }
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('emailAddress', emailAddress);
      formData.append('phoneNumber', phoneNumber);
      formData.append('position', position);
      formData.append('experience', experience);
      if (cvFile) {
        formData.append('cv', cvFile);
      }

      const res = await fetch('/api/career', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        setFullName('');
        setEmailAddress('');
        setPhoneNumber('');
        setPosition('');
        setExperience('');
        setCvFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
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
        <div className="kicker">{text.applyFormTitle}</div>
        <p className="subtle" style={{ marginTop: '8px' }}>{text.applyFormDesc}</p>
        <div className="spacer-24" />
        <div className="form-grid">
          <input
            className="input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={text.fullName}
            required
          />
          <input
            className="input"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder={text.emailAddress}
            type="email"
            required
          />
          <input
            className="input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={text.phoneNumber}
          />
          <input
            className="input"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder={text.position}
            required
          />
        </div>
        <div className="spacer-16" />
        <textarea
          className="textarea"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder={text.experience}
          required
        />
        <div className="spacer-16" />
        <div className="file-input-wrapper">
          <input
            ref={fileInputRef}
            id="cv-upload"
            type="file"
            onChange={handleFileChange}
            className="file-input"
          />
          <label htmlFor="cv-upload" className="file-input-label">
            {cvFile ? cvFile.name : text.attachCv}
          </label>
        </div>
        <div className="spacer-24" />
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : text.submitApplication} <ArrowRight size={16} />
        </button>

        {status === 'success' && <div className="spacer-16"><div className="toast">Application sent — thank you for applying!</div></div>}
        {status === 'error' && <div className="spacer-16"><div className="toast error">Error: {errorMsg}</div></div>}
      </div>
    </form>
  );
}
