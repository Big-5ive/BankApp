import { useNavigate } from "react-router-dom";
import "./otp.css"
import { MdMarkEmailRead } from "react-icons/md";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

const OTPverify = () => {
    const [otp, setOtp] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
        type: "",
        message: ""
    })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if (!otp){
            setLoading(false)
            setError({
                type: "empty",
                message: "please enter the code"
            })
            toast.error(error.type === "empty" ? error.message : "")
        } else if(otp.length() < 6) {
            setLoading(false)
            setError({
                type: "length",
                message: "incorrect otp"
            })
            toast.error(error.type === "length" ? error.message : "")
        } else{
            setLoading(false)
            toast.success("successful")
        }
    }
    return(
        <div className="otpParent">
            <ToastContainer />
            {/* <form onSubmit={handleSubmit}> */}
            <div className="otpHold">
               <form onSubmit={handleSubmit}>
               <div className="otplogo">
                    <MdMarkEmailRead />
                </div>
                <div className="read">
                    <h1>please check your email</h1>
                    <p>we've sent a code to <span>your email</span></p>
                </div>
                <div className="otpInputHold">
                    <input 
                    required
                    pattern="\d{6,}"
                    minLength={6}
                    onChange={(e)=> setOtp(e.target.value)}
                    type="text" />
                </div>
                <div className="resendhold">
                    <p>Didn't get a code? <span>click to resend</span></p>
                </div>
                <div className="otpButtonHold">
                    <div className="otpCan" onClick={()=>navigate("/")}>Cancel</div>
                    <button className="otpVer">
                        {
                            loading ? <BeatLoader color="white"/> : "Verify"
                        }
                    </button>
                </div>
               </form>
            </div>
            {/* </form> */}
        </div>
    )
}

export default OTPverify