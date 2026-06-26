import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Services = () => {
  const { services } = portfolioData;

  return (
    <section id="services">
      <div className="wrap">
        <span className="eyebrow">Roles I Fit Into</span>
        <h2 className="sec-h">{services.title}</h2>
        <p className="sec-sub">{services.sub}</p>
        
        <div className="srv-grid reveal">
          {services.list.map((srv, idx) => (
            <div key={idx} className="srv-card">
              <div className="srv-icon">{srv.icon}</div>
              <div className="srv-title">{srv.title}</div>
              <div className="srv-desc">{srv.desc}</div>
              <div className="srv-chips">
                {srv.chips.map((chip, chipIdx) => (
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
