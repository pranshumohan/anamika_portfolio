import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { contact, personalInfo } = portfolioData;

  return (
    <section id="contact">
      <div className="wrap">
        <div className="cgrid">
          <div className="reveal">
            <span className="eyebrow">Let's Work Together</span>
            <h2 className="ch">
              {contact.title}<br />
              <span>{contact.titleHighlight}</span>
            </h2>
            <p className="cp">{contact.desc}</p>
            <div className="cbtns">
              <a href={`mailto:${personalInfo.email}`} className="btn-a">
                {personalInfo.email} →
              </a>
              {/* Direct Download resume link */}
              <a
                href={personalInfo.resumePath}
                download="anamika-resume.pdf"
                className="btn-b resume-dl"
              >
                Download Resume ↓
              </a>
            </div>
            <div className="cmeta">
              {personalInfo.bookingUrl && (
                <div className="crow">
                  <span className="clbl">Quick Connect</span>
                  <span className="cval">
                    <a href={personalInfo.bookingUrl} target="_blank" rel="noopener noreferrer">
                      {personalInfo.bookingDisplay}
                    </a>
                  </span>
                </div>
              )}
              <div className="crow">
                <span className="clbl">Phone</span>
                <span className="cval">{personalInfo.phone}</span>
              </div>
              <div className="crow">
                <span className="clbl">Location</span>
                <span className="cval">{personalInfo.location}</span>
              </div>
              <div className="crow">
                <span className="clbl">LinkedIn</span>
                <span className="cval">
                  <a href={personalInfo.linkedIn} target="_blank" rel="noopener noreferrer">
                    {personalInfo.linkedInDisplay}
                  </a>
                </span>
              </div>
              <div className="crow">
                <span className="clbl">Status</span>
                <span className="cval">{personalInfo.status}</span>
              </div>
            </div>
          </div>
          <div className="cvis reveal" style={{ transitionDelay: '.12s' }}>
            {contact.experience.map((exp, idx) => (
              <div key={idx} className="cvr">
                <div className="cvi">{exp.icon}</div>
                <div className="cvt">
                  <strong>{exp.role}</strong>
                  {exp.company}
                </div>
              </div>
            ))}
            <div
              style={{
                marginTop: '.3rem',
                padding: '.9rem',
                background: 'var(--abg)',
                border: '1px solid var(--abdr)',
                borderRadius: '9px',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--fm)',
                  fontSize: '10px',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: 'var(--a)',
                  marginBottom: '4px'
                }}
              >
                Open To
              </div>
              <div style={{ fontSize: '13px', color: 'var(--t1)', fontWeight: '500' }}>
                Full-time · Consulting · Global Remote
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
