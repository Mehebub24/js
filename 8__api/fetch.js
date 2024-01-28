 // https://developer.mozilla.org/en-US/docs/Web/API/fetch
//fetch.spec.whatwg.org/#fatch-method
/*
for fetch() micro task Queue that why it work befor other work

    response = fetch()
 _______________________________________
|       DATA        |       WEB         |
|onfulfilled[]      |network request    |
|onRegection[]      |   ✅      ❌     |
|___________________|___________________|
if ✅ it gose to onfulfilled[function()]
if ❌ it gose to onRegection[function()]

then this DATA gose to Global Memory respose

*/
fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response
}).then((data)=>{
   console.log(data);
}).catch((error) =>{
    console.log(error);
})
