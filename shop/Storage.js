//map to store prices for each prodcut
const productsPrice = new Map([
	["Furry Lamp", 10],
	["Plant Lamp", 10],
	["Box Lamp", 10],
	["Stylish Lamp", 10],
	["Vintage Lamp", 10],
	["", 10],
	["", 10],
	["", 10],
	["", 10],
	["", 10],
	["", 10],
	["", 10],
	["", 10],
	["", 10],
	["", 10],
	["", 10],
	["Rainforest Vase", 10],
	["Sand Jar", 10],
	["Counterweight", 10],
	["Brass Post", 10],
	["Crystal Fall", 10],
	["Tripod Wood", 10],
	["Bright Room Collection", 10],
	["Acid Cat", 10],
	["Heavy Clay", 10],
	["UFO", 10],
	["Dark Tripod", 10],
	["Stubby Chip", 10],
	["Lamp", 10],
	["Cylindircal Record", 10],
	["Skinny Floor", 10],
	["Behind You", 10],
	["Birds Nest", 10],
	["Black Tulip", 10],
	["Candles Light", 10],
	["Chandelier", 10],
	["Constellation", 10],
	["Diamond Ring", 10],
	["Glowing Orbs", 10],
	["Jetsons Steel", 10],
	["Lantern", 10],
	["Organic Steel", 10],
	["Split Shell", 10],
	["Iron Box", 10],
	["Ceramic Drops", 10],
	["Steel Half Egg", 10],
	["Wide Discs", 10],
	["Wood Bowl", 10]
  
]);

//adds an item to the cart, increments by one if already there
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


//delete an existing key=>value
function RemoveItem(name) {
	localStorage.removeItem(name);
	doShowAll();
}
//-------------------------------------------------------------------------------------
//restart the local storage
function ClearAll() {
	localStorage.clear();
	doShowAll();
}

//populate cart
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = " <tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th></tr>\n";
		var i = 0;
		//increment through local storage
		for (i = 0; i <= localStorage.length-1; i++) {
			//exclude theme from light/dark mode
			if(localStorage.key(i)!="theme"){
				key = localStorage.key(i);
				list += "<tr><td>" + key + "</td>\n<td>"+ "€"+productsPrice.get(key) +"</td>\n<td>"+ localStorage.getItem(key) +"</td>\n<td>"+ "€"
					+ productsPrice.get(key)*localStorage.getItem(key)+"</td>\n<td>"+"button"+"</td></tr>\n";
			}
		}
		
		//empty cart
		if (list == "<tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		
		//bind the data to html table
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cart not supported in your browser');
	}
}


//checks if browser has local storage
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}

//runs doShowlAll function when script has loaded
//changed from in html loading due to intermittent drops
window.load=doShowAll();

//change an existing key=>value in the HTML5 storage
/*function ModifyItem() {
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
}*/
