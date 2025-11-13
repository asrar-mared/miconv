function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.match(/[\d\.\/]+/);
    if (!result) return 1;
    try {
      return eval(result[0]);
    } catch (e) {
      return 'invalid number';
    }
  };

  this.getUnit = function(input) {
    let result = input.match(/[a-zA-Z]+$/);
    if (!result) return 'invalid unit';
    let unit = result[0].toLowerCase();
    const validUnits = ['gal','l','mi','km','lbs','kg'];
    return validUnits.includes(unit) ? unit : 'invalid unit';
  };

  this.getReturnUnit = function(initUnit) {
    const unitMap = {
      'gal':'l',
      'l':'gal',
      'mi':'km',
      'km':'mi',
      'lbs':'kg',
      'kg':'lbs'
    };
    return unitMap[initUnit];
  };

  this.convert = function(initNum, initUnit) {
    const conversionRates = {
      'gal': 3.78541,
      'l': 1/3.78541,
      'mi': 1.60934,
      'km': 1/1.60934,
      'lbs': 0.453592,
      'kg': 1/0.453592
    };
    return initNum * conversionRates[initUnit];
  };
}

module.exports = ConvertHandler;
