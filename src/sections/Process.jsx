import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Process = () => {
  const { process } = portfolioData;

  return (
    <section id="process">
      <div className="wrap">
        <span className="eyebrow">My Approach</span>
        <h2 className="sec-h">{process.title}</h2>
        <p className="sec-sub">{process.sub}</p>
        
        <div className="proc-steps reveal">
          {process.steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="proc-step">
                <div className="proc-icon">{step.icon}</div>
                <div className="proc-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {idx < process.steps.length - 1 && <div className="proc-arrow">→</div>}
            </React.Fragment>
          ))}
        </div>
        
        <div className="proc-insight reveal">
          <p dangerouslySetInnerHTML={{ __html: process.insight }} />
        </div>
      </div>
    </section>
  );
};
