import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Header from '../components/header'
import Footer from '../components/footer'

const Book = (props) => {
  return (
    <>
      <div className="book-container">
        <Head>
          <title>QCut - Book a Call</title>
          <meta name="description" content="Qcut, Video editor, cut" />
          <meta property="og:title" content="QCut - Book a Call" />
          <meta property="og:description" content="Qcut, Video editor, cut" />
        </Head>
        <Header rootClassName="header-root-class-name9"></Header>
        <div className="book-container1">
          <div className="book-container2">
            <h1 className="book-text">Book a Call</h1>
            <div className="book-container3">
              <div className="book-container4">
                <React.Fragment>
                  <React.Fragment>
                    {/* Calendly inline widget begin */}
                    <div
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/bluecg0072/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=191818&text_color=e4e2cf&primary_color=d68240"
                      style={{ width: '600px', height: '600px' }}
                    />
                    <Script
                      type="text/javascript"
                      src="https://assets.calendly.com/assets/external/widget.js"
                      async={true}
                    />
                    {/* Calendly inline widget end */}
                  </React.Fragment>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name9"></Footer>
      </div>
      <style jsx>
        {`
          .book-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-custom-neutral-dark);
          }
          .book-container1 {
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-sccent);
          }
          .book-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-custom-neutral-dark);
          }
          .book-text {
            color: var(--dl-color-primary-neutralwhite);
            font-size: 40px;
            margin-top: var(--dl-space-space-twounits);
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .book-container3 {
            width: 600px;
            height: 600px;
            align-self: center;
          }
          .book-container4 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Book
