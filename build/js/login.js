const inputs = document.querySelectorAll('.campo_input')

console.log(inputs);

inputs.forEach( input => {
    input.addEventListener('input', actborder)
})

function actborder() {

    inputs.forEach((item) => {
        item.parentElement.classList.remove("active");
        this.parentElement.classList.add("active");
      });
}

window.onclick = function() {
    inputs.forEach((item) => {
        if(item.parentElement.classList.contains("active")){
            item.parentElement.classList.remove("active");
        }
      });
    
}