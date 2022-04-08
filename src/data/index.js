import {
  faCoffee,
  faList,
  faShoppingCart,
  faUser,
  faPowerOff
} from "@fortawesome/free-solid-svg-icons";
export const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  }
];

export const navItems = [
  { id: 1, text: "Man" },
  { id: 2, text: "Woman" },
  { id: 3, text: "Electronics" },
  { id: 3, text: "Jewerly" }
];

export const heroInfo = [
  {
    title: "Welcome to our online store",
    description: `
  Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley`
  }
];

export const sideBarItems = [
  { id: 1, text: "products", icon: faList, to: "/admin" },
  { id: 2, text: "orders", icon: faShoppingCart, to: "/admin/orders" },
  { id: 3, text: "clients", icon: faUser, to: "/admin/clients" },
  { id: 4, text: "logout", icon: faPowerOff }
];

export const productsColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  {
    field: "price",
    headerName: "price",
    type: "number",
    width: 90
  },
  { field: "description", headerName: "Description", width: 430 },

  {
    field: "category",
    headerName: "Category",
    width: 130
  }
];

export const productsCategories = [
  { id: 1, value: "men", label: "man's clothing" },
  { id: 2, value: "women", label: "women's clothing" },
  { id: 3, value: "electronics", label: "electronics" },
  { id: 1, value: "jewerly", label: "jewerly" }
];

export const orders = [
  {
    id: 1,
    number: "025941da",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley`
  },
  {
    id: 2,
    number: "0594826bs",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley`
  }
];
export const ordersColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "number", headerName: "Number", width: 130 },

  { field: "description", headerName: "Description", width: 430 }
];
