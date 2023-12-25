function shop (){
    const product={
        Milk:{
            price:199,
            quantity:5
        },
        oil:{
            price:799,
            quantity:10
        }
     }
     return product
}
function Objecthandaler(justobj){
    console.log(`username is ${justobj.username} and his peice is ${justobj.price}`);
}

Objecthandaler({
    username:"mehebub",
    price:"500" 
})
