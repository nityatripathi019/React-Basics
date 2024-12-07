
function Message({username,textcolor}){
    let color = {color:textcolor};
 return(
    <div className="msg" >
        <h3 style={color}> Hello , {username}</h3>
    </div>
 )
}

export default Message;