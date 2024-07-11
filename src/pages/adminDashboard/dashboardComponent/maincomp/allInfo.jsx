import './allInfo.css'
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const AllInfoComponent = () => {
    const nav = useNavigate()
    return(
        <div className="allInfoParentxx">
            <div className="header">
                <p>DashBoard</p>
            </div>
            <div className="dashboardItemHold">
                <div className="dashboardItems">
                    <div className="tti"><p>Accounts</p></div>
                    <div className="tt2">
                        <p>Total accounts : <span>50</span></p>
                        <p>Active accounts : <span>30</span></p>
                        <p>Dormant accounts : <span>10</span></p>
                        <p>Closed accounts : <span>5</span></p>
                        <p>Disabled accounts : <span>5</span></p>
                    </div>
                    <div className="bigBut">
                        <button onClick={()=> nav("/accountmanage")}>Manage Accounts</button>
                    </div>
                </div>
                <div className="dashboardItems">
                    <div className="tti"><p>Transaction History</p></div>
                    <div className="tt2">
                        <p>Total Transactions : <span>50</span></p>
                        <p>Debits : <span>30</span></p>
                        <p>Credits : <span>20</span></p>
                    </div>
                    <div className="bigBut">
                        <button onClick={()=> nav("/history")}>Manage History</button>
                    </div>
                </div>
                <div className="dashboardItems">
                <div className="tti"><p>Messages</p></div>
                    <div className="tt2">
                        <p>All notification : <span>50</span></p>
                    </div>
                    <div className="bigBut">
                        <button onClick={()=> nav("/messages")}>Manage Messages</button>
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
    )
}

export default AllInfoComponent 