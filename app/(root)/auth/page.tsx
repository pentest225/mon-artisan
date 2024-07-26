export default function Page() {
  return (
    <>
      {/* START MAIN CONTENT */}
      <div className="main_content">
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
                          required={true}
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          className="form-control"
                          required={true}
                          type="password"
                          name="password"
                          placeholder="Password"
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
                      Don't Have an Account? <a href="/register">Sign up now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END LOGIN SECTION */}
        {/* START SECTION SUBSCRIBE NEWSLETTER */}
        <div className="section bg_default small_pt small_pb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="heading_s1 mb-md-0 heading_light">
                  <h3>Subscribe Our Newsletter</h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="newsletter_form">
                  <form>
                    <input
                      type="text"
                      required={true}
                      className="form-control rounded-0"
                      placeholder="Enter Email Address"
                    />
                    <button
                      type="submit"
                      className="btn btn-dark rounded-0"
                      name="submit"
                      value="Submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* START SECTION SUBSCRIBE NEWSLETTER */}
      </div>
      {/* END MAIN CONTENT */}
    </>
  )

}