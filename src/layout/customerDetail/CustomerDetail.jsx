import React from "react";
import { FaEnvelope, FaDollarSign } from "react-icons/fa";
import ContentTop from "../../components/ContentTop/ContentTop";
import customerData from "./customerData"; 

const CustomerDetail = () => {
  const { name, id, email, accountType, balance, profileDetails } = customerData;

  return (
    <>
      <div className="main-content">
        <ContentTop />
        <div className="flex flex-col md:flex-row -bg--clr-secondary p-4 rounded-lg shadow-md md:space-x-2">
          {/* Left Side */}
          <div className="flex-1 -bg--clr-primary p-4 rounded-lg shadow-sm mb-4 md:mb-0">
            <div className="text-2xl font-bold -text--clr-silver underline underline-offset-8 mb-2">{name}</div>
            <div className="text-sm -text--clr-silver-v1">{id}</div>
            <div className="mt-4">
              <div className="text-sm font-medium flex items-center -text--clr-silver-v1">
                <FaEnvelope className="h-5 w-5 -text--clr-silver-v1 mr-2" /> Email:
              </div>
              <div className="text-sm -text--clr-silver">{email}</div>
              <div className="w-full bg-blue-500 h-1 mt-2 rounded"></div>
            </div>
            <div className="mt-4">
              <div className="text-sm font-medium flex items-center -text--clr-silver-v1">
                <FaDollarSign className="h-5 w-5 -text--clr-silver-v1 mr-2" /> Account
                Type:
              </div>
              <div className="text-sm -text--clr-silver">{accountType}</div>
              <div className="w-full bg-blue-500 h-1 mt-2 rounded"></div>
            </div>
            <div className="mt-4">
              <div className="text-sm font-medium flex items-center -text--clr-silver-v1">
                <FaDollarSign className="h-5 w-5 -text--clr-silver-v1 mr-2" />{" "}
                Available Balance:
              </div>
              <div className="text-sm -text--clr-silver">{balance}</div>
              <div className="w-full bg-blue-500 h-1 mt-2 rounded"></div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 -bg--clr-primary p-4 rounded-lg shadow-sm">
            <div className="text-lg font-bold -text--clr-silver">Profile Overview</div>
            <div className="text-sm -text--clr-silver-v1 mt-2">
              Below is your profile details, should we wish to make any changes
              to your profile, kindly click{" "}
              <a href="#" className="text-blue-600">
                Here
              </a>
            </div>
            <div className="mt-4">
              <ul className="list-disc pl-5 -text--clr-silver-v1">
                <li className="text-sm font-medium">Phone:</li>
                <div className="text-sm -text--clr-silver pl-5">{profileDetails.phone}</div>
                <li className="text-sm font-medium mt-4">Sex:</li>
                <div className="text-sm -text--clr-silver pl-5">{profileDetails.sex}</div>
                <li className="text-sm font-medium mt-4">Marital Status:</li>
                <div className="text-sm -text--clr-silver pl-5">{profileDetails.maritalStatus}</div>
                <li className="text-sm font-medium mt-4">Date of Birth:</li>
                <div className="text-sm -text--clr-silver pl-5">{profileDetails.dateOfBirth}</div>
                <li className="text-sm font-medium mt-4">Address:</li>
                <div className="text-sm -text--clr-silver pl-5">{profileDetails.address}</div>
                <li className="text-sm font-medium mt-4">Active Since</li>
                <div className="text-sm -text--clr-silver pl-5">{profileDetails.activeSince}</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDetail;
