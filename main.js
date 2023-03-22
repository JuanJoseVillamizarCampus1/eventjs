const btnSend = document.querySelector('#btnSend')
btnSend.addEventListener('click',()=>{
    alert(`Haz dado click al boton sent`)
})

const btnCancel = document.querySelector('#btnCancel')
btnCancel.addEventListener('click',shoMessage)

function shoMessage() {
    if (btnCancel.classList.contains("boton")){
        this.textContent = "Cancelado"
        btnCancel.classList.remove("boton")
        this.style.color ='white'
        this.style.backgroundColor='red'
        }else{
            this.textContent="aprobado"
            btnCancel.classList.add("boton")
            this.style.color='white'
            this.style.backgroundColor='green'
        }
}

console.log(1);
document.addEventListener('DOMContentLoaded',()=>{
    console.log(2);
})
console.log(3);