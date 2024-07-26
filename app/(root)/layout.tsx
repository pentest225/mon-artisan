import React from 'react'
import Footer from '../ui/footer'
import Header from '../ui/header'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
      {/**HEADER SECTION  */}
      <Header />
      {/* LOADER */}
      <div className="preloader">
        <div className="lds-ellipsis">
          <span />
          <span />
          <span />
        </div>
      </div>
      {/* END LOADER */}
      {/* Home Popup Section */}
      <div
        className="modal fade subscribe_popup"
        id="onload-popup"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="ion-ios-close-empty" />
                </span>
              </button>
              <div className="row g-0">
                <div className="col-sm-7">
                  <div className="popup_content  text-start">
                    <div className="popup-text">
                      <div className="heading_s1">
                        <h3>Subscribe Newsletter and Get 25% Discount!</h3>
                      </div>
                      <p>
                        Subscribe to the newsletter to receive updates about new
                        products.
                      </p>
                    </div>
                    <form method="post">
                      <div className="form-group mb-3">
                        <input
                          name="email"
                          required={true}
                          type="email"
                          className="form-control"
                          placeholder="Enter Your Email"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <button
                          className="btn btn-fill-out btn-block text-uppercase"
                          title="Subscribe"
                          type="submit"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                    <div className="chek-form">
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="exampleCheckbox3"
                          defaultValue=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheckbox3"
                        >
                          <span>Don't show this popup again!</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div
                    className="background_bg h-100"
                    data-img-src="/site_assets/images/popup_img3.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Screen Load Popup Section */}

      {children}
      {/**FOOTER SECTION  */}
      <Footer />
    </>
  )
}
