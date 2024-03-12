import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <footer className={`footer-footer ${props.rootClassName} `}>
        <footer className="footer-footer1 footerContainer">
          <div className="footer-container">
            <nav className="footer-links">
              <span className="footer-text">
                <span>Home</span>
                <br></br>
              </span>
              <span className="footer-text3">{props.text}</span>
              <Link href="/book">
                <a className="footer-link">{props.text1}</a>
              </Link>
              <span className="footer-text4">{props.text3}</span>
              <span className="footer-text5">{props.text5}</span>
              <Link href="/contact">
                <a className="footer-link1">{props.text7}</a>
              </Link>
            </nav>
          </div>
          <div className="footer-separator"></div>
          <div className="footer-container1">
            <a
              href="mailto:contact@cg0072.lu?subject=Qcut - Contact"
              className="footer-link2"
            >
              <span className="bodySmall footer-text6">
                © 2024 cg0072.lu, All Rights Reserved. Contact:
                contact@cg0072.lu
              </span>
              <br></br>
            </a>
            <div className="footer-container2">
              <div className="footer-icon-group">
                <a
                  href="https://www.instagram.com/qcut._/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="footer-icon socialIcons"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://linktr.ee/Qcut._"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link4"
                >
                  <svg viewBox="0 0 1024 1024" className="footer-icon2">
                    <path d="M440.236 635.766c-13.31 0-26.616-5.076-36.77-15.23-95.134-95.136-95.134-249.934 0-345.070l192-192c46.088-46.086 107.36-71.466 172.534-71.466s126.448 25.38 172.536 71.464c95.132 95.136 95.132 249.934 0 345.070l-87.766 87.766c-20.308 20.308-53.23 20.308-73.54 0-20.306-20.306-20.306-53.232 0-73.54l87.766-87.766c54.584-54.586 54.584-143.404 0-197.99-26.442-26.442-61.6-41.004-98.996-41.004s-72.552 14.562-98.996 41.006l-192 191.998c-54.586 54.586-54.586 143.406 0 197.992 20.308 20.306 20.306 53.232 0 73.54-10.15 10.152-23.462 15.23-36.768 15.23z"></path>
                    <path d="M256 1012c-65.176 0-126.45-25.38-172.534-71.464-95.134-95.136-95.134-249.934 0-345.070l87.764-87.764c20.308-20.306 53.234-20.306 73.54 0 20.308 20.306 20.308 53.232 0 73.54l-87.764 87.764c-54.586 54.586-54.586 143.406 0 197.992 26.44 26.44 61.598 41.002 98.994 41.002s72.552-14.562 98.998-41.006l192-191.998c54.584-54.586 54.584-143.406 0-197.992-20.308-20.308-20.306-53.232 0-73.54 20.306-20.306 53.232-20.306 73.54 0.002 95.132 95.134 95.132 249.932 0.002 345.068l-192.002 192c-46.090 46.088-107.364 71.466-172.538 71.466z"></path>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@Qcut._"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link5"
                >
                  <svg viewBox="0 0 1024 1024" className="footer-icon5">
                    <path d="M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.315-24.149-11.435-13.269-9.387-23.509-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.859 50.389 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.853 3.712 193.792 3.712 193.792 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-custom-neutral-dark);
          }
          .footer-footer1 {
            background-color: var(--dl-color-custom-neutral-dark);
          }
          .footer-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .footer-text {
            color: var(--dl-color-primary-white);
            text-decoration: none;
          }
          .footer-text3 {
            color: var(--dl-color-primary-white);
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-link {
            color: var(--dl-color-primary-white);
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-text4 {
            color: var(--dl-color-primary-white);
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-text5 {
            color: var(--dl-color-primary-white);
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-link1 {
            color: var(--dl-color-primary-white);
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .footer-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link2 {
            color: var(--dl-color-primary-white);
            text-decoration: none;
          }
          .footer-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .footer-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link3 {
            display: contents;
          }
          .footer-icon {
            fill: var(--dl-color-primary-white);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-link4 {
            display: contents;
          }
          .footer-icon2 {
            fill: var(--dl-color-primary-white);
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .footer-link5 {
            display: contents;
          }
          .footer-icon5 {
            fill: var(--dl-color-primary-white);
            width: 24px;
            height: 24px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .footer-root-class-name {
            flex: 1;
            height: 100%;
          }
          .footer-root-class-name1 {
            flex: 1;
          }
          .footer-root-class-name2 {
            flex: 1;
          }
          .footer-root-class-name3 {
            flex: 1;
          }
          .footer-root-class-name4 {
            flex: 1;
          }
          .footer-root-class-name5 {
            flex: 1;
          }
          .footer-root-class-name6 {
            flex: 1;
          }
          .footer-root-class-name7 {
            flex: 1;
          }
          .footer-root-class-name8 {
            flex: 1;
          }
          .footer-root-class-name9 {
            flex: 1;
          }
          .footer-root-class-name10 {
            flex: 1;
          }
          .footer-root-class-name11 {
            flex: 1;
          }
          @media (max-width: 991px) {
            .footer-links {
              gap: var(--dl-space-space-halfunit);
              flex-direction: column;
            }
            .footer-text3 {
              margin-left: 0px;
            }
            .footer-link {
              margin-left: 0px;
            }
            .footer-text4 {
              margin-left: 0px;
            }
            .footer-text5 {
              margin-left: 0px;
            }
            .footer-link1 {
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .footer-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-links {
              gap: var(--dl-space-space-halfunit);
              align-items: center;
              flex-direction: column;
            }
            .footer-text3 {
              margin-left: 0px;
            }
            .footer-link {
              margin-left: 0px;
            }
            .footer-text4 {
              margin-left: 0px;
            }
            .footer-text5 {
              margin-left: 0px;
            }
            .footer-link1 {
              margin-left: 0px;
            }
            .footer-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-container1 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-link2 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-text6 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .footer-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-container1 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-link2 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-text6 {
              text-align: center;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  text7: 'Contact',
  linkIcon2: 'https://youtube.com/@Qcut._',
  text4: 'Equipment',
  linkIcon1: 'https://linktr.ee/Qcut._',
  text3: 'Testimonials',
  linkIcon: 'https://www.instagram.com/qcut._/',
  text2: 'Socials',
  text6: 'Links',
  text1: 'Services',
  text: 'Portfolio\n',
  text5: 'Newsletter',
  rootClassName: '',
}

Footer.propTypes = {
  text7: PropTypes.string,
  linkIcon2: PropTypes.string,
  text4: PropTypes.string,
  linkIcon1: PropTypes.string,
  text3: PropTypes.string,
  linkIcon: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
