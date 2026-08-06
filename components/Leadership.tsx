import React from 'react'
import Image from 'next/image'

export default function Leadership() {
  const partners = [
    {
      name: 'Gavin Mestler',
      role: 'Managing Partner and Co-Founder',
      image: '/images/gavin-mestler.png',
      imageStyle: { transform: 'scale(1.22) translateY(7%)' },
      linkedin: 'https://www.linkedin.com/in/gavinmestler/',
    },
    {
      // Shot wider than the other two, so zoom in and push down to match their head size.
      name: 'Logan Mestler',
      role: 'Managing Partner and Co-Founder',
      image: '/images/logan-mestler.png',
      imageStyle: { transform: 'scale(1.62) translateY(17%)' },
      linkedin: 'https://www.linkedin.com/in/logan-mestler-753917253/',
    },
    {
      // Shot nearly square, so his photo runs out at the bottom before the card does.
      // Keep him on `cover` at full scale — the other two zoom in to match him.
      name: 'Dean Farber',
      role: 'Managing Partner and Co-Founder',
      image: '/images/dean-farber.png',
      imageStyle: { transform: 'translateY(3%)' },
      linkedin: 'https://www.linkedin.com/in/dean-farber-8b2159399/',
    },
  ]

  return (
    <section className="leadership" id="team">
      <div className="container">
        <div className="leadership-content">
          <h2>Our People</h2>
          <p className="leadership-subtext">We've assembled a diverse team of entrepreneurs, blending talents from various backgrounds and industries, to effectively support our portfolio companies from all angles.</p>
          <div className="founders-photo">
            <div className="founders-image-frame">
              <Image
                src="/images/METHODIC MAIN PIC 2.jpg"
                alt="Methodic Ventures Founders — Gavin Mestler, Logan Mestler, and Dean Farber"
                width={900}
                height={500}
                className="founders-image"
                style={{ filter: 'grayscale(100%)', transform: 'scale(1.01)', transformOrigin: 'top center' }}
                priority
              />
            </div>
            <p className="founders-caption">Logan Mestler, Gavin Mestler & Dean Farber — Co-Founders</p>
          </div>
          <div className="team-grid partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="team-card partners-card">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={300}
                  height={340}
                  className="team-image"
                  style={partner.imageStyle}
                />
                <div className="team-info-wrapper">
                  <div className="team-info">
                    <div className="team-info-text">
                      <div className="team-name-row">
                        <span className="team-name">{partner.name}</span>
                        <a
                          href={partner.linkedin}
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
                      </div>
                      <div className="team-role">{partner.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="partners-bio">Gavin Mestler, Logan Mestler, and Dean Farber are the co-founding partners of Methodic Ventures. Together they have raised over $420K across prior ventures and built businesses generating more than $2M in combined revenue. All three are members of Babson College's eTower, one of the country's leading entrepreneurship communities.</p>
        </div>
      </div>
    </section>
  )
}
