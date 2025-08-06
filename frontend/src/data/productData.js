import cold_brew from "../assets/menu/cold_brew.png";
import macchiato from "../assets/menu/macchiato.png";
import espresso from "../assets/menu/espresso.png";
import black_coffee from "../assets/menu/black_coffee.png";
import cappuccino from "../assets/menu/cappuccino.png";
import flat_white from "../assets/menu/Flat_White.png";
import latte from "../assets/menu/latte.png";
import mocha from "../assets/menu/mocha.png";
import americano from "../assets/menu/americano.png";
import virgin_mojito from "../assets/menu/virgin_mojito.png";
import iced_latte from "../assets/menu/iced_latte.png";
import iced_americano from "../assets/menu/iced_americano.png";
import iced_mocha from "../assets/menu/iced_mocha.png";
import iced_tea from "../assets/menu/iced_tea.png";
import bubble_tea from "../assets/menu/bubble_tea.png";
import brownie from "../assets/menu/brownie.png";
import macaroon from "../assets/menu/macaroon.png";
import donut from "../assets/menu/donut.png";
import muffin from "../assets/menu/muffin.png";
import biscotti from "../assets/menu/biscotti.png";



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
    image: cold_brew,
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    category: "Coffee",
    isNew: true,
    description: 'Espresso with a dash of frothy milk.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 6.10,
      Medium: 6.60,
      Large: 7.10
    },
    allergens: ['Milk'],
    image: macchiato,
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
    image: latte,
  },
  {
    id: 'mocha',
    name: 'Mocha',
    category: "Coffee",
    description: 'Coffee mixed with chocolate and milk.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 6.50,
      Medium: 7.00,
      Large: 7.50
    },
    allergens: ['Milk', 'Soy'],
    image: mocha,
  },
  {
    id: 'americano',
    name: 'Americano',
    category: "Coffee",
    description: 'Espresso diluted with hot water.',
    sizes: ['Small', 'Medium', 'Large'],
    price: {
      Small: 5.25,
      Medium: 5.75,
      Large: 6.25
    },
    allergens: ['None'],
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
    image: biscotti,
  }
];
export { products };
