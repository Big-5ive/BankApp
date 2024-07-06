import { useState } from "react"
import "./account.css"
import { IoCloseSharp } from "react-icons/io5";
// import AdminDashboardParent from "../../.dashboardMain/adminDashboard"

const AccountComponent = () => {
    const [show, setShow] = useState(false)
    return(
        <div className="accountParent">
            {
                show? 
                <div className="accountdet">
                    <div className="close">
                        <div className="closexx" onClick={()=> setShow(false)}>
                            <IoCloseSharp />
                        </div>
                    </div>
                    <div className="accountdetHold">
                        <div className="acountLog">
                            <div className="log1">
                                <h1>Full Name:</h1>
                                <p>Ekele Jeremiah</p>
                            </div>
                            <div className="log1">
                                <h1>User Name:</h1>
                                <p>Jerry</p>
                            </div>
                            <div className="log1">
                                <h1>Account Number:</h1>
                                <p>1234567895</p>
                            </div>
                            <div className="log1">
                                <h1>Email:</h1>
                                <p>officiallyyoung01@gmail.com</p>
                            </div>
                        </div>
                        <div className="acountLog">
                            <div className="log1">
                                <h1>Sex:</h1>
                                <p>Male</p>
                            </div>
                            <div className="log1">
                                <h1>Account Type:</h1>
                                <p>current</p>
                            </div>
                            <div className="log1">
                                <h1>Total Balance:</h1>
                                <p>5000000</p>
                            </div>
                            <div className="log1">
                                <h1>Available Balance:</h1>
                                <p>4000000</p>
                            </div>
                        </div>
                        <div className="acountLog">
                            <div className="log1">
                                <h1>COT:</h1>
                                <p>12345</p>
                            </div>
                            <div className="log1">
                                <h1>TAX:</h1>
                                <p>54321</p>
                            </div>
                            <div className="log1">
                                <h1>IMF:</h1>
                                <p>123</p>
                            </div>
                            <div className="log1">
                                <h1>Currency:</h1>
                                <p>$</p>
                            </div>
                        </div>
                        <div className="acountLog">
                            <div className="log1">
                                <h1>Status:</h1>
                                <p>Active</p>
                            </div>
                            <div className="log1">
                                <h1>Logins:</h1>
                                <p>0</p>
                            </div>
                            <div className="log1">
                                <h1>Reg Date:</h1>
                                <p>12/5/2020</p>
                            </div>
                            <div className="log1">
                                {/* <h1>Email:</h1>
                                <p>officiallyyoung01@gmail.com</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
            <div className="accountHead">
                <p>All Accounts</p>
            </div>
            <div className="accountHold">
                <div className="accountHold2" onClick={()=> setShow(true)}>
                    <div className="numberLine">
                        <p>1 :</p>
                    </div>
                    <div className="accountit">
                        <p>Ekele Jeremiah</p>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default AccountComponent