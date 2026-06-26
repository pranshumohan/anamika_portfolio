import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ReusableChart } from '../components/ReusableChart';

export const Work = ({ onOpenLightbox }) => {
  const { work } = portfolioData;
  const [activeTab0, setActiveTab0] = useState(0); // Social Path Project index
  const [activeTab1, setActiveTab1] = useState(0); // Performance Path Project index

  const handleCgScroll = (elementId, dir) => {
    const el = document.getElementById(elementId);
    if (el) {
      // Scroll 3 cards at a time: card 170px + gap 14px = 184px * 3
      el.scrollBy({ left: dir * 184 * 3, behavior: 'smooth' });
    }
  };

  const handleGalleryClick = (item) => {
    if (item.type === 'pdf') {
      window.open(item.src, '_blank');
    } else if (item.type === 'image' || item.type === 'video') {
      onOpenLightbox(item.type, item.src, item.caption);
    }
  };

  return (
    <section id="work">
      <div className="wrap">
        <span className="eyebrow">Selected Work</span>
        <h2 className="sec-h">{work.title}</h2>
        <p className="sec-sub">{work.sub}</p>

        {/* ─── PATH 0: SOCIAL MEDIA & CONTENT ─── */}
        <div className="path-hdr reveal">
          <div className="ph-icon">{work.socialPath.icon}</div>
          <div>
            <div className="ph-title">{work.socialPath.title}</div>
            <div className="ph-sub">{work.socialPath.sub}</div>
          </div>
        </div>

        <div className="tabs" id="tabs0">
          {work.socialPath.projects.map((proj, idx) => (
            <button
              key={proj.id}
              className={`tab ${activeTab0 === idx ? 'on' : ''}`}
              onClick={() => setActiveTab0(idx)}
            >
              {proj.name}
            </button>
          ))}
        </div>

        {/* Loop through all Social Media panels and render them simultaneously */}
        {work.socialPath.projects.map((proj, idx) => (
          <div
            key={proj.id}
            className={`panel ${activeTab0 === idx ? 'on' : ''}`}
            id={`p0${idx}`}
          >
            {idx === 0 && (
              // Tab 0: BizCloud Experts layout
              <div className="p00-top" style={{ gridColumn: '1 / -1' }}>
                <div className="reveal">
                  <p className="ptag">{proj.tag}</p>
                  <h3 className="ph">{proj.headline}</h3>
                  <p className="plbl">The Challenge</p>
                  <p className="pbody">{proj.challenge}</p>
                  <p className="plbl">The Approach</p>
                  <p className="pbody">{proj.approach}</p>
                  <div className="krow">
                    {proj.kpis.map((kpi, kpiIdx) => (
                      <div key={kpiIdx} className="kpi">
                        <div className="kpin">{kpi.value}</div>
                        <div className="kpil">{kpi.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="cbox">
                    <p className="cttl">{proj.chart.title}</p>
                    <ReusableChart type="line" data={proj.chart} />
                  </div>
                </div>
              </div>
            )}

            {idx === 1 && (
              // Tab 1: Phool Chatti Ashram layout
              <>
                <div className="reveal">
                  <p className="ptag">{proj.tag}</p>
                  <h3 className="ph">{proj.headline}</h3>
                  <p className="plbl">The Challenge</p>
                  <p className="pbody">{proj.challenge}</p>
                  <p className="plbl">The Approach</p>
                  <p className="pbody">{proj.approach}</p>
                  <div className="krow">
                    {proj.kpis.map((kpi, kpiIdx) => (
                      <div key={kpiIdx} className="kpi">
                        <div className="kpin">{kpi.value}</div>
                        <div className="kpil">{kpi.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="pc-preview">
                    <p className="cttl">Reels &amp; Content Samples · Click to Watch</p>
                    <div className="pc-grid">
                      {proj.gallery.slice(0, 2).map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="cg-card"
                          style={{ flex: 'unset' }}
                          onClick={() => handleGalleryClick(item)}
                        >
                          <div className="cg-vid-wrap">
                            <video
                              className="cg-video-thumb"
                              src={item.src}
                              muted
                              playsInline
                              preload="metadata"
                            />
                            <div className="cg-play-btn">▶</div>
                          </div>
                          <div className="cg-meta">
                            <span className="cg-tag vid">▶ {item.tag}</span>
                            <div
                              className="cg-name"
                              dangerouslySetInnerHTML={{ __html: item.title.replace('·', '<br/>') }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {idx === 2 && (
              // Tab 2: Brunswick Fur Food layout (Single Column)
              <div className="reveal" style={{ gridColumn: '1 / -1' }}>
                <p className="ptag">{proj.tag}</p>
                <h3 className="ph">{proj.headline}</h3>
                <p className="plbl">The Challenge</p>
                <p className="pbody">{proj.challenge}</p>
                <p className="plbl">The Approach</p>
                <p className="pbody">{proj.approach}</p>
                <div className="krow" style={{ maxWidth: '600px' }}>
                  {proj.kpis.map((kpi, kpiIdx) => (
                    <div key={kpiIdx} className="kpi">
                      <div className="kpin">{kpi.value}</div>
                      <div className="kpil">{kpi.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery rendering (Applies to Tab 0 and Tab 1) */}
            {proj.gallery && proj.gallery.length > 0 && (
              <div className="cg-wrap reveal">
                <div className="cg-hdr">
                  <span className="cg-title">🎨 Content Samples — Live Work · Click to View</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                    <span className="cg-count">{proj.gallery.length} pieces</span>
                    <button
                      className="cg-nav-btn"
                      onClick={() => handleCgScroll(`${proj.id}-gallery`, -1)}
                      aria-label="Previous"
                    >
                      ←
                    </button>
                    <button
                      className="cg-nav-btn"
                      onClick={() => handleCgScroll(`${proj.id}-gallery`, 1)}
                      aria-label="Next"
                    >
                      →
                    </button>
                  </div>
                </div>
                <div className="cg-nav-wrap">
                  <div className="cg-scroll" id={`${proj.id}-gallery`}>
                    {proj.gallery.map((item, itemIdx) => {
                      if (item.type === 'youtube') {
                        return (
                          <a
                            key={itemIdx}
                            className="cg-yt-card"
                            href={item.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="yt-podcast-card"
                          >
                            <div className="cg-yt-thumb">
                              🎙️
                              <div className="cg-yt-play">▶</div>
                            </div>
                            <div className="cg-meta">
                              <span className="cg-tag yt">▶ YouTube</span>
                              <div className="cg-name" dangerouslySetInnerHTML={{ __html: item.title }} />
                            </div>
                          </a>
                        );
                      }

                      return (
                        <div
                          key={itemIdx}
                          className="cg-card"
                          onClick={() => handleGalleryClick(item)}
                        >
                          {item.type === 'image' && (
                            <img
                              className="cg-thumb"
                              src={item.src}
                              alt={item.title}
                              loading="lazy"
                            />
                          )}
                          {item.type === 'video' && (
                            <div className="cg-vid-wrap">
                              <video
                                className="cg-video-thumb"
                                src={item.src}
                                muted
                                playsInline
                                preload="metadata"
                              />
                              <div className="cg-play-btn">▶</div>
                            </div>
                          )}
                          {item.type === 'pdf' && (
                            <div className="cg-pdf-thumb">
                              <div className="cg-pdf-icon">🎠</div>
                              <div className="cg-pdf-txt">{item.title}</div>
                              <div className="cg-pdf-sub">{item.slides}</div>
                            </div>
                          )}
                          <div className="cg-meta">
                            <span
                              className={`cg-tag ${
                                item.type === 'video' ? 'vid' : item.type === 'pdf' ? 'pdf' : ''
                              }`}
                            >
                              {item.tag}
                            </span>
                            <div className="cg-name" dangerouslySetInnerHTML={{ __html: item.title }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* ─── PATH 1: PERFORMANCE MARKETING ─── */}
        <hr className="path-sep" />
        <div className="path-hdr reveal">
          <div className="ph-icon">{work.performancePath.icon}</div>
          <div>
            <div className="ph-title">{work.performancePath.title}</div>
            <div className="ph-sub">{work.performancePath.sub}</div>
          </div>
        </div>

        <div className="tabs" id="tabs1">
          {work.performancePath.projects.map((proj, idx) => (
            <button
              key={proj.id}
              className={`tab ${activeTab1 === idx ? 'on' : ''}`}
              onClick={() => setActiveTab1(idx)}
            >
              {proj.name}
            </button>
          ))}
        </div>

        {/* Loop through all Performance panels and render them simultaneously */}
        {work.performancePath.projects.map((proj, idx) => (
          <div
            key={proj.id}
            className={`panel ${activeTab1 === idx ? 'on' : ''}`}
            id={`p1${idx}`}
          >
            <div className="reveal">
              <p className="ptag">{proj.tag}</p>
              <h3 className="ph">{proj.headline}</h3>
              <p className="plbl">The Challenge</p>
              <p className="pbody">{proj.challenge}</p>
              <p className="plbl">The Approach</p>
              <p className="pbody">{proj.approach}</p>
              <div className="krow">
                {proj.kpis.map((kpi, kpiIdx) => (
                  <div key={kpiIdx} className="kpi">
                    <div className="kpin">{kpi.value}</div>
                    <div className="kpil">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="cbox">
                <p className="cttl">{proj.chart.title}</p>
                {proj.id === 'phoolchatti-paid' && (
                  <ReusableChart type="bar" data={proj.chart} />
                )}
                {proj.id === 'iit-jee' && (
                  <ReusableChart
                    type="double-bar"
                    data={{
                      labels: proj.chart.labels,
                      leads: proj.chart.leads,
                      reach: proj.chart.reach
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
