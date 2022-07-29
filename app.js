

// get elements
const alarmApp = document.getElementById('alarmApp');
const alarm = document.querySelector('.alarm');
const msg = document.querySelector('.msg');
const alarmTong = document.querySelector('#alarmTong');
const clockTong = document.querySelector('#clockTong');
const stop = document.querySelector('#stop');
const stopTong = document.querySelector('#stopTong');



// submit alarm form
let count;
alarmApp.onsubmit = (e) =>{
    e.preventDefault();

    clearInterval(count);

    const fromData = new FormData(e.target);
    const timerData = Object.fromEntries(fromData.entries());
    const {name, client, date, time} = Object.fromEntries(fromData.entries());
   

    count = setInterval(() => {
        futureTimeCountdown(date, time, alarm, count, alarmTong, clockTong)
    
    }, 1000);
    

};

// stop alarm

stop.onclick=(e)=>{
    e.preventDefault();
    clearInterval(count);
    stopTong.play();
}

