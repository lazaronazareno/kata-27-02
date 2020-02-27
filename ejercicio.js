var numArray=[1,2,3,4]
function getMax(numArray) {
    var nummin = Math.min.apply(null, numArray);
    var acumulador = 0;
    for (let i=0; i<numArray.length; i++){
        acumulador=numArray[i] + acumulador
    }

    return acumulador - nummin;
  }
  function getMin(numArray) {
    var nummax = Math.max.apply(null, numArray);
    var acumulador = 0;
    for (let i=0; i<numArray.length; i++){
        acumulador=numArray[i] + acumulador
    }

    return acumulador - nummax;
  }