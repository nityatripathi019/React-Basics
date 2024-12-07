
import "./card.css"
import Price from "./price.jsx"
 export default function Card({title,idx}){
    let oldPrice=["10,000","15,000","12,500","18,550"]
    let newPrice =["12,500","13,450","12,580","20,050"]
    let description = [
        ["8000 DPI","5 Programming buttons"],["intutive surface","designed for iphone"],["designed for iPad Pro","intutive surface"],["wireless","optical orientation"]]
    return(
        <>
      
        <div className="cards">
       <h3>{title}</h3>
       <h4>{description[idx][0]}</h4>
       <h4>{description[idx][1]}</h4>
       <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
      
       
        </>
    )
}