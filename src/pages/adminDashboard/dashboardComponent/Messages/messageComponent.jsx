import "./messagecomponent.css"
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
// import { ImCancelCircle } from "react-icons/im";

const MessageComponent = () => {
    const [open, setOpen] = useState(false)
    const [compose, setCompose] = useState(false)
    return(
        <div className="messagecomponentParent">
            <div className="messageCompTop">Messages</div>
            <div className="messageAction">
                <p>All messages</p>
                <button onClick={()=>setCompose(true)}> <IoMdAdd /> Compose</button>
            </div>
            <div className="messageBodyHold">
                <div className="messageBody" onClick={()=> setOpen(true)}>
                    <div className="messagePic">
                        <CgProfile />
                    </div>
                    <div className="messageItem">
                        <div className="messageName">
                            <p>Jeremiah</p>
                        </div>
                        <div className="messageMessage">
                            <p>hjwdhohg etjih bjobho qlerk ;kj;fhio apfuipgu pfiuh[uifh piuh[pgui jilf]]  ;kjpgui hghasdgv gvicsd igvoyvadf qerjkhgyo qerpjkgief wtljh trljh ljhpg wpiugd</p>
                        </div>
                    </div>
                    <div className="messageDate">
                        <p>12/12/2024</p>
                        <p>12:37pm</p>
                    </div>
                </div>
                {
                    open ? 
                    <div className="messageContent">
                        <div className="messageContHead">
                            <div className="messageContHeadx" onClick={()=> setOpen(false)}>
                                <p>Close</p>
                            </div>
                        </div>
                        <div className="messageContBody">
                            <div className="mesageContMessage">
                                <div className="messageFrom">
                                    <p>From: Ekele Jeremiah</p>
                                </div>
                                <div className="messageItself">
                                    <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                : null
                }

                { compose?
                     <div className="messageContent">
                     <div className="messageContHead">
                         <div className="messageContHeadx" onClick={()=> setCompose(false)}>
                             <p>Close</p>
                         </div>
                     </div>
                     <div className="messageContBody">
                         <div className="mesageContMessage xxxm">
                             <div className="messageFrom">
                                 <p>Compose A new message</p>
                             </div>
                             <div className="messageItself">
                                 <div className="composeInputhold">
                                    <p>Sender</p>
                                    <select name="sender" id="sender">
                                        <option value="sender">Sender</option>
                                        <option value="customer Care">Customer Care</option>
                                        <option value="account officer">Account officer</option>
                                    </select>
                                 </div>
                                 <div className="composeInputhold">
                                    <p>To</p>
                                    <select name="sender" id="sender">
                                        <option value="sender">receiver</option>
                                        <option value="customer Care">Customer Care</option>
                                        <option value="account officer">Account officer</option>
                                    </select>
                                 </div>
                                 <div className="messageWrite">
                                    <textarea name="message" id="message" placeholder="Message"></textarea>
                                 </div>
                                 <div className="messageButton">
                                    <button>SEND</button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 : null
                }
                
            </div>
        </div>
    )
}

export default MessageComponent