import { useState } from "react";
import "./historyComponent.css"
import { IoMdAdd } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

const TransactionHistory = () => {
    const [addHistory, setAddHistory] = useState(false)
    const [account, setAccount] = useState("")
    const [type, setType] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [sender, setSender] = useState("")
    const [bank, setBank] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        toast.success("history added successfully")
    }
    return(
        <div className="transactionHistoryParent">
            <div className="historyTopic">
                <button onClick={()=>setAddHistory(true)}> <IoMdAdd/> Add History</button>
                <p>All Transaction History</p>
            </div>
            {
                addHistory ? 
                <div className="addHistoryParent">
                    <ToastContainer />
                    <div className="addCancel">
                        <div className="addcancelhold" onClick={()=>setAddHistory(false)}>
                            <p className="closedv">close</p>
                            <div className="closedvv">
                                <FaArrowLeftLong />
                            </div>
                        </div>
                        <p className="infow">Add Credit / Debit History</p>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                    <div className="addHistoryHold">
                        <div className="addHistoryBody">
                            <div className="addHistoryBodytopic"><p>Add Credit / Debit History</p></div>
                            <div className="addHistoryInputHold">
                                <div className="addHistoryInput">
                                    <p>Select Account</p>
                                    <select 
                                    required
                                    value={account}
                                    onChange={(e)=>setAccount(e.target.value)}
                                    name="history" id="history">
                                        <option value="">choose</option>
                                        <option value="Jeremiah">Ekele Jeremiah</option>
                                        <option value="Micheal">Adekunle Micheal</option>
                                    </select>
                                </div>
                                <div className="addHistoryInput">
                                    <p>Transaction Type</p>
                                    <select 
                                    required
                                    value={type}
                                    onChange={(e)=>setType(e.target.value)}
                                    name="history" id="history">
                                        <option value="">choose</option>
                                        <option value="credit">Credit</option>
                                        <option value="debit">Debit</option>
                                    </select>
                                </div>
                            </div>
                            <div className="addHistoryInputHold">
                                <div className="addHistoryInput">
                                    <p>Amount</p>
                                    <input 
                                    required
                                    value={amount}
                                    onChange={(e)=>setAmount(e.target.value)}
                                    type="number" />
                                </div>
                                <div className="addHistoryInput">
                                    <p>Description</p>
                                    <input 
                                    required
                                    value={description}
                                    onChange={(e)=>setDescription(e.target.value)}
                                    type="text" placeholder="eg, Flight payment"/>
                                </div>
                            </div>
                            <div className="addHistoryInputHold">
                                <div className="addHistoryInput">
                                    <p>From</p>
                                    <select 
                                    required
                                    value={sender}
                                    onChange={(e)=>setSender(e.target.value)}
                                    name="history" id="history">
                                        <option value="">Jerry</option>
                                        <option value="credit">Customer</option>
                                        <option value="debit">john</option>
                                    </select>
                                </div>
                                <div className="addHistoryInput">
                                    <p>Bank</p>
                                    <input 
                                    required
                                    value={bank}
                                    onChange={(e)=>setBank(e.target.value)}
                                    type="text" />
                                </div>
                            </div>
                            <div className="addHistoryInputHold">
                                <div className="addHistoryInput">
                                    <p>Time</p>
                                    <input 
                                    // required
                                    value={time}
                                    onChange={(e)=>setTime(e.target.value)}
                                    type="time" />
                                </div>
                                <div className="addHistoryInput">
                                    <p>Date</p>
                                    <input 
                                    value={date}
                                    onChange={(e)=> setDate(e.target.value)}
                                    type="date" />
                                </div>
                            </div>
                            <div className="addHistoryButton">
                                <button>Add</button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div> 
                :
                <div className="historyTableHold">
                <div className="tableHead">
                    <div className="headTopic"><p>ACCOUNT NUMBER</p></div>
                    <div className="headTopic"><p>ACCOUNT NAME</p></div>
                    <div className="headTopic"><p>AMOUNT</p></div>
                    <div className="headTopic"><p>DESCRIPTION</p></div>
                    <div className="headTopic"><p>TYPE</p></div>
                    <div className="headTopic"><p>BANK</p></div>
                    <div className="headTopic"><p>DATE</p></div>
                    <div className="headTopic"><p>TIME</p></div>
                </div>
                <div className="tableBody">
                <div className="headTopic"><p>123456789</p></div>
                    <div className="headTopic"><p>Ekele Jeremiah</p></div>
                    <div className="headTopic"><p>1000000</p></div>
                    <div className="headTopic"><p>Loan</p></div>
                    <div className="headTopic"><p>Credit</p></div>
                    <div className="headTopic"><p>Opay</p></div>
                    <div className="headTopic"><p>8/7/2024</p></div>
                    <div className="headTopic"><p>5:14</p></div>
                </div>
            </div>
            }
        </div>
    )
}

export default TransactionHistory