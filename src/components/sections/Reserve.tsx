import { useState } from 'react';
import { CalendarCheck, Loader2 } from 'lucide-react';
import { supabase, type ReservationInput } from '@/lib/supabase';
import { InkArt } from '../InkArt';
import { Reveal } from '../Reveal';
import { ArtLayer } from '../ArtLayer';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Reserve() {
  const [form, setForm] = useState<ReservationInput>({
    name: '',
    phone: '',
    date: '',
    time: '19:00',
    party_size: 2,
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (key: keyof ReservationInput, value: string | number) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length !== 10) {
      setStatus('error');
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    const { error } = await supabase.from('reservations').insert({
      name: form.name,
      phone: form.phone,
      date: form.date,
      time: form.time,
      party_size: form.party_size,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong on our end. Please try again or call us.');
      return;
    }
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <section id="reserve" className="bg-cream-100 py-24 md:py-32">
        <div className="container-wide">
          <Reveal>
            <div className="mx-auto max-w-xl rounded-[2rem] bg-cream-50 p-10 text-center shadow-[0_30px_60px_-30px_rgba(83,45,26,0.3)] md:p-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-500/15 text-sage-600">
                <CalendarCheck size={30} />
              </div>
              <h2 className="mt-6 text-3xl text-ink-900">Request received</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-700">
                Thank you, {form.name.split(' ')[0] || 'friend'}. We've got your request for{' '}
                {form.party_size} on {form.date} at {form.time}. Our team will confirm your
                table by phone shortly.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setForm({ name: '', phone: '', date: '', time: '19:00', party_size: 2 });
                }}
                className="btn-ghost mt-8"
              >
                Make another request
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="reserve" className="relative bg-cream-100 py-24 md:py-32">
      <ArtLayer
        items={[
          { variant: 'palm', left: '2%', bottom: '10%', className: 'h-16 w-16 opacity-37 md:h-24 md:w-24', rotate: -12 },
          { variant: 'leaf', right: '3%', top: '18%', className: 'h-16 w-16 opacity-37 md:h-20 md:w-20', rotate: 18 },
        ]}
      />
      <div className="container-wide relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow">Reserve a Table</p>
              <InkArt variant="sprig" className="mt-4 h-8 w-12 text-clay-400" />
              <h2 className="mt-4 text-4xl text-ink-900 md:text-5xl">
                Save your <span className="italic text-clay-600">corner</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700">
                Tell us when you're coming and we'll have a table ready. For parties larger
                than eight, give us a call and we'll sort the rest.
              </p>
              <p className="mt-6 font-script text-2xl text-clay-600">
                walk-ins always welcome
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="card-soft flex flex-col gap-5 p-8 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone">
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="+91"
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="Date">
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                    className={`${inputClass} date-field`}
                  />
                </Field>
                <Field label="Time">
                  <select
                    value={form.time}
                    onChange={(e) => update('time', e.target.value)}
                    className={inputClass}
                  >
                    {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '21:00'].map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Guests">
                  <select
                    value={form.party_size}
                    onChange={(e) => update('party_size', Number(e.target.value))}
                    className={inputClass}
                  >
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {status === 'error' && (
                <p className="text-sm text-clay-600">{errorMsg}</p>
              )}

              <button type="submit" disabled={status === 'submitting'} className="btn-primary mt-2">
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending request
                  </>
                ) : (
                  'Request Table'
                )}
              </button>
              <p className="text-center text-xs text-ink-700/60">
                We'll confirm by phone within a few hours.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  'w-full rounded-lg border border-ink-900/10 bg-cream-50 px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-700/40 focus:border-clay-500 focus:outline-none focus:ring-2 focus:ring-clay-500/15';

const dateFieldStyle = `
  [&::-webkit-calendar-picker-indicator]:opacity-70
  [&::-webkit-calendar-picker-indicator]:cursor-pointer
  [&::-webkit-datetime-edit]:text-ink-900
`;

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-700/70">
        {label}
      </span>
      {children}
    </label>
  );
}
