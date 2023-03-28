import { NavLink } from 'react-router-dom';
import { MenuFoldOutlined } from "@ant-design/icons";
import "./sideBar.css"
// import { FaBars } from "react-icons/fa";
import sidebarmenu from "../data/sidebarMenu/sideBarMenu";
function SideBar(){
    return ( 
        <div className="flex flex-col ">
            <div className="peer flex fixed top-20 left-1 justify-end bg-blue-400 w-10 h-10 rounded-full">
                    <div className="font-[2rem] text-center w-full rounded-full hover:bg-sky-500 animate-pulse  " >
                         <MenuFoldOutlined/> 
                         </div> 
                </div>

            <div className=" h-72 fixed top-[123px] left-1 bg-sky-500 hidden peer-hover:flex hover:flex flex-col hover:w-54">
                
                {sidebarmenu.map((sidebar, index) =>(
                    <NavLink to={`/pages${sidebar.path}`} key={index} className="sidebarLink" activeclassName="active" style={{textDecoration:"none"}}>
                        <div className="sidebaricon">{sidebar.icon}</div>
                        <div className="sidebarname" > {sidebar.name} </div>
                    </NavLink>
                ))} 
            </div> 
        </div>
     );
}

export default SideBar