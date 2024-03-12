import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import TestimonialCard1 from '../components/testimonial-card1'
import Contact1 from '../components/contact1'
import Footer from '../components/footer'

const Home = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <figure className="home-container">
        <Head>
          <title>Qcut</title>
          <meta name="description" content="Qcut, Video editor, cut" />
          <meta property="og:title" content="Qcut" />
          <meta property="og:description" content="Qcut, Video editor, cut" />
        </Head>
        <Header rootClassName="header-root-class-name11"></Header>
        <section id="start" className="home-start">
          <div className="home-container01">
            <img alt="image" src="/logoqcut-200h.png" className="home-image" />
            <h1 className="home-text">QCut</h1>
            <span className="home-text01">Video Editing Agency</span>
            <Link href="/book">
              <a className="home-link button">
                <span className="home-text02">Book a Call</span>
              </a>
            </Link>
          </div>
        </section>
        <section id="services" className="home-services">
          <div className="home-container02">
            <h1 className="home-text03">Our Service</h1>
            <div className="home-container03">
              <div className="home-container04">
                <div className="home-div">
                  <lottie-player
                    src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
                    speed="1"
                    autoplay="true"
                    background="transparent"
                  ></lottie-player>
                </div>
                <div className="home-separator"></div>
                <span className="home-text04">
                  <span>
                    Short From
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>Video editing</span>
                </span>
              </div>
              <div className="home-container05">
                <div className="home-div1">
                  <lottie-player
                    src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
                    speed="1"
                    autoplay="true"
                    background="transparent"
                  ></lottie-player>
                </div>
                <div className="home-separator1"></div>
                <span className="home-text08">
                  <span>Custm</span>
                  <br></br>
                  <span>Style</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container06">
                <div className="home-div2">
                  <lottie-player
                    src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
                    speed="1"
                    autoplay="true"
                    background="transparent"
                  ></lottie-player>
                </div>
                <div className="home-separator2"></div>
                <span className="home-text13">
                  <span>Fast Delivery</span>
                  <br></br>
                  <span>in 48h</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container07">
                <div className="home-div3">
                  <lottie-player
                    src="https://presentation-website-assets.teleporthq.io/features/lottie.json"
                    speed="1"
                    autoplay="true"
                    background="transparent"
                  ></lottie-player>
                </div>
                <div className="home-separator3"></div>
                <span className="home-text18">
                  <span>Custom Motion</span>
                  <br></br>
                  <span>Graphics &amp; Animations</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="home-portfolio">
          <div className="home-container08">
            <header className="home-container09">
              <h1 className="home-text23">
                <span>Examples</span>
                <br></br>
              </h1>
            </header>
            <div className="home-video-row-1">
              <video
                src="https://cdn.discordapp.com/attachments/1063813912300114011/1217080760297590834/example_6.mp4?ex=6602b9c9&amp;is=65f044c9&amp;hm=9343716ea960af11f4d041de4a6f6f32583a5b8c5640b7f90ee5257c0475e183&amp;"
                loop="true"
                poster="/reels/screenshot%202024-03-11%20at%2017.40.47-400h.png"
                controls="true"
                playsInline="true"
                className="home-video"
              ></video>
              <video
                src="https://cdn.discordapp.com/attachments/1063813912300114011/1216775290081116322/Reelvideo-g489.mp4?ex=66019d4b&amp;is=65ef284b&amp;hm=ffbaa0f2c80d400b80df5a15ae12a39f4a1c927ef5896a400c16d315b638cf6a&amp;"
                loop="true"
                poster="/reels/screenshot%202024-03-11%20at%2017.40.47-400h.png"
                controls="true"
                playsInline="true"
                className="home-video1"
              ></video>
              <video
                src="https://cdn.discordapp.com/attachments/1063813912300114011/1216775290081116322/Reelvideo-g489.mp4?ex=66019d4b&amp;is=65ef284b&amp;hm=ffbaa0f2c80d400b80df5a15ae12a39f4a1c927ef5896a400c16d315b638cf6a&amp;"
                loop="true"
                poster="/reels/screenshot%202024-03-11%20at%2017.40.47-400h.png"
                controls="true"
                playsInline="true"
                className="home-video2"
              ></video>
              <video
                src="https://cdn.discordapp.com/attachments/1063813912300114011/1216775290081116322/Reelvideo-g489.mp4?ex=66019d4b&amp;is=65ef284b&amp;hm=ffbaa0f2c80d400b80df5a15ae12a39f4a1c927ef5896a400c16d315b638cf6a&amp;"
                loop="true"
                poster="/reels/screenshot%202024-03-11%20at%2017.40.47-400h.png"
                controls="true"
                playsInline="true"
                className="home-video3"
              ></video>
            </div>
            <div className="home-container10">
              <video
                src="https://cdn.discordapp.com/attachments/1063813912300114011/1216775290081116322/Reelvideo-g489.mp4?ex=66019d4b&amp;is=65ef284b&amp;hm=ffbaa0f2c80d400b80df5a15ae12a39f4a1c927ef5896a400c16d315b638cf6a&amp;"
                loop="true"
                poster="/reels/screenshot%202024-03-11%20at%2017.40.47-400h.png"
                controls="true"
                playsInline="true"
                className="home-video4"
              ></video>
              <video
                src="https://cdn.discordapp.com/attachments/1063813912300114011/1216775290081116322/Reelvideo-g489.mp4?ex=66019d4b&amp;is=65ef284b&amp;hm=ffbaa0f2c80d400b80df5a15ae12a39f4a1c927ef5896a400c16d315b638cf6a&amp;"
                loop="true"
                poster="/reels/screenshot%202024-03-11%20at%2017.40.47-400h.png"
                controls="true"
                playsInline="true"
                className="home-video5"
              ></video>
              <video
                src="https://cdn.discordapp.com/attachments/1063813912300114011/1216775290081116322/Reelvideo-g489.mp4?ex=66019d4b&amp;is=65ef284b&amp;hm=ffbaa0f2c80d400b80df5a15ae12a39f4a1c927ef5896a400c16d315b638cf6a&amp;"
                loop="true"
                poster="/reels/screenshot%202024-03-11%20at%2017.40.47-400h.png"
                controls="true"
                playsInline="true"
                className="home-video6"
              ></video>
              <video
                src="https://cdn.discordapp.com/attachments/1063813912300114011/1216775290081116322/Reelvideo-g489.mp4?ex=66019d4b&amp;is=65ef284b&amp;hm=ffbaa0f2c80d400b80df5a15ae12a39f4a1c927ef5896a400c16d315b638cf6a&amp;"
                loop="true"
                poster="/reels/screenshot%202024-03-11%20at%2017.40.47-400h.png"
                controls="true"
                playsInline="true"
                className="home-video7"
              ></video>
            </div>
          </div>
        </section>
        <section id="testimonials" className="home-testimonials">
          <div className="home-container11">
            <h1 className="home-text26">
              <span>What they’re saying</span>
              <br></br>
            </h1>
            <span className="home-text29">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor.
              </span>
            </span>
            <div className="home-container12">
              <TestimonialCard1
                pictureSrc="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName6"
              ></TestimonialCard1>
              <TestimonialCard1 rootClassName="rootClassName7"></TestimonialCard1>
              <TestimonialCard1
                pictureSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName8"
              ></TestimonialCard1>
            </div>
          </div>
        </section>
        <section id="newsletter" className="home-newsletter">
          <h1 className="home-text31">
            <span>Newsletter</span>
            <br></br>
          </h1>
        </section>
        <section id="contact" className="home-contact">
          <Contact1 rootClassName="contact1-root-class-name1"></Contact1>
        </section>
        <Footer rootClassName="footer-root-class-name11"></Footer>
      </figure>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-custom-neutral-dark);
          }
          .home-start {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-container01 {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image {
            width: 200px;
            align-self: center;
            object-fit: cover;
          }
          .home-text {
            color: var(--dl-color-primary-neutralwhite);
            font-size: 50px;
            align-self: center;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-weight: 700;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text01 {
            color: var(--dl-color-primary-neutralwhite);
            font-size: 25px;
            align-self: center;
          }
          .home-link {
            color: var(--dl-color-primary-neutralwhite);
            width: 600px;
            height: 80px;
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: 30px;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-primary-qcut);
          }
          .home-text02 {
            height: 50px;
            font-size: 50px;
            font-style: normal;
            font-weight: 700;
          }
          .home-services {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            margin-top: 0px;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 25px;
            margin-bottom: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: var(--dl-color-primary-sccent);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text03 {
            color: var(--dl-color-primary-neutralwhite);
            margin: var(--dl-space-space-threeunits);
            font-size: 50px;
          }
          .home-container03 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container04 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: 30px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-custom-accent1);
          }
          .home-div {
            width: 300px;
            height: 300px;
          }
          .home-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text04 {
            color: var(--dl-color-primary-neutralwhite);
            font-size: 25px;
            text-align: center;
          }
          .home-container05 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: 30px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-custom-accent1);
          }
          .home-div1 {
            width: 300px;
            height: 300px;
          }
          .home-separator1 {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text08 {
            color: var(--dl-color-primary-neutralwhite);
            font-size: 25px;
            text-align: center;
          }
          .home-container06 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: 30px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-custom-accent1);
          }
          .home-div2 {
            width: 300px;
            height: 300px;
          }
          .home-separator2 {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text13 {
            color: var(--dl-color-primary-neutralwhite);
            font-size: 25px;
            text-align: center;
          }
          .home-container07 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: 30px;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-custom-accent1);
          }
          .home-div3 {
            width: 300px;
            height: 300px;
          }
          .home-separator3 {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-900);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text18 {
            color: var(--dl-color-primary-neutralwhite);
            font-size: 25px;
            text-align: center;
          }
          .home-portfolio {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            opacity: 1;
            align-self: center;
            align-items: center;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-text23 {
            color: var(--dl-color-primary-neutralwhite);
            margin: 0px;
            font-size: 50px;
          }
          .home-video-row-1 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: 400px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }
          .home-video {
            width: auto;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video1 {
            width: auto;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video2 {
            width: auto;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video3 {
            width: auto;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-container10 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: 400px;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-video4 {
            width: auto;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video5 {
            width: auto;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video6 {
            width: auto;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video7 {
            width: auto;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-testimonials {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-primary-sccent);
          }
          .home-container11 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text26 {
            color: var(--dl-color-primary-neutralwhite);
            margin: 0px;
            font-size: 50px;
          }
          .home-text29 {
            color: var(--dl-color-gray-white);
            font-size: 0.75rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-container12 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-newsletter {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-text31 {
            color: var(--dl-color-primary-neutralwhite);
            margin: var(--dl-space-space-twounits);
            font-size: 50px;
          }
          .home-contact {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: var(--dl-color-primary-sccent);
          }
          @media (max-width: 1200px) {
            .home-video3 {
              display: none;
            }
            .home-video7 {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .home-container03 {
              flex-direction: column;
            }
            .home-video2 {
              display: none;
            }
            .home-video3 {
              display: none;
            }
            .home-video6 {
              display: none;
            }
            .home-video7 {
              display: none;
            }
            .home-text29 {
              text-align: center;
            }
            .home-container12 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 767px) {
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator3 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container11 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator2 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-separator3 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-video1 {
              display: none;
            }
            .home-video5 {
              display: none;
            }
            .home-container11 {
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

export default Home
