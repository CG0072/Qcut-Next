import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const Services = (props) => {
  return (
    <>
      <div className="services-container">
        <Head>
          <title>Services - Qcut</title>
          <meta name="description" content="Qcut, Video editor, cut" />
          <meta property="og:title" content="Services - Qcut" />
          <meta property="og:description" content="Qcut, Video editor, cut" />
        </Head>
        <Header rootClassName="header-root-class-name9"></Header>
        <div className="services-not-ready">
          <h3>OOPS! PAGE NOT FOUND</h3>
          <div className="services-container1"></div>
          <div className="services-container2">
            <h2 className="services-text1">
              <span className="services-text2">
                WE ARE SORRY, BUT THE PAGE YOU REQUESTED ISN&apos;T READY AT
                THIS TIME
              </span>
              <br></br>
            </h2>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name9"></Footer>
      </div>
      <style jsx>
        {`
          .services-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .services-not-ready {
            display: flex;
            margin-top: 400px;
            align-items: center;
            margin-bottom: 400px;
            flex-direction: column;
            justify-content: center;
          }
          .services-container1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-container2 {
            width: 421px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .services-text1 {
            text-align: center;
            font-weight: 400;
          }
          .services-text2 {
            text-align: center;
          }
          @media (max-width: 1600px) {
            .services-text1 {
              font-weight: 400;
            }
          }
        `}
      </style>
    </>
  )
}

export default Services
