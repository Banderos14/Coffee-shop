import cold_brew from "../assets/menu/cold_brew.svg";
import macchiato from "../assets/menu/macchiato.svg";
import espresso from "../assets/menu/espresso.svg";
import black_coffee from "../assets/menu/black_coffee.svg";
import cappuccino from "../assets/menu/cappuccino.svg";
import flat_white from "../assets/menu/Flat_White.svg";
import latte from "../assets/menu/latte.svg";
import mocha from "../assets/menu/mocha.svg";
import americano from "../assets/menu/americano.svg";
import virgin_mojito from "../assets/menu/virgin_mojito.svg";
import iced_latte from "../assets/menu/iced_latte.svg";
import iced_americano from "../assets/menu/iced_americano.svg";
import iced_mocha from "../assets/menu/iced_mocha.svg";
import iced_tea from "../assets/menu/iced_tea.svg";
import bubble_tea from "../assets/menu/bubble_tea.svg";
import brownie from "../assets/menu/brownie.svg";
import macaroon from "../assets/menu/macaroon.svg";
import donut from "../assets/menu/donut.svg";
import muffin from "../assets/menu/muffin.svg";
import biscotti from "../assets/menu/biscotti.svg";



const products = [
  {
    id: 'cold_brew',
    name: 'Cold Brew',
    category: "Coffee",
    isNew: true,
    description: 'Smooth and mellow cold brew coffee.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 6.75,
      Medium: 7.25,
      Large: 7.75
    },
    allergens: ['None'],
    tags: ["cold", "smooth", "strong"],
    image: cold_brew,
  },
  {
    id: 'mocha',
    name: 'Mocha',
    category: "Coffee",
    isNew: true,
    description: 'Coffee mixed with chocolate and milk.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 6.50,
      Medium: 7.00,
      Large: 7.50
    },
    allergens: ['Milk', 'Soy'],
    tags: ["chocolate", "milk", "sweet"],
    image: mocha,
  },
  {
    id: 'espresso',
    name: 'Espresso',
    category: "Coffee",
    description: 'Strong and bold single-shot coffee.',
    sizes: ['Small'],
    price: {
      Small: 4.00
    },
    allergens: ['None'],
    tags: ["strong", "short", "bitter"],
    image: espresso,
  },
  {
    id: 'black_coffee',
    name: 'Black Coffee',
    category: "Coffee",
    description: 'Classic black coffee with rich aroma.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 4.50,
      Medium: 5.00,
      Large: 5.50
    },
    allergens: ['None'],
    tags: ["strong", "bitter", "bold"],
    image: black_coffee,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: "Coffee",
    description: 'Espresso with steamed milk and foam.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 6.00,
      Medium: 6.50,
      Large: 7.00
    },
    allergens: ['Milk'],
    tags: ["milk", "foam", "classic"],
    image: cappuccino,
  },
  {
    id: 'flat_white',
    name: 'Flat White',
    category: "Coffee",
    description: 'Velvety coffee with microfoam milk.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 6.20,
      Medium: 6.70,
      Large: 7.20
    },
    allergens: ['Milk'],
    tags: ["milk", "strong", "smooth"],
    image: flat_white,
  },
  {
    id: 'latte',
    name: 'Latte',
    category: "Coffee",
    description: 'Espresso with lots of steamed milk.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 6.25,
      Medium: 6.75,
      Large: 7.25
    },
    allergens: ['Milk'],
    tags: ["milk", "smooth", "creamy"],
    image: latte,
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    category: "Coffee",
    description: 'Espresso with a dash of frothy milk.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 6.10,
      Medium: 6.60,
      Large: 7.10
    },
    allergens: ['Milk'],
    tags: ["strong", "milk", "layered"],
    image: macchiato,
  },
  {
    id: 'americano',
    name: 'Americano',
    category: "Coffee",
    description: 'Our Americano is made by combining rich, full-bodied espresso with hot water, creating a perfectly balanced and smooth cup that’s lighter than espresso but stronger than regular drip coffee.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 5.25,
      Medium: 5.75,
      Large: 6.25
    },
    allergens: ['None'],
    tags: ["strong", "water", "classic"],
    image: americano,
  },
  {
    id: 'virgin_mojito',
    name: 'Virgin Mojito',
    category: 'Cold Drinks',
    isNew: true,
    description: 'Refreshing minty lime soda drink.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 5.75,
      Medium: 6.25,
      Large: 6.75
    },
    allergens: ['None'],
    tags: ["mint", "cold", "refreshing"],
    image: virgin_mojito,
  },
  {
    id: 'iced_latte',
    name: 'Iced Latte',
    category: 'Cold Drinks',
    description: 'Chilled latte served over ice.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 6.00,
      Medium: 6.50,
      Large: 7.00
    },
    allergens: ['Milk'],
    tags: ["cold", "milk", "smooth"],
    image: iced_latte,
  },
  {
    id: 'iced_americano',
    name: 'Iced Americano',
    category: 'Cold Drinks',
    description: 'Espresso over cold water and ice.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 5.00,
      Medium: 5.50,
      Large: 6.00
    },
    allergens: ['None'],
    tags: ["cold", "water", "strong"],
    image: iced_americano,
  },
  {
    id: 'iced_mocha',
    name: 'Iced Mocha',
    category: 'Cold Drinks',
    description: 'Iced coffee with chocolate flavor.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 6.50,
      Medium: 7.00,
      Large: 7.50
    },
    allergens: ['Milk', 'Soy'],
    tags: ["cold", "milk", "chocolate"],
    image: iced_mocha,
  },
  {
    id: 'iced_tea',
    name: 'Iced Tea',
    category: 'Cold Drinks',
    description: 'Chilled black tea with lemon.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 4.50,
      Medium: 5.00,
      Large: 5.50
    },
    allergens: ['None'],
    tags: ["cold", "refreshing", "light"],
    image: iced_tea,
  },
  {
    id: 'bubble_tea',
    name: 'Bubble Tea',
    category: 'Cold Drinks',
    description: 'Tea with milk and tapioca pearls.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 5.75,
      Medium: 6.25,
      Large: 6.75
    },
    allergens: ['Milk'],
    tags: ["sweet", "cold", "milky"],
    image: bubble_tea,
  },
  {
    id: 'brownie',
    name: 'Brownie',
    category: 'Bakery',
    isNew: true,
    description: 'Rich chocolate dessert square.',
    sizes: ['One Size'],
    price: {
      Small: 4.20
    },
    allergens: ['Gluten', 'Eggs', 'Milk'],
    tags: ["chocolate", "rich", "baked"],
    image: brownie,
  },
  {
    id: 'macaroon',
    name: 'Macaroon',
    category: 'Bakery',
    description: 'Coconut-based sweet delight.',
    sizes: ['One Size'],
    price: {
      Small: 3.00
    },
    allergens: ['Eggs', 'Nuts'],
    tags: ["sweet", "light", "baked"],
    image: macaroon,
  },
  {
    id: 'donut',
    name: 'Donut',
    category: 'Bakery',
    description: 'Fried sweet ring with topping.',
    sizes: ['One Size'],
    price: {
      Small: 2.80
    },
    allergens: ['Gluten', 'Milk'],
    tags: ["sweet", "fried", "classic"],
    image: donut,
  },
  {
    id: 'muffin',
    name: 'Muffin',
    category: 'Bakery',
    description: 'Soft baked pastry with filling.',
    sizes: ['One Size'],
    price: {
      Small: 3.20
    },
    allergens: ['Gluten', 'Eggs', 'Milk'],
    tags: ["baked", "soft", "chocolate"],
    image: muffin,
  },
  {
    id: 'biscotti',
    name: 'Biscotti',
    category: 'Bakery',
    description: 'Crunchy almond-flavored cookie.',
    sizes: ['One Size'],
    price: {
      Small: 2.90
    },
    allergens: ['Gluten', 'Nuts'],
    tags: ["crunchy", "classic", "baked"],
    image: biscotti,
  }
];
export { products };
