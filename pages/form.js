import React from 'react'
import Head from 'next/head'

const Form = (props) => {
  return (
    <>
      <div className="form-container">
        <Head>
          <title>form - Qcut</title>
          <meta name="description" content="Qcut, Video editor, cut" />
          <meta property="og:title" content="form - Qcut" />
          <meta property="og:description" content="Qcut, Video editor, cut" />
        </Head>
        <form
          method="post"
          action="https://api.notionmonkey.io/form/maHNKGLm1D38fmp72Exze5"
          className="form-form"
        >
          <label>Label</label>
          <input type="text" placeholder="Name" name="name" className="input" />
          <input
            type="email"
            placeholder="Email"
            name="e-mail"
            className="input"
          />
          <textarea
            placeholder="Review"
            name="review"
            className="form-textarea textarea"
          ></textarea>
          <button type="submit" className="button">
            Button
          </button>
        </form>
      </div>
      <style jsx>
        {`
          .form-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .form-form {
            width: 723px;
            height: 100px;
            display: flex;
          }
          .form-textarea {
            width: auto;
            height: auto;
            align-self: center;
          }
        `}
      </style>
    </>
  )
}

export default Form
