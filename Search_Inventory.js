var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];


function generateLaceDetails(inventory,input){
	var searchResult = [];

	for(i = 0; i < inventory.length; i++){

		for (j = 0; j <inventory[i]['shoes'].length; j++){
			var shoeName = inventory[i]['shoes'][j]['name'];
			if(shoeName.includes(input)){
				var strOfShoeName = shoeName.split(' ');

				for(k = 0; k < strOfShoeName.length; k++){
					if(strOfShoeName[k].includes(input)){
						var newRecord = {};
						newRecord["nameWords"]= strOfShoeName;
						newRecord["targetWordIndex"] = k;
						searchResult.push(newRecord);
					}
				}
			}
		}
	}
	return searchResult;

}

generateLaceDetails(currentInventory,'lace');
