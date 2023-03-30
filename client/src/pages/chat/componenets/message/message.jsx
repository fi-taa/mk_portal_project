import "./message.css"
const Message = ({own}) => {
    return ( 
        
        <div className={ own? "message own":"message"}>
            <div className=  { own? "bubble bubble-bottom-left own":"bubble bubble-bottom-left"} contenteditable>
                Type any text here and the bubble will 
                grow to fit the text no matter how many lines.  
                Isn't that nifty?
                <div className="messageDate"> 3 hour ago </div>
            </div>
        </div>

     );
}

export default Message;