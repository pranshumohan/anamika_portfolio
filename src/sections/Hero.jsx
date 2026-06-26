import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personalInfo, heroStats } = portfolioData;

  return (
    <section id="home">
      <div className="hbg1"></div>
      <div className="hbg2"></div>
      <div className="hw">
        <div>
          <p className="hgreet">{personalInfo.greet}</p>
          <h1 className="hh">
            <span>{personalInfo.titleParts.part1} </span>
            <span className="gg">{personalInfo.titleParts.part2}</span>
            <span>{personalInfo.titleParts.part3}</span>
            <span className="gg">{personalInfo.titleParts.part4}</span>
          </h1>
          <p className="hsub" dangerouslySetInnerHTML={{ __html: personalInfo.sub }} />
          <div className="hbtns">
            <a href="#work" className="btn-a">View My Work →</a>
            <a href="#contact" className="btn-b">Get In Touch</a>
          </div>
          <div className="hstats">
            {heroStats.map((stat, idx) => (
              <div key={idx} className="hs">
                <div
                  className="hsn"
                  data-counter={stat.counter}
                  data-fmt={stat.fmt}
                  data-sfx={stat.sfx}
                >
                  {stat.value}
                </div>
                <div className="hsl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hvis">
          <div className="ow">
            <div className="or"></div>
            <div className="or"></div>
            <div className="or"></div>
            <div className="oc"><div className="oinit">AP</div></div>
            <div className="ob1">
              <div className="obadge"><span>✍️</span>Content Strategy</div>
              <div className="obadge"><span>📱</span>Social Media</div>
              <div className="obadge"><span>📈</span>Growth Marketing</div>
            </div>
            <div className="ob2">
              <div className="obadge"><span>⬡</span>AWS Certified</div>
              <div className="obadge"><span>▸</span>B2B SaaS · D2C</div>
            </div>
          </div>
        </div>
      </div>
      <div className="shint">Scroll</div>
    </section>
  );
};
