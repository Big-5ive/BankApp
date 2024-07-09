import { useNavigate } from "react-router-dom"
import "./signUp.css"

const UserSignup = () => {
    const navigate = useNavigate()
    return(
        <div className="signupParent">
            <div className="signUpbody">
                <div className="signUptop">
                    <p>Welcome to TRUST FINANCE <span>Get Started!</span></p>
                    <i>Provide the following information to signUp</i>
                </div>
                <div className="signupInputHold">
                    <div className="signUpinput">
                        <div className="signupInputone">
                            <p>Full Name</p>
                            <input type="text" />
                        </div>
                        <div className="signupInputone">
                            <p>User Name</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="signUpinput">
                        <div className="signupInputone">
                            <p>Phone</p>
                            <input type="text" />
                        </div>
                        <div className="signupInputone">
                            <p>Email</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="signUpinput">
                        <div className="signupInputone">
                            <p>Occupation</p>
                            <input type="text" />
                        </div>
                        <div className="signupInputone">
                            <p>Date Of Birth</p>
                            <input type="date" />
                        </div>
                    </div>
                    <div className="signUpinput">
                        <div className="signupInputone">
                            <p>Marital Status</p>
                            <select name="marital" id="marital">
                                <option value="single">Single</option>
                                <option value="maried">Maried</option>
                                <option value="divorced">Divorced</option>
                            </select>
                        </div>
                        <div className="signupInputone">
                            <p>Address</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="signUpinput">
                        <div className="signupInputone">
                            <p>Account Type</p>
                            <select name="marital" id="marital">
                                <option value="savings">Savings account</option>
                                <option value="current">Current account</option>
                                <option value="checking">Checking account</option>
                            </select>
                        </div>
                        <div className="signupInputone">
                            <p>Password</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="signUpinput">
                        <div className="signupInputone">
                            <p>Retype-Password</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="signUpbottonHold">
                        <button className="signButton1">Sign-Up</button>
                        <button className="signButton2" onClick={()=>navigate("/")}>allready have an account? LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSignup