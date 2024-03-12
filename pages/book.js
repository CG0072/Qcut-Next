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
          <title>book - Qcut</title>
          <meta name="description" content="Qcut, Video editor, cut" />
          <meta property="og:title" content="book - Qcut" />
          <meta property="og:description" content="Qcut, Video editor, cut" />
        </Head>
        <Header rootClassName="header-root-class-name9"></Header>
        <h1 className="book-text">Book a Call</h1>
        <div className="book-container1">
          <div className="book-container2">
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
          .book-text {
            color: var(--dl-color-primary-neutralwhite);
            margin: var(--dl-space-space-fourunits);
            font-size: 40px;
          }
          .book-container1 {
            width: 600px;
            height: 600px;
            align-self: center;
          }
          .book-container2 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Book
