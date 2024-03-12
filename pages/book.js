import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

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
        <header className="book-container1">
          <header data-thq="thq-navbar" className="book-navbar-interactive">
            <Link href="/">
              <a className="book-link">
                <img
                  alt="logo"
                  src="/logoqcut-1500w.png"
                  className="book-image"
                />
              </a>
            </Link>
            <div data-thq="thq-navbar-nav" className="book-desktop-menu">
              <nav className="book-links">
                <a href="/#start" className="book-link1">
                  <span>Home</span>
                  <br></br>
                </a>
                <a href="/#portfolio" className="book-link2">
                  Portfolio
                </a>
                <a href="/#services" className="book-link3">
                  Services
                </a>
                <a href="/#testimonials" className="book-link4">
                  Testimonials
                </a>
                <a
                  href="/#newsletter"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="book-link5"
                >
                  Newsletter
                </a>
                <a href="/#contact" className="book-link6">
                  Contact
                </a>
              </nav>
              <div className="book-buttons"></div>
            </div>
            <div data-thq="thq-burger-menu" className="book-burger-menu">
              <span className="book-text02">Qcut</span>
              <svg viewBox="0 0 1024 1024" className="book-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="book-mobile-menu">
              <div className="book-nav">
                <div className="book-top">
                  <img
                    alt="logo"
                    src="/logoqcut-1500w.png"
                    className="book-image1"
                  />
                  <span className="book-text03">Qcut</span>
                  <div data-thq="thq-close-menu" className="book-close-menu">
                    <svg viewBox="0 0 1024 1024" className="book-icon2">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="book-links1">
                  <span className="book-text04">
                    <span>Home</span>
                    <br></br>
                  </span>
                  <span className="book-text07">Portfolio</span>
                  <Link href="/book">
                    <a className="book-link7">Services</a>
                  </Link>
                  <span className="book-text08">Socials</span>
                  <span className="book-text09">Testimonials</span>
                  <span className="book-text10">Equipment</span>
                  <span className="book-text11">Newsletter</span>
                  <span className="book-text12">Links</span>
                  <Link href="/contact">
                    <a className="book-link8">Contact</a>
                  </Link>
                </nav>
              </div>
            </div>
          </header>
        </header>
        <div className="book-container2">
          <div className="book-container3">
            <h1 className="book-text13">Book a Call</h1>
            <div className="book-container4">
              <div className="book-container5">
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
            width: 100%;
            display: flex;
            position: relative;
          }
          .book-navbar-interactive {
            flex: 1;
            color: var(--dl-color-primary-white);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            background-color: var(--dl-color-custom-neutral-dark);
          }
          .book-link {
            display: contents;
          }
          .book-image {
            height: 50px;
            text-decoration: none;
          }
          .book-desktop-menu {
            flex: 1;
            display: flex;
            align-self: center;
            justify-content: space-between;
          }
          .book-links {
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .book-link1 {
            text-decoration: none;
          }
          .book-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .book-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .book-link4 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .book-link5 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .book-link6 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .book-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-primary-white);
          }
          .book-burger-menu {
            display: none;
          }
          .book-icon {
            fill: var(--dl-color-primary-white);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .book-mobile-menu {
            top: 8px;
            left: 0px;
            right: 0px;
            width: 100%;
            height: 100vh;
            margin: auto;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-custom-neutral-dark);
          }
          .book-nav {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .book-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .book-image1 {
            height: 50px;
            text-decoration: none;
          }
          .book-text03 {
            margin-right: 40px;
          }
          .book-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .book-icon2 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .book-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .book-text04 {
            text-decoration: none;
          }
          .book-text07 {
            margin-left: 0px;
            text-decoration: none;
          }
          .book-link7 {
            margin-left: 0px;
            text-decoration: none;
          }
          .book-text08 {
            margin-left: 0px;
            text-decoration: none;
          }
          .book-text09 {
            margin-left: 0nits;
            text-decoration: none;
          }
          .book-text10 {
            margin-left: 0nits;
            text-decoration: none;
          }
          .book-text11 {
            margin-left: 0px;
            text-decoration: none;
          }
          .book-text12 {
            margin-left: 0px;
            text-decoration: none;
          }
          .book-link8 {
            margin-left: 0px;
            text-decoration: none;
          }
          .book-container2 {
            display: flex;
            padding: var(--dl-space-space-threeunits);
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-primary-sccent);
          }
          .book-container3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-custom-neutral-dark);
          }
          .book-text13 {
            color: var(--dl-color-primary-neutralwhite);
            font-size: 40px;
            margin-top: var(--dl-space-space-twounits);
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .book-container4 {
            width: 600px;
            height: 600px;
            align-self: center;
          }
          .book-container5 {
            display: contents;
          }
          @media (max-width: 1600px) {
            .book-navbar-interactive {
              align-self: center;
            }
            .book-mobile-menu {
              background-color: var(--dl-color-custom-neutral-dark);
            }
            .book-nav {
              align-items: center;
            }
            .book-text03 {
              font-size: 25px;
              font-style: normal;
              font-weight: 500;
            }
            .book-icon2 {
              fill: var(--dl-color-primary-white);
              width: 30px;
              height: auto;
              align-self: flex-end;
            }
            .book-links1 {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              flex-direction: column;
            }
            .book-text07 {
              margin-left: 0px;
            }
            .book-link7 {
              margin-left: 0px;
            }
            .book-text08 {
              margin-left: 0px;
            }
            .book-text09 {
              margin-left: 0px;
            }
            .book-text10 {
              margin-left: 0px;
            }
            .book-text11 {
              margin-left: 0px;
            }
            .book-text12 {
              margin-left: 0px;
            }
            .book-link8 {
              margin-left: 0px;
            }
          }
          @media (max-width: 991px) {
            .book-desktop-menu {
              display: none;
            }
            .book-burger-menu {
              display: flex;
            }
            .book-text02 {
              font-size: 25px;
              align-self: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .book-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .book-burger-menu {
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .book-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .book-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Book
