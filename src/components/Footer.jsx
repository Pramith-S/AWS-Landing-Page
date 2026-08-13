import { Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import ShapeGrid from './ShapeGrid';
import Card from './Card';
import './Footer.css';

const awsLogo = '/images/aws_logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="sbg-footer">
      {/* Background ShapeGrid Canvas matching Hero Section */}
      <div className="footer-shapegrid-wrapper">
        <ShapeGrid
          speed={0.5}
          squareSize={30}
          direction="diagonal"
          borderColor="#2F293A"
          hoverFillColor="#222"
          shape="square"
          hoverTrailAmount={0}
          hoverColor="#A855F7"
          size={60}
          randomFlicker={true}
          randomFlickerCount={6}
        />
      </div>

      <div className="container">
        <div className="footer-main-grid">
          {/* Column 1: Branding & Socials */}
          <div className="footer-col branding-col">
            <a href="#" className="footer-brand">
              <img src={awsLogo} alt="AWS Logo" className="aws-brand-logo" />
              <div className="brand-text-group">
                <span className="brand-title">AWS <span className="highlight">Student Builder Group</span></span>
                <span className="brand-subtitle">JSS Academy of Technical Education Bengaluru</span>
              </div>
            </a>

            <p className="footer-tagline">
              Empowering the next generation of cloud architects, DevOps engineers, and serverless builders at JSS Academy of Technical Education, Bengaluru.
            </p>

            {/* Social Links Row */}
            <div className="footer-social-row">
              <a href="https://github.com/awsjssateb" target="_blank" rel="noreferrer" className="footer-social-link github-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/company/aws-sbg-jssateb/" target="_blank" rel="noreferrer" className="footer-social-link linkedin-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/aws.sbg_jssateb/" target="_blank" rel="noreferrer" className="footer-social-link instagram-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://chat.whatsapp.com/LvgZscYwBMD1lRVX79fgkh?s=cl&p=a&mlu=4" target="_blank" rel="noreferrer" className="footer-social-link whatsapp-link" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.852 0-3.667-.498-5.257-1.442l-.377-.225-3.908 1.025 1.043-3.809-.247-.393A9.85 9.85 0 0 1 1.95 11.97C1.95 6.474 6.425 2 11.951 2c2.68 0 5.198 1.044 7.094 2.94a9.98 9.98 0 0 1 2.906 7.031c0 5.497-4.475 9.972-10.001 9.972m0-18.04c-4.444 0-8.061 3.616-8.061 8.068 0 1.547.44 3.04 1.272 4.331l.199.309-.76 2.776 2.842-.745.297.177a8.03 8.03 0 0 0 4.21 1.185c4.444 0 8.061-3.616 8.061-8.067a8.06 8.06 0 0 0-8.06-8.034" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#about">About SBG</a></li>
              <li><a href="#pillars">Core Pillars</a></li>
              <li><a href="#events">Events & Labs</a></li>
              <li><a href="#team">Core Team</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Resources & Community */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Resources & Community</h4>
            <ul className="footer-links-list">
              <li><a href="https://aws.amazon.com/developer/" target="_blank" rel="noreferrer">AWS Developer Portal</a></li>
              <li><a href="https://aws.amazon.com/certification/" target="_blank" rel="noreferrer">AWS Certification Guide</a></li>
              <li><a href="https://aws.amazon.com/developer/community/student-hubs/" target="_blank" rel="noreferrer">AWS Student Hubs</a></li>
              <li><a href="https://explore.skillbuilder.aws/" target="_blank" rel="noreferrer">AWS Skill Builder</a></li>
            </ul>
          </div>

          {/* Column 4: Pass Card */}
          <div className="footer-col card-col">
            <Card />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            Built with caffeine and aderral by Pramith S for AWS SBG JSSATEB
          </p>

          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
