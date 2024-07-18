import React from "react";
import Layout from "../../components/layout/Layout";
import "./about.css"
import { useNavigate } from "react-router-dom";

const About = () => {
  const nav = useNavigate()
  return (
    <>
      <Layout>
        <div className="aboutParent">
            <div className="aboutHold">
              <div className="aboutLeft">
              <img
                  // className="h-10"
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFua2luZyUyMG1lZXRpbmdzfGVufDB8fDB8fHww"
                  alt="Avant-garde-finance"
              />
              </div>
              <div className="aboutRight">
                <div className="aboutHead">
                  About us
                </div>
                <div className="aboutExplain">
                  <p>
                    we are your trusted partner in financial growth and stability. 
                    Our mission is to provide innovative and secure banking 
                    solutions that empower you to manage your finances effortlessly.
                  </p>
                  <p>
                    we offer a wide range of services including 
                    savings accounts, loans, investments, and more.
                  </p>
                  <p>
                  At Avant-garde-finance, we prioritize your security and convenience,
                   ensuring that your financial journey is seamless and secure. 
                  Join us today and experience banking redefined.
                  </p>
                </div>
                <div className="aboutButt">
                  <button className="getStarted" onClick={()=> nav("/sign-in")}>Get Started</button>
                  <button className="getStarted2" onClick={()=> nav("/contact")}>contact us</button>
                </div>
              </div>
            </div>
            <div className="whyChoose">
              <div className="whyChooseHead">
                Why Choose Us
              </div>
              <div className="whyChooseBodyHold">
                <div className="chooseleft">
                  <h1>Security you can Trust:</h1>
                  <p>
                    At Avant-garde-finance, we prioritize your financial security with advanced encryption and 
                    robust security protocols, ensuring your money and personal information are safe.
                  </p>
                </div>
                <div className="chooseleft">
                  <h1>Comprehensive Services:</h1>
                  <p>
                    From savings accounts and loans to investments and financial planning, 
                    we offer a wide range of services to meet all your banking needs in one convenient place.
                  </p>
                </div>
              </div>
              <div className="whyChooseBodyHold">
                <div className="chooseleft">
                  <h1>24/7 Customer Support:</h1>
                  <p>
                    Our dedicated customer support team is available around the clock to assist you
                     with any questions or issues, providing you with the support you need, whenever you need it.
                  </p>
                </div>
                <div className="chooseleft">
                  <h1>Seamless Integration:</h1>
                  <p>
                    Our app seamlessly integrates with other financial tools and services, allowing you to manage 
                    all your finances from one central hub, enhancing your overall financial management experience.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
