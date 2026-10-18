"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { contact, profile } from "@/src/data/profile";

const mailIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.5 6.5L12 13l8.5-6.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const locationIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const linkedinIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 10.5V17M8 7.5v.01M12 17v-3.5a2 2 0 014 0V17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-custom">
        <SectionHeader eyebrow="GET IN TOUCH" title="Contact Me" />

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="contact-lead">{contact.lead}</h3>
            <p className="contact-text">{contact.text}</p>

            <div className="contact-info">
              <div className="contact-info__item">
                <span className="contact-info__icon">{mailIcon}</span>
                <div>
                  <p className="contact-info__label">Email</p>
                  <a className="contact-info__value" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="contact-info__item">
                <span className="contact-info__icon">{locationIcon}</span>
                <div>
                  <p className="contact-info__label">Location</p>
                  <p className="contact-info__value">{profile.location}</p>
                </div>
              </div>

              <div className="contact-info__item">
                <span className="contact-info__icon">{linkedinIcon}</span>
                <div>
                  <p className="contact-info__label">LinkedIn</p>
                  <a
                    className="contact-info__value"
                    href="https://www.linkedin.com/in/krishahir39"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/krishahir39
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
              {submitted ? (
                <p className="form-success" role="status">
                  Your email app should open with this message ready to send. If it doesn’t, email {profile.email}.
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
