const productsPrice = new Map([
  ["bedShop1", 10],
  ["bedShop2", 20],
  ["bedShop3", 10],
  ["bedShop4", 30],
  ["bedShop5", 40],
  ["bedShop6", 45],
  ["bedShop7", 14],
  ["bedShop8", 16],
  ["bedShop9", 10],
  ["bedShop10", 8],
  ["bedShop11", 6],
  ["bedShop12", 89],
  ["bedShop13", 110],
  ["bedShop14", 90],
  ["bedShop15", 22],
  ["bedShop16", 5]
]);
function SaveItem(name) {
	if(localStorage.getItem(name) == null){
		localStorage.setItem(name, 1);
	}
	else{
		var currentQuantity = parseInt(localStorage.getItem(name));
		var newQuantity = 0;
		newQuantity = currentQuantity + 1;
		localStorage.setItem(name, newQuantity);
	}
}
//------------------------------------------------------------------------------
//change an existing key=>value in the HTML5 storage
function ModifyItem() {
	var name1 = document.forms.ShoppingList.name.value;
	var data1 = document.forms.ShoppingList.data.value;
	//check if name1 is already exists
	
			//check if key exists
			if (localStorage.getItem(name1) !=null)
			{
			  //update
			  localStorage.setItem(name1,data1);
			  document.forms.ShoppingList.data.value = localStorage.getItem(name1);
			}
		
	
	doShowAll();
}
//-------------------------------------------------------------------------
//delete an existing key=>value from the HTML5 storage
function RemoveItem(name) {
	localStorage.removeItem(name);
}
//-------------------------------------------------------------------------------------
//restart the local storage
function ClearAll() {
	localStorage.clear();
	doShowAll();
}
//--------------------------------------------------------------------------------------
// dynamically populate the table with shopping list items
//below step can be done via PHP and AJAX too. 
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = " <tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th></tr>\n";
		var i = 0;
		//for more advance feature, you can set cap on max items in the cart
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"+ "€"+productsPrice.get(key) +"</td>\n<td>"+ localStorage.getItem(key) +"</td>\n<td>"+ "€" + productsPrice.get(key)*localStorage.getItem(key)+ "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		//bind the data to html table
		//you can use jQuery too....
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot save shopping list as your browser does not support HTML 5');
	}
}


/*
 =====> Checking the browser support
 //this step may not be required as most of modern browsers do support HTML5
 */
 //below function may be redundant
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}
//-------------------------------------------------
/*
You can extend this script by inserting data to database or adding payment processing API to shopping cart..
*/
