import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import TestimonialCard1 from '../components/testimonial-card1'
import Footer from '../components/footer'

const Testimonials = (props) => {
  return (
    <>
      <div className="testimonials-container">
        <Head>
          <title>Testimonials - Qcut</title>
          <meta name="description" content="Qcut, Video editor, cut" />
          <meta property="og:title" content="Testimonials - Qcut" />
          <meta property="og:description" content="Qcut, Video editor, cut" />
        </Head>
        <Header rootClassName="header-root-class-name"></Header>
        <div className="testimonials-testimonial">
          <div className="testimonials-container1">
            <h1 className="testimonials-text">
              <span>What they’re saying</span>
              <br></br>
              <span></span>
            </h1>
            <span className="testimonials-text3">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor.
              </span>
            </span>
            <div className="testimonials-container2">
              <TestimonialCard1
                pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName2"
              ></TestimonialCard1>
              <TestimonialCard1 rootClassName="rootClassName"></TestimonialCard1>
              <TestimonialCard1
                pictureSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName1"
              ></TestimonialCard1>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .testimonials-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .testimonials-testimonial {
            width: 100%;
            display: flex;
            justify-content: center;
            background-color: 232323;
          }
          .testimonials-container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .testimonials-text {
            color: var(--dl-color-gray-white);
          }
          .testimonials-text3 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .testimonials-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 991px) {
            .testimonials-text {
              text-align: center;
            }
            .testimonials-text3 {
              text-align: center;
            }
            .testimonials-container2 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 767px) {
            .testimonials-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .testimonials-container1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Testimonials
