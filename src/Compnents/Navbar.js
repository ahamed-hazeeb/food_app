import { Link,useLocation } from "react-router-dom";

import { useState } from "react"
import Sidebar from "./Sidebar";
import { faHome,faList,faCog } from "@fortawesome/free-solid-svg-icons";
export default function Navbar(){

    const location =useLocation();
    const [showSidebar,setShowSidebar]=useState(false);
    const links = [
        {
            name:"Home",
            path:"/",
            icon:faHome
        },{
            name:"Recipes",
            path:"/Recipes",
            icon:faList
        },{
            name:"Settings",
            path:"/settings",
            icon:faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false);
    }
    return (
        <>
        <div className="navbar container">
            <a href="#!"  className="logo">F<span>oo</span>diesHub</a>
            <div className="nav-links">
                { links.map(link=>(
                    <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                ))

                }
           {/* <a href="#!" className="active">Home</a>
            <a href="#!">Recipes</a>
    <a href="#!">About</a>*/}
            </div>
            <div onClick={()=> setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" :"sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
        </div>
        {showSidebar && <Sidebar close={closeSidebar} links={links}/>}
        </>
        )
}