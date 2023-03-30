import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuFoldOutlined } from "@ant-design/icons";
import "./sideBar.css"
// import { FaBars } from "react-icons/fa";
import sidebarmenu from "../data/sidebarMenu/sideBarMenu";
function SideBar(){
    const [open, setOpen] = useState(false);
    return ( 
        <div className="Sidebar">
            <div className="SidebarWrapper">
                <div className="TopSidebar">
                    <img className="avatar" src="/assets/avatar.png" alt="logo" style={{display: open? "block":"none"}} />
                    <div className="hamburger" onClick={()=>{
                        setOpen(!open);
                    }}>
                         <MenuFoldOutlined/> 
                         </div> 
                </div>

                {sidebarmenu.map((sidebar, index) =>(
                    <NavLink to={`/pages${sidebar.path}`} key={index} className="sidebarLink" activeclassName="active" style={{textDecoration:"none"}}>
                        <div className="sidebaricon">{sidebar.icon}</div>
                        <div className="sidebarname" style={{display: open? "block":"none"}}> {sidebar.name} </div>
                    </NavLink>
                ))} 
            </div> 
        </div>
     );
}

export default SideBar