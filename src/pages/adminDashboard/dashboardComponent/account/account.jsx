import { useEffect, useState } from "react"
import "./account.css"
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";
import { BeatLoader } from "react-spinners";
// import AdminDashboardParent from "../../.dashboardMain/adminDashboard"

const AccountComponent = () => {
    // axios
    const [show, setShow] = useState(false)
    const [allUsers, setAllUsers] = useState()
    const [loading, setLoading] = useState(false)
    // const allUsers =  JSON.parse(localStorage.getItem("allUsers"))
    const [data, setData] = useState()

    const admin = JSON.parse(localStorage.getItem("adminData"))
    const token = admin.token
    const headers = {
        'Authorization' : `Bearer ${token}`
    }
    const url = "https://avantgardefinance-api.onrender.com/view-all-users"
    useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
      try {
        const response = await axios.get(url, { headers });
        setAllUsers(response.data.data)
        // console.log(response.data.data)
        setLoading(false);
      } catch (err) {
        console.log(err)
        setLoading(false);
      }
    };
    fetchData();
  }, []);

    const handleShow = (item) => {
        setShow(true)
        setData(item)
    }
    return(
        <div className="accountParent">
            {
                show? 
                <div className="accountdet">
                    <div className="close">
                        <div className="closexx" onClick={()=> setShow(false)}>
                            <IoCloseSharp />
                        </div>
                        <div className="closexxn" onClick={()=> setShow(false)}>
                            <FaArrowLeftLong />
                        </div>
                    </div>
                    <div className="accountdetHold">
                        <div className="acountLog">
                            <div className="log1">
                                <h1>Full Name:</h1>
                                <p>{data.fullName}</p>
                            </div>
                            <div className="log1">
                                <h1>User Name:</h1>
                                <p>{data.username}</p>
                            </div>
                            <div className="log1">
                                <h1>Account Number:</h1>
                                <p>{data.accountNumber}</p>
                            </div>
                            <div className="log1">
                                <h1>Email:</h1>
                                <p>{data.email}</p>
                            </div>
                        </div>
                        <div className="acountLog">
                            <div className="log1">
                                <h1>Occupation:</h1>
                                <p>{data.occupation}</p>
                            </div>
                            <div className="log1">
                                <h1>Account Type:</h1>
                                <p>{data.accountType}</p>
                            </div>
                            <div className="log1">
                                <h1>Total Balance:</h1>
                                <p>{data.totalBalance}</p>
                            </div>
                            <div className="log1">
                                <h1>Available Balance:</h1>
                                <p>{data.availableBalance}</p>
                            </div>
                        </div>
                        <div className="acountLog">
                            <div className="log1">
                                <h1>Phone number:</h1>
                                <p>{data.phoneNumber}</p>
                            </div>
                            <div className="log1">
                                <h1>Account status:</h1>
                                <p>{data.accountStatus}</p>
                            </div>
                            <div className="log1">
                                <h1>Reg date:</h1>
                                <p>{data.registrationDate}</p>
                            </div>
                            <div className="log1">
                                <h1>Currency:</h1>
                                <p>$</p>
                            </div>
                        </div>
                        <div className="acountLog">
                            <div className="log1">
                                <h1>Verified ?:</h1>
                                <p>{data.isVerified}</p>
                            </div>
                            <div className="log1">
                                <h1>Marital Status:</h1>
                                <p>{data.maritalStatus}</p>
                            </div>
                            <div className="log1">
                                <h1>otp code:</h1>
                                <p>{data.otpCode}</p>
                            </div>
                            {/* <div className="log1">
                                <h1>Email:</h1>
                                <p>officiallyyoung01@gmail.com</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                : <div>
                <div className="accountHead">
                    <p>All Accounts</p>
                </div>
                {
                    loading ? <BeatLoader color="blue"/> :
                    <div className="accountHold">
                    {
                        allUsers?.map((e, index)=> (
                            <div key={index} className="accountHold2" onClick={()=> handleShow(e)}>
                        <div className="numberLine">
                            <p>{index + 1} :</p>
                        </div>
                        <div className="accountit">
                            <p>{e.fullName}</p>
                        </div>
                    </div>
                        ))
                    }
                </div>
                }
            </div>
            }
            
        </div>
    )
}

export default AccountComponent