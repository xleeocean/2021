//FUNCTION DEFINITIONS
/* This function exams text of its alphabetic characters and replacing each one by the letter 13 places further along in the alphabet, wrapping back to the beginning if necessary.
*/

function deObfuscated(input){
	// Split the input string into an array of single elements	
	var inputElements = input.split('');
	
	// Translate the elements to ASCII code
	var codeOfElements = [];
	for (i = 0; i < inputElements.length;i++){	
		let code = inputElements[i].charCodeAt();
		codeOfElements.push(code);
	}

	// Iterate over the array of elements to identify alphabetic characters, and switch them with target partners
	for(j = 0; j < codeOfElements.length;j++){
		if(codeOfElements[j] >= 65 && codeOfElements[j] <= 77){
			codeOfElements[j] += 13;
		} else if(codeOfElements[j] >= 78 && codeOfElements[j] <= 90){
			codeOfElements[j] -= 13;
		} else if(codeOfElements[j] >= 97 && codeOfElements[j] <= 109){
			codeOfElements[j] += 13;
		} else if(codeOfElements[j] >= 110 && codeOfElements[j] <= 122){
			codeOfElements[j] -= 13
		} else{
			continue;
		}
	}

	// Translate the codes back to string 
	var newElements = [];
	 for(k = 0; k < codeOfElements.length; k++){
		 var element = String.fromCharCode(codeOfElements[k]);
		 newElements.push(element);
	 }

	 // Combine the string into sentenses
	 var output = newElements.join('');
	 return output;
	 
}

deObfuscated('Syvc rirel cnve bs punenpgref va n fgevat.');

//ASSERTION FUNCTIONS
function assertion(actual, expected, testName){
	if(actual === expected){
		console.log('Pass.');
	}else{
		console.log('Failed. Expect "'+ actual +'" deeply equal to "'+ expected + '" in "' + testName +'".');
	}
}

//TEST CASES
actual_1 = deObfuscated('Syvc rirel cnve bs punenpgref va n fgevat.');
expected_1 = 'Flip every pair of characters in a string.';
testName_1 = 'Syvc rirel cnve bs punenpgref va n fgevat.';
assertion(actual_1, expected_1, testName_1);

actual_2 = deObfuscated("ine vachg = 'purpx bhg ubj vagrerfgvat guvf ceboyrz vf, vg\'f vafnaryl vagrerfgvat!'");
expected_2 = "var input = 'check out how interesting this problem is, it\'s insanely interesting!'";
testName_2 = 'ine vachg = purpx bhg ubj vagrerfgvat guvf ceboyrz vf, vg\'f vafnaryl vagrerfgvat!';
assertion(actual_2, expected_2, testName_2);


