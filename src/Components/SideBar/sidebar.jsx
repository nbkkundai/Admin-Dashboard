import "./sidebar.css";
import { Link } from "react-router-dom";
import * as Icons from 'react-icons/fa'
import * as IIcons from 'react-icons/io'
import * as Ioicons from 'react-icons/io5'

export default function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebarWrapper">

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <Ioicons.IoAnalyticsOutline className="sidebarIcon" />
              Analytics
            </li>
           
            </Link>
         </ul>
        </div>
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
          <Link to="/taskview" className="link">
              <li className="sidebarListItem">
                <Icons.FaTasks className="sidebarIcon" />
                Task View
              </li>
            </Link>
            
          </ul>
        </div>
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Other</h3>
          <ul className="sidebarList">

            <Link to="/settings" className="link" >
            <li className="sidebarListItem">
              <IIcons.IoIosSettings className="sidebarIcon" />
              Settings
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}