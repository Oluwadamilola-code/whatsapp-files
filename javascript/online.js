// let num1 = 10 ;
// let num2 = 4;
// let num3 = 9;

// if(num1 > num2 && num1 > num3){
//    console.log("num1 is the greatest");
// }

// else if(num2 > num1 && num2 > num3){
//     console.log("num2 is the greatest");
    
// }

// else{
//     console.log("num3 is the greatest");
// }

// let num = 21;
//  let result

// if(num%2===0)
//     result = "even"

// else
//     result = "odd"
// console.log(result);

// result = num%2===0 ? "even" : "odd"
// console.log(result);

// mon - '7am'
// tues - '3am'
// wed - '2am'
// thur -'2am'
// fri - '5am'
// sat - '9am'
// sun - '9am'

// let day = "wednesday"

// switch (day) {
//     case 'monday':
//         console.log("7am");
//        break;
//         case 'tuesday':
//             console.log("3am");

//             case 'wednesday':
//             case 'thursday':        
//                 console.log("2am");
//             break;
//             case 'friday':
//                 console.log("5am");

//             case 'saturday':
//             case 'sunday':    
//                 console.log("9am");
                    
                    
            
        
//         break;

//     default:
//         break;
// }

// i = 5;

// while (i>0) {
//     console.log("Hi", i);
//     i--;
    
// }

// i = 10;

// do {
//     console.log("Hi", i);
    
// } while (i>=5);

// let p=document.getElementsByTagName('p')
// Array.from(p).forEach(element=>{
//     element.textContent='hello'
//     element.addEventListener('click',()=>console.log('clicked')
//     )
// })
// console.log(p);

