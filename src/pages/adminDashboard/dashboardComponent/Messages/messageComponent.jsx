import "./messagecomponent.css"
import { IoMdAdd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
// import { ImCancelCircle } from "react-icons/im";

const MessageComponent = () => {
    const [open, setOpen] = useState(false)
    const [compose, setCompose] = useState(false)
    const [sender, setSender] = useState("")
    const [subject, setSubject] = useState("")
    const [receiver, setReceiver] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [allUsers, setAllUsers] = useState()
    const [error, setError] = useState({
        type: "",
        message: ""
    })

    const admin = JSON.parse(localStorage.getItem("adminData"))
    const token = admin.token
    const headers = {
        'Authorization' : `Bearer ${token}`
    }
    
    useEffect(() => {
    const fetchData = async () => {
        const url = "https://avantgardefinance-api.onrender.com/view-all-users"
        setLoading2(true)
      try {
        const response = await axios.get(url, { headers });
        setAllUsers(response.data.data)
        // console.log(response.data.data)
        setLoading2(false);
      } catch (err) {
        console.log(err)
        setLoading2(false);
      }
    };
    fetchData();
  }, []);

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
            
            const url = "https://avantgardefinance-api.onrender.com/view-all-users"
            const data = {
                sender: sender,
                receiver: receiver,
                subject: subject,
                message: message
            }
            axios.post(url, data, { headers })
            .then((response)=> {
                console.log(response)
                setLoading(false)
                toast.success("message sent successfully")
            })
            .catch((error)=> {
                console.log(error)
                setLoading(false)
                toast.success("could'nt send message")
            })
           
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
                         <div className="mesageContMessage">
                             <div className="messageFrom">
                                 <p>Compose A new message</p>
                             </div>
                             <form onSubmit={handleSubmit}>
                             <div className="messageItself">
                                 <div className="composeInputhold">
                                    <p>Sender</p>
                                    <select required name="sender" id="sender" value={sender} onChange={(e)=>setSender(e.target.value)}>
                                        <option value="">Sender</option>
                                        <option value="customerCare">Customer Care</option>
                                        <option value="surpport">Surpport</option>
                                    </select>
                                 </div>
                                 <div className="composeInputhold">
                                    <p>Subject</p>
                                    <input 
                                    value={subject}
                                    onChange={(e)=> setSubject(e.target.value)}
                                    type="text" />
                                 </div>
                                 <div className="composeInputhold">
                                    <p>To</p>
                                    <select name="sender" required id="sender" value={receiver} onChange={(e)=>setReceiver(e.target.value)}>
                                        <option value="">receiver</option>
                                        {
                                            allUsers?.map((e)=> (
                                                <option value={e._id}>{e.fullName}</option>
                                            ))
                                        }
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