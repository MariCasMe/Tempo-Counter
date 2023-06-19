//Contador
const increase=document.getElementById('increase');
const decrease=document.getElementById('decrease');

const result=document.getElementById('counter-result');

let counter=0;
result.textContent=counter;

/*increase.addEventListener('click',async()=>{
    await setTimeout(()=>{
        counter++;
        result.textContent=counter;
        console.log(counter);
    },0)
})*/
increase.addEventListener('click',e=>{
        counter++;
        result.textContent=counter;
})

decrease.addEventListener('click',e=>{
        counter--;
        result.textContent=counter;
})
//Temporizador
const time=document.getElementById('timeInput');
const screen=document.getElementById('timerScreen');
let start=document.getElementById('timerStart');


screen.textContent=0;

start.addEventListener('click',()=>{
    console.log('starting');
    let seconds=parseInt(time.value);
    screen.textContent=seconds;
    let timer=setInterval(()=>{
        seconds--;
        screen.textContent=seconds;
        if(seconds<=0){
            clearTimeout(timer);
        }
    },1000)
})

