import { HelpCircle, Sparkles, ChevronRight } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import StrokeText from './StrokeText';
import './FaqSection.css';

const faqItems = [
  {
    id: '01',
    question: 'Who can join AWS Student Builder Group JSSATEB?',
    answer: 'Open to all JSSATEB students across any year, branch, or skill level from cloud beginners to advanced developers!'
  },
  {
    id: '02',
    question: 'Are there any membership fees or prerequisites to participate?',
    answer: 'Completely free & beginner-friendly! AWS SBG provides step-by-step guidance through hands-on labs no prior experience required.'
  },
  {
    id: '03',
    question: 'What kind of events and workshops does AWS SBG host?',
    answer: 'We host weekly AWS workshops, 24h hackathons, open-source sprints, expert talks from AWS Solutions Architects, and certification study jams.'
  },
  {
    id: '04',
    question: 'How does AWS SBG help with AWS Certifications?',
    answer: 'Join our AWS Cloud Practitioner & Solutions Architect study groups for learning roadmaps, practice exams, and official voucher discounts!'
  },
  {
    id: '05',
    question: 'How can I apply for core leadership or domain team roles?',
    answer: 'We recruit core team members every semester (Tech, Events, Marketing, Operations). Stay tuned on LinkedIn & WhatsApp!'
  },
  {
    id: '06',
    question: 'Can industry sponsors or mentors collaborate with the chapter?',
    answer: 'Yes! We actively collaborate on mentorship, workshops, and sponsorships. Contact us via our form or email awsjssateb@gmail.com.'
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        {/* Section Header */}
        <div className="faq-header text-center">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>// FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <div className="about-stroke-heading section-stroke-heading" aria-label="Got Questions? We Have Answers">
            <StrokeText
              text="Got Questions?"
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
              text="We Have Answers"
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
          <p className="section-subtitle mx-auto">
            Everything you need to know about joining, participating, and getting AWS certified with AWS Student Builder Group JSSATEB.
          </p>
        </div>

        <div className="faq-stack-wrapper">
          <ScrollStack
            itemDistance={20}
            itemScale={0.03}
            itemStackDistance={14}
            stackPosition="12%"
            scaleEndPosition="5%"
            baseScale={0.88}
            rotationAmount={0}
            blurAmount={0}
            useWindowScroll={true}
          >
            {faqItems.map((faq) => (
              <ScrollStackItem key={faq.id}>
                <div className="faq-card-content">
                  <div className="faq-card-num-badge">
                    <Sparkles size={12} />
                    <span>FAQ #{faq.id}</span>
                  </div>
                  <h3 className="faq-question-title">{faq.question}</h3>
                  <p className="faq-answer-desc">{faq.answer}</p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
