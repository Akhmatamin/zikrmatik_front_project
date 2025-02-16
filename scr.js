let num = 0;

function counter(el){
    num++;
    document.getElementById("count").textContent = num;
}

function reset(res){
    num = 0;
    document.getElementById("count").textContent = num;
}