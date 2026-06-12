import React from 'react'
import Image from 'next/image'

export default function Advisors() {
  const advisorStats = [
    { value: '$2.6B+', label: 'In M&A Transaction Value' },
    { value: '100+', label: 'M&A Deals Advised' },
    { value: '$1B+', label: 'Private Capital Deployed' },
    { value: '150+', label: 'Years Combined Experience' },
  ]

  const advisors = [
    {
      name: 'Brad Johnson',
      role: 'Operations',
      title: 'Professor Emeritus at Babson College and',
      titleLine2: 'Former Vice President at Wayfair',
      image: '/images/brad-johnson.jpg',
      linkedin: 'https://www.linkedin.com/in/bradjohnson12/',
      imageScale: 1.5,
      imageOffsetY: 10,
    },
    {
      name: 'Scott Waxler',
      role: 'M&A',
      title: 'Founder, Lockebridge Capital Partners',
      image: '/images/scott-waxler.jpg',
      linkedin: 'https://www.linkedin.com/in/scottwaxler/',
    },
    {
      name: 'Evan Farber',
      role: 'Legal',
      title: 'General Counsel at The Cranemere Group, Board Member of Flotek Industries',
      image: '/images/V-Evan Farber.png',
      linkedin: 'https://www.linkedin.com/in/evan-farber/',
      imageScale: 1.45,
      imageOffsetY: 6,
      containImage: true,
    },
    {
      name: 'Matt Walker',
      role: 'Acquisitions',
      title: 'Investor, Operator, and Entrepreneur Specializing in Business Acquisitions and Real Estate',
      image: '/images/matt-walker.png',
      linkedin: 'https://www.linkedin.com/in/mattwalker15/',
      imageScale: 1.25,
      imageOffsetY: 6,
    },
    {
      name: 'Erik Noyes',
      role: 'Strategy',
      title: 'Director of The Generator AI Lab and Professor of Entrepreuership at Babson College',
      image: '/images/erik-noyes.jpg',
      linkedin: 'https://www.linkedin.com/in/erik-noyes-40b1b73/',
    },
    {
      name: 'Edward Gorelick',
      role: 'Accounting',
      title: 'Founder of Gorelick & Uslaner, CPAs',
      image: '/images/edward-gorelick.jpg',
      linkedin: '',
    },
    {
      name: 'Chad Mestler',
      role: 'Capital Markets',
      title: 'Founder of Helvetica Group and Raiseli.com',
      image: '/images/chad-mestler.jpg',
      linkedin: 'https://www.linkedin.com/in/chadmestler/',
    },
    {
      name: 'Tiffany Sergi',
      role: 'Operations',
      title: 'COO/CEO with 12+ years scaling service-based businesses',
      image: '/images/Tiffany Sergi.png',
      linkedin: 'https://www.linkedin.com/in/tiffany-sergi-111527256/',
      objectPosition: 'top',
      grayscale: true,
      imageScale: 1.3,
      imageOffsetY: 8,
    },
  ]

  return (
    <section className="advisors">
      <div className="container">
        <div className="advisors-content">
          <h2>Advisory Board</h2>
          <div className="stats-grid advisor-stats-grid">
            {advisorStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="advisors-grid">
            {advisors.map((advisor, index) => (
              <div key={index} className="advisor-card">
                {advisor.image ? (
                  <div className="advisor-image-wrapper">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      width={80}
                      height={80}
                      className={advisor.imageScale ? "advisor-image-inner" : "advisor-image"}
                      style={{
                        ...(advisor.imageScale ? { transform: `scale(${advisor.imageScale}) translateY(${advisor.imageOffsetY || 0}px)` } : {}),
                        ...(advisor.containImage ? { objectFit: 'contain' } : {}),
                        ...(advisor.objectPosition ? { objectPosition: advisor.objectPosition } : {}),
                        ...(advisor.grayscale ? { filter: 'grayscale(100%)' } : {}),
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="advisor-image advisor-placeholder"
                    style={{
                      background: `linear-gradient(135deg, #666 0%, #999 100%)`,
                    }}
                  />
                )}
                <div className="advisor-info">
                  <div className="advisor-name-row">
                    <div className="advisor-name">{advisor.name}</div>
                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
                      >
                        <Image
                          src="/images/linkedin-icon-44.png"
                          alt="LinkedIn"
                          width={18}
                          height={18}
                          className="linkedin-icon"
                        />
                      </a>
                    )}
                  </div>
                  {advisor.role && <div className="advisor-role">{advisor.role}</div>}
                  <div className="advisor-title">
                    {advisor.title}
                    {advisor.titleLine2 && <><br />{advisor.titleLine2}</>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="etower-section">
            <Image
              src="/images/etower-hero-logo.png"
              alt="Babson eTower"
              width={200}
              height={80}
              className="etower-logo"
            />
            <p className="etower-text">Methodic is also backed by eTower, an elite entrepreneurship community founded at Babson College, with alumni that have built companies valued at over $3 billion.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
