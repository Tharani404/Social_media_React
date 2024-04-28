import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postTop">
                <div className="postTopLeft">
                <img src="/images/1.jpg" alt="" className="postImage" />
                <span className="postUserName">Tharani Jayathilake</span>
                <span className="postTime">5 minites ago</span>
                </div>
            </div>

            <div className="postCenter">
              <div className="postCaption">
                Helo I am Tharani..! You understand..
              </div>
              <img src="/Images/1.jpg" alt="" className="postedImage" />
            </div>

            <div className="postBottom">
              <div className="postBottomLeft">
                <img src="/images/like.jpg" alt="" className="reactionPic" />
                <img src="/images/haha.jpg" alt="" className="reactionPic" />
                <img src="/images/heart.jpg" alt="" className="reactionPic" />
                <span className="likeCount">Tharani and 500 other</span>
              </div>
              <div className="postBottomRight">
                <span className="commentCount">
                  15 Comments 
                </span>
              </div>
            </div>
        </div>
    </div>
  )
}
