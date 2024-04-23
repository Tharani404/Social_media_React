import React from 'react'
import NavBar from '../../Components/NavigationBar/NavBar'
import LeftPane from '../../Components/LeftPane/LeftPane'
import RightPane from '../../Components/RightPane/RightPane'
import PostPane from '../../Components/PostPane/PostPane'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <LeftPane/>
        <RightPane/>
        <PostPane/>
    </div>
  )
}
