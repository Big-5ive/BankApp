import './dashboardAccount.css'
import { BsBank } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineManageHistory } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { LuMenu } from "react-icons/lu";
import { BsMotherboard } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import AccountComponent from '../../dashboardComponent/account/account';

const AccountDashboard = () => {
    const navigate = useNavigate()
    return(
        <div className="adminDashboardParent">
        <div className="adminHold">
            <div className="adminLeft">
                <div className="logo"><BsBank /></div>
                <div className="navHold">
                    <div className="navHolddiv" onClick={()=> navigate("/admin")}>
                        <div className="navlogo">
                            <RxDashboard />
                        </div>
                        <div className="navWrited">
                            <p>Dashboard</p>
                        </div>
                    </div>
                    <div className="navHolddivn">
                        <div className="navlogo">
                            <MdOutlineManageAccounts />
                        </div>
                        <div className="navWrited">
                            <p>Accounts</p>
                        </div>
                    </div>
                    <div className="navHolddiv" onClick={()=> navigate("/accountmanage")}>
                        <div className="navlogo">
                            <GrUserManager />
                        </div>
                        <div className="navWrited">
                            <p>Manage Accounts</p>
                        </div>
                    </div>
                    <div className="navHolddiv">
                        <div className="navlogo">
                            <RiMessage2Line />
                        </div>
                        <div className="navWrited">
                            <p>Messages</p>
                        </div>
                    </div>
                    <div className="navHolddiv">
                        <div className="navlogo">
                            <MdOutlineManageHistory />
                        </div>
                        <div className="navWrited">
                            <p>Transaction History</p>
                        </div>
                    </div>
                    <div className="navHolddiv">
                        <div className="navlogo">
                            <BsMotherboard />
                        </div>
                        <div className="navWrited">
                            <p>Others</p>
                        </div>
                    </div>
                    <div className="navHolddiv">
                        <div className="navlogo">
                            <MdOutlineSettings />
                        </div>
                        <div className="navWrited">
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="adminRight">
                <div className="adminHead">
                    <div className="adminHeadHold">
                        <div className="welcome">
                            <p>Welcome <span>Maxwell</span></p>
                        </div>
                        <div className="notify">
                            <div className="notifyHold">
                                <div className="notifyicon">
                                    <IoNotificationsOutline />
                                </div>
                                <div className="notifyicon2">
                                    <LuMenu />
                                </div>
                                <div className="profilepic">
                                    <div className="picpic"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="adminComponents">
                    <div className="adminComponentHold">
                        <AccountComponent />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AccountDashboard