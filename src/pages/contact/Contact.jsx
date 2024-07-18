import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import "./contact.css"
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { BeatLoader } from "react-spinners";

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const handleSend = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(()=>{
      toast.success("message sent successfully")
      setLoading(false)
    },3000)
  }
  return (
    <>
      <Layout>
        <div className="contactParent">
          <ToastContainer />
          <div className="contctHold">
            <div className="contactLeft">
              <div className="contactLeftTopic">
                <p>Talk to our experts and get a reply within 24 hours</p>
              </div>
              <div className="bost">
                <p>Need help with anything? We've helped over 2000+ bussiness improve in their finance</p>
              </div>
              <form action="" onSubmit={handleSend}>
              <div className="contactBody">
                <div className="contactInputHold">
                  <div className="contactFirst">
                    <p>First Name</p>
                    <input required type="text" />
                  </div>
                  <div className="contactFirst">
                    <p>Last Name</p>
                    <input required type="text" />
                  </div>
                </div>
                <div className="contactEmailHold">
                  <p>Email</p>
                  <input required type="email" />
                </div>
                <div className="contactMessageHold">
                  <p>Message</p>
                  <textarea required name="message" id="contactMessage"></textarea>
                </div>
                <div className="contactButt">
                  <button>
                    {
                      loading ? <BeatLoader color="white"/> : "SEND"
                    }
                  </button>
                </div>
              </div>
              </form>
            </div>
            <div className="contactRight">
              <h1>We are your trusted partner
              for your financial success</h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
