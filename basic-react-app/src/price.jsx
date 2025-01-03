

export default function Price({oldPrice,newPrice}){
 let style ={
 backgroundColor:"#e0c367",
 borderBottomLeftRadius:"14px",
 borderBottomRightRadius:"14px",
 minWidth:"220px",
 }
 let oldStyle={
    textDecorationLine:"line-through"
 }
 let newStyle = {
    fontWeight:"bold"
 }
    return(
        <div style={style}>
        <span style={oldStyle}>{oldPrice}</span>&nbsp;&nbsp;&nbsp;
        <span style={newStyle}>{newPrice}</span>
        </div>
    )
}