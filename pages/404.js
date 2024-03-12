import React from 'react'
import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'

const NotFound = (props) => {
  return (
    <>
      <div className="not-found-container">
        <Head>
          <title>Not-Found - Qcut</title>
          <meta name="description" content="Qcut, Video editor, cut" />
          <meta property="og:title" content="Not-Found - Qcut" />
          <meta property="og:description" content="Qcut, Video editor, cut" />
          <meta name="robots" content="noindex" />
        </Head>
        <Header rootClassName="header-root-class-name7"></Header>
        <div className="not-found-container1">
          <h3 className="not-found-text">OOPS! PAGE NOT FOUND</h3>
          <div className="not-found-container2">
            <h1 className="not-found-text1">404</h1>
          </div>
          <div className="not-found-container3">
            <h2 className="not-found-text2">
              WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
            </h2>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name7"></Footer>
      </div>
      <style jsx>
        {`
          .not-found-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-sccent);
          }
          .not-found-container1 {
            display: flex;
            margin-top: 300px;
            align-items: center;
            margin-bottom: 300px;
            flex-direction: column;
            justify-content: center;
          }
          .not-found-text {
            color: var(--dl-color-primary-neutralwhite);
          }
          .not-found-container2 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found-text1 {
            color: var(--dl-color-primary-neutralwhite);
            font-size: 252px;
            margin-top: -20px;
            font-weight: 900;
            margin-bottom: -20px;
            letter-spacing: -20px;
          }
          .not-found-container3 {
            width: 421px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found-text2 {
            color: var(--dl-color-primary-neutralwhite);
            text-align: center;
            font-weight: 400;
          }
        `}
      </style>
    </>
  )
}

export default NotFound
