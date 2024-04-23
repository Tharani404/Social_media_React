import React from 'react'
import NavBar from '../../Components/NavigationBar/NavBar'
import LeftPane from '../../Components/LeftPane/LeftPane'
import RightPane from '../../Components/RightPane/RightPane'
import PostPane from '../../Components/PostPane/PostPane'
import './home.css'

export default function Home() {
  return (
    <>
    <NavBar/>
    <div className='bottomContainer'>
        
        <LeftPane/>
        <PostPane/>
        <RightPane/>
    </div>
    </>
  )
}
