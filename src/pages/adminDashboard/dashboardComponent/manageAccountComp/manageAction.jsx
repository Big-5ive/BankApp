import { useState } from "react"
import "./manageAction.css"
import { IoCloseSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

export const AddAccount = () => {
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [occupation, setOccupation] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [maritalStatus, setMaritalStatus] = useState("")
    const [address, setAddress] = useState("")
    const [accountType, setAccountType] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [availableBalance, setAvailableBalance] = useState("")
    const [totalBalance, setTotalBalance] = useState("")
    const [registerationDate, setRegisterationDate] = useState("")
    const [password, setPassword] = useState("")
    const [retypePassword, setRetypePassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
        // isError: false,
        type: "",
        message: ""
    })

    const userData = {
        fullName: fullName,
        userName: userName,
        phone: phone,
        email: email,
        occupation: occupation,
        dateOfBirth: dateOfBirth,
        maritalStatus: maritalStatus,
        address: address,
        accountType: accountType,
        accountNumber: accountNumber,
        availableBalance: availableBalance,
        totalBalance: totalBalance,
        registerationDate: registerationDate,
        password: password,
        retypePassword: retypePassword
    }

    const passwordValidator = () => {
        const hasUpperCase = /[A-Z]/
        const hasLowerCase = /[a-z]/
        const hasNumbers = /\d/
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/
    
          return hasUpperCase.test(password) &&
                 hasLowerCase.test(password) &&
                 hasNumbers.test(password) &&
                 hasSpecialChars.test(password)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if(password !== retypePassword){
            setLoading(false)
            setError({
                type: "password match",
                message: "password and retype password must match"
            })
            toast.error(error.type === "password match" ? error.message : "")
        } else if (passwordValidator() === false){
            setError({
                type: "password valid",
                message: "password must contain lowercase, uppercase number and special character"
            })
            toast.error(error.type === "password valid" ? error.message : "")
        }else{
            setLoading(false)
            toast.success("user added successfully")
        }
    }
    return(
        <div className="addAccountParent">
            <ToastContainer />
            <form onSubmit={handleSubmit}>
            <div className="addformHold">
                <div className="addformrow">
                    <div className="inputHold">
                        <p>Full Name</p>
                        <input
                         required
                         value={fullName}
                         onChange={(e)=> setFullName(e.target.value)}
                         type="text" 
                         />
                    </div>
                    <div className="inputHold">
                        <p>User Name</p>
                        <input
                         required
                         value={userName}
                         onChange={(e)=> setUserName(e.target.value)}
                         type="text" 
                         />
                    </div>
                    <div className="inputHold">
                        <p>Password</p>
                        <input
                         required
                         value={password}
                         onChange={(e)=> setPassword(e.target.value)}
                         type="text" 
                         />
                    </div>
                    <div className="inputHold">
                        <p>Retype Password</p>
                        <input
                         required
                         value={retypePassword}
                         onChange={(e)=> setRetypePassword(e.target.value)}
                         type="text" 
                         />
                    </div>
                </div>
                <div className="addformrow">
                    <div className="inputHold">
                        <p>Phone</p>
                        <input
                         required
                         value={phone}
                         onChange={(e)=> setPhone(e.target.value)}
                         type="tel" 
                         />
                    </div>
                    <div className="inputHold">
                        <p>Email</p>
                        <input
                         required
                         value={email}
                         onChange={(e)=> setEmail(e.target.value)}
                         type="email" 
                         />
                    </div>
                    <div className="inputHold">
                        <p>Occupation</p>
                        <input
                         required
                         value={occupation}
                         onChange={(e)=> setOccupation(e.target.value)}
                         type="text" 
                         />
                    </div>
                    <div className="inputHold">
                        <p>Date of birth</p>
                        <input
                         required
                         value={dateOfBirth}
                         onChange={(e)=> setDateOfBirth(e.target.value)}
                         type= "date" 
                         />
                    </div>
                </div>
                <div className="addformrow">
                    <div className="inputHold">
                        <p>Marital Status</p>
                        <select 
                        required
                        value={maritalStatus}
                        onChange={(e)=> setMaritalStatus(e.target.value)}
                        name="accounts" id="accounts">
                            <option value="">Select</option>
                            <option value="single">Single</option>
                            <option value="maried">Maried</option>
                            <option value="divorced">divorced</option>
                        </select>
                    </div>
                    <div className="inputHold">
                        <p>Account Number</p>
                        <input
                        title="minimum of 10 numbers"
                         required
                         value={accountNumber}
                         onChange={(e)=> setAccountNumber(e.target.value)}
                         type="text" 
                         pattern="\d{10,}"
                         minLength={10}
                         />
                    </div>
                    <div className="inputHold">
                        <p>Address</p>
                        <input
                         required
                         value={address}
                         onChange={(e)=> setAddress(e.target.value)}
                         type="text" 
                         />
                    </div>
                    <div className="inputHold">
                        <p>Account Type</p>
                        <select 
                        required
                        value={accountType}
                        onChange={(e)=> setAccountType(e.target.value)}
                        name="accounts" id="accounts">
                            <option value="">Select</option>
                            <option value="savings">Savings</option>
                            <option value="current">Current</option>
                            <option value="checking">Checking</option>
                        </select>
                    </div>
                </div>
                <div className="addformrow">
                    <div className="inputHold">
                        <p>Registeration Date</p>
                        <input
                         required
                         value={registerationDate}
                         onChange={(e)=> setRegisterationDate(e.target.value)}
                         type="date" 
                         />
                    </div>
                    <div className="inputHold">
                        <p>Total balance</p>
                        <input
                         required
                         value={totalBalance}
                         onChange={(e)=> setTotalBalance(e.target.value)}
                         type="number" 
                         />
                    </div>
                    <div className="inputHold">
                        <p>Available balance</p>
                        <input
                         required
                         value={availableBalance}
                         onChange={(e)=> setAvailableBalance(e.target.value)}
                         type="number"
                         />
                    </div>
                </div>
                <div className="addformrowbutt">
                   <button>Create Account</button>
                </div>
            </div>
            </form>
        </div>
    )
}
export const CreditAccount = () => {
    const [creditAccount, setCreditAccount] = useState("")
    const [debitAccount, setDebitAccount] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("transfer successful")
    }
    return(
        <div className="addAccountParent">
        <ToastContainer />
            <form action="" onSubmit={handleSubmit}>
                <div className="creditAccountHold">
                <div className="creditAccount">
                    <div className="creditTopic"><p>Credit user account</p></div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Choose account to credit</p>
                            <select 
                            required
                            value={creditAccount}
                            onChange={(e)=>setCreditAccount(e.target.value)}
                            name="accounts" id="accounts">
                                <option value="">Select</option>
                                <option value="jerry">jerry</option>
                                <option value="david">David</option>
                                <option value="jonathan">Jonathan</option>
                            </select>
                        </div>
                        <div className="creditInputHold">
                            <p>From</p>
                            <select 
                            required
                            value={debitAccount}
                            onChange={(e)=>setDebitAccount(e.target.value)}
                            name="accounts" id="accounts">
                                <option value="">Select</option>
                                <option value="jerry">jerry</option>
                                <option value="david">David</option>
                                <option value="jonathan">Jonathan</option>
                            </select>
                        </div>
                    </div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Amount</p>
                            <input 
                            required
                            value={amount}
                            onChange={(e)=>setAmount(e.target.value)}
                            type="number" />
                        </div>
                        <div className="creditInputHold">
                            <p>Description</p>
                            <input 
                            required
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                            type="text" />
                        </div>
                    </div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Date</p>
                            <input 
                            // required
                            value={date}
                            onChange={(e)=>setDate(e.target.value)}
                            type="date" />
                        </div>
                        <div className="creditInputHold">
                            <p>Time</p>
                            <input 
                            // required
                            value={time}
                            onChange={(e)=>setTime(e.target.value)}
                            type="Time" />
                        </div>
                    </div>
                    <div className="creditAcctButt">
                        <button>SEND</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}
