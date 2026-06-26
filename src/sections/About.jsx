import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about">
      <div className="wrap">
        <div className="agrid reveal">
          <div>
            <span className="eyebrow">About Me</span>
            <h2 className="sec-h">{about.title}</h2>
            <div className="acreds">
              {about.items.map((item, idx) => (
                <div key={idx} className="ac">
                  <div className="aci">{item.icon}</div>
                  <div className="act">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ar">
            {about.bio.map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="atags">
              {about.tags.map((tag, idx) => (
                <span key={idx} className={`chip ${tag.active ? 'hi' : ''}`}>
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
