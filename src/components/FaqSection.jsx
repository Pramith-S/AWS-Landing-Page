import { HelpCircle, Sparkles, ChevronRight } from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import StrokeText from './StrokeText';
import './FaqSection.css';

const faqItems = [
  {
    id: '01',
    question: 'Who can join AWS Student Builder Group JSSATEB?',
    answer: 'Any student currently enrolled at JSSATEB across all academic years and engineering branches! Whether you are a complete beginner eager to learn cloud fundamentals or an advanced developer building cloud-native apps, everyone is welcome.'
  },
  {
    id: '02',
    question: 'Are there any membership fees or prerequisites to participate?',
    answer: 'Absolutely zero fees! AWS SBG is a completely free, student-led community. You don’t need prior AWS or cloud experience to get started—our Tech Team guides you through hands-on labs step-by-step.'
  },
  {
    id: '03',
    question: 'What kind of events and workshops does AWS SBG host?',
    answer: 'We host weekly hands-on workshops on AWS Cloud primitives (EC2, S3, Bedrock AI, IAM, Lambda), 24-hour hackathons, open-source project sprints, guest sessions by AWS Solutions Architects, and certification study jams.'
  },
  {
    id: '04',
    question: 'How does AWS SBG help with AWS Certifications?',
    answer: 'We run dedicated peer study groups for the AWS Certified Cloud Practitioner and AWS Certified Solutions Architect Associate exams, providing structured learning roadmaps, practice exam dumps, and official discount vouchers whenever available.'
  },
  {
    id: '05',
    question: 'How can I apply for core leadership or domain team roles?',
    answer: 'Core team recruitments take place at the beginning of each academic semester across 4 domains: Tech, Events, Marketing, and Operations. Stay tuned to our official Discord & WhatsApp channels for recruitment callouts!'
  },
  {
    id: '06',
    question: 'Can industry sponsors or mentors collaborate with the chapter?',
    answer: 'Yes! We actively partner with cloud companies, tech communities, and AWS experts for hackathon mentorship, workshop co-hosting, and sponsorship opportunities. Reach out via our contact form or email us at awsjssateb@gmail.com.'
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

        {/* Scroll Stack FAQ Container */}
        <div className="faq-stack-wrapper">
          <ScrollStack
            itemDistance={20}
            itemScale={0.03}
            itemStackDistance={12}
            stackPosition="10%"
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
