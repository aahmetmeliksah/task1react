'use strict';


import axios from "axios";

 const getData = async (n) => {
    try {
        const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${n}`); 
        const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${n}`);
        
        return { "user": user, "posts": posts }; 
    } 
    
    catch (e) {
        console.log("ERROR");
    }
 };

 

  export default getData;
