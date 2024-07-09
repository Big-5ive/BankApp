import { useNavigate } from "react-router-dom";
import "./otp.css"
import { MdMarkEmailRead } from "react-icons/md";

const OTPverify = () => {
    const navigate = useNavigate()
    return(
        <div className="otpParent">
            <div className="otpHold">
                <div className="otplogo">
                    <MdMarkEmailRead />
                </div>
                <div className="read">
                    <h1>please check your email</h1>
                    <p>we've sent a code to <span>joshua@gmail.com</span></p>
                </div>
                <div className="otpInputHold">
                    <input type="text" />
                </div>
                <div className="resendhold">
                    <p>Didn't get a code? <span>click to resend</span></p>
                </div>
                <div className="otpButtonHold">
                    <button className="otpCan" onClick={()=> navigate("/")}>Cancel</button>
                    <button className="otpVer" onClick={()=> navigate("/dashboard")}>Verify</button>
                </div>
            </div>
        </div>
    )
}

export default OTPverify