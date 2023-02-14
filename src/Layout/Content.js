import React from 'react'
import "../Layout/layout.css"
import SidebarComp from '../components/Sidebar-Comp/SidebarComp'

const Content = ({children}) => {
  return (
    <>
        <div className='d-flex' style={{height:"100vh", overflow:"hidden"}}>
            <SidebarComp />
            <div className='child_section'>{children}</div>
        </div>
    </>
  )
}

export default Content