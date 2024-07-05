import "./manageAction.css"

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
                            <input type="text" />
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
            <p>Debit</p>
        </div>
    )
}
export const UpdateAccount = () => {
    return(
        <div className="addAccountParent">
            <p>Update</p>
        </div>
    )
}