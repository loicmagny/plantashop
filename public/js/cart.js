

function CatchValues(_id, price) {
	let cart = sessionStorage.getItem('cart');
	let prices = sessionStorage.getItem('prices');
	if (cart) {
		cart += _id + '|';
		sessionStorage.setItem('cart', cart);
	} else if (!cart) {
		cart = _id + '|';
		sessionStorage.setItem('cart', cart);
	}
	if (prices) {
		prices += price + '|';
		sessionStorage.setItem('prices', prices);
	} else if (!prices) {
		prices = price + '|';
		sessionStorage.setItem('prices', prices);
	}
	sessionStorage.setItem('cart', datas);
}

function displayCart() {
	let products = sessionStorage.getItem('cart');
	let prices = sessionStorage.getItem('prices');
	let cart = [];
	if (products) {
		products = products.split('|').filter(Boolean);
		cart[0] = products;
	}
	if (prices) {
		prices = prices.split('|').filter(Boolean);
		cart[1] = prices;
	}
let datas = JSON.parse("./Datas/products.json")
	for (let j = 0; j < length; j++) {
		for (let i = 0; i < cart[0].length; i++) {
			if (cart[0] == datas[j].id) {
				let card = document.createElement('div');
				card.setAttribute('class', 'card');
				let img = document.createElement('img');
				img.setAttribute('class', 'card_img');
				img.setAttribute('src', datas[j].img);
				let card_content = document.createElement('div');
				card_content.setAttribute('class', 'card_content');
				let card_content_title = document.createElement('p');
				card_content_title.setAttribute('class', 'card_content_title');
				card_content_title.createTextNode(datas[j].name);
				let card_content_price = document.createElement('p');
				card_content_price.setAttribute('class', 'card_content_price');
				card_content_price.createTextNode(datas[j].price);
				let icon = document.createElement('i');
				icon.setAttribute('class', 'card_icon fa-regular fa-heart');
			}
		}
	}
}

displayCart();
