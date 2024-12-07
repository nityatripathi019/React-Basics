
import "./product.css"
// function Product(props){
//     return(
//         <>
//         <div className="product">
//         <h3>{props.title}</h3>
//          <p>{props.price}</p>
//     </div>
//     </>
//     );
// }


// or we can write it as
// function Product({title,price,features,features2={}}){ //destructring 
//     console.log(features2);
//     return(      //we can also pass default value in props in some if there values is not presnt than this default will work
//         <>
//         <div className="product">
//         <h3>{title}</h3>
//         <p>{"Price:" + price}</p> 
//         <p>{features}</p>
//         <p>{features2.a}</p>
        
//         </div>
//         </>
//     )
// }

//2nd method of accessing array elements


// function Product({ title, price, features = [] }) {
//     // Use map to render each feature in the array
//     const featureList = features.map((feature, index) => {
//         return <li key={index}>{feature}</li>;
//     });

//     return (
//         <>
//             <div className="product">
//                 <h3>{title}</h3>
//                 <p>Price: {price}</p> 
//                 {/* render the list of features */}
//                 {features.length > 0 && <ul>{featureList}</ul>}
//             </div>
//         </>
//     );
// }


// function Product({title,price,features=[]}){ 
//         // const list = features.map((feature)=><li>{feature}</li>)
//         return(      
//             <>
//             <div className="product">
//             <h3>{title}</h3>
//             <p>{"Price:" + price}</p> 
//             <ul>{ features.map((feature)=><li>{feature}</li>)}</ul>
            
            
//             </div>
//             </>
//         )
//     }



//conditionals statement in react
//first way : but ye itna optimizing nhh h
// function Product({title,price,features=[]}){ 
//     if(price>40000){
//         return(      
//             <>
//             <div className="product">
//             <h3>{title}</h3>
//             <p>{"Price:" + price}</p> 
//             <p>{"Discount is of 5%"}</p>
//             <ul>{ features.map((feature)=><li>{feature}</li>)}</ul>
            
            
//             </div>
//             </>
//         )
//     }
//     else{
//         return(      
//             <>
//             <div className="product">
//             <h3>{title}</h3>
//             <p>{"Price:" + price}</p> 
//             <ul>{ features.map((feature)=><li>{feature}</li>)}</ul>
            
            
//             </div>
//             </>
//         ) 
//     }
   
// }



//2nd way :ye bhi way h but isme problem h jb hm inspect krenge to hr ek me ek extra node para add hoge 
// function Product({title,price,features=[]}){ 
//      let isdiscount= price>40000?"5%":"";
//            return(      
//                 <>
//                 <div className="product">
//                 <h3>{title}</h3>
//                 <p>{"Price:" + price}</p> 
//                 <p>{isdiscount}</p>
//                 <ul>{ features.map((feature)=><li>{feature}</li>)}</ul>
                
                
//                 </div>
//                 </>
//             )
//         }
    

//3rd way : optimised way of writing conditional statement
//isme extra node create nhi hogi others me jinme discount null h
function Product({title,price,features=[]}){ 
     let style = {backgroundColor:price>40000?"pink":""};
          return(      
               <>
               <div className="product" style={style}>
               <h3>{title}</h3>
               <p>{"Price:" + price}</p> 
               {/* {price>40000?<p>discount of 5%</p>:null} */} 
               {price>40000 && <p>discount of 5%</p>}
               <ul>{ features.map((feature)=><li>{feature}</li>)}</ul>
               
               
               </div>
               </>
           )
       }
export default Product;


//dynamicsomponent styling



