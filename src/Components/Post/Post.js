import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <img src="/images/1.jpg" alt="" className="postImage" />
                <span className="postUserName">Tharani Jayathilake</span>
                <span className="postTime">5 minites ago</span>
            </div>

            <div className="postCenter">
              <div className="postCaption">
                Helo I am Tharani..! You understand..
              </div>
              <img src="/Images/1.jpg" alt="" className="postedImage" />
            </div>

            <div className="postBottom">
              <div className="postBottomLeft">
                
              </div>
            </div>
        </div>
    </div>
  )
}
