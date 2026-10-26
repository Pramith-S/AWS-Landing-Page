import { useState, useEffect } from 'react';
import { MapPin, Mail, Send, Building2, CheckCircle2, MessageSquare, User, AtSign, Briefcase, AlertTriangle, ShieldAlert } from 'lucide-react';
import CosmicCloudVeil from './CosmicCloudVeil';
import StrokeText from './StrokeText';
import './ContactSection.css';

const MAX_MESSAGES_PER_DAY = 2;

const getTodayDateString = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: 'Student',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);
  const [messagesSentToday, setMessagesSentToday] = useState(0);

  // Check rate limit on mount
  useEffect(() => {
    const checkLimits = async () => {
      const today = getTodayDateString();
      let count = 0;

      // 1. LocalStorage Device Check
      try {
        const localData = JSON.parse(localStorage.getItem('aws_sbg_contact_limit') || '{}');
        if (localData.date === today) {
          count = Math.max(count, localData.count || 0);
        }
      } catch (e) {
        // Fallback
      }

      // 2. IP Record Local Check
      try {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        if (ipRes.ok) {
          const { ip } = await ipRes.json();
          const ipKey = `aws_sbg_ip_${today}_${ip}`;
          const ipCount = parseInt(localStorage.getItem(ipKey) || '0', 10);
          count = Math.max(count, ipCount);
        }
      } catch (e) {
        // Ignore network errors on IP lookup
      }

      setMessagesSentToday(count);
      if (count >= MAX_MESSAGES_PER_DAY) {
        setRateLimited(true);
      }
    };

    checkLimits();
  }, []);

  const recordSubmission = async () => {
    const today = getTodayDateString();
    const newCount = messagesSentToday + 1;

    // 1. Record on Device
    localStorage.setItem('aws_sbg_contact_limit', JSON.stringify({ date: today, count: newCount }));

    // 2. Record by IP
    try {
      const ipRes = await fetch('https://api.ipify.org?format=json');
      if (ipRes.ok) {
        const { ip } = await ipRes.json();
        const ipKey = `aws_sbg_ip_${today}_${ip}`;
        const ipCount = parseInt(localStorage.getItem(ipKey) || '0', 10);
        localStorage.setItem(ipKey, String(ipCount + 1));
      }
    } catch (e) {
      // Ignore IP errors
    }

    setMessagesSentToday(newCount);
    if (newCount >= MAX_MESSAGES_PER_DAY) {
      setRateLimited(true);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rateLimited) return;

    setLoading(true);

    try {
      // Send real email via FormSubmit AJAX service targeting official email awsjssateb@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/awsjssateb@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          role: formData.role,
          message: formData.message,
          _subject: `New AWS SBG Inquiry from ${formData.fullName} (${formData.role})`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        await recordSubmission();
        setSubmitted(true);
      } else {
        // Fallback: Trigger direct mailto link if API encounters block
        window.location.href = `mailto:awsjssateb@gmail.com?subject=${encodeURIComponent(`AWS SBG Inquiry from ${formData.fullName}`)}&body=${encodeURIComponent(`Name: ${formData.fullName}\nEmail: ${formData.email}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`)}`;
        await recordSubmission();
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Email dispatch error:', err);
      // Fallback: Trigger direct mailto link
      window.location.href = `mailto:awsjssateb@gmail.com?subject=${encodeURIComponent(`AWS SBG Inquiry from ${formData.fullName}`)}&body=${encodeURIComponent(`Name: ${formData.fullName}\nEmail: ${formData.email}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`)}`;
      await recordSubmission();
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      {/* Cosmic Cloud Constellation Animated Background */}
      <CosmicCloudVeil />

      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Contact Info & Campus Location Card */}
          <div className="contact-info-col">
            <div className="section-badge">
              <MessageSquare size={14} />
              <span>// GET IN TOUCH</span>
            </div>

            <div className="about-stroke-heading section-stroke-heading" aria-label="Connect with AWS SBG JSSATEB">
              <StrokeText
                text="Connect with"
                trigger="scroll"
                strokeColor="#8B5CF6"
                fillColor="#F8FAFC"
                strokeWidth={1.2}
                drawDuration={1.4}
                fillDelay={0.2}
                stagger={0.03}
                fontSize={32}
                fontWeight={800}
                letterSpacing={-0.5}
                fillMode="wipe"
              />
              <StrokeText
                text="AWS SBG JSSATEB"
                trigger="scroll"
                strokeColor="#8B5CF6"
                fillColor="#8B5CF6"
                strokeWidth={1.2}
                drawDuration={1.4}
                fillDelay={0.3}
                stagger={0.03}
                fontSize={32}
                fontWeight={800}
                letterSpacing={-0.5}
                fillMode="wipe"
              />
            </div>

            <p className="contact-lead-desc">
              Have questions about upcoming workshops, interested in partnering as an industry sponsor,
              or want to deliver a technical cloud talk on campus? Drop us a message!
            </p>

            <div className="info-cards-stack">
              {/* College Card */}
              <div className="sbg-card contact-info-card">
                <div className="info-icon-box">
                  <Building2 size={20} className="info-icon" />
                </div>
                <div className="info-details">
                  <span className="info-label">Institution</span>
                  <span className="info-value">JSS Academy of Technical Education, Bengaluru</span>
                </div>
              </div>

              {/* Location Card */}
              <div className="sbg-card contact-info-card">
                <div className="info-icon-box">
                  <MapPin size={20} className="info-icon" />
                </div>
                <div className="info-details">
                  <span className="info-label">Campus Location</span>
                  <span className="info-value">Uttarahalli-Kengeri Main Road, Srinivasapura</span>
                  <span className="info-subtext">Bengaluru, Karnataka 560060, India</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="sbg-card contact-info-card">
                <div className="info-icon-box">
                  <Mail size={20} className="info-icon" />
                </div>
                <div className="info-details">
                  <span className="info-label">Official Community Email</span>
                  <a href="mailto:awsjssateb@gmail.com" className="info-link">awsjssateb@gmail.com</a>
                  <span className="info-subtext">Direct response within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="sbg-card contact-form-card">
              <h3 className="form-card-title">Send Us a Message</h3>
              <p className="form-card-subtitle">Fill out the form below and our team will get back to you promptly.</p>

              {rateLimited ? (
                <div className="rate-limit-box">
                  <ShieldAlert size={52} className="rate-limit-icon" />
                  <h4 className="rate-limit-title">Daily Limit Reached (2/2 Messages)</h4>
                  <p className="rate-limit-desc">
                    To prevent spam, submissions are restricted to <strong>2 messages per day</strong>. You have completed 2/2 messages for today.
                  </p>
                  <div className="rate-limit-action-box">
                    <p className="rate-limit-sub">
                      Need urgent assistance? Reach out directly via official email:
                    </p>
                    <a href="mailto:awsjssateb@gmail.com" className="btn-purple-primary rate-limit-email-btn">
                      <Mail size={16} />
                      <span>Email awsjssateb@gmail.com</span>
                    </a>
                  </div>
                </div>
              ) : submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you, {formData.fullName}. Our AWS SBG lead team has received your message and will reach out to <strong>{formData.email}</strong> shortly.</p>
                  <button
                    className="btn-purple-outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', role: 'Student', message: '' });
                    }}
                  >
                    Send Another Message ({messagesSentToday}/2 sent today)
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Full Name Input */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      <User size={14} />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Keanu Reeves"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      <AtSign size={14} />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@jssateb.ac.in or work@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Role Selector */}
                  <div className="form-group">
                    <label className="form-label">
                      <Briefcase size={14} />
                      <span>Your Role / Inquiry Category</span>
                    </label>
                    <div className="role-options-grid">
                      {['Student', 'Speaker', 'Sponsor'].map((roleOption) => (
                        <button
                          key={roleOption}
                          type="button"
                          className={`role-option-btn ${formData.role === roleOption ? 'selected' : ''}`}
                          onClick={() => setFormData({ ...formData, role: roleOption })}
                        >
                          {roleOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      <MessageSquare size={14} />
                      <span>Message</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project, query, or collaboration ideas..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="btn-purple-primary form-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Gradual Fade-out Overlay into Section Below (#0b0b0e) */}
      <div className="contact-bottom-fade-overlay" />
    </section>
  );
};

export default ContactSection;
