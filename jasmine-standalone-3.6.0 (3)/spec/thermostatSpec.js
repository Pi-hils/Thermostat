describe('Thermostat', function(){

  let thermostat

  beforeEach(function() {
    thermostat = new Thermostat ();

  });


  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toBe (20)
  });

  it ('increases with an up function', function(){
    thermostat.up();
    expect(thermostat.temperature).toBe (21)
  })

  it ('decreases the temperature', function(){
    thermostat.down();
    expect(thermostat.temperature).toBe (19)
  });

  it ('sets minimum temp at 10 degrees',function(){
    var i;
    for ( i = 0; i <= 10; i++) {
      thermostat.down();
    };
    expect(thermostat.temperature).toBe (10)
  });

  describe('power saving mode', function(){
  it ('if power saving mode is on', function(){
    thermostat.powerSavingModeOn();
    expect(thermostat.maxTemperature).toEqual(25)
  });

  it ('if power saving mode is off', function(){
    thermostat.powerSavingModeOff();
     expect(thermostat.maxTemperature).toEqual(32)
  })

  it ('powersaving on by default', function(){
    expect(thermostat.maxTemperature).toEqual (25)
  });

  describe('rest function', function(){
    it ('resets temperature to 20 with a function', function(){
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual (20)
    });
  });

  describe('energy usage', function(){
    it ('returns current energy usage',function(){
      expect(thermostat.energyUsage()).toEqual ('medium-usage')
    });

    it ('returns current energy usage- low', function(){
      var i;
    for ( i = 0; i <= 3; i++) {
      thermostat.down();
    };
      expect(thermostat.energyUsage()).toEqual ('low-usage')
    })
  })
   
  it ('returs current energy usage - high', function(){
    var i;
    for ( i = 0; i <=6 ; i++) {
      thermostat.up();
    };
    expect(thermostat.energyUsage()).toEqual ('high-usage')
  })

  })
});
