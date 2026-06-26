import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ReusableChart } from '../components/ReusableChart';

export const Metrics = () => {
  const { metrics } = portfolioData;

  return (
    <section id="metrics" className="in">
      <div className="wrap">
        <span className="eyebrow">By The Numbers</span>
        <h2 className="sec-h">{metrics.title}</h2>
        <p className="sec-sub">{metrics.sub}</p>
        
        <div className="mhero reveal">
          {metrics.cards.map((card, idx) => (
            <div key={idx} className="mhc">
              <div className="mhn">{card.value}</div>
              <div className="mhl">{card.label}</div>
              <div className="mhs">{card.sub}</div>
            </div>
          ))}
        </div>
        
        <div className="mcharts reveal">
          <div className="mc">
            <p className="mcl">{metrics.charts.aud.title}</p>
            <div style={{ position: 'relative', height: '170px' }}>
              <ReusableChart type="doughnut" data={metrics.charts.aud} />
            </div>
          </div>
          <div className="mc">
            <p className="mcl">{metrics.charts.imp.title}</p>
            <div style={{ position: 'relative', height: '170px' }}>
              <ReusableChart type="line" data={metrics.charts.imp} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
