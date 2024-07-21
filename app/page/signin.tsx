import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/router"; 
import {header} from "@/app/ui";
import {footer} from "@/app/ui";

export default function signup(){

    const [name, Setname] = useState('')
    const [laste_name, Setlaste_name] = useState('') 
    const [email, Setemail] = useState('')
    const [phone, Setphone] = useState('')
    const [password, setpassword] = useState('')
    const [user_type, setuser_type] = useState('')
    const router = useRouter();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
          await axios.post ('/api/signup', {name, laste_name, Email, Phone, Password, User_type, Account_statut})
          router.push('/login');  
        } catch (error) {
          console.error('registration failed', error);
        }
    }
    return {
      <>
      //START MAIN CONTENT
<div class="main_content"></div>
      {/*START LOGIN SECTION*/}
      <div className="login_register_wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1">
                    <h3>Creation de Compte</h3>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        value={(text)}
                        onChange={(e) => setName(e.target.value)}
                        required=""
                        className="form-control"
                        name="name"
                        placeholder="Enter Your Name" 
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        value={(text)}
                        onChange={(e) => setLast_name(e.target.value)}
                        required=""
                        className="form-control"
                        name="last_name"
                        placeholder="Enter Your last_name"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        value={(text)}
                        onChange={(e) => setEmail(e.target.value)}
                        required=""
                        className="form-control"
                        name="Email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        value={(text)}
                        onChange={(e) => setPhone(e.target.value)}
                        required=""
                        className="form-control"
                        name="phone"
                        placeholder="Enter Your phone"
                      />
                    </div>
                    <div className="form-group mb-3">
                    <input
                    type="text"
                    value={(text)}
                    onChange={(e) => Setlaste_name(e.target.value)}
                    required=""
                    className="form-control"
                    name="last_name"
                    placeholder="Enter Your last_name"
                  />
                </div>
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        value={(password)}
                        onChange={(e) => setpassword(e.target.value)}
                        required=""
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <select class="form-control" required="" type="status" name="user_status" placeholder="select your status">
                                 <option value="">select your status</option>
                                    <option value="client">Client</option>
                                    <option value="artisan">artisan</option>
                                    <option value="admin">admin</option>
                                    </select>
                    <div className="form-group mb-3">
                    <label for="account_statut">Status du compte:</label>
                      <input disabled="disabled"
                        type="texte"
                        value={(statut)}
                        onChange={(e) => setstatut(e.target.value)}
                        required=""
                        name="account_satut"
                        placeholder="active"
                      />
                    </div>
                    <div className="login_footer form-group mb-3">
                      <div className="chek-form">
                        <div className="custome-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="checkbox"
                            id="exampleCheckbox2"
                            defaultValue=""
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
                    Vous avez déjà un compte? <a href="login.html">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END LOGIN SECTION */}
    }
     