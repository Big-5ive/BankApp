import { useState } from "react"
import "./manageAction.css"
import { IoCloseSharp } from "react-icons/io5";

export const AddAccount = () => {
    return(
        <div className="addAccountParent">
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
                        <p>Login / ATM pin</p>
                        <input type="text" />
                    </div>
                    <div className="inputHold">
                        <p>Domestic Transfer pin</p>
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
                   <button>Create Account</button>
                </div>
            </div>
        </div>
    )
}
export const CreditAccount = () => {
    return(
        <div className="addAccountParent">
            <div className="creditAccountHold">
                <div className="creditAccount">
                    <div className="creditTopic"><p>Credit user account</p></div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Choose account to credit</p>
                            <select name="accounts" id="accounts">
                                <option value="select">Select</option>
                                <option value="jerry">jerry</option>
                                <option value="david">David</option>
                                <option value="jonathan">Jonathan</option>
                            </select>
                        </div>
                        <div className="creditInputHold">
                            <p>From</p>
                            <select name="accounts" id="accounts">
                                <option value="select">Select</option>
                                <option value="jerry">jerry</option>
                                <option value="david">David</option>
                                <option value="jonathan">Jonathan</option>
                            </select>
                        </div>
                    </div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Amount</p>
                            <input type="text" />
                        </div>
                        <div className="creditInputHold">
                            <p>Description</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Date</p>
                            <input type="date" />
                        </div>
                        <div className="creditInputHold">
                            <p>Time</p>
                            <input type="Time" />
                        </div>
                    </div>
                    <div className="creditAcctButt">
                        <button>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const DebitAccount = () => {
    return(
        <div className="addAccountParent">
            <div className="creditAccountHold">
                <div className="creditAccount">
                    <div className="creditTopic"><p>Debit user account</p></div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Choose account to debit</p>
                            <select name="accounts" id="accounts">
                                <option value="select">Select</option>
                                <option value="jerry">jerry</option>
                                <option value="david">David</option>
                                <option value="jonathan">Jonathan</option>
                            </select>
                        </div>
                        <div className="creditInputHold">
                            <p>Debit to</p>
                            <select name="accounts" id="accounts">
                                <option value="select">Select</option>
                                <option value="jerry">jerry</option>
                                <option value="david">David</option>
                                <option value="jonathan">Jonathan</option>
                            </select>
                        </div>
                    </div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Amount</p>
                            <input type="text" />
                        </div>
                        <div className="creditInputHold">
                            <p>Description</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="creditAccountrow">
                        <div className="creditInputHold">
                            <p>Date</p>
                            <input type="date" />
                        </div>
                        <div className="creditInputHold">
                            <p>Time</p>
                            <input type="Time" />
                        </div>
                    </div>
                    <div className="creditAcctButt">
                        <button>DEBIT</button>
                    </div>
                </div>
            </div>
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
    return(
        <div className="deleteAcountParent">
            <div className="changeStatusTopic">
                <p>Change Account Status</p>
            </div>
            <div className="changeStatusHold">
                <div className="statuschangeWrap">
                    <p>Select Account</p>
                    <select name="status" id="status">
                        <option value="choose">Choose</option>
                        <option value="Ekele Jeremiah">Ekele Jeremiah</option>
                        <option value="Ekele Jeremiah">Ekele Jeremiah</option>
                        <option value="Ekele Jeremiah">Ekele Jeremiah</option>
                    </select>
                </div>
                <div className="statuschangeWrap">
                    <p>Set Status</p>
                    <select name="status" id="status">
                        <option value="choose">Choose</option>
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
                    <p>Disabled: <span>A client will be notified when they try logging in that their account has been disabled due to violation of terms. He will be advised to contact the customer care to rectify the issue.</span></p>
                </div>
            </div>
        </div>
    )
}