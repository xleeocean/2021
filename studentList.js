// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER

function decorateClassListWithAges(classList) {
  var classListWithAges =[];
  // creates an object for each string in the input array, with an age of 10 or 11
  for (i = 0; i< classList.length; i++){
    var age = Math.floor(Math.random() * (11 - 10 + 1)) + 10;
    var student = {};
    student["name"] = classList[i];
    student["age"] = age;
    // console.log(student);
    classListWithAges.push(student);
  }
  // returns an array of these objects
  return classListWithAges;
  
}

// ASSERTION FUNCTION(S) TO BE USED
function assertion(expected,actual,testName){
  console.log(actual);
  // Test if length of the expected array equals to the actual array.
  // Test if the elements of array is as expected
  var criterial_1 = expected.length === actual.length;
    if(expected.length !== actual.length){
      console.log('Result length is wrong.')
    }
  

  var criterial_2;

  for(i = 0 ; i< actual.length; i++){
    
    if(actual[i]['name']!== expected[i]['name']){
      criterial_2 = false;
      console.log('Class name is wrong.');      
      break;
    }
    if(actual[i]['age']!==11 && actual[i]['age']!==10){
      criterial_2 = false;
      console.log('Age range is wrong.');
      break;
    }
    criterial_2 = true;
  }

  if(criterial_1===true && criterial_2 === true){
    console.log('Pass');
  }else{
    console.log('Failed');
  }
  
}

// TESTS CASES

var actual_1 = decorateClassListWithAges(["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry"]);
var expected_1 = [
  { name: 'Joe', age: 11 },
  { name: 'Jack', age: 11 },
  { name: 'John', age: 10 },
  { name: 'Fred', age: 11 },
  { name: 'Frank', age: 10 },
  { name: 'Barry', age: 10 },
  { name: 'Larry', age: 11 },
  { name: 'Mary', age: 10 },
  { name: 'Harry', age: 11 }
];
assertion(expected_1,actual_1,'test1');

