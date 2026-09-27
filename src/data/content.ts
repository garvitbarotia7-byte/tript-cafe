export interface Dish {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export const featuredDishes: Dish[] = [
  {
    name: 'Masala Chai Latte',
    description: 'House assam steeped with cardamom, ginger and a soft oat-milk pull.',
    price: '₹180',
    image:
      'https://images.pexels.com/photos/13689951/pexels-photo-13689951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Most loved',
  },
  {
    name: 'Keema Croissant',
    description: 'Flaky all-butter croissant folded with slow-cooked spiced lamb keema.',
    price: '₹320',
    image:
      'https://images.pexels.com/photos/30359471/pexels-photo-30359471.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Fusion',
  },
  {
    name: 'Saffron Cold Brew',
    description: 'Eighteen-hour cold brew kissed with saffron, rose and a hint of honey.',
    price: '₹240',
    image:
      'https://images.pexels.com/photos/30427464/pexels-photo-30427464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Barista special',
  },
  {
    name: 'Paneer & Pesto Toast',
    description: 'Sourdough, grilled paneer, basil pesto and a slow-roasted tomato.',
    price: '₹290',
    image:
      'https://images.pexels.com/photos/31479308/pexels-photo-31479308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    name: 'Filter Coffee Affogato',
    description: 'South-Indian filter coffee poured over vanilla bean gelato.',
    price: '₹260',
    image:
      'https://images.pexels.com/photos/35258189/pexels-photo-35258189.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tag: 'Dessert',
  },
  {
    name: 'Avocado Chaat Toast',
    description: 'Smashed avocado, kala namak, pomegranate and crisp sev on sourdough.',
    price: '₹310',
    image:
      'https://images.pexels.com/photos/21370678/pexels-photo-21370678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface MenuCategory {
  title: string;
  note: string;
  items: { name: string; description: string; price: string }[];
}

export const menu: MenuCategory[] = [
  {
    title: 'Appetizers',
    note: 'Bites & starters',
    items: [
      { name: 'Veg Burger', description: '', price: '₹110' },
      { name: 'Cheese Burger', description: '', price: '₹150' },
      { name: 'Paneer Burger', description: '', price: '₹180' },
      { name: 'Kimchi Potato Wedges', description: '', price: '₹150' },
      { name: 'Salted French Fries', description: '', price: '₹110' },
      { name: 'Peri Peri French Fries', description: '', price: '₹150' },
      { name: 'Cheese Garlic Bread', description: '', price: '₹150' },
      { name: 'Paneer Tikka Sandwich', description: '', price: '₹180' },
      { name: 'Mushroom Cheese Sandwich', description: '', price: '₹210' },
      { name: 'Avocado Sev Puri', description: '', price: '₹230' },
    ],
  },
  {
    title: 'Starters',
    note: 'Crispy & warm',
    items: [
      { name: 'Veg Fried Momos', description: '', price: '₹120' },
      { name: 'Steam Momos', description: '', price: '₹120' },
      { name: 'Paneer Fried Momos', description: '', price: '₹140' },
      { name: 'Crunchy Fried Momos', description: '', price: '₹150' },
      { name: 'Honey Chilli Potato', description: '', price: '₹180' },
      { name: 'Chilli Potato', description: '', price: '₹190' },
      { name: 'Veg Manchurian Gravy', description: '', price: '₹190' },
      { name: 'Veg Manchurian Dry', description: '', price: '₹360' },
      { name: 'Chilli Paneer Dry', description: '', price: '₹230' },
      { name: 'Chilli Paneer Gravy', description: '', price: '₹240' },
      { name: 'Burrito Bowl', description: '', price: '₹210' },
    ],
  },
  {
    title: 'Soups',
    note: 'Comfort bowls',
    items: [
      { name: 'Tomato Soup', description: '', price: '₹150' },
      { name: 'Cream of Mushroom Soup', description: '', price: '₹170' },
      { name: 'Almond Broccoli Soup', description: '', price: '₹210' },
    ],
  },
  {
    title: 'Amuse-Bouche',
    note: 'Little bites',
    items: [
      { name: 'Tomato Basil Bruschetta', description: '', price: '₹160' },
      { name: 'Jalapeño Cheese Popper', description: '', price: '₹190' },
      { name: 'Avocado Toast', description: '', price: '₹230' },
    ],
  },
  {
    title: 'Noodles & Rice',
    note: 'Wok-fired favourites',
    items: [
      { name: 'Fried Rice', description: '', price: '₹180' },
      { name: 'Veg Noodles', description: '', price: '₹210' },
      { name: 'Chilli Garlic Noodles', description: '', price: '₹210' },
      { name: 'Hakka Noodles', description: '', price: '₹230' },
    ],
  },
  {
    title: 'Salads',
    note: 'Fresh & bright',
    items: [
      { name: 'Caesar Salad', description: '', price: '₹210' },
      { name: 'Russian Salad', description: '', price: '₹230' },
      { name: 'Avocado Quinoa Salad', description: '', price: '₹280' },
    ],
  },
  {
    title: 'Main Course',
    note: 'Hearty plates',
    items: [
      { name: 'Pesto Walnut Pasta', description: '', price: '₹270' },
      { name: 'Alfredo Fettuccine', description: '', price: '₹260' },
      { name: 'Aglio Olio Spaghetti', description: '', price: '₹280' },
      { name: 'Red Thai Curry with Jasmine Rice', description: '', price: '₹320' },
      { name: 'Yellow Thai Curry with Jasmine Rice', description: '', price: '₹340' },
      { name: 'Green Thai Curry with Jasmine Rice', description: '', price: '₹380' },
    ],
  },
  {
    title: 'Pizza',
    note: 'Baked to order',
    items: [
      { name: 'Farmhouse Pizza', description: '', price: '₹300' },
      { name: 'Pesto Pizza', description: '', price: '₹350' },
      { name: 'Fire in the Hall Pizza', description: '', price: '₹380' },
    ],
  },
  {
    title: 'Shakes',
    note: 'Blended classics',
    items: [
      { name: 'Strawberry Shake', description: '', price: '₹130' },
      { name: 'Blueberry Shake', description: '', price: '₹140' },
      { name: 'Kitkat Shake', description: '', price: '₹170' },
      { name: 'Bonty/Snicker Shake', description: '', price: '₹170' },
      { name: 'Choco Brownie Shake', description: '', price: '₹200' },
      { name: 'Hazelnut Nutella Blast', description: '', price: '₹200' },
      { name: 'Biscoff Shake', description: '', price: '₹240' },
    ],
  },
  {
    title: 'Cold Frappes',
    note: 'Frozen & creamy',
    items: [
      { name: 'Classic Frappe', description: '', price: '₹130' },
      { name: 'Double Chocochip Frappe', description: '', price: '₹160' },
      { name: 'Hazelnut Frappe', description: '', price: '₹160' },
      { name: 'Irish Frappe', description: '', price: '₹160' },
      { name: 'Oreo Frappe', description: '', price: '₹160' },
      { name: 'Nutella Frappe', description: '', price: '₹240' },
      { name: 'Tiramisu Brownie Frappe', description: '', price: '₹260' },
      { name: 'Caramello Frappe', description: '', price: '₹170' },
    ],
  },
  {
    title: 'Tea & Refreshers',
    note: 'Steeped & chilled',
    items: [
      { name: 'Masala Tea', description: '', price: '₹25' },
      { name: 'Ginger Tea', description: '', price: '₹25' },
      { name: 'Elaichi Tea', description: '', price: '₹25' },
      { name: 'Litchi Slush', description: '', price: '₹140' },
      { name: 'Orange Slush', description: '', price: '₹140' },
      { name: 'Masala Lemonade', description: '', price: '₹120' },
      { name: 'Spicy Guvava', description: '', price: '₹130' },
      { name: 'Virgin Mojito', description: '', price: '₹130' },
      { name: 'Watermelon Mojito', description: '', price: '₹150' },
      { name: 'Black Currant Mojito', description: '', price: '₹150' },
      { name: 'Lemon Mint Iced Tea', description: '', price: '₹120' },
      { name: 'Blueberry Iced Tea', description: '', price: '₹140' },
      { name: 'Green Apple Iced Tea', description: '', price: '₹140' },
      { name: 'Peach Iced Tea', description: '', price: '₹150' },
      { name: 'Watermelon Iced Tea', description: '', price: '₹150' },
      { name: 'Red Bull Iced Tea', description: '', price: '₹210' },
    ],
  },
  {
    title: 'Coffee',
    note: 'From hot to iced',
    items: [
      { name: 'Regular Hot Coffee', description: '', price: '₹110' },
      { name: 'Cappuccino', description: '', price: '₹120' },
      { name: 'Cafe Latte', description: '', price: '₹120' },
      { name: 'Cafe Mocha', description: '', price: '₹130' },
      { name: 'Irish Cappuccino', description: '', price: '₹130' },
      { name: 'Hazelnut Cappuccino', description: '', price: '₹130' },
      { name: 'Espresso on the Rocks', description: '', price: '₹100' },
      { name: 'Iced Americano', description: '', price: '₹110' },
      { name: 'Iced Latte', description: '', price: '₹140' },
      { name: 'Iced Coffee', description: '', price: '₹140' },
      { name: 'Tonic Espresso', description: '', price: '₹150' },
      { name: 'Iced Caramel', description: '', price: '₹160' },
      { name: 'Condensed Latte', description: '', price: '₹170' },
      { name: 'Orange Espresso', description: '', price: '₹170' },
      { name: 'Vietnamese Cold Brew', description: '', price: '₹170' },
      { name: 'Orange Cold Brew', description: '', price: '₹170' },
      { name: 'Cranbarry Cold Brew', description: '', price: '₹180' },
      { name: 'Espresso Shot', description: '', price: '₹80' },
      { name: 'Americano', description: '', price: '₹110' },
      { name: 'Signature Affogato', description: '', price: '₹140' },
    ],
  },
  {
    title: 'Matcha & Cocoa',
    note: 'Soft, rich & earthy',
    items: [
      { name: 'Iced Matcha', description: '', price: '₹170' },
      { name: 'Strawberry Matcha', description: '', price: '₹180' },
      { name: 'Orange Matcha', description: '', price: '₹190' },
      { name: 'Classic Hot Chocolate', description: '', price: '₹120' },
      { name: 'Hot Nutella', description: '', price: '₹140' },
      { name: 'Belgian Hot Chocolate', description: '', price: '₹140' },
    ],
  },
];

export const galleryImages = [
  'https://images.pexels.com/photos/12570668/pexels-photo-12570668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/20360834/pexels-photo-20360834.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/29833130/pexels-photo-29833130.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // 'https://images.pexels.com/photos/8974874/pexels-photo-8974874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/30427464/pexels-photo-30427464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/36484101/pexels-photo-36484101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/31479308/pexels-photo-31479308.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  // 'https://images.pexels.com/photos/13689951/pexels-photo-13689951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export const testimonials: Testimonial[] = [
  {
    //multiline string quote
    quote: `Such a cute and cozy café ✨☕️
    Loved the warm vibe, delicious food, and perfect coffee. The staff were super sweet and welcoming. A perfect little spot to relax and chill`,
    name: "Dr. Tripti Sharma",
detail: "Frequent visitor for weekend brunch",
  },
  {
    quote: 'The pizza disappeared faster than my motivation to study! Highly recommended for anyone looking for a delicious and satisfying meal!', 
    name: 'Ashish Shukla',
    detail: 'Loves the weekend pizza special',
  },
  {
    quote:
      "Tried the brownie cake here and it was really good. 🤤👌 It was soft, fresh, and had a nice chocolate taste. Not too sweet, just perfect. I really liked it and would definitely try it again. ⭐⭐⭐⭐⭐❤️",
    name: 'Sonal Sharma',
    detail: 'Regular since opening week',
  },
];

// export const hours = [
//   { day: 'Monday', time: 'Closed' },
//   { day: 'Tuesday – Friday', time: '8:00 – 21:00' },
//   { day: 'Saturday', time: '8:30 – 22:00' },
//   { day: 'Sunday', time: '8:30 – 20:00' },
// ];
