class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => this.currentTime ++,1000)
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
   if (value.toString().length !== 1) {
    return value.toString()
   } else if (value === 0) {
    return '00'
   } else {
    return '0' + value.toString()
   }
   
  }

  stop() {
    
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
