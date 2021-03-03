let breakfast = document.querySelectorAll(".breakfast");
let lunch = document.querySelectorAll(".lunch");
let shake = document.querySelectorAll(".shake");
let dinner = document.querySelector(".dinner");

let breaking = document.querySelector("#break");
let launching = document.querySelector("#lunch");
let shaking = document.querySelector("#shakes");
let dinning = document.querySelector("#dinner");
let all = document.querySelector("#all");

breaking.addEventListener('click',()=>{
    breakfast.forEach((breakfast)=>{
        breakfast.style.display = "flex"
    })

    lunch.forEach((breakfast)=>{
        breakfast.style.display = "none"
    })

    shake.forEach((breakfast)=>{
        breakfast.style.display = "none"
    })

    dinner.style.display = "none"



})

launching.addEventListener('click',()=>{
    breakfast.forEach((breakfast)=>{
        breakfast.style.display = "none"
    })

    lunch.forEach((breakfast)=>{
        breakfast.style.display = "flex"
    })

    shake.forEach((breakfast)=>{
        breakfast.style.display = "none"
    })

    dinner.style.display = "none"



})


shaking.addEventListener('click',()=>{
    breakfast.forEach((breakfast)=>{
        breakfast.style.display = "none"
    })

    lunch.forEach((breakfast)=>{
        breakfast.style.display = "none"
    })

    shake.forEach((breakfast)=>{
        breakfast.style.display = "flex"
    })

    dinner.style.display = "none"



})


dinning.addEventListener('click',()=>{
    breakfast.forEach((breakfast)=>{
        breakfast.style.display = "none"
    })

    lunch.forEach((breakfast)=>{
        breakfast.style.display = "none"
    })

    shake.forEach((breakfast)=>{
        breakfast.style.display = "none"
    })

    dinner.style.display = "flex"



})



all.addEventListener('click',()=>{
    breakfast.forEach((breakfast)=>{
        breakfast.style.display = "flex"
    })

    lunch.forEach((breakfast)=>{
        breakfast.style.display = "flex"
    })

    shake.forEach((breakfast)=>{
        breakfast.style.display = "flex"
    })

    dinner.style.display = "flex"



})

