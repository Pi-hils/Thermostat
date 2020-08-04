class Thermostat {
  constructor(){
    this.MINIMUM = 10
    this.temperature = 20
    this.maxTemperature = 25
  
  };

  up(){
    this.temperature++;
  };

  down(){
  
    if (this.temperature > this.MINIMUM) {
      this.temperature--;
    }

  };

  powerSavingModeOn(){
    this.maxTemperature = 25
  };

  powerSavingModeOff(){
    this.maxTemperature = 32
  };

  reset(){
    this.temperature  = 20
  }

  energyUsage(){

    if (this.temperature < 18 ){
      return 'low-usage'

  } else if(this.temperature <= 25) {
     return 'medium-usage'
  } else{
  return 'high-usage'
}
  }

};
  

