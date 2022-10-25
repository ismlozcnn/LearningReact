const users = [
    {
        name: "gökhan",
        age: 18
    },
    {
        name: "ismail",
        age: 20
    },
    {
        name: "furkan",
        age: 25
    }
]

//          --arrayin sonuna ekleme yapar
/*users.push("selma")
users.push("fatma")
console.log(users)*/

//          --arrayi döner
//users.map((item)=>{console.log(item.name)})

//verilen koşullara göre arama yapar
/*const findIt = users.find((item) => item.name === "ismail")
console.log(findIt) */

//          --filtreleme yapar
/* const filtered = users.filter((item) => item.name === 'gökhan')
console.log(filtered); */

// some     --belirtilen koşula array elemanlarından biri uyuyorsa true uymazsa false döner
/* const some=users.some((item)=>item.age===10)
console.log(some); */

// every    -- arrayin bütün elemanlarının koşula uyması beklenir
/* const every=users.every((item)=>item.age>10)
console.log(every) */

//includes  --içinde geçiyor mu geçmiyor mu onu kontrol eder
/* const meyveler=['elma','armut','muz']
const included=meyveler.includes("muz")
console.log(included); */