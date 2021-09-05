// const user = (name = "", age) => {
//     let userName = name;
//     let userAge = age;
   
//     function showName() {
//      console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwo' : 'Nie mozesz kupić piwa'}`);
//     }
   
//     return showName
//    }
   
//    const mieszko = user("Mieszko", 20);
//    const jagienka = user("Jagienka", 17);
//    mieszko()
//    jagienka()
   
//    const noName = user();
//    noName()

   const timer = () => {
    let startTime = 1;
    function setTime() {
        document.body.textContent = startTime++;
        document.body.style.color = "red";
        document.body.style.fontSize = "80px";
        document.body.style.textAlign = "center";
        document.body.style.marginTop = "40vh";
    }
    return setTime 
   }

   const showTime = timer();
   setInterval(showTime, 1000);