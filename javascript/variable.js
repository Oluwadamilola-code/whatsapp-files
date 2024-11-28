// const x = 5;
// const y = 6;

// const z = x + y;
// console.log(z);

// num = 2 + 2
// console.log(num)

// let username = "damilola"
// console.log(username);

// i = 1;

// do {
//     console.log("Hi", i);
//     i++;
    
// } while (i<=5);


// name = missisippi;

// for (let m= 0; s < array.length; 9++) {
//     const element = array[s];
    
// }
// console.log(name);

// number = 0;
// for (const element of 'missispi') {
//    if(element=="s") number++
// }
// console.log(number);

// function Counter(letter,word) {
//     let a=0
    
// for (const element of word) {
//     if(element==letter) a++    
// }
// return a;
// }

//   console.log(Counter('a','lazarus'));

// let name;
// setTimeout(() => {
//     name = "kachi";
// }, 5000);

// setInterval(() => {
//     console.log(name);
    
// }, 1000);

// const greeting = async ()=>(

//     try{
//         page[0].textContent = "...loading"
//         page[0].style="text-align:center"
//         name = await newName
//         page[9].textContent = "welcome "+ name
//     } catch (error) {
//         console.log(error);
//     }
//     finally
// )

const req = new XMLHttpRequest()

req.open("GET", "https://catfact.ninja/fact?limit=15&max_length=60")
req.send()

req.onload = console.log(req.response.fact);

const getFacts = new Promise((resolve,reject)=>{
    req.send( )
    req.responseType ="json"
    req.onload = () => resolve(req.response);
    req.onerror = ()=> reject(req.statusText)
})


getFacts
.then(result=>result.data)
                                             
.then(result=>console.log(result)
).catch(error=> console.log(error)
)


 




    
  

  
