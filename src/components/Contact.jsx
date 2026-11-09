import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { contact, emailConfig, links, profile } from '../data'
import Reveal from './ui/Reveal'
import { GithubIcon, LinkedinIcon } from './ui/SocialIcons'
import LinkButton from './ui/LinkButton'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const emailConfigured = Boolean(
  emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey,
)

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Please add a short subject.'
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle size={13} /> {error}
        </p>
      )}
    </div>
  )
}

const inputCls =
  'w-full rounded-xl border border-theme bg-[var(--bg-elev)]/60 px-4 py-3 text-sm outline-none transition placeholder:text-[var(--muted)]/60 focus:border-[var(--accent-violet)] focus:ring-2 focus:ring-[var(--accent-violet)]/30 aria-[invalid=true]:border-red-400/70'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  // idle | sending | sent | fallback | error
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const er = validate(values)
    setErrors(er)
    if (Object.keys(er).length) return

    if (!emailConfigured) {
      // Honest fallback: no backend configured, so hand off to the visitor's mail app.
      const body = `${values.message}\n\n— ${values.name} (${values.email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        values.subject,
      )}&body=${encodeURIComponent(body)}`
      setStatus('fallback')
      return
    }

    setStatus('sending')
    try {
      // Loaded on demand so the email SDK isn't part of the initial bundle.
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
          to_email: profile.email,
        },
        { publicKey: emailConfig.publicKey },
      )
      setStatus('sent')
      setValues({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const info = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location },
  ]

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      {/* animated ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="drift absolute -left-24 top-10 h-96 w-96 rounded-full bg-[var(--accent-blue)] opacity-15 blur-3xl" />
        <div className="drift-2 absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-[var(--accent-violet)] opacity-15 blur-3xl" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
            <span className="h-px w-8 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)]" />
            Contact
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {contact.heading}
          </h2>
          <p className="text-muted mt-4 leading-relaxed">{contact.text}</p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="glass h-full rounded-3xl p-6 sm:p-8">
              <p className="font-display text-xl font-semibold">{profile.name}</p>
              <ul className="mt-6 space-y-5">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--accent-blue)]/15 text-[var(--accent-blue)]">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-muted text-xs uppercase tracking-widest">{label}</p>
                      {href ? (
                        <a href={href} className="break-all text-sm font-medium hover:text-[var(--accent-cyan)]">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--accent-violet)]/15 text-[var(--accent-violet)]">
                    <GithubIcon size={18} />
                  </span>
                  <div>
                    <p className="text-muted text-xs uppercase tracking-widest">GitHub</p>
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-[var(--accent-cyan)]"
                    >
                      {profile.githubUser}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={links.email}
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5"
                >
                  <Mail size={16} /> Email Me
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="glass grid h-10 w-10 place-items-center rounded-full transition hover:-translate-y-0.5"
                >
                  <GithubIcon size={17} />
                </a>
                <LinkButton
                  href={links.linkedin}
                  aria-label="LinkedIn profile"
                  className="glass grid h-10 w-10 place-items-center rounded-full transition hover:-translate-y-0.5"
                >
                  <LinkedinIcon size={17} />
                </LinkButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={onChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={inputCls}
                    placeholder="you@example.com"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field id="subject" label="Subject" error={errors.subject}>
                  <input
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={onChange}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={inputCls}
                    placeholder="What's this about?"
                  />
                </Field>
              </div>
              <div className="mt-5">
                <Field id="message" label="Message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`${inputCls} resize-y`}
                    placeholder="Tell me about your project or opportunity…"
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>

                <div aria-live="polite" className="min-h-[1.5rem] text-sm">
                  <AnimatePresence mode="wait">
                    {status === 'sent' && (
                      <motion.p
                        key="sent"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-emerald-400"
                      >
                        <CheckCircle2 size={16} /> Message sent — thank you!
                      </motion.p>
                    )}
                    {status === 'fallback' && (
                      <motion.p
                        key="fallback"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-muted max-w-xs"
                      >
                        Opening your email app with the message pre-filled. If nothing opens, write to{' '}
                        <a className="text-[var(--accent-cyan)] underline" href={links.email}>
                          {profile.email}
                        </a>
                        .
                      </motion.p>
                    )}
                    {status === 'error' && (
                      <motion.p
                        key="error"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 text-red-400"
                      >
                        <AlertCircle size={16} /> Couldn&apos;t send. Please email me directly instead.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
