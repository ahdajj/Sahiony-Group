'use client';

import React, { useRef, useState } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import type { Language } from '../lib/i18n';

type Texts = { applyFormTitle: string; applyFormDesc: string; fullName: string; emailAddress: string; phoneNumber: string; position: string; experience: string; attachCv: string; submitApplication: string };

export default function CareerApplicationForm({ text, lang }: { text: Texts; lang: Language }) {
  const ar = lang === 'ar';
  const [form, setForm] = useState({ fullName: '', emailAddress: '', phoneNumber: '', position: '', experience: '' });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setErrorMsg(ar ? 'يجب ألا يتجاوز حجم الملف 10 ميغابايت.' : 'The file must be smaller than 10 MB.');
      setCvFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    setCvFile(file ?? null);
    setErrorMsg('');
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      if (cvFile) formData.append('cv', cvFile);
      const res = await fetch('/api/career', { method: 'POST', body: formData });
      if (res.ok) {
        setStatus('success');
        setForm({ fullName: '', emailAddress: '', phoneNumber: '', position: '', experience: '' });
        setCvFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      } else {
        const body: { error?: string } = await res.json().catch(() => ({}));
        setErrorMsg(body.error || (ar ? 'تعذر إرسال الطلب.' : 'The application could not be sent.'));
        setStatus('error');
      }
    } catch {
      setErrorMsg(ar ? 'حدث خطأ في الاتصال. يرجى المحاولة مجدداً.' : 'A network error occurred. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="professional-form career-form">
      <header><span className="kicker">{text.applyFormTitle}</span><h2>{ar ? 'عرّفنا بخبرتك.' : 'Introduce your experience.'}</h2><p>{text.applyFormDesc}</p></header>
      <div className="form-grid">
        <label><span>{text.fullName} *</span><input className="input" value={form.fullName} onChange={(e) => update('fullName', e.target.value)} autoComplete="name" required /></label>
        <label><span>{text.emailAddress} *</span><input className="input" value={form.emailAddress} onChange={(e) => update('emailAddress', e.target.value)} autoComplete="email" type="email" required /></label>
        <label><span>{text.phoneNumber}</span><input className="input" value={form.phoneNumber} onChange={(e) => update('phoneNumber', e.target.value)} autoComplete="tel" type="tel" /></label>
        <label><span>{text.position} *</span><input className="input" value={form.position} onChange={(e) => update('position', e.target.value)} required /></label>
      </div>
      <label className="form-field-wide"><span>{text.experience} *</span><textarea className="textarea" value={form.experience} onChange={(e) => update('experience', e.target.value)} rows={6} required /></label>
      <div className="file-field"><span>{text.attachCv}</span><input ref={fileInputRef} id="cv-upload" type="file" onChange={handleFileChange} className="file-input" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" /><label htmlFor="cv-upload" className="file-input-label"><FileText size={19} aria-hidden="true" /><strong>{cvFile ? cvFile.name : (ar ? 'اختر ملف السيرة الذاتية' : 'Choose your CV file')}</strong><small>{ar ? 'PDF أو Word، حتى 10 ميغابايت' : 'PDF or Word, up to 10 MB'}</small></label></div>
      <div className="form-submit-row"><button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? (ar ? 'جارٍ الإرسال...' : 'Sending…') : text.submitApplication} <ArrowUpRight size={16} /></button><span>{ar ? 'تُعامل معلوماتك بسرية.' : 'Your information is treated confidentially.'}</span></div>
      <div aria-live="polite">{status === 'success' && <div className="toast">{ar ? 'تم إرسال طلبك. شكراً لاهتمامك.' : 'Your application has been sent. Thank you.'}</div>}{(status === 'error' || errorMsg) && <div className="toast error">{errorMsg}</div>}</div>
    </form>
  );
}
