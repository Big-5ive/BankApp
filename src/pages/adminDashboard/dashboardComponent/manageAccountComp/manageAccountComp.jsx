import "./manageAccountComp.css"
import { IoPersonAddOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { TbArrowsExchange2 } from "react-icons/tb";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AddAccount, DebitAccount, CreditAccount, UpdateAccount, DeleteAccount, ChangeAccountStatus } from "./manageAction";

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
    const handleDeleteAccount = () => {
        setShow(true)
        setName("deleteAccount")
    }
    const handleChangeAccountStatus = () => {
        setShow(true)
        setName("changeAccountStatus")
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
                        name === "updateAccount" ? <UpdateAccount />: 
                        name === "deleteAccount" ? <DeleteAccount /> :
                        name === "changeAccountStatus" ? <ChangeAccountStatus /> : null
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
                <div className="manageFunction" onClick={handleDeleteAccount}>
                    <div className="manageFunctionIcon">
                        <MdDeleteOutline />
                    </div>
                    <div className="manageFunctionName">
                        <p>Delete Account</p>
                    </div>
                </div>
                <div className="manageFunction" onClick={handleChangeAccountStatus}>
                    <div className="manageFunctionIcon">
                        <TbArrowsExchange2 />
                    </div>
                    <div className="manageFunctionName">
                        <p>Change Account Status</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountManageMentComponent