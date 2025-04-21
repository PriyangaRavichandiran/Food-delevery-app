import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import Mealitem from "./MealItem/Mealitem";
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Pizza Margherita',
    description: 'Classic Italian pizza with tomato, mozzarella, and basil.',
    price: 12.50,
  },
  {
    id: 'm6',
    name: 'Chicken Curry',
    description: 'Spicy and flavorful Indian chicken curry with rice.',
    price: 15.00,
  },
  {
    id: 'm7',
    name: 'Salmon with Asparagus',
    description: 'Grilled salmon fillet with fresh asparagus.',
    price: 20.00,
  },
  {
    id: 'm8',
    name: 'Beef Tacos',
    description: 'Delicious Mexican tacos with seasoned beef and all the fixings.',
    price: 10.00,
  },
  {
    id: 'm9',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce salad with croutons and Caesar dressing.',
    price: 8.00,
  },
  {
    id: 'm10',
    name: 'Mushroom Risotto',
    description: 'Creamy Italian risotto with a variety of mushrooms.',
    price: 17.50,
  },
  {
    id: 'm11',
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta dish with eggs, pancetta, and parmesan cheese.',
    price: 14.00,
  },
  {
    id: 'm12',
    name: 'Shrimp Scampi',
    description: 'Shrimp sautéed in garlic butter and white wine, served with linguine.',
    price: 21.00,
  },
  {
    id: 'm13',
    name: 'Vegetarian Chili',
    description: 'Hearty and flavorful chili made with a variety of vegetables and beans.',
    price: 9.50,
  },
  {
    id: 'm14',
    name: 'French Onion Soup',
    description: 'Classic French soup with caramelized onions and melted cheese.',
    price: 11.00,
  },
  {
    id: 'm15',
    name: 'Chicken Caesar Wrap',
    description: 'Grilled chicken, romaine lettuce, and Caesar dressing in a soft wrap.',
    price: 12.00,
  },
  {
    id: 'm16',
    name: 'Steak Frites',
    description: 'Grilled steak served with crispy French fries.',
    price: 25.00,
  },
  {
    id: 'm17',
    name: 'Pad Thai',
    description: 'Thai stir-fried noodles with shrimp, tofu, peanuts, and vegetables.',
    price: 13.50,
  },
  {
    id: 'm18',
    name: 'Greek Salad',
    description: 'Fresh salad with tomatoes, cucumbers, feta cheese, and olives.',
    price: 8.50,
  },
  {
    id: 'm19',
    name: 'Chocolate Lava Cake',
    description: 'Rich and decadent chocolate cake with a molten chocolate center.',
    price: 7.00,
  },
  {
    id: 'm20',
    name: 'Ice Cream Sundae',
    description: 'Classic dessert with vanilla ice cream, chocolate sauce, and toppings.',
    price: 6.00,
  },
];


  const AvailableMeals =()=>{
    const mealsList =DUMMY_MEALS.map(meal=> <Mealitem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />  )
    return <section className={classes.meals}>
        <Card><ul>{mealsList}</ul></Card>
        
    </section>
  };export default AvailableMeals;