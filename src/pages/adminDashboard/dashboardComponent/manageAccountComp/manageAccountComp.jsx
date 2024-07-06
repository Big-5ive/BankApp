import "./manageAccountComp.css"
import { IoPersonAddOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AddAccount, DebitAccount, CreditAccount, UpdateAccount } from "./manageAction";

const AccountManageMentComponent = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState("")

    const handleAddAccount = () => {
        setShow(true)
        setName("addAccount")
    }
    const handleCreditAccount = () => {
        setShow(true)
        setName("creditAccount")
    }
    const handleDebitAccount = () => {
        setShow(true)
        setName("debitAccount")
    }
    const handleUpdateAccount = () => {
        setShow(true)
        setName("updateAccount")
    }
    return(
        <div className="accountMangeParent">
            {
                show ?
                <div className="accountAction">
                    <div className="remove">
                        <div onClick={()=> setShow(false)}>
                            <IoClose />
                        </div>
                    </div>
                    {
                        name === "addAccount" ? <AddAccount /> :
                        name === "creditAccount" ? <CreditAccount /> :
                        name === "debitAccount" ? <DebitAccount /> :
                        name === "updateAccount" ? <UpdateAccount />: null
                    }
                </div>
                : null
            }
            <div className="accountmanageHead">
                <p>Manage Accounts</p>
            </div>
            <div className="manageFunctionHol">
                <div className="manageFunction" onClick={handleAddAccount}>
                    <div className="manageFunctionIcon">
                        <IoPersonAddOutline />
                    </div>
                    <div className="manageFunctionName">
                        <p>Create Account</p>
                    </div>
                </div>
                <div className="manageFunction" onClick={handleCreditAccount}>
                    <div className="manageFunctionIcon">
                        <GiReceiveMoney />
                    </div>
                    <div className="manageFunctionName">
                        <p>Credit Account</p>
                    </div>
                </div>
                <div className="manageFunction" onClick={handleDebitAccount}>
                    <div className="manageFunctionIcon">
                        <MdOutlineRemoveCircleOutline />
                    </div>
                    <div className="manageFunctionName">
                        <p>Debit Account</p>
                    </div>
                </div>
                <div className="manageFunction" onClick={handleUpdateAccount}>
                    <div className="manageFunctionIcon">
                        <CiEdit />
                    </div>
                    <div className="manageFunctionName">
                        <p>Update Account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountManageMentComponent