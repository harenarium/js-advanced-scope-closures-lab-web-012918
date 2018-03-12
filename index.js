function produceDrivingRange(blockRange){
  // debugger
  return function(a, b){
    distance = Math.abs(parseInt(a)-parseInt(b))
    return distance <= blockRange ? `within range by ${blockRange-distance}` : `${distance-blockRange} blocks out of range`

  }
}

function produceTipCalculator(decimal){
  return function(amount){
    return amount * decimal
  }
}


function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
  }
}