const people = [
    {"name": "dami",
        "picture": "https://www.google.com/imgres?q=pictures%20of%20people%20at%20work&imgurl=https%3A%2F%2Fsharp.services.greenhouse.io%2Fproduction%2Fresources%2FHappy-woman-drinking-coffee-at-work.jpg%3Fauto%3Dformat%26fit%3Dmax%26lossless%3Dtrue%26q%3D90%26w%3D1440%26s%3D40cded1c6135bfb9db56048b3d8ff1a22d3ddf72652763b09ba38a51a4a512d6&imgrefurl=https%3A%2F%2Fwww.greenhouse.com%2Fblog%2Fthe-future-belongs-to-people-first-companies-constructing-a-people-first-culture&docid=Cb6hN1bes5xMyM&tbnid=0fSux6s6kBJFGM&vet=12ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oECDcQAA..i&w=1440&h=880&hcb=2&ved=2ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oECDcQAA",
        "occupation": "doctor"

    },
    {"name": "tobi",
        "picture": "https://www.google.com/imgres?q=pictures%20of%20people%20at%20work&imgurl=https%3A%2F%2Fsharp.services.greenhouse.io%2Fproduction%2Fresources%2FHappy-woman-drinking-coffee-at-work.jpg%3Fauto%3Dformat%26fit%3Dmax%26lossless%3Dtrue%26q%3D90%26w%3D1440%26s%3D40cded1c6135bfb9db56048b3d8ff1a22d3ddf72652763b09ba38a51a4a512d6&imgrefurl=https%3A%2F%2Fwww.greenhouse.com%2Fblog%2Fthe-future-belongs-to-people-first-companies-constructing-a-people-first-culture&docid=Cb6hN1bes5xMyM&tbnid=0fSux6s6kBJFGM&vet=12ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oECDcQAA..i&w=1440&h=880&hcb=2&ved=2ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oECDcQAA",
        "occupation": "lawyer" 

    },
    {"name": "tola",
        "occupation": "dentist"

    },
    {"name": "titi",
        "picture": "https://www.google.com/imgres?q=pictures%20of%20people%20at%20work&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1356070782%2Fphoto%2Fbusinessman-and-businesswoman-smiling-looking-at-phone.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DXDI9agia8LM24eInT_eEK3-N2XA7MMgmJgzGi6QJgzU%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fpeople-working&docid=gTg-IPcUTkwHQM&tbnid=r91Z1tQOpM6HyM&vet=12ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oFCIQBEAA..i&w=612&h=408&hcb=2&ved=2ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oFCIQBEAA",
        "occupation": "tailor"

    },
    {"name": "bola",
        "picture": "https://www.google.com/imgres?q=pictures%20of%20people%20at%20work&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1356070782%2Fphoto%2Fbusinessman-and-businesswoman-smiling-looking-at-phone.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DXDI9agia8LM24eInT_eEK3-N2XA7MMgmJgzGi6QJgzU%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fpeople-working&docid=gTg-IPcUTkwHQM&tbnid=r91Z1tQOpM6HyM&vet=12ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oFCIQBEAA..i&w=612&h=408&hcb=2&ved=2ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oFCIQBEAA",
        "occupation":"tailor"

    },
    {"name": "fola",
        "picture": "https://www.google.com/imgres?q=pictures%20of%20people%20at%20work&imgurl=https%3A%2F%2Fsharp.services.greenhouse.io%2Fproduction%2Fresources%2FHappy-woman-drinking-coffee-at-work.jpg%3Fauto%3Dformat%26fit%3Dmax%26lossless%3Dtrue%26q%3D90%26w%3D1440%26s%3D40cded1c6135bfb9db56048b3d8ff1a22d3ddf72652763b09ba38a51a4a512d6&imgrefurl=https%3A%2F%2Fwww.greenhouse.com%2Fblog%2Fthe-future-belongs-to-people-first-companies-constructing-a-people-first-culture&docid=Cb6hN1bes5xMyM&tbnid=0fSux6s6kBJFGM&vet=12ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oECDcQAA..i&w=1440&h=880&hcb=2&ved=2ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oECDcQAA",
        "occupation" :"dancer"

    },
    {"name": "jade",
        "picture": "https://www.google.com/imgres?q=pictures%20of%20people%20at%20work&imgurl=https%3A%2F%2Fi0.wp.com%2Fpost.healthline.com%2Fwp-content%2Fuploads%2F2023%2F05%2Fvisually-impaired-blind-woman-coworker-office-business-meeting-1296x728-header.jpg%3Fw%3D1155%26h%3D1528&imgrefurl=https%3A%2F%2Fwww.healthline.com%2Fhealth%2Fjobs-for-blind-people&docid=NPw4OeBHNT3YvM&tbnid=5EwGzn0iNleo9M&vet=12ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oFCIEBEAA..i&w=1155&h=648&hcb=2&ved=2ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oFCIEBEAA",
        "occupation": "dentist"
    },
    {"name": "funke",
        "picture": "https://www.google.com/imgres?q=pictures%20of%20people%20at%20work&imgurl=https%3A%2F%2Fsharp.services.greenhouse.io%2Fproduction%2Fresources%2FHappy-woman-drinking-coffee-at-work.jpg%3Fauto%3Dformat%26fit%3Dmax%26lossless%3Dtrue%26q%3D90%26w%3D1440%26s%3D40cded1c6135bfb9db56048b3d8ff1a22d3ddf72652763b09ba38a51a4a512d6&imgrefurl=https%3A%2F%2Fwww.greenhouse.com%2Fblog%2Fthe-future-belongs-to-people-first-companies-constructing-a-people-first-culture&docid=Cb6hN1bes5xMyM&tbnid=0fSux6s6kBJFGM&vet=12ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oECDcQAA..i&w=1440&h=880&hcb=2&ved=2ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oECDcQAA",
        "occupation" : "lawyer"
    },
    {"name": "debola",
        "picture": "https://www.google.com/imgres?q=pictures%20of%20people%20at%20work&imgurl=https%3A%2F%2Fi0.wp.com%2Fpost.healthline.com%2Fwp-content%2Fuploads%2F2023%2F05%2Fvisually-impaired-blind-woman-coworker-office-business-meeting-1296x728-header.jpg%3Fw%3D1155%26h%3D1528&imgrefurl=https%3A%2F%2Fwww.healthline.com%2Fhealth%2Fjobs-for-blind-people&docid=NPw4OeBHNT3YvM&tbnid=5EwGzn0iNleo9M&vet=12ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oFCIEBEAA..i&w=1155&h=648&hcb=2&ved=2ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oFCIEBEAA",
        "occupation": "lawyer"
    },
    {"name": "teni",
        "picture": "https://www.google.com/imgres?q=pictures%20of%20people%20at%20work&imgurl=https%3A%2F%2Fsharp.services.greenhouse.io%2Fproduction%2Fresources%2FHappy-woman-drinking-coffee-at-work.jpg%3Fauto%3Dformat%26fit%3Dmax%26lossless%3Dtrue%26q%3D90%26w%3D1440%26s%3D40cded1c6135bfb9db56048b3d8ff1a22d3ddf72652763b09ba38a51a4a512d6&imgrefurl=https%3A%2F%2Fwww.greenhouse.com%2Fblog%2Fthe-future-belongs-to-people-first-companies-constructing-a-people-first-culture&docid=Cb6hN1bes5xMyM&tbnid=0fSux6s6kBJFGM&vet=12ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oECDcQAA..i&w=1440&h=880&hcb=2&ved=2ahUKEwjPuZaQiO2JAxW-TaQEHaHyBeUQM3oECDcQAA",
        "occupation" :"dancer"
    },
]

console.log(people);

let body = document.getElementById("body")

people.forEach(person=>{
    let card = document.createElement("div")
    card.classList.add("card")
    body.appendChild(card)

    let image = document.createElement("img")
    image.src = person.image
    card.appendChild(image)

    let name = document.createElement("h2")
    name.textContent = person.name
    card.appendChild(name)

    let occupation = document.createElement
    ("p")
    occupation.textContent = person.occupation
    card.appendChild(occupation)

})











   