import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext, useState, useRef } from "react";
import { SidebarContext } from "../../Context/sidebarContext";
import { TickerTape } from "react-ts-tradingview-widgets";
import { FaUserEdit, FaIdCard, FaUpload } from "react-icons/fa";
import AddKYCModal from "./modals/AddKYCModal";
import EditProfileModal from "./modals/EditProfileModal";
import UploadImageModal from "./modals/UploadImageModal";
import { useLocation } from "react-router-dom";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [showSettings, setShowSettings] = useState(false);
  const [isAddKYCModalOpen, setAddKYCModalOpen] = useState(false);
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [isUploadImageModalOpen, setUploadImageModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const location = useLocation();
  const currentPath = location.pathname.split("/").filter(Boolean).pop();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowSettings(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowSettings(false);
    }, 200);
  };

  return (
    <>
      <div className="main-content-top">
        <div className="content-top-left">
          <button
            type="button"
            className="sidebar-toggler"
            onClick={() => toggleSidebar()}
          >
            <img src={iconsImgs.menu} alt="Menu" />
          </button>
          <h3 className="content-top-title uppercase">{currentPath}</h3>
        </div>
        <div className="content-top-btns flex mb-1 relative">
          <button className="notification-btn content-top-btn">
            <img src={iconsImgs.bell} alt="Notifications" />
            <span className="notification-btn-dot"></span>
          </button>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button type="button" className="setting-btn content-top-btn">
              <img src={iconsImgs.gears} alt="Settings" />
            </button>
            {showSettings && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 -bg--clr-primary shadow-lg rounded-lg -text--clr-silver-v1"
              >
                <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer" onClick={() => setAddKYCModalOpen(true)}>
                  <FaIdCard className="mr-2 -text--clr-silver" />
                  <span>Add KYC</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer" onClick={() => setEditProfileModalOpen(true)}>
                  <FaUserEdit className="mr-2" />
                  <span>Edit Profile</span>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer" onClick={() => setUploadImageModalOpen(true)}>
                  <FaUpload className="mr-2" />
                  <span>Upload Image</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="trade__widget">
        <TickerTape colorTheme="dark" displayMode="adaptive" showSymbolLogo={false}></TickerTape>
      </div>
      {isAddKYCModalOpen && <AddKYCModal onClose={() => setAddKYCModalOpen(false)} />}
      {isEditProfileModalOpen && <EditProfileModal onClose={() => setEditProfileModalOpen(false)} />}
      {isUploadImageModalOpen && <UploadImageModal onClose={() => setUploadImageModalOpen(false)} />}
    </>
  );
};

export default ContentTop;
