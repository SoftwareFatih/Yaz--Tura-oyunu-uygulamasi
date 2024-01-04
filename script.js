let tura=0;
let yazi=0;

let coin=document.querySelector("#coin");
let fliptBtn=document.querySelector("#flip-button");
let resetBtn=document.querySelector("#reset-button");

resetBtn.addEventListener('click', () => {
    coin.style.animation="none";
    tura=0;
    yazi=0;
    updateStats();
});

fliptBtn.addEventListener('click', ()=>{
    let i =Math.floor(Math.random()*2);
console.log(i);
    coin.classList.remove('heads');
    coin.classList.remove('tails');

    if(i){
        setTimeout(() =>{
            coin.classList.add('heads');
        },100)
        tura++;
    }
    else{
        setTimeout(() =>{
            coin.classList.add('tails');
        },100)
        yazi++;
    }
    setTimeout(updateStats,3000);
    disableButton();
});
function updateStats(){
    document.querySelector("#Tura-count").textContent=`Tura: ${tura}`;
    document.querySelector("#Yazi-count").textContent=`Yazi: ${yazi}`;
}
function disableButton(){
    fliptBtn.disabled=true;
    setTimeout(() =>{
        fliptBtn.disabled =false;
    },3000)

}
