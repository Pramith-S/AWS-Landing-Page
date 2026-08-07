import { useState } from 'react';
import { X, CheckCircle2, Sparkles, User, Mail, GraduationCap } from 'lucide-react';
import './JoinModal.css';

const awsLogo = '/images/aws_logo.png';

const JoinModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    usn: '',
    year: '2nd Year',
    interest: 'Cloud Computing & DevOps'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="join-modal-overlay" onClick={onClose}>
      <div className="join-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <CheckCircle2 size={56} className="modal-success-icon" />
            <h3 className="modal-success-title">Welcome to AWS SBG JSSATEB!</h3>
            <p className="modal-success-desc">
              Your application has been received. Check your inbox at <strong>{formData.email}</strong> for 
              Discord community invite link & upcoming bootcamp schedule.
            </p>
            <button 
              className="btn-purple-primary modal-action-btn"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              Back to Community Portal
            </button>
          </div>
        ) : (
          <div className="modal-content-wrapper">
            <div className="modal-header">
              <div className="modal-badge">
                <img src={awsLogo} alt="AWS Logo" style={{ width: 18, height: 18, objectFit: 'contain' }} />
                <span>AWS STUDENT BUILDER GROUP</span>
              </div>
              <h2 className="modal-title">Become an AWS Builder</h2>
              <p className="modal-subtitle">
                Join 500+ student developers at JSSATEB building real-world cloud applications.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="modal-field">
                <label className="modal-label">
                  <User size={14} />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aditi Rao"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="modal-input"
                />
              </div>

              <div className="modal-row-2col">
                <div className="modal-field">
                  <label className="modal-label">
                    <Mail size={14} />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@jssateb.ac.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="modal-input"
                  />
                </div>

                <div className="modal-field">
                  <label className="modal-label">
                    <GraduationCap size={14} />
                    <span>USN / Roll No.</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="1JS22CS001"
                    value={formData.usn}
                    onChange={(e) => setFormData({ ...formData, usn: e.target.value })}
                    className="modal-input"
                  />
                </div>
              </div>

              <div className="modal-row-2col">
                <div className="modal-field">
                  <label className="modal-label">Year of Study</label>
                  <select 
                    value={formData.year} 
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="modal-select"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>

                <div className="modal-field">
                  <label className="modal-label">Primary Interest</label>
                  <select 
                    value={formData.interest} 
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="modal-select"
                  >
                    <option value="Cloud Computing & DevOps">Cloud & DevOps</option>
                    <option value="Serverless & Microservices">Serverless & Microservices</option>
                    <option value="AWS Certifications">AWS Certifications</option>
                    <option value="GenAI & Cloud Data">GenAI & Cloud Data</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-purple-primary modal-submit-btn">
                <Sparkles size={16} />
                <span>Join AWS SBG Community</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
