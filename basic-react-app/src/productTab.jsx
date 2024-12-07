import Product from "./product.jsx";

// function ProductTab(){
//     const options = ["hi-tech","durable","fast"]
//     // const options2 = {a:"hi-tech",b:"durable",c:"fast"}
//     return(
//         <>
//         <Product  title="Phone" price={10000}  features={options} features2={{a:"hi-tech",b:"durable",c:"fast"}} />
//         <Product  title="Macbook" price={80000}  />
//         <Product  title="Laptop" price={40000}/>
//         <Product  title="Television" price={50000}/>
//         </>
//     )
// }

//rendering each element of an array
//first method
// function ProductTab(){
//     const options = [<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>]
//     // const options2 = {a:"hi-tech",b:"durable",c:"fast"}
//     return(
//         <>
//         <Product  title="Phone" price={10000}  features={options} features2={{a:"hi-tech",b:"durable",c:"fast"}} />
//         <Product  title="Macbook" price={80000}  />
//         <Product  title="Laptop" price={40000}/>
//         <Product  title="Television" price={50000}/>
//         </>
//     )
// }
//2nd method we will use map method


function ProductTab() {
    const options = ["hi-tech", "durable", "fast"];

    return (
        <>
            <Product title="Phone" price={10000} features={options} />
            <Product title="Macbook" price={80000} features={options} />
            <Product title="Laptop" price={40000} />
            <Product title="Television" price={50000} />
        </>
    );
}

export default ProductTab;




//we can not directly pass number in it like we do in string for passing a no in props we will pass them in curly braces
//passing arrays to props
//features={["hi-tech","fast","durable"]}
//arrays directly pick hote h aur print hote but objects ko print krane k liye unki keys pass krni pdti h
//passing object in js
//rendering each element of an array
//conditions in react