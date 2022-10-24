/*setTimeout(()=>{
    console.log("Merhaba")
},2000);    //2.parametre sonra işleme alınır react'ın kendisine ait


setInterval(()=>{
    console.log("ben her saniye çalışacağım")
},1000)     //2.parametre kadar süre geçtikten sonra tekrarlı çalışır yine react'a ait*/


/*const sayHi=(cb)=>{
    cb()
}

sayHi(()=>{
    console.log("hellöö")
})*/

import fetch from "node-fetch"
import axios from "axios"

//bu şekilde sıralı çağırdı ama fetchleri dışarıda teker teker çağırsaydı hangisinin önce geleceğini belli değildi
/*fetch("https://jsonplaceholder.typicode.com/users")
.then((data)=>data.json())
.then((users) => {
    console.log("users uploaded",users);
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((data)=>data.json()).then(post=> console.log("post uploaded",post))
})*/

/*async function getData(){
    const users=await(await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1=await(await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2=await(await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log("users:",users);
    console.log("post1:",post1);
    console.log("post2:",post2);
}
getData();*/

/*(async () => {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
    const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log("users", users)
    console.log("post1", post1)
    console.log("post2", post2)
})();*/

/*const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if(number===1)
        resolve("COMMENTS")
        reject("Bir hata oluştu!")
    });
};*/

const getUsers = () => {
    return new Promise(async(resolve, reject) => {
        const { data} = await axios("https://jsonplaceholder.typicode.com/users"); 
        resolve(data)
    });
};

const getPost = (post_id) => {
    return new Promise(async(resolve, reject) => {
        const { data} = await axios("https://jsonplaceholder.typicode.com/posts/"+post_id); 
        resolve(data)
    });
};

/*
//async yapıda olduğu için bu satırı çalıştırsan bazen users bazen post1 gelecek asla aynı gelmeyecek her zaman
getUsers()
    .then((data) => console.log(data))
        .catch((e) => console.log(e))

getPost(1)
    .then((data)=>console.log(data)).catch((e)=>console.log(e))*/

/*(async () => {
    try {
        const users=await getUsers();
        const post=await getPost(2);
        console.log(users);
        console.log(post);

    } catch (e) {
        console.log(e);
    }
    
})();*/


Promise.all([getUsers(),getPost(1)]).then(console.log).catch(console.log)
