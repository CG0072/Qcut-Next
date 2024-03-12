import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <>
      <header className={`header-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="header-navbar-interactive">
          <Link href="/">
            <a className="header-link">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="header-image"
              />
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="header-desktop-menu">
            <nav className="header-links">
              <a
                href="https://qcut.cg0072.lu/#start"
                target="_blank"
                rel="noreferrer noopener"
                className="header-link1"
              >
                <span>Home</span>
                <br></br>
              </a>
              <a href="#portfolio" className="header-link2">
                {props.text}
              </a>
              <a href="#services" className="header-link3">
                {props.text1}
              </a>
              <a href="#testimonials" className="header-link4">
                {props.text3}
              </a>
              <a href="#newsletter" className="header-link5">
                {props.text5}
              </a>
              <a href="#contact" className="header-link6">
                {props.text7}
              </a>
            </nav>
            <div className="header-buttons"></div>
          </div>
          <div data-thq="thq-burger-menu" className="header-burger-menu">
            <span className="header-text02">{props.text13}</span>
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-mobile-menu">
            <div className="header-nav">
              <div className="header-top">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="header-image1"
                />
                <span className="header-text03">{props.text16}</span>
                <div data-thq="thq-close-menu" className="header-close-menu">
                  <svg viewBox="0 0 1024 1024" className="header-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="header-links1">
                <span className="header-text04">
                  <span>Home</span>
                  <br></br>
                </span>
                <span className="header-text07">{props.text14}</span>
                <Link href="/book">
                  <a className="header-link7">{props.text15}</a>
                </Link>
                <span className="header-text08">{props.text21}</span>
                <span className="header-text09">{props.text31}</span>
                <span className="header-text10">{props.text41}</span>
                <span className="header-text11">{props.text51}</span>
                <span className="header-text12">{props.text61}</span>
                <Link href="/contact">
                  <a className="header-link8">{props.text71}</a>
                </Link>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .header-container {
            display: flex;
            position: relative;
          }
          .header-navbar-interactive {
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
          .header-link {
            display: contents;
          }
          .header-image {
            height: 50px;
            text-decoration: none;
          }
          .header-desktop-menu {
            flex: 1;
            display: flex;
            align-self: center;
            justify-content: space-between;
          }
          .header-links {
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .header-link1 {
            text-decoration: none;
          }
          .header-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .header-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .header-link4 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .header-link5 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .header-link6 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .header-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-primary-white);
          }
          .header-burger-menu {
            display: none;
          }
          .header-icon {
            fill: var(--dl-color-primary-white);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .header-mobile-menu {
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
          .header-nav {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .header-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .header-image1 {
            height: 50px;
            text-decoration: none;
          }
          .header-text03 {
            margin-right: 40px;
          }
          .header-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon2 {
            fill: #d9d9d9;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header-links1 {
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .header-text04 {
            text-decoration: none;
          }
          .header-text07 {
            margin-left: 0px;
            text-decoration: none;
          }
          .header-link7 {
            margin-left: 0px;
            text-decoration: none;
          }
          .header-text08 {
            margin-left: 0px;
            text-decoration: none;
          }
          .header-text09 {
            margin-left: 0nits;
            text-decoration: none;
          }
          .header-text10 {
            margin-left: 0nits;
            text-decoration: none;
          }
          .header-text11 {
            margin-left: 0px;
            text-decoration: none;
          }
          .header-text12 {
            margin-left: 0px;
            text-decoration: none;
          }
          .header-link8 {
            margin-left: 0px;
            text-decoration: none;
          }
          .header-root-class-name {
            width: 100%;
          }
          .header-root-class-name1 {
            left: 427px;
            width: 100%;
            bottom: 260px;
            position: static;
          }
          .header-root-class-name2 {
            width: 100%;
          }
          .header-root-class-name3 {
            width: 100%;
          }
          .header-root-class-name4 {
            width: 100%;
            align-self: center;
          }
          .header-root-class-name5 {
            width: 100%;
            align-self: center;
          }
          .header-root-class-name6 {
            width: 100%;
            align-self: center;
          }
          .header-root-class-name7 {
            width: 100%;
            align-self: center;
          }
          .header-root-class-name8 {
            width: 100%;
            align-self: center;
          }
          .header-root-class-name10 {
            width: 100%;
            align-self: center;
          }
          .header-root-class-name11 {
            width: 100%;
            align-self: center;
          }
          @media (max-width: 1600px) {
            .header-navbar-interactive {
              align-self: center;
            }
            .header-mobile-menu {
              background-color: var(--dl-color-custom-neutral-dark);
            }
            .header-nav {
              align-items: center;
            }
            .header-text03 {
              font-size: 25px;
              font-style: normal;
              font-weight: 500;
            }
            .header-icon2 {
              fill: var(--dl-color-primary-white);
              width: 30px;
              height: auto;
              align-self: flex-end;
            }
            .header-links1 {
              gap: var(--dl-space-space-halfunit);
              flex-wrap: wrap;
              flex-direction: column;
            }
            .header-text07 {
              margin-left: 0px;
            }
            .header-link7 {
              margin-left: 0px;
            }
            .header-text08 {
              margin-left: 0px;
            }
            .header-text09 {
              margin-left: 0px;
            }
            .header-text10 {
              margin-left: 0px;
            }
            .header-text11 {
              margin-left: 0px;
            }
            .header-text12 {
              margin-left: 0px;
            }
            .header-link8 {
              margin-left: 0px;
            }
          }
          @media (max-width: 991px) {
            .header-desktop-menu {
              display: none;
            }
            .header-burger-menu {
              display: flex;
            }
            .header-text02 {
              font-size: 25px;
              align-self: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .header-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .header-burger-menu {
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .header-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .header-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  text21: 'Socials',
  text3: 'Testimonials',
  text: 'Portfolio\n',
  text8: 'About',
  text12: 'Blog',
  text6: 'Links',
  text41: 'Equipment',
  imageSrc: '/logoqcut-200h.png',
  logoAlt: 'image',
  text1: 'Services',
  imageSrc1: '/logoqcut-200h.png',
  text9: 'Features',
  text10: 'Pricing',
  text31: 'Testimonials',
  text5: 'Newsletter',
  text71: 'Contact',
  text2: 'Socials',
  text16: 'Qcut',
  text11: 'Team',
  text61: 'Links',
  text51: 'Newsletter',
  login: 'Login',
  text4: 'Equipment',
  register: 'Register',
  text13: 'Qcut',
  text7: 'Contact',
  imageAlt: 'logo',
  rootClassName: '',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text14: 'Portfolio\n',
  imageAlt1: 'logo',
  text15: 'Services',
}

Header.propTypes = {
  text21: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  text8: PropTypes.string,
  text12: PropTypes.string,
  text6: PropTypes.string,
  text41: PropTypes.string,
  imageSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  text1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text31: PropTypes.string,
  text5: PropTypes.string,
  text71: PropTypes.string,
  text2: PropTypes.string,
  text16: PropTypes.string,
  text11: PropTypes.string,
  text61: PropTypes.string,
  text51: PropTypes.string,
  login: PropTypes.string,
  text4: PropTypes.string,
  register: PropTypes.string,
  text13: PropTypes.string,
  text7: PropTypes.string,
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  logoSrc: PropTypes.string,
  text14: PropTypes.string,
  imageAlt1: PropTypes.string,
  text15: PropTypes.string,
}

export default Header