export const DebitAccount = () => {
    const [creditAccount, setCreditAccount] = useState("")
    const [debitAccount, setDebitAccount] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        toast.success("debit successful")
    }
    return(
        <div className="addAccountParent">
            <ToastContainer />
            <form action="" onSubmit={handleSubmit}>
                <div className="creditAccountHold">
                <div className="creditAccount">
                    <div className="creditTopic"><p>Debit user account</p></div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Choose account to debit</p>
                            <select 
                            required
                            value={debitAccount}
                            onChange={(e)=> setDebitAccount(e.target.value)}
                            name="accounts" id="accounts">
                                <option value="">Select</option>
                                <option value="jerry">jerry</option>
                                <option value="david">David</option>
                                <option value="jonathan">Jonathan</option>
                            </select>
                        </div>
                        <div className="creditInputHold">
                            <p>Debit to</p>
                            <select 
                            required
                            value={creditAccount}
                            onChange={(e)=> setCreditAccount(e.target.value)}
                            name="accounts" id="accounts">
                                <option value="">Select</option>
                                <option value="jerry">jerry</option>
                                <option value="david">David</option>
                                <option value="jonathan">Jonathan</option>
                            </select>
                        </div>
                    </div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Amount</p>
                            <input 
                            required
                            value={amount}
                            onChange={(e)=> setAmount(e.target.value)}
                            type="number" />
                        </div>
                        <div className="creditInputHold">
                            <p>Description</p>
                            <input 
                            required
                            value={description}
                            onChange={(e)=> setDescription(e.target.value)}
                            type="text" />
                        </div>
                    </div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Date</p>
                            <input 
                            // required
                            value={date}
                            onChange={(e)=> setDate(e.target.value)}
                            type="date" />
                        </div>
                        <div className="creditInputHold">
                            <p>Time</p>
                            <input 
                            value={time}
                            onChange={(e)=> setTime(e.target.value)}
                            type="Time" />
                        </div>
                    </div>
                    <div className="creditAcctButt">
                        <button>
                            {
                                loading ? <BeatLoader color="white"/> : "DEBIT"
                            }
                        </button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}
