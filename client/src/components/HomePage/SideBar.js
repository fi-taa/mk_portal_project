import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {HomeFilled,
    PlusCircleFilled,
    WechatFilled,
    BulbFilled,
    InfoCircleFilled ,
    QuestionCircleFilled} 
from '@ant-design/icons'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
function SideBar(){
    return (

        <div className=''>
        <SideNav className='!bg-sky-500 '
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
            <HomeFilled />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem className='animate-pulse ' eventKey="events">
            <NavIcon>
            <BulbFilled />
            </NavIcon>
            <NavText>
                Events
            </NavText>
     
        </NavItem>
        <NavItem eventKey="chats">
            <NavIcon>
            <WechatFilled />
            </NavIcon>
            <NavText>
                Chat
            </NavText>
            
        </NavItem>
        <NavItem eventKey="make-a-post">
            <NavIcon>
            <PlusCircleFilled /> 
            </NavIcon>
            <NavText>
                Make a post
            </NavText>
            
        </NavItem>
        <NavItem eventKey="history">
            <NavIcon>
            <InfoCircleFilled />
            </NavIcon>
            <NavText>
                History
            </NavText>
            
        </NavItem>
        <NavItem eventKey="report">
            <NavIcon>
            <QuestionCircleFilled /> 
            </NavIcon>
            <NavText>
                Report
            </NavText>
            
        </NavItem>
    </SideNav.Nav>
</SideNav>
        </div>
    )
}

export default SideBar