(()=>{"use strict";window.app=new class{constructor(){this.bindEvents()}$body=document.querySelector("body");$timerDisplay=this.$body.querySelector(".js-timer-display");$buttonTariff=this.$body.querySelectorAll(".js-handle-button-tariff");$date=new Date;$commonDate;$timerInterval;bindEvents=()=>{this.timerSet("22:30:10");for(let t=0;t<this.$buttonTariff.length;t++)this.$buttonTariff[t].addEventListener("click",this.handleClickButtonTariff),this.$buttonTariff[t].addEventListener("click",this.handlePressButtonTariff)};handleClickButtonTariff=t=>{const e=t.target.getAttribute("data-tariff");console.log("Tариф: "+e)};handlePressButtonTariff=t=>{t.preventDefault()};timerSet=t=>{this.$timerInterval&&clearInterval(this.$timerInterval);let e=this.$date.getDate(),i=this.$date.getMonth()+1,a=this.dateTimeHelper(i),s=`${this.$date.getFullYear()}-${a}-${e}T${t||"00:01:00"}`;this.$commonDate=new Date(s),this.updateTimer(),this.$timerInterval=setInterval(this.updateTimer,1e3)};updateTimer=()=>{this.$commonDate=this.$commonDate.setSeconds(this.$commonDate.getSeconds()-1),this.$commonDate=new Date(this.$commonDate);let t=this.dateTimeHelper(this.$commonDate.getHours()),e=this.dateTimeHelper(this.$commonDate.getMinutes()),i=this.dateTimeHelper(this.$commonDate.getSeconds());if(this.$timerDisplay.innerHTML=`${t}:${e}:${i}`,"00"===t&&"00"===e&&"00"===i){const t=this.$buttonTariff[2];clearInterval(this.$timerInterval),t.removeEventListener("click",this.handleClickButtonTariff),t.classList.add("button--disabled")}};dateTimeHelper=t=>t<10?`0${t}`:t}})();