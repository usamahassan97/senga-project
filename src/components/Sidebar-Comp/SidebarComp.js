import React from 'react'
import "../Sidebar-Comp/sideComp.css"
import logo from "../../Assets/Images/logo.png"
import home from "../../Assets/Icons/home_icon.png"
import wallet from "../../Assets/Icons/wallet.png"
import invest from "../../Assets/Icons/invest.png"
import chat from "../../Assets/Icons/chat.png"
import bell from "../../Assets/Icons/bell.png"
import mark from "../../Assets/Icons/mark.png"


const SidebarComp = () => {
    return (
        <>
            <div className='sidebar_wrapper'>
                <div className='logo_wrapper'>
                    <img src={logo} className="logo_style" />
                </div>

                <div className='elements_parent'>
                    <div className='child_element'>
                        <div>
                            <img src={home} className='icons_' />
                        </div>
                        <div className='ms-4'>
                            <p className='element_text active_class'>Home</p>
                        </div>
                    </div>

                    <div className='child_element'>
                        <div>
                            <img src={wallet} className='icons_' />
                        </div>
                        <div className='ms-4'>
                            <p className='element_text'>Wallet</p>
                        </div>
                    </div>

                    <div className='child_element'>
                        <div>
                            <img src={invest} className='icons_' />
                        </div>
                        <div className='ms-4'>
                            <p className='element_text'>Invest</p>
                        </div>
                    </div>

                    <div className='child_element'>
                        <div>
                            <img src={chat} className='icons_' />
                        </div>
                        <div className='ms-4'>
                            <p className='element_text'>Messages</p>
                        </div>
                    </div>

                    <div className='child_element'>
                        <div>
                            <img src={bell} className='icons_' />
                        </div>
                        <div className='ms-4'>
                            <p className='element_text'>Notifications</p>
                        </div>
                    </div>

                    <div className='child_icons mt-5'>
                        <img src={mark} style={{ height: "48px", width: "48px" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarComp