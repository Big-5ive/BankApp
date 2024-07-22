import Layout from '../../components/layout/Layout'
import './others.css'
import { GiReceiveMoney } from "react-icons/gi";
import { FcCurrencyExchange } from "react-icons/fc";
import { GiBookCover } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa6";

const OtherServices = () => {
    return(
        <Layout>
            <section className='otherSavicesParent'>
                <div className="othersHeroPage" style={{backgroundImage: 'url("./imgs/others.jpg")'}}>
                    {/* <img src="./imgs/others.jpg" alt="" /> */}
                    <div className="othersHeroWrite">
                        <div className="otherswriteHead">
                            <h1>
                                Welcome to Avant-Garde-finance
                            </h1>
                            <p>
                                Here are other financial financial servics we offer
                            </p>
                        </div>
                        <div className="otherlist">
                            <div className="listone">
                                <div className="listpic" style={{color: "blue"}}>
                                    <GiReceiveMoney />
                                </div>
                                <div className="listwrite">
                                    <p>Wealth management and investment services</p>
                                </div>
                            </div>
                            <div className="listone">
                                <div className="listpic">
                                    <FcCurrencyExchange />
                                </div>
                                <div className="listwrite">
                                    <p>Foreign exchange services</p>
                                </div>
                            </div>
                            <div className="listone">
                                <div className="listpic" style={{color: "green"}}>
                                    <GiBookCover />
                                </div>
                                <div className="listwrite">
                                    <p>Insurance Product</p>
                                </div>
                            </div>
                            <div className="listone">
                                <div className="listpic" style={{color: "blue"}}>
                                    <FaOpencart />
                                </div>
                                <div className="listwrite">
                                    <p>Advisory Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="navicon"></div>
                    </div>
                </div>
                <div className="otherHeroTwo">
                    <div className="wealthManagement">
                        <p>Wealth Management and Investment Services</p>
                    </div>
                    <div className="wealthManage2">
                        <div className="wealthManageLeft">
                            <img src="./imgs/wealthmanage.jpg" alt="" />
                        </div>
                        <div className="wealthManageRight">
                            <p>
                                At Avant-Garde-Finance, our wealth management and investment services are 
                                designed to help you grow and protect your wealth. Whether you're planning 
                                for retirement, looking to diversify your portfolio, or seeking expert 
                                financial advice, we offer personalized solutions to meet your unique needs.
                            </p>
                            <header>BENEFITS</header>
                            <ul>
                                <li>Personalized Strategies</li>
                                <li>Diverse Investment Options</li>
                                <li>Comprehensive Planning</li>
                                <li>Ongoing Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="otherHeroTwo">
                    <div className="wealthManagement">
                        <p>Foreign Exchange Services</p>
                    </div>
                    <div className="wealthManage2" id='h3xx3' style={{flexDirection: "row-reverse"}}>
                        <div className="wealthManageLeft">
                            <img src="./imgs/foreignexchange.jpg" alt="" />
                        </div>
                        <div className="wealthManageRight" style={{paddingLeft: "20px"}}>
                            <p>
                                Navigate the complexities of global markets with ease using our
                                foreign exchange services. Whether you're a business managing international 
                                transactions or an individual planning to travel, our comprehensive forex 
                                solutions provide you with competitive rates and exceptional service.
                            </p>
                            <header>BENEFITS</header>
                            <ul>
                                <li>Competitive Exchange Rates</li>
                                <li>Fast and Secure Transactions</li>
                                <li>Expert Guidance</li>
                                <li>Flexible Solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="otherHeroTwo">
                    <div className="wealthManagement">
                        <p>Insurance Products</p>
                    </div>
                    <div className="wealthManage2">
                        <div className="wealthManageLeft">
                            <img src="./imgs/insurance.jpg" alt="" />
                        </div>
                        <div className="wealthManageRight">
                            <p>
                                Protect what matters most with our comprehensive range of insurance products at 
                                Avant-garde-finance. From safeguarding your home and car to ensuring your health 
                                and life, our insurance solutions provide the coverage you need for peace of mind.
                            </p>
                            <header>BENEFITS</header>
                            <ul>
                                <li>Wide Range of Coverage</li>
                                <li>Competitive Premiums</li>
                                <li>Customizable Plans</li>
                                <li>Reliable Claims Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="otherHeroTwo">
                    <div className="wealthManagement">
                        <p>Advisory Services</p>
                    </div>
                    <div className="wealthManage2" id='h3xx3' style={{flexDirection: "row-reverse"}}>
                        <div className="wealthManageLeft">
                            <img src="./imgs/advice.jpg" alt="" />
                        </div>
                        <div className="wealthManageRight" style={{paddingLeft: "20px"}}>
                            <p>
                                Our advisory services are designed to provide you with the insights and 
                                expertise you need to make informed financial decisions. Whether you're 
                                looking to optimize your investments, plan for retirement, or navigate 
                                complex financial challenges, our experienced advisors are here to guide you every step of the way.
                            </p>
                            <header>BENEFITS</header>
                            <ul>
                                <li>Personalized Guidance</li>
                                <li>Comprehensive Planning</li>
                                <li>Expert Insights</li>
                                <li>Proactive Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default OtherServices