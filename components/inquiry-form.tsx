'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Language } from '../lib/i18n';

type Texts = {
  requestProposal: string;
  fullName: string;
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  inquiryPlaceholder: string;
  submitInquiry: string;
};

export default function InquiryForm({ text, lang }: { text: Texts; lang: Language }) {
  const ar = lang === 'ar';
  const [form, setForm] = useState({ fullName: '', companyName: '', emailAddress: '', phoneNumber: '', targetCompany: 'group', inquiryType: 'project', inquiry: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const update = (field: keyof typeof form, value: string) => setForm((current) => ({ ...current, [field]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) {
        setStatus('success');
        setForm({ fullName: '', companyName: '', emailAddress: '', phoneNumber: '', targetCompany: 'group', inquiryType: 'project', inquiry: '' });
      } else {
        const body: { error?: string } = await res.json().catch(() => ({}));
        setErrorMsg(body.error || (ar ? 'تعذر إرسال الاستفسار.' : 'The inquiry could not be sent.'));
        setStatus('error');
      }
    } catch {
      setErrorMsg(ar ? 'حدث خطأ في الاتصال. يرجى المحاولة مجدداً.' : 'A network error occurred. Please try again.');
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="professional-form contact-inquiry-form">
      <header><span className="kicker">{text.requestProposal}</span><h2>{ar ? 'أخبرنا عن مشروعك.' : 'Tell us about your project.'}</h2><p>{ar ? 'سنوجه رسالتك إلى الفريق المناسب.' : 'We will direct your message to the right team.'}</p></header>
      <div className="form-grid">
        <label><span>{ar ? 'الجهة المعنية' : 'Contact team'}</span><select className="input" value={form.targetCompany} onChange={(e) => update('targetCompany', e.target.value)}><option value="group">{ar ? 'مجموعة صهيوني' : 'Sahiony Group'}</option><option value="hta">HTA · {ar ? 'قطر' : 'Qatar'}</option><option value="sec">SEC · {ar ? 'سوريا' : 'Syria'}</option></select></label>
        <label><span>{ar ? 'نوع الاستفسار' : 'Inquiry type'}</span><select className="input" value={form.inquiryType} onChange={(e) => update('inquiryType', e.target.value)}><option value="project">{ar ? 'مشروع جديد' : 'New project'}</option><option value="tender">{ar ? 'مناقصة أو تأهيل' : 'Tender or prequalification'}</option><option value="maintenance">{ar ? 'صيانة أو دعم' : 'Maintenance or support'}</option><option value="general">{ar ? 'استفسار عام' : 'General inquiry'}</option></select></label>
        <label><span>{text.fullName} *</span><input className="input" value={form.fullName} onChange={(e) => update('fullName', e.target.value)} autoComplete="name" required /></label>
        <label><span>{text.companyName}</span><input className="input" value={form.companyName} onChange={(e) => update('companyName', e.target.value)} autoComplete="organization" /></label>
        <label><span>{text.emailAddress} *</span><input className="input" value={form.emailAddress} onChange={(e) => update('emailAddress', e.target.value)} autoComplete="email" type="email" required /></label>
        <label><span>{text.phoneNumber}</span><input className="input" value={form.phoneNumber} onChange={(e) => update('phoneNumber', e.target.value)} autoComplete="tel" type="tel" /></label>
      </div>
      <label className="form-field-wide"><span>{ar ? 'تفاصيل الاستفسار' : 'Project or inquiry details'}</span><textarea className="textarea" value={form.inquiry} onChange={(e) => update('inquiry', e.target.value)} placeholder={text.inquiryPlaceholder} rows={6} /></label>
      <div className="form-submit-row"><button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? (ar ? 'جارٍ الإرسال...' : 'Sending…') : text.submitInquiry} <ArrowUpRight size={16} /></button><span>{ar ? 'عادةً ما يرد فريقنا خلال يومي عمل.' : 'Our team typically responds within two business days.'}</span></div>
      <div aria-live="polite">{status === 'success' && <div className="toast">{ar ? 'تم إرسال استفسارك. شكراً لتواصلك معنا.' : 'Your inquiry has been sent. Thank you.'}</div>}{status === 'error' && <div className="toast error">{errorMsg}</div>}</div>
    </form>
  );
}
