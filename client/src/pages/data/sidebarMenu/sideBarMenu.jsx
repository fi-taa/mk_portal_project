
import {HomeFilled,
    PlusCircleFilled,
    WechatFilled,
    BulbFilled,
    InfoCircleFilled ,
    QuestionCircleFilled} 
from '@ant-design/icons'


const sideBarMenu = [
    {
        path:"/events",
        icon: <BulbFilled/>,
        name: "Events"
    },

    {
        path:"/chat",
        icon: <WechatFilled/>,
        name: "Chats"
    },

    {
        path:"/post",
        icon: <PlusCircleFilled/>,
        name: "Post"
    },

    {
        path:"/history",
        icon: <InfoCircleFilled/>,
        name: "History"
    },

    {
        path:"/home",
        icon: <HomeFilled/>,
        name: "Home"
    },

    {
        path:"/report",
        icon: <QuestionCircleFilled/>,
        name: "Report"
    }
]

export default sideBarMenu;