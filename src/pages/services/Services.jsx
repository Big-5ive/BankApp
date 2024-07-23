import React from "react";
import Layout from "../../components/layout/Layout";
import TextEffect from "../../components/elements/TextEffect";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate()

  const handleScrollToFeatures = () => {
      const element = document.getElementById("key-features");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
  }
  return (
    <>
      <Layout>
      <section
          className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24"
          style={{ backgroundImage: "url('./imgs/banksafe.jpg')"}}
        >
          <div className="container px-4 mx-auto">
            <div className="pt-12 text-center">
              <div className="max-w-2xl mx-auto mb-8">
                <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn" style={{color: "navy"}}>
                  Secure Your Valuables <br />
                   <span className="text-500" style={{color: "navy"}}>with Safe Deposit Boxes</span>
                </h2>
                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn d-inline">
                  {/* Welcome to{" "} */}
                  <strong className="text-400" style={{color: "black", fontSize: "20px"}}>
                    Protect your most valuable possessions with our secure and reliable safe deposit boxes at 
                    Avant-Garde-Finance. Whether it's important documents, jewelry, or sentimental items, our safe 
                    deposit boxes offer peace of mind with advanced security features.
                  </strong>
                  , your trusted partner in{" "}
                  <div className="typewrite d-inline text-brand">
                    <TextEffect
                      text1="Banking Solutions"
                      text2="Financial Growth"
                    />
                  </div>
                </div>
              </div>

              {/* <div>
                <div
                  className="btn-primary py-4 px-8 mr-2 wow animate__animated animate__fadeIn hover-up-2"
                  href=""
                  onClick={handleScrollToFeatures}
                >
                  Key Features
                </div>
                <a
                  className="btn-white wow animate__animated animate__fadeIn hover-up-2"
                  data-wow-delay=".3s"
                  href="/#/about"
                >
                  How We Work?
                </a>
              </div> */}
            </div>
          </div>
          <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
            <img src="/imgs/elements/pattern.png" alt="Monst" />
            {/* <div
              className="absolute"
              style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}
            >
              <img
                // className="jump rounded wow animate__animated animate__fadeIn"
                src="../imgs/banksafe.jpg"
                alt="Monst"
                style={{width: "100%", height: "100%", objectFit: "cover"}}
              />
            </div> */}
          </div>

          {/* <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-between pt-8 pb-16">
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
     
              </div>
            </div>
          </div> */}
                <div className="whyChoose">
              <div className="whyChooseHead" style={{color: "white", fontSize: "30px"}}>
                Our Key features
              </div>
              <div className="whyChooseBodyHold">
                <div className="chooseleft">
                  <h1>State-of-the-Art Security:</h1>
                  <p>
                    Benefit from advanced security measures, including biometric access and round-the-clock surveillance.
                  </p>
                </div>
                <div className="chooseleft">
                  <h1>Privacy and Confidentiality:</h1>
                  <p>
                    Keep your belongings private and confidential in a secure environment
                  </p>
                </div>
              </div>
              <div className="whyChooseBodyHold">
                <div className="chooseleft">
                  <h1>Convenient Access:</h1>
                  <p>
                    Access your safe deposit box during banking hours, ensuring your items are always within reach
                  </p>
                </div>
                <div className="chooseleft">
                  <h1>Various Sizes Available:</h1>
                  <p>
                    Choose from a range of box sizes to accommodate your specific storage needs.
                  </p>
                </div>
              </div>
            </div>
                <div className="whyChoose" style={{backgroundColor: "transparent", backgroundSize: "cover", backgroundImage: "url('../imgs/pixel2.jpg')"}}>
              <div className="whyChooseHead" style={{color: "white", fontSize: "30px"}}>
                Why choose this Service
              </div>
              <div className="whyChooseBodyHold">
                <div className="chooseleft" style={{backgroundColor: "burlywood", height: "120px"}}>
                  <h1>Unmatched Security:</h1>
                  <p>
                    At Avant-garde-finance, we prioritize the safety of your assets with state-of-the-art encryption, multi-factor authentication, 
                    and continuous monitoring. Your peace of mind is our top priority.
                  </p>
                </div>
                <div className="chooseleft" style={{backgroundColor: "burlywood", height: "120px"}}>
                  <h1>Customer-Centric Approach:</h1>
                  <p>
                    We are committed to providing exceptional customer service. Our dedicated support team is available 24/7 
                    to assist you with any questions or concerns, ensuring you always have the help you need.
                  </p>
                </div>
              </div>
              <div className="whyChooseBodyHold">
                <div className="chooseleft" style={{backgroundColor: "burlywood", height: "120px"}}>
                  <h1>Innovative Solutions:</h1>
                  <p>
                  We leverage the latest technology to offer cutting-edge banking solutions. From seamless online transactions to advanced mobile banking features, 
                  we make managing your finances easier and more efficient.
                  </p>
                </div>
                <div className="chooseleft" style={{backgroundColor: "burlywood", height: "120px", cursor: "pointer"}} onClick={()=> navigate("/contact")}>
                  <h1>Transparent and Fair:</h1>
                  <p>
                    We believe in transparency and fairness. Our terms are clear, with no hidden fees or surprises, so you can trust that you're getting a great deal.
                  </p>
                </div>
              </div>
            </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
