let previousBtn = document.getElementById('previousBtn')
let nextBtn = document.getElementById('nextBtn')
const orderAnimation = document.querySelectorAll(".orderSetting");
// console.log(orderAnimation[0].classList[0])
// for (let element of orderAnimation){
    
//     console.log(element.classList[0])
// }

nextBtn.addEventListener("click", () => {
    orderAnimation.forEach((element) => {

        let currentOrder = Number(element.classList[0].slice(6));
        console.log(currentOrder)
        
        let newOrder = currentOrder === 10 ? 1 : currentOrder + 1;
        console.log(newOrder)

        element.classList.replace("order-" + currentOrder, "order-" + newOrder);
        console.log("")
    });
    
});
previousBtn.addEventListener("click",()=>{
    console.log("hi")
})