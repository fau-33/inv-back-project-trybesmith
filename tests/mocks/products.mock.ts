const validProductInBody = {
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "orderId": 4,
  };
  
  const noNameProductInBody = {
    "price": "30 peças de ouro",
    "orderId": 4,
  };
  
  const noPriceProductInBody = {
    "name": "Martelo de Thor",
    "orderId": 4,
  };
  
  const noOrderIdProductInBody = {
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
  };
  
  const existingProduct = {
    "id": 6,
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
  };
  
  export default {
    validProductInBody,
    existingProduct,
    noNameProductInBody,
    noPriceProductInBody,
    noOrderIdProductInBody,
  };