export const UpdateAccount = () => {
    const [showUpdate, setShowUpdate] = useState(false)
    return(
        <div className="addAccountParent">
            <div className="updateAccountHold">
                <div className="updateHeadtopic">
                    <p>Choose the account to update</p>
                </div>
                <div className="accountChooseHold">
                    <div className="accountChooseDetail" onClick={()=>setShowUpdate(true)}>
                        <p>1 : </p><p>Ekele Jeremiah</p>
                    </div>
                </div>
                {
                    showUpdate ? 
                    <div className="updateInfoDetails">
                    <div className="closeUpdate">
                        <div className="updateClose" onClick={()=>setShowUpdate(false)}>
                            <IoCloseSharp />
                        </div>
                        <div className="updateClose2" onClick={()=>setShowUpdate(false)}>
                            <FaArrowLeftLong />
                        </div>
                        <h1 className="infow">change only the info you want</h1>
                    </div>
                    
                    <div className="addformHold">
                <div className="addformrow">
                    <div className="inputHold">
                        <p>Full Name</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>User Name</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Password</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Retype Password</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="addformrow">
                    <div className="inputHold">
                        <p>Phone</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Email</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Occupation</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Date of birth</p>
                        <input type="date" />
                    </div>
                </div>
                <div className="addformrow">
                    <div className="inputHold">
                        <p>Marital Status</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Gender</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Address</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Account Type</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="addformrow">
                    <div className="inputHold">
                        <p>Registeration Date</p>
                        <input type="date" />
                    </div>
                    <div className="inputHold">
                        <p>Total balance</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Available balance</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Account number</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="addformrow">
                    <div className="inputHold">
                        <p>Account currency</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>COT code</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>IMF code</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Complaint code</p>
                        <input type="text" />
                    </div>
                </div>
                <div className="addformrow">
                    <div className="inputHold">
                        <p>Login pin</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Atm pin</p>
                        <input type="text" />
                    </div>
                    {/* <div className="inputHold">
                        <p>IMF code</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Complaint code</p>
                        <input type="text" />
                    </div> */}
                </div>
                <div className="addformrowbutt">
                   <button>Update Account</button>
                </div>
            </div>
                </div> : null
                }
            </div>
        </div>
    )
}

export const DeleteAccount = () => {
    const [deleteWarn, setDeleteWarn] = useState(false)
    return(
        <div className="deleteAcountParent">

            {
                deleteWarn ? 
                <div className="deleteWarn">
                    <p>Are you sure you want to delete this account ?</p>
                    <i>please note: Once this action is done it cannot be undone!!</i>
                    <div className="deleteButt">
                        <button className="cancelDel" onClick={()=>setDeleteWarn(false)}>cancel</button>
                        <button className="del">Delete</button>
                    </div>
                </div> 
                : 
                <div> 
                    <div className="deleteActTopic">
                        <p>Select Account to delete</p>
                    </div>
                    <div className="deleteSelectHold">
                        <div className="deleteSelect" onClick={()=> setDeleteWarn(true)}>
                            <p>1 :</p>
                            <p>Ekele Jeremiah</p>
                        </div>
                    </div> 
               </div>
            }
        </div>
    )
}


export const ChangeAccountStatus = () => {
    const [account, setAccount] = useState("")
    const [status, setStatus] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        toast.success("Account status changed successfully")
    }
    return(
        <div className="deleteAcountParent">
            <ToastContainer />
            <div className="changeStatusTopic">
                <p>Change Account Status</p>
            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className="changeStatusHold">
                <div className="statuschangeWrap">
                    <p>Select Account</p>
                    <select 
                    required
                    value={account}
                    onChange={(e)=> setAccount(e.target.value)}
                    name="status" id="status">
                        <option value="">Choose</option>
                        <option value="Ekele Jeremiah">Ekele Jeremiah</option>
                        <option value="Ekele Jeremiah">Ekele Jeremiah</option>
                        <option value="Ekele Jeremiah">Ekele Jeremiah</option>
                    </select>
                </div>
                <div className="statuschangeWrap">
                    <p>Set Status</p>
                    <select 
                    required
                    value={status}
                    onChange={(e)=> setStatus(e.target.value)}
                    name="status" id="status">
                        <option value="">Choose</option>
                        <option value="active">Active</option>
                        <option value="Dormant">Dormant/Innactive</option>
                        <option value="closed">Closed</option>
                        <option value="closed">Disabled</option>
                    </select>
                </div>
                <div className="statusChangeButt">
                    <button>SET</button>
                </div>
                <div className="guideline">
                    <p>Active : <span>This means that the client can access all functions within his/her account</span></p>
                    <p>Dormant/Innactive: <span>A notice that the account is Dormant/Inactive will be shown on the client's dashboard. Also, he/she will not be able to make any transfers.</span></p>
                    <p>Closed: <span>When the account is set to Closed, it brings up a message when the client tries to log in, saying that the account no longer exist.</span></p>
                    <p>Disabled: <span>A client will be notified when they try logging in that their account has been disabled due to security reasons, we detected diffrent IP address and location.</span></p>
                </div>
            </div>
            </form>
        </div>
    )
}