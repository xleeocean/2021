// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  var LText = text.toLowerCase();
  var mySet = new Set(LText);
  console.log(mySet);

  if (mySet.size === LText.length){
    result = true;
    console.log(result);
    return result;
  }else{
    result = false;
    console.log(result);
    return result;  }
  
}

// ASSERTION FUNCTION(S) TO BE USED
function assertion(actual, expected, testName){
  if (actual === expected){
    console.log('Pass.');
  }else{
    console.log('Failed. "'+ testName + '" should return a "'+ expected +'" instead of "' + actual +'".');
  }
}

// TESTS CASES
var teseName_1 = 'apple';
var actual_1 = isIsogram(teseName_1);
var expected_1 = false;
//assertion(actual_1,expected_1,teseName_1);

var teseName_2 = 'LADY';
var actual_2 = isIsogram(teseName_2);
var expected_2 = true;
//assertion(actual_2,expected_2,teseName_2);

var teseName_3 = 'Photogarph';
var actual_3 = isIsogram(teseName_3);
var expected_3 = false;
assertion(actual_3,expected_3,teseName_3);

var teseName_4 = 'Wow';
var actual_4 = isIsogram(teseName_4);
var expected_4 = false;
assertion(actual_4,expected_4,teseName_4);
