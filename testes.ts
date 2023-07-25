type Product = {
  name: string;
  id: number;
  price: number;
};

type CartProduct = Product & { quantity: number };

const cart: CartProduct[] = [];

const products: Product[] = [
  { name: 'algo', id: 1, price: 2 },
  { name: 'algo 1', id: 2, price: 3 },
  { name: 'algo 2', id: 3, price: 4 },
  { name: 'algo 3', id: 4, price: 5 },
];

function addProduct(productId: number) {
  const findProduct = products.find((product) => (product.id = productId));

  if (findProduct && !cart.includes(findProduct as CartProduct)) {
    cart.push({ ...findProduct, quantity: 1 });
  } else {
    const inCartProduct = cart.find((product) => product.id === productId);
    if (inCartProduct) {
      inCartProduct.quantity += 1;
    }
  }
}

addProduct(2);
