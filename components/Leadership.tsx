import React from 'react'
import Image from 'next/image'

export default function Leadership() {
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
        </div>
      </div>
    </section>
  )
}
