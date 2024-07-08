import { useState } from "react";
import "./historyComponent.css"
import { IoMdAdd } from "react-icons/io";

const TransactionHistory = () => {
    const [addHistory, setAddHistory] = useState(false)
    return(
        <div className="transactionHistoryParent">
            <div className="historyTopic">
                <button onClick={()=>setAddHistory(true)}> <IoMdAdd/> Add History</button>
                <p>All Transaction History</p>
            </div>
            {
                addHistory ? 
                <div className="addHistoryParent">
                    <div className="addCancel">
                        <div className="addcancelhold" onClick={()=>setAddHistory(false)}>
                            close
                        </div>
                    </div>
                    <div className="addHistoryHold">
                        <div className="addHistoryBody">
                            <div className="addHistoryBodytopic"><p>Add Credit / Debit History</p></div>
                            <div className="addHistoryInputHold">
                                <div className="addHistoryInput">
                                    <p>Select Account</p>
                                    <select name="history" id="history">
                                        <option value="Jeremiah">Ekele Jeremiah</option>
                                        <option value="Micheal">Adekunle Micheal</option>
                                    </select>
                                </div>
                                <div className="addHistoryInput">
                                    <p>Transaction Type</p>
                                    <select name="history" id="history">
                                        <option value="credit">Credit</option>
                                        <option value="debit">Debit</option>
                                    </select>
                                </div>
                            </div>
                            <div className="addHistoryInputHold">
                                <div className="addHistoryInput">
                                    <p>Amount</p>
                                    <input type="text" />
                                </div>
                                <div className="addHistoryInput">
                                    <p>Description</p>
                                    <input type="text" placeholder="eg, Flight payment"/>
                                </div>
                            </div>
                            <div className="addHistoryInputHold">
                                <div className="addHistoryInput">
                                    <p>From</p>
                                    <input type="text" />
                                </div>
                                <div className="addHistoryInput">
                                    <p>Date</p>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className="addHistoryInputHold">
                                <div className="addHistoryInput">
                                    <p>Time</p>
                                    <input type="time" />
                                </div>
                                {/* <div className="addHistoryInput">
                                    <p>Description</p>
                                    <input type="text" placeholder="eg, Flight payment"/>
                                </div> */}
                            </div>
                            <div className="addHistoryButton">
                                <button>Add</button>
                            </div>
                        </div>
                    </div>
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