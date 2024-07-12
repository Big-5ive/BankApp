import { useEffect, useState } from "react";
import "./historyComponent.css"
import { IoMdAdd } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BeatLoader } from "react-spinners";

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
    const [history, setHistory] = useState()
    const [allAccount, setAllAccount] = useState()
    const [loading, setLoading] = useState(false)

    const admin = JSON.parse(localStorage.getItem("adminData"))
    const token = admin.token
    const headers = {
        'Authorization' : `Bearer ${token}`
    }
    // console.log("history", history)

    const url = "https://avantgardefinance-api.onrender.com/view-all-history"
    useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
      try {
        const response = await axios.get(url, { headers });
        setHistory(response.data.history)
        // console.log(response)
        setLoading(false);
      } catch (err) {
        // setError(err);
        console.log(err)
        setLoading(false);
        console.log(err.message)
      }
    };
    fetchData();
  }, []);
        
    useEffect(() => {
        const url = "https://avantgardefinance-api.onrender.com/view-all-users"
        const fetchData = async () => {
            try {
            const response = await axios.get(url, { headers });
            setAllAccount(response?.data.data)
            } catch (err) {
                console.log(err.message)
            }
        };
        fetchData();
    }, []);

  const data = {
    sender: sender,
    amountTransferred: amount,
    accountTransferredTo: account,
    transactionType: type,
    bank: bank,
    accountName: account,
    remark: description,
    date: date,

  }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const url = "https://avantgardefinance-api.onrender.com/transaction-history"
        axios.post(url, data, { headers })
        .then((response)=> {
            console.log(response)
            setLoading(false)
            toast.success("history added successfully")
        })
        .catch((error) => {
            console.log(error)
            console.log(data)
            setLoading(false)
            toast.error("operation fai")
        })
        
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
                                    <p>Select the account you want the history to be added</p>
                                    <select 
                                    required
                                    value={account}
                                    onChange={(e)=>setAccount(e.target.value)}
                                    name="history" id="history">
                                        <option value="">choose</option>
                                        {
                                            allAccount.map((e, index)=> (
                                                <option key={index} value={e._id}>{e.fullName}</option>
                                            ))
                                        }
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
                                        <option value="">choose</option>
                                        {
                                            allAccount.map((e, index)=> (
                                                <option key={index} value={e._id}>{e.fullName}</option>
                                            ))
                                        }
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
                                <button>
                                    {
                                        loading ?<BeatLoader color="white"/> : "Add"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    </form>
                </div> 
                :
                <div className="historyTableHold">
                <div className="tableHead">
                    <div className="headTopic"><p>SENDER</p></div>
                    <div className="headTopic"><p>RECEIVER</p></div>
                    <div className="headTopic"><p>AMOUNT</p></div>
                    <div className="headTopic"><p>DESCRIPTION</p></div>
                    <div className="headTopic"><p>TYPE</p></div>
                    <div className="headTopic"><p>BANK</p></div>
                    <div className="headTopic"><p>DATE</p></div>
                    {/* <div className="headTopic"><p>TIME</p></div> */}
                </div>
                <div className="tableBody">
                    {history?.lenght === 0 ? (
                        <div className="tableBodyHold"><p> You have no history yet</p></div>
                    ) : (
                        history?.map((e, index)=> (
                        <div key={index} className="tableBodyHold">
                            <div className="headTopic"><p>{e.senderName}</p></div>
                            <div className="headTopic"><p>{e.receiverName}</p></div>
                            <div className="headTopic"><p>{e.amountTransferred}</p></div>
                            <div className="headTopic"><p>{e.remark}</p></div>
                            <div className="headTopic"><p>{e.transactionType}</p></div>
                            <div className="headTopic"><p>{e.bank}</p></div>
                            <div className="headTopic"><p>{e.date}</p></div>
                            {/* <div className="headTopic"><p>5:14</p></div> */}
                        </div>
                        ))
                    )
                    }
                </div>
            </div>
            }
        </div>
        
    )
}

export default TransactionHistory