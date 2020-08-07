// $('#current-city').change(function() {
//   var city = $('#current-city').val();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3506e645ac1f87d2f43c8a56152d0dd7&units=metric', function(data) {
//     $('#current-temperature').text(data.main.temp)
//   })
// })


class Thermostat {
  constructor(){
    this.MINIMUM = 10
    this.temperature = 20
    this.maxTemperature = 25
    this.maxTemperatureOn = false
    this.maxTemperatureOff = true

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
    if(this.maxTemperatureOn === false) {
      this.maxTemperature = 25
    }
  };

  powerSavingModeOff(){
    if(this.maxTemperatureOff === true){
    this.maxTemperature = 32;
    }
  };

  reset(){
    this.temperature  = 20
  }

  energyUsage(){

    if (this.temperature < 18 ) {
      return 'low-usage'
  } else if(this.temperature <= 25) {
     return 'medium-usage'
  } else{
  return 'high-usage'
}
  }

};
  

