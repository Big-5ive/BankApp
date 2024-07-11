import "./messagecomponent.css"
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
// import { ImCancelCircle } from "react-icons/im";

const MessageComponent = () => {
    const [open, setOpen] = useState(false)
    const [compose, setCompose] = useState(false)
    const [sender, setSender] = useState("")
    const [receiver, setReceiver] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
        type: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        if(!sender){
            setLoading(false)
            setError({
                type: "sender",
                message: "choose the sender"
            })
            toast.error(error.type === "sender" ? error.message : "")
        } else if(!receiver){
            setLoading(false)
            setError({
                type: "receiver",
                message: "cho0se the receiver"
            })
            toast.error(error.type === "receiver" ? error.message : "")
        } else if(!message){
            setLoading(false)
            setError({
                type: "message",
                message: "you cant send an empty message!"
            })
            toast.error(error.type === "sender" ? error.message : "")
        } else{
            setLoading(false)
            toast.success("message sent successfully")
        }
    }
    return(
        <div className="messagecomponentParent">
            <ToastContainer />
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
                             <form onSubmit={handleSubmit}>
                             <div className="messageItself">
                                 <div className="composeInputhold">
                                    <p>Sender</p>
                                    <select required name="sender" id="sender" value={sender} onChange={(e)=>setSender(e.target.value)}>
                                        <option value="">Sender</option>
                                        <option value="customer Care">Customer Care</option>
                                        <option value="account officer">Account officer</option>
                                    </select>
                                 </div>
                                 <div className="composeInputhold">
                                    <p>To</p>
                                    <select name="sender" required id="sender" value={receiver} onChange={(e)=>setReceiver(e.target.value)}>
                                        <option value="">receiver</option>
                                        <option value="customer Care">Ekele Jeremiah</option>
                                        <option value="account officer">Adekunle Micheal</option>
                                    </select>
                                 </div>
                                 <div className="messageWrite">
                                    <textarea required name="message" value={message} onChange={(e)=>setMessage(e.target.value)} id="message" placeholder="Message"></textarea>
                                 </div>
                                 <div className="messageButton">
                                    <button>
                                        {
                                            loading ? <BeatLoader color="white"/> : "SEND"
                                        }
                                    </button>
                                 </div>
                             </div>
                             </form>
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