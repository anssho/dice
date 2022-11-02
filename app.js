
stats = [0,0,0,0,0,0]
totalStats = 0
sum = 0
  function rollDice() {
    const dice = [...document.querySelectorAll(".side1 .die-list")];
    dice.forEach(die => {
      toggleClasses(die);
      randomNumber = getRandomNumber(1, 6);
      sum += randomNumber
      stats[randomNumber-1] += 1
      totalStats += 1
      die.dataset.roll = randomNumber
    });

   
    for(let i=0; i < 6; i++) {
        let statPercent = Math.floor((stats[i]/totalStats)*100)
        document.getElementById('stats'+(i+1)).innerHTML = '<span style="background-color: #250214;padding-right: '+statPercent+'%; color: white;">'+(i+1)+': '+statPercent+' %, times '+stats[i]+'</span>'
    } 
    var mode = stats.indexOf(Math.max(...stats))+1
    var avg = sum/totalStats
    document.getElementById('statsTotal').innerHTML ='<p style="color: white;"> total rolls '+totalStats+', mode: '+mode+', avg: '+avg.toFixed(2)+'</p>'
  }
  
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.body.addEventListener("click", rollDice);
  