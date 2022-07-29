/**
 * alert function
 */
 const setAlert=(msg, type="danger")=>{
    return `<p class="alert alert-${type} d-flex justify-content-between">
    ${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`
}

/**
 * Set data on Local Storage
 */

const createLsData=(key, value)=>{

    let data=[];

    if(localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key)); 
    }

    data.push(value);

    localStorage.setItem(key, JSON.stringify(data));
}


/**
 * Get data from Local Storage
 */

const readLsData =(key)=>{

    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key))
    }else{
        false
    }
}

/**
 * Updatae ls data
 */

const updateLsData = (key, array) =>{
    localStorage.setItem(key, JSON.stringify(array))
}


/**
 * Future time countdown
 */

const futureTimeCountdown=(date, time, alarm, interval=null, alarmTong=null, clockTong=null)=>{


    //get timestamps

    let startTime = Date.now();
    let endTime = new Date(date+' '+time);
    let orderTime = Math.floor(Math.abs(endTime.getTime() - startTime));

    //get value from time (miliseconds)

    let totalSeconds = Math.floor(orderTime/1000);
    let totalMinutes = Math.floor(totalSeconds/60);
    let totalHours = Math.floor(totalMinutes/60);
    let totalDays = Math.floor(totalHours/24);

    
    let hours = totalHours - (totalDays*24);
    let minutes = totalMinutes - (totalDays*1440) - (hours*60);
    let seconds = totalSeconds - (totalDays*86400) - (hours*3600) - (minutes*60);
    
    if(totalSeconds <= 0){
        clearInterval(interval);
        msg.innerHTML= setAlert('All fileds required/Time out');
        alarmTong.play();
    } 
    
    clockTong.play();
    alarm.innerHTML = `
        <div class="alarm-box">                                            
            <div class="alarm-clock">
                <h2>${totalDays}</h2>
                <span>Days</span>
            </div>
        
            <div class="alarm-clock">
                <h2>${hours}</h2>
                <span>Hours</span>
            </div>
        

            <div class="alarm-clock">
                <h2>${minutes}</h2>
                <span>Minutes</span>
            </div>
        
            <div class="alarm-clock">
                <h2>${seconds}</h2>
                <span>Seconds</span>
            </div>
        </div>
        `;
};




