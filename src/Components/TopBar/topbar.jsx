import React from "react";
import "./topbar.css";
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageIcon from '@mui/icons-material/Language';
import CircleNotificationsSharpIcon from '@mui/icons-material/CircleNotificationsSharp';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
        <img src={require('./inologo.png').default}
                  alt='logoicon' className='topLogo'></img>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <CircleNotificationsSharpIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
          </div>
          <div className="topbarIconContainer">
            <LogoutIcon />
          </div>
        </div>
      </div>
    </div>
  );
}