import React from 'react'

import PropTypes from 'prop-types'

const TestimonialCard1 = (props) => {
  return (
    <>
      <div
        className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
      >
        <svg
          viewBox="0 0 950.8571428571428 1024"
          className="testimonial-card1-icon"
        >
          <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
        </svg>
        <div className="testimonial-card1-testimonial">
          <span className="testimonial-card1-text">{props.quote}</span>
          <span className="testimonial-card1-text1">{props.name}</span>
          <span className="testimonial-card1-text2">{props.role}</span>
          <img
            alt={props.pictureAlt}
            src={props.pictureSrc}
            className="testimonial-card1-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card1-testimonial-card {
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-primary-black);
          }
          .testimonial-card1-icon {
            fill: var(--dl-color-primary-white);
            width: 2rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .testimonial-card1-testimonial {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card1-text {
            color: var(--dl-color-primary-neutralwhite);
            text-align: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .testimonial-card1-text1 {
            color: var(--dl-color-primary-neutralwhite);
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .testimonial-card1-text2 {
            color: var(--dl-color-primary-neutralwhite);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .testimonial-card1-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }

          @media (max-width: 1600px) {
            .testimonial-card1-testimonial-card {
              background-color: var(--dl-color-custom-neutral-dark);
            }
            .testimonial-card1-icon {
              fill: #d9d9d9;
            }
            .testimonial-card1-text {
              color: var(--dl-color-primary-white);
            }
            .testimonial-card1-text2 {
              color: var(--dl-color-primary-white);
            }
          }
          @media (max-width: 991px) {
            .testimonial-card1-text2 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .testimonial-card1-testimonial-card {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .testimonial-card1-testimonial-card {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .testimonial-card1-icon {
              margin-bottom: var(--dl-space-space-unit);
            }
            .testimonial-card1-text {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .testimonial-card1-text1 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .testimonial-card1-text2 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard1.defaultProps = {
  role: 'SOFTWARE ENGINEER',
  pictureAlt: 'profile',
  pictureSrc:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  name: 'Jane Doe',
  rootClassName: '',
}

TestimonialCard1.propTypes = {
  role: PropTypes.string,
  pictureAlt: PropTypes.string,
  pictureSrc: PropTypes.string,
  quote: PropTypes.string,
  name: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TestimonialCard1
