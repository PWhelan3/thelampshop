//map to store prices for each prodcut
const productsPrice = new Map([
	["One Lamps", 35],
	["Meso Arch", 25],
	["Marbled Mound", 60],
	["Projector Lamp", 40],
	["Subida", 80],
	["Ridged", 30],
	["Diglett", 35],
	["Wood Vase", 30],
	["Milk Bottle", 25],
	["Floating Stem", 40],
	["Brass Guard", 35],
	["Black Based", 25],
	["Acorn", 40],
	["Blue Tessellations", 40],
	["Mahogany Top", 28],
	["Aztec Chevron", 20],
	["Rainforest Vase", 65],
	["Sand Jar", 35],
	["Counterweight", 40],
	["Brass Post", 30],
	["Crystal Fall", 6],
	["Tripod Wood", 45],//fix
	["Bright Room Collection", 30],//fix
	["Acid Cat", 200],
	["Heavy Clay", 30],
	["UFO", 80],
	["Dark Tripod", 40],
	["Stubby Chip", 25],
	["Lamp by Bjork", 120],
	["Cylindircal Record", 45],
	["Skinny Floor", 55],
	["Behind You", 65],
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
		var subtotal=0.00;
		var tax = 0.00;
		var shipping = 0.00;
		var total = 0.00;
		var key = "";
		var list = " <tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th></tr>\n";
		//var dropDown="<option value=item>Item</option>";
		var i = 0;
		//increment through local storage
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			//exclude theme from light/dark mode
			if(key!="theme"){
				list += "<tr><td>" + key + "</td>\n<td>"+ "€"+productsPrice.get(key) +"</td>\n<td>"
					+ localStorage.getItem(key) +"</td>\n<td>"+ "€"
					+ productsPrice.get(key)*localStorage.getItem(key)+"</td></tr>\n";
				//dropDown+="<option value=" + key + ">"+key+"</option>";
				subtotal=subtotal+(productsPrice.get(key)*localStorage.getItem(key));
			}
		}
		
		tax = subtotal*0.23;
		shipping=5.00;
		total=subtotal+tax+shipping;
		subtotal.toString(2);
		tax.toString(2);
		shipping.toString(2);
		total.toString(2);
		
		//empty cart
		if (list == "<tr><th>Item</th><th>Price</th><th>Quantity</th><th>Total</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		
		
		//bind the data to html table
		document.getElementById('subtotal').innerHTML=subtotal;
		document.getElementById('tax').innerHTML=tax;
		document.getElementById('shipping').innerHTML=shipping;
		document.getElementById('total').innerHTML=total;
		document.getElementById('list').innerHTML=list;
		//document.getElementById('dropDown').innerHTML=dropDown;
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

