let intervalFunction: any;
let timeWhenWeStop = 0;

let currentTimerTime: any = 0;
let endDate: number = 0;

export default function setTime(minutes: number, htmlNode: any, flag: boolean) {
  const timerMs: any = minutes * 1000 * 60;
  

  if(flag) {

    console.log(intervalFunction)
    timeWhenWeStop = currentTimerTime;
    clearInterval(intervalFunction)

  } else {
    
    if(timeWhenWeStop!==0) {
      endDate = Date.now() + timeWhenWeStop;
    } else endDate = Date.now() + timerMs;

    intervalFunction = setInterval(() => {
      currentTimerTime = endDate - Date.now();
      if(currentTimerTime < 1000) {
        
        clearInterval(intervalFunction)
        alert('STOP')
      }
      if (minutes <= 60)  htmlNode.innerHTML = `${new Date(currentTimerTime).toISOString().substring(14, 19)}`;
      else htmlNode.innerHTML = `${new Date(currentTimerTime).toISOString().substring(11, 19)}`;
    }, 1000)

  }
}

