const validProductInBody = {
	"name": "Martelo de Thor",
	"price": "30 peças de ouro",
	"orderId": 4,
  };
  
  const noNameProductInBody = {
	  "name": "",
	"price": "30 peças de ouro",
	"orderId": 4,
  };
  
  const wrongTypeName = {
	  "name": 123,
	"price": "30 peças de ouro",
	"orderId": 4,
  };
  
  const nameWithInvalidLength = {
	  "name": 'xx',
	"price": "30 peças de ouro",
	"orderId": 4,
  };
  
  const noPriceProductInBody = {
	"name": "Martelo de Thor",
	  "price": "",
	"orderId": 4,
  };
  
  const wrongTypePrice = {
	"name": "Martelo de Thor",
	  "price": 123,
	"orderId": 4,
  };
  
  const priceWithInvalidLength = {
	"name": "Martelo de Thor",
	  "price": "xx",
	"orderId": 4,
  };
  
  const noOrderIdProductInBody = {
	"name": "Martelo de Thor",
	"price": "30 peças de ouro",
	  "orderId": '',
  };
  
  const existingProduct = {
	"id": 6,
	"name": "Martelo de Thor",
	"price": "30 peças de ouro",
	  "orderId": 4,
  };
  
  const allProductsInDB = [
	  {
		  "id": 1,
		  "name": "Excalibur",
		  "price": "10 peças de ouro",
		  "orderId": 1
	  },
	  {
		  "id": 2,
		  "name": "Espada Justiceira",
		  "price": "20 peças de ouro",
		  "orderId": 1
	  },
	  {
		  "id": 3,
		  "name": "Lira de Orfeu",
		  "price": "1 peça de ouro",
		  "orderId": 2
	  },
	  {
		  "id": 4,
		  "name": "Armadura de Aquiles",
		  "price": "1 peça de ouro",
		  "orderId": 2
	  },
	  {
		  "id": 5,
		  "name": "Harpa de Dagda",
		  "price": "15 peças de ouro",
		  "orderId": 3
	  },
  ];
  
  export default {
	validProductInBody,
	existingProduct,
	noNameProductInBody,
	  wrongTypeName,
	  nameWithInvalidLength,
	noPriceProductInBody,
	  wrongTypePrice,
	  priceWithInvalidLength,
	noOrderIdProductInBody,
	allProductsInDB,
  };