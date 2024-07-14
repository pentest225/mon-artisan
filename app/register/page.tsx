
import Link from "next/link";
import { createUser, CreatUserState} from "../lib/actions";
import { useActionState } from 'react';
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
                                            <h3>Create an Account</h3>
                                        </div>
                                        <form method="post" action={createUser}>
                                            <div className="form-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    placeholder="Enter Your Name"
                                                    aria-description="name-error"
                                                />
                                            </div>

                                            <div className="form-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="last_name"
                                                    placeholder="Enter Your Last name"
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="email"
                                                    placeholder="Enter Your Email"
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phone"
                                                    placeholder="Enter Your Phone"
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="form-group mb-3">
                                                <input
                                                    className="form-control"

                                                    type="password"
                                                    name="confirm_password"
                                                    placeholder="Confirm Password"
                                                />
                                            </div>
                                            <div className="login_footer form-group mb-3">
                                                <div className="chek-form">
                                                    <div className="custome-checkbox">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            name="accept_condition"
                                                            id="exampleCheckbox2"

                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="exampleCheckbox2"
                                                        >
                                                            <span>I agree to terms &amp; Policy.</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <button
                                                    type="submit"
                                                    className="btn btn-fill-out btn-block"
                                                    name="register"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>

                                        <div className="form-note text-center">
                                            Already have an account? <Link href="/login">Log in</Link>
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

    );
}