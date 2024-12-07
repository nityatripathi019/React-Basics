
import Card from "./card.jsx"
export default function Cardlist(){
    let style ={
        display:"flex",
        flexWrap:"wrap",
        textAlign:"center",
        marginLeft:"100px"
        
    }
    let h2 = {
        textAlign:"center"
    }
    return(
        <>
        <h2 style={h2}>Blockbuster Deal | Shop now</h2>
        <div style={style}>
            
        <Card title="Logitech MX Master" idx={0}/>
        <Card title="Apple Pencil (2nd Gen)" idx={1}/>
        <Card title="Zebronic Zeb-transformer" idx={2}/>
        <Card title="Petronics Toad 23" idx={3}/>
        </div>
        </>
    )
}
