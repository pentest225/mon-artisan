import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/router"; 
import {header} from "app/ui";
import {footer} from "app/ui";

export default function loginPage() {
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await axios('/api/login', {
            localStorage.setItem('Open', response.data.Open);
            router.push('/Dashboard');  
            method: 'POST',
            body: JSON.stringify({ email, password }),

    })
    if (response.ok) {
        router.push('/login')
      } else {
        res.status(405).json({ Message: 'Method Not Allowed' });
      }
    }
}
   
    return (
        <form onSubmit={handleSubmit}>
            <>
  {/* START LOGIN SECTION */}
  <div className="login_register_wrap section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-md-10">
          <div className="login_wrap">
            <div className="padding_eight_all bg-white">
              <div className="heading_s1">
                <h3>Login</h3>
              </div>
              <form method="post">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    value="email"
                    onChange={(e) => setemail(e.target.value)}
                    required=""
                    className="form-control"
                    name="email"
                    placeholder="Votre Email"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    required=""
                    type="password"
                    value="password"
                    onChange={(e) => setpassword(e.target.value)}
                    name="password"
                    placeholder="Mot de passe"
                  />
                </div>
                <div className="login_footer form-group mb-3">
                  <div className="chek-form">
                    <div className="custome-checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="exampleCheckbox1"
                        defaultValue=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheckbox1"
                      >
                        <span>Remember me</span>
                      </label>
                    </div>
                  </div>
                  <a href="#">Forgot password?</a>
                </div>
                <div className="form-group mb-3">
                  <button
                    type="submit"
                    className="btn btn-fill-out btn-block"
                    name="login"
                  >
                    Log in
                  </button>
                </div>
              </form>
              <div className="form-note text-center">
                Don't Have an Account? <a href="signup.tsx">Sign up now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* END LOGIN SECTION */}
</>
