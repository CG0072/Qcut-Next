import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from '../components/header'
import TestimonialCard1 from '../components/testimonial-card1'
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
                    src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/793f1f5b-d647-482d-bbd4-166d52de47fb/67f6f847-de13-4578-8ead-4e3359cfc4d7"
                    loop="true"
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
                    src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/793f1f5b-d647-482d-bbd4-166d52de47fb/4ab25f40-5747-43e2-ac5a-1088bc1ca140"
                    loop="true"
                    speed="1"
                    autoplay="true"
                    background="transparent"
                  ></lottie-player>
                </div>
                <div className="home-separator1"></div>
                <span className="home-text08">
                  <span>Custom</span>
                  <br></br>
                  <span>Style</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container06">
                <div className="home-div2">
                  <lottie-player
                    src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/793f1f5b-d647-482d-bbd4-166d52de47fb/f35b2c09-9023-47fa-9ef5-21f555ee8b8c"
                    loop="true"
                    speed="0.8"
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
                    src="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/793f1f5b-d647-482d-bbd4-166d52de47fb/6c492055-7b46-4bd4-abc9-96f25c17a07e"
                    loop="true"
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
                src="https://lem.codes/users/goech244/2122/kaarli/example6.mp4"
                controls="true"
                playsInline="true"
                className="home-video"
              ></video>
              <video
                src="https://lem.codes/users/goech244/2122/kaarli/example2.mp4"
                controls="true"
                playsInline="true"
                className="home-video1"
              ></video>
              <video
                src="https://lem.codes/users/goech244/2122/kaarli/example3.mp4"
                controls="true"
                playsInline="true"
                className="home-video2"
              ></video>
              <video
                src="/examples/example4.mp4"
                loop="true"
                controls="true"
                playsInline="true"
                className="home-video3"
              ></video>
            </div>
            <div className="home-container10">
              <video
                src="/examples/example5.mp4"
                controls="true"
                playsInline="true"
                poster="https://lem.codes/users/goech244/2122/kaarli/example4.mp4"
                className="home-video4"
              ></video>
              <video
                src="https://lem.codes/users/goech244/2122/kaarli/example5.mp4"
                controls="true"
                playsInline="true"
                className="home-video5"
              ></video>
              <video
                src="https://lem.codes/users/goech244/2122/kaarli/example1.mp4"
                controls="true"
                playsInline="true"
                className="home-video6"
              ></video>
              <video
                src="https://cdn.discordapp.com/attachments/1063813912300114011/1216775290081116322/Reelvideo-g489.mp4?ex=66019d4b&amp;is=65ef284b&amp;hm=ffbaa0f2c80d400b80df5a15ae12a39f4a1c927ef5896a400c16d315b638cf6a&amp;"
                loop="true"
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
          <div className="home-container13">
            <div className="home-container14">
              <h1 className="home-text34">
                <span>Contact</span>
                <br></br>
              </h1>
              <form
                action="https://api.notionmonkey.io/form/maHNKGLm1D38fmp72Exze5"
                method="post"
                className="home-form"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="home-input input"
                />
                <input
                  type="email"
                  name="e-mail"
                  placeholder="E-mail"
                  className="home-input1 input"
                />
                <textarea
                  name="review"
                  placeholder="Ask us anything!"
                  className="home-textarea textarea"
                ></textarea>
                <button type="submit" className="home-button button">
                  <span>
                    <span>Submit</span>
                    <br></br>
                  </span>
                </button>
              </form>
            </div>
          </div>
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
            transition: 0.3s;
            align-items: center;
            border-width: 0px;
            border-radius: 30px;
            flex-direction: row;
            justify-content: center;
            text-decoration: none;
            background-color: var(--dl-color-primary-qcut);
          }
          .home-link:hover {
            color: var(--dl-color-primary-white);
            border: none;
            border-color: var(--dl-color-primary-neutralwhite);
            border-width: 1px;
            background-color: #dc9054;
          }
          .home-link:active {
            color: var(--dl-color-custom-neutral-dark);
            background-color: #d27325;
          }
          .home-text02 {
            height: 52px;
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
            margin-bottom: 0px;
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
            width: 320px;
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
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-container05 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 320px;
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
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-container06 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 320px;
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
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-container07 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 320px;
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
            font-size: 26px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
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
            margin-left: 0px;
            margin-right: 0px;
            flex-direction: column;
            justify-content: center;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
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
            height: 600px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }
          .home-video {
            width: 342px;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video1 {
            width: 342px;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video2 {
            width: 342px;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video3 {
            width: 342px;
            height: 100%;
            display: none;
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
            height: 600px;
            display: flex;
            flex-wrap: wrap;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: 0px;
            justify-content: center;
          }
          .home-video4 {
            width: 342px;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video5 {
            width: 342px;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video6 {
            width: 342px;
            height: 100%;
            transition: 0.3s;
            padding-top: 0px;
            padding-left: 0px;
            border-radius: 30px;
            padding-right: 0px;
            padding-bottom: 0px;
          }

          .home-video7 {
            width: 342px;
            height: 100%;
            display: none;
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
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
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
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 383px;
            display: flex;
            align-items: flex-start;
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
            font-size: 50px;
            margin-top: 0px;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
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
          .home-container13 {
            display: flex;
            position: relative;
          }
          .home-container14 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text34 {
            color: var(--dl-color-primary-neutralwhite);
            margin: var(--dl-space-space-unit);
            font-size: 50px;
          }
          .home-form {
            gap: var(--dl-space-space-unit);
            width: 394px;
            height: 394px;
            display: flex;
            flex-direction: column;
          }
          .home-input {
            width: 100%;
            align-self: center;
          }
          .home-input1 {
            width: 100%;
            height: auto;
            align-self: center;
          }
          .home-textarea {
            width: 100%;
            height: 100%;
          }
          .home-button {
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            margin-top: 0px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
            background-color: var(--dl-color-primary-qcut);
          }
          .home-button:hover {
            background-color: #d09b71;
          }
          .home-button:active {
            color: rgba(0, 0, 0, 0);
            background-color: #8e4d19;
          }
          @media (max-width: 1600px) {
            .home-container03 {
              width: 786px;
              height: 935px;
              flex-wrap: wrap;
            }
          }
          @media (max-width: 1200px) {
            .home-container03 {
              width: 776px;
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
          }
          @media (max-width: 991px) {
            .home-container03 {
              gap: var(--dl-space-space-twounits);
              width: 574px;
              height: 966px;
              flex-direction: column;
            }
            .home-container04 {
              width: 270px;
            }
            .home-div {
              width: 250px;
              height: 250px;
            }
            .home-text04 {
              font-size: 20px;
            }
            .home-container05 {
              width: 270px;
            }
            .home-div1 {
              width: 250px;
              height: 250px;
            }
            .home-text08 {
              font-size: 20px;
            }
            .home-container06 {
              width: 270px;
            }
            .home-div2 {
              width: 250px;
              height: 250px;
            }
            .home-text13 {
              font-size: 20px;
            }
            .home-container07 {
              width: 270px;
            }
            .home-div3 {
              width: 250px;
              height: 250px;
            }
            .home-text18 {
              font-size: 20px;
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
          }
          @media (max-width: 767px) {
            .home-link {
              width: 410px;
              height: 65px;
            }
            .home-container02 {
              height: 100%;
            }
            .home-container03 {
              height: 1748px;
            }
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
            .home-video1 {
              display: none;
            }
            .home-video5 {
              display: none;
            }
            .home-container11 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-start {
              width: 100%;
            }
            .home-container01 {
              width: 100%;
            }
            .home-text01 {
              text-align: center;
            }
            .home-link {
              width: 289px;
              height: 64px;
            }
            .home-text02 {
              height: 32px;
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
            }
            .home-services {
              width: 100%;
            }
            .home-container02 {
              width: 320px;
            }
            .home-container03 {
              width: 100%;
              height: 1802px;
            }
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
            .home-video {
              width: 300px;
            }
            .home-video1 {
              display: none;
            }
            .home-video4 {
              width: 300px;
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
            .home-newsletter {
              width: 100%;
            }
            .home-contact {
              width: 100%;
            }
            .home-form {
              width: 292px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
