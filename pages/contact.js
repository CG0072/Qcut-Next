import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Contact1 from '../components/contact1'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Qcut</title>
          <meta name="description" content="Qcut, Video editor, cut" />
          <meta property="og:title" content="Contact - Qcut" />
          <meta property="og:description" content="Qcut, Video editor, cut" />
        </Head>
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="contact-container1">
          <div className="contact-container2">
            <Contact1></Contact1>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .contact-container1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: 200px;
            padding-bottom: 200px;
            background-image: linear-gradient(
              to right,
              #c2e59c 0%,
              #64b3f4 100%
            );
          }
          .contact-container2 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Contact
