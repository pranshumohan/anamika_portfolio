import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills">
      <div className="wrap">
        <span className="eyebrow">Expertise</span>
        <h2 className="sec-h">{skills.title}</h2>
        <p className="sec-sub">{skills.sub}</p>
        
        <div className="sgrid">
          {skills.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="sc reveal"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              <p className="snum">{pillar.num}</p>
              <h3 className="stitle">{pillar.title}</h3>
              <p className="sdesc">{pillar.desc}</p>
              <div className="schips">
                {pillar.chips.map((chip, chipIdx) => (
                  <span key={chipIdx} className="chip hi">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
