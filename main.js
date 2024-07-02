const container = document.getElementById("container")
const boxs = container.getElementsByClassName("boxs")
const totalPrice = document.getElementById("total")



let total=0;
for (let i=0; i<boxs.length; i++){
const box = boxs[i]
const plus = boc.getElementsByClassName("plus")[0]
const minus = box.getElementsByClassName("minus")[0]
const quantity = box.getElementsByTagNameNS("input")[0]
const deleteBtn= box.getElementsByClassName("delet-btn")[0]
const price = parseInt(box.getElementsByClassName("price")[0].innerText.substring(1))

plus.addEventListener("click",()=>{
    quantity.value++
    total+=price;
    totalPrice.innerText='Total price : $${total}'
})
minus.addEventListener("click", ()=>{
    if(quantity.value>1){ 
    quantity.value--
    total-= price
    totalPrice.innerText='total price : $${total}'
    }
})




}