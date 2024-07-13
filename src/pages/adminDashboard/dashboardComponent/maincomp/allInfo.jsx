import { useEffect, useState } from 'react';
import './allInfo.css'
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AllInfoComponent = () => {
    const nav = useNavigate()
    const [showDocuments, setShowDocuments] = useState(false)
    const [allUsers, setAllUsers] = useState()
    const [history, setHistory] = useState()
    const [loading, setLoading] = useState(false)


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
        setAllUsers(response?.data.data)
        // console.log(response.data.data)
        setLoading(false);
      } catch (err) {
        console.log(err)
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  useEffect(() => {
    const url = "https://avantgardefinance-api.onrender.com/view-all-history"
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

  

//   useEffect(()=> {
//     console.log(allUsers)
    
//   },[allUsers])
  
    return(
        <div className="allInfoParentxx">
            <div className="header">
                <p>DashBoard</p>
            </div>
            {
                showDocuments ?
                <div className="documentHold">
                    <div className="headerdoc">
                        <button onClick={()=> setShowDocuments(false)}>CLOSE DOCUMENTS</button>
                    </div>
                    <div className="documentBodyHold">
                        <div className="documentBody">
                            <div className="owner">
                                <p>Owner: <span>Goodluck Jonathan</span></p>
                                <p>Title: <span>National ID card</span></p>
                            </div>
                            <div className="picture">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrtbbLVsoXYcBgpbMBlMujEC56a59UgEZKQ&s" alt="" />
                            </div>
                        </div>
                        <div className="documentBody">
                            <div className="owner">
                                <p>Owner: <span>Goodluck Jonathan</span></p>
                                <p>Title: <span>National ID card</span></p>
                            </div>
                            <div className="picture">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrtbbLVsoXYcBgpbMBlMujEC56a59UgEZKQ&s" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                : <div style={{width: "100%", height: "max-content", display: "flex", flexDirection: "column", gap: "30px"}}>
                    <div className="dashboardItemHold">
                <div className="dashboardItems">
                    <div className="tti"><p>Accounts</p></div>
                    <div className="tt2">
                        <p>Total accounts : <span>{allUsers?.length}</span></p>
                        {/* <p>Active accounts : <span>{activeAccount}</span></p>
                        <p>Dormant accounts : <span>{dormantAccount}</span></p>
                        <p>Closed accounts : <span>{closedAccount}</span></p>
                        <p>Disabled accounts : <span>{disabledAccount}</span></p> */}
                    </div>
                    <div className="bigBut">
                        <button onClick={()=> nav("/accountmanage")}>Manage Accounts</button>
                    </div>
                </div>
                <div className="dashboardItems">
                    <div className="tti"><p>Transaction History</p></div>
                    <div className="tt2">
                        <p>Total Transactions : <span>{history?.length}</span></p>
                    </div>
                    <div className="bigBut">
                        <button onClick={()=> nav("/history")}>Manage History</button>
                    </div>
                </div>
                <div className="dashboardItems">
                <div className="tti"><p>Documents</p></div>
                    <div className="tt2">
                        <p>All documents : <span>50</span></p>
                    </div>
                    <div className="bigBut">
                        <button onClick={()=>setShowDocuments(true)}>view document</button>
                    </div>
                </div>
            </div>
            <div className="transactionDetailxx">
                <div className="tablehead"><h1>All Card Details</h1></div>
                <div className="cardHold">
                    <div className="card">
                        <div className="cardname">
                            <p>Bank App</p>
                        </div>
                        <div className="cardChip">
                            <FcSimCardChip />
                        </div>
                        <div className="cardNum">
                            <p>500</p>
                            <p>1234</p>
                            <p>5678</p>
                            <p>9010</p>
                        </div>
                        <div className="cardDate">
                            <p>cvv - 234</p>
                            <p>valid - 10/25</p>
                            <RiMastercardFill fontSize={"30px"} color='orange'/>
                        </div>
                        <div className="holderName">
                            <p>John c Maxwell</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardname">
                            <p>Bank App</p>
                        </div>
                        <div className="cardChip">
                            <FcSimCardChip />
                        </div>
                        <div className="cardNum">
                            <p>500</p>
                            <p>1234</p>
                            <p>5678</p>
                            <p>9010</p>
                        </div>
                        <div className="cardDate">
                            <p>cvv - 234</p>
                            <p>valid - 10/25</p>
                            <RiMastercardFill fontSize={"30px"} color='orange'/>
                        </div>
                        <div className="holderName">
                            <p>John c Maxwell</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardname">
                            <p>Bank App</p>
                        </div>
                        <div className="cardChip">
                            <FcSimCardChip />
                            <p>pin - 1234</p>
                        </div>
                        <div className="cardNum">
                            <p>500</p>
                            <p>1234</p>
                            <p>5678</p>
                            <p>9010</p>
                        </div>
                        <div className="cardDate">
                            <p>cvv - 234</p>
                            <p>valid - 10/25</p>
                            <RiMastercardFill fontSize={"30px"} color='orange'/>
                        </div>
                        <div className="holderName">
                            <p>John c Maxwell</p>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            }
            

        </div>
    )
}

export default AllInfoComponent 