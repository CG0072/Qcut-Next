import React from 'react'

import PropTypes from 'prop-types'

const Contact1 = (props) => {
  return (
    <>
      <div className={`contact1-container ${props.rootClassName} `}>
        <div className="contact1-container1">
          <h1 className="contact1-text">
            <span>{props.text3}</span>
            <br></br>
          </h1>
          <form
            method="post"
            action="https://api.notionmonkey.io/form/maHNKGLm1D38fmp72Exze5"
            className="contact1-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact1-input input"
            />
            <input
              type="email"
              name="e-mail"
              placeholder="E-mail"
              className="contact1-input1 input"
            />
            <textarea
              name="review"
              placeholder="Ask us anything!"
              className="contact1-textarea textarea"
            ></textarea>
            <button type="submit" className="contact1-button button">
              <span>
                <span>Submit</span>
                <br></br>
              </span>
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .contact1-container {
            display: flex;
            position: relative;
          }
          .contact1-container1 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .contact1-text {
            color: var(--dl-color-primary-neutralwhite);
            margin: var(--dl-space-space-unit);
            font-size: 50px;
          }
          .contact1-form {
            gap: var(--dl-space-space-unit);
            width: 394px;
            height: 394px;
            display: flex;
            flex-direction: column;
          }
          .contact1-input {
            width: 100%;
            align-self: center;
          }
          .contact1-input1 {
            width: 100%;
            height: auto;
            align-self: center;
          }
          .contact1-textarea {
            width: 100%;
            height: 100%;
          }
          .contact1-button {
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
          .contact1-button:hover {
            background-color: #d09b71;
          }
          .contact1-button:active {
            color: rgba(0, 0, 0, 0);
            background-color: #8e4d19;
          }
          .contact1-root-class-name {
            height: 350px;
          }
        `}
      </style>
    </>
  )
}

Contact1.defaultProps = {
  inputPlaceholder: 'Name',
  inputPlaceholder1: 'E-mail',
  text1: 'Our Services',
  text3: 'Contact',
  textareaPlaceholder: 'Ask us anything!',
  text2: 'Contact',
  text: 'Our Services',
  rootClassName: '',
}

Contact1.propTypes = {
  inputPlaceholder: PropTypes.string,
  inputPlaceholder1: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Contact1
