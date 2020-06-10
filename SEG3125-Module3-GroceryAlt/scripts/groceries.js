	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		glutenFree: true,
		organic: true,
		vegetarian: true,
		price: 1.99
	},
	{
		name: "bread",
		glutenFree: false,
		organic: false,
		vegetarian: true,
		price: 2.35
	},
	{
		name: "bagel",
		glutenFree: false,
		organic: false,
		vegetarian: true,
		price: 3.35
	},
	{
		name: "salmon",
		glutenFree: true,
		organic: false,
		vegetarian: false,
		price: 10.00
	},
	{
		name: "burger patties",
		glutenFree: true,
		organic:false,
		vegetarian: false,
		price: 8.85
	},
	{
		name: "bacon",
		glutenFree: true,
		organic: true,
		vegetarian: false,
		price: 7.75
	},
	{
		name: "apple",
		glutenFree: true,
		organic: false,
		vegetarian: true,
		price: 0.99
	},
	{
		name: "strawberry",
		glutenFree: true,
		organic: false,
		vegetarian: true,
		price: 1.05
	},
	{
		name: "milk",
		glutenFree: true,
		organic: false,
		vegetarian: true,
		price: 3.00
	},
	{
		name: "vanilla ice cream",
		glutenFree: true,
		organic: true,
		vegetarian: true,
		price: 9.99
	}
];
	
function itemFitsRestrictions(item, restrictions){
	var bool = true;
	if ((item.glutenFree == false) && restrictions[0].checked){
		bool = false;
	}
	if ((item.organic == false) && restrictions[1].checked){
		bool = false;
	}
	if ((item.vegetarian == false) && restrictions[2].checked){
		bool = false;
	}
	return bool;
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if(itemFitsRestrictions(prods[i],restrictions)){
			product_names.push([prods[i].name, prods[i].price]);
		}

	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}