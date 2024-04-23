import React from 'react'
import "./leftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function LeftPane() {
  return (
    <div className='leftPainBox'>
      <div className="leftContainer">
        <div className="leftMenue">
          <li className="leftMenueItem">
            <MarkUnreadChatAltIcon className='letMenuIcon'/>
            <span className="leftMenuText">Messages</span>
          </li>
          <li className="leftMenueItem">
            <GroupIcon className='letMenuIcon'/>
            <span className="leftMenuText">Groups</span>
          </li>
          <li className="leftMenueItem">
            <RssFeedIcon className='letMenuIcon'/>
            <span className="leftMenuText">Feed</span>
          </li>
          <li className="leftMenueItem">
            <FlagIcon className='letMenuIcon'/>
            <span className="leftMenuText">Pages</span>
          </li>
          <li className="leftMenueItem">
            <CalendarMonthIcon className='letMenuIcon'/>
            <span className="leftMenuText">Events</span>
          </li>
          <li className="leftMenueItem">
            <BuildIcon className='letMenuIcon'/>
            <span className="leftMenuText">Settings</span>
          </li>
          <li className="leftMenueItem">
            <SportsEsportsIcon className='letMenuIcon'/>
            <span className="leftMenuText">Games</span>
          </li>
          <li className="leftMenueItem">
            <NewspaperIcon className='letMenuIcon'/>
            <span className="leftMenuText">News</span>
          </li>
          <li className="leftMenueItem">
            <WorkOutlineIcon className='letMenuIcon'/>
            <span className="leftMenuText">Jobs</span>
          </li>
          <li className="leftMenueItem">
            <AddShoppingCartIcon className='letMenuIcon'/>
            <span className="leftMenuText">Market</span>
          </li>
        </div>
      </div>
    </div>
  )
}
