const tamogotchi = {
    name: 'egg',
    meal: 0,
    energy: 2,
    mood: 4,
    level: 1,
    experience: 0,

    getStatus(){
      let meStatus = "";
      let moStatus = "";
      let eStatus = "";

      if (this.meal < 3){
        meStatus += "Я голоден";
      }
      else{
        meStatus += "Я не голоден";
      }

      if (this.energy < 3){
        eStatus += "Я хочу спать";
      }
      else{
        eStatus += "Я не хочу спать";
      }
      
      if (this.mood < 3){
        moStatus += "Мне скучно";
      }
      else{
        moStatus += "Мне весело";
      }
      

      if ((this.meal <= 0) || (this.energy <= 0) || (this.mood <= 0)){
        console.log(`${this.name} умер :(`)
      }
      else{
        console.log(`Имя: ${this.name}, Еда: ${meStatus}(${this.meal}), Энергия: ${eStatus}(${this.energy}), Настроение: ${moStatus}(${this.mood}), Уровень: ${this.level}`);
      }
    },

    setName(newName){
      this.name = newName;
    },
    
    toEat(){
      if (this.meal < 5){
      this.meal ++;
      }
      this.mood --;
      this.experience += 10;
    },

    toSleep(){
      if (this.energy < 5){
      this.energy ++;
      }
      this.meal --;
      this.experience += 10;
    },

    toPlay(){

      if (this.mood < 5){
      this.mood ++;      
      }
      this.energy --;
      this.experience += 10;     
    },

    levelUp(){
      if (this.experience >= 100){
        this.level++
        console.log("Поздравляем вы подняли уровень! Ваш уровень теперь " + this.level)
      }
    }

  }
  
  tamogotchi.toPlay();
  tamogotchi.toEat();
  tamogotchi.toSleep();
  tamogotchi.toPlay();
  tamogotchi.toEat();
  tamogotchi.toSleep();
  tamogotchi.toPlay();
  tamogotchi.toEat();
  tamogotchi.toSleep();
  tamogotchi.toPlay();
  tamogotchi.toEat();
  tamogotchi.toSleep();

  tamogotchi.levelUp()
  