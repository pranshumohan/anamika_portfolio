import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Impact = () => {
  const { impact } = portfolioData;

  return (
    <section id="impact">
      <div className="wrap">
        <span className="eyebrow">Impact Snapshot</span>
        <h2 className="sec-h">{impact.title}</h2>
        <p className="sec-sub">{impact.sub}</p>
        <div className="imp-grid reveal">
          {impact.cards.map((card, idx) => (
            <div key={idx} className="imp-card">
              <div className="imp-n">{card.value}</div>
              <div className="imp-l">{card.label}</div>
              <div className="imp-s">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
