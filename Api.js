const profile = {
  name: "mohammad",
  family: "mohseni",
  age: 22,
  wallet: "300000$",
};
const products = [
  {
    id: 1,
    title: "product 1",
    description: "des for product 1",
    price: 30000,
  },
  {
    id: 2,
    title: "product 2",
    description: "des for product 2",
    price: 30000,
  },
  {
    id: 3,
    title: "product 3",
    description: "des for product 3",
    price: 30000,
  },
  {
    id: 4,
    title: "product 4",
    description: "des for product 4",
    price: 30000,
  },
];
const comments = [
  {
    comment: "its ok",
  },
  {
    comment: "its good",
  },
  {
    comment: "its bad",
  },
  {
    comment: "its very good",
  },
  {
    comment: "its down",
  },
];
const basket = [
  {
    productID: 1,
    count: 3,
  },
  {
    productID: 3,
    count: 2,
  },
];
module.exports = {
  profile,
  products,
  comments,
  basket,
};
