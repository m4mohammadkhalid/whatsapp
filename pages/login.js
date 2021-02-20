import React from 'react'
import Link from 'next/link'
import { APP_NAME } from '../config'
import SignComponent from '../components/SignComponent'
import SignUpComponent from '../components/SignUpComponent'

import Head from 'next/head'
const login = () => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <div className="login-page_container">
        <div className="login-section page-side section-ope">
          <div className="section-page_intro">
            <img src="Image/signin-icon-black.png" alt="signin-icon" />
            <p className="section-page-intro_title">Sign In {APP_NAME}</p>
          </div>
          <div className="login-form-area">
            <p className="form-title">Sign In</p>
            <div className="section-form">
              <SignComponent />
              <form className="forget-form">
                <p className="forget-title">Forget Your Password</p>
                <label className="login-page_label">
                  <input className="login-page_input" type="email" name="email" autoComplete="off" />
                  <span className="login-page_placeholder">Email</span>
                </label>
                <div className="login-section_submit">
                  <div className="login-page-submit-btn"><input type="submit" name="submit-login" defaultValue="submit" /></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*       Sign up Side      */}
        <div className="signup-section page-side section-clos">
          <div className="section-page_intro">
            <img src="Image/signup-icon.png" alt="signup-icon" />
            <p className="section-page-intro_title">Sign Up</p>
          </div>
          <div className="signup-form-area">
            <p className="form-title">Sign Up</p>
            <div className="section-form">
              <SignUpComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default login
