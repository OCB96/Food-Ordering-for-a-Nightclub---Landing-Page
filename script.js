new Vue ({
  el: '#app',
  data: {
    orderMenu: [],
    orderStatus: false,
    fooditems: [
      {
        text: "Butter Chicken",
        price: "Rs. 250",
        description: "Boneless chicken chunks cooked in tomato, onions, spices and butter"
      },
      {
        text: "Chicken Biryani",
        price: "Rs. 130",
        description: "Boneless chicken chunks with buttered yellow rice"
      },
      {
        text: "Veg Burger",
        price: "Rs. 80",
        description: "Veg Burger"
      },
      {
        text: "Barbeque Chicken Pizza",
        price: "Rs. 180",
        description: "It's a pizza, with chicken, and barbeque sauce!"
      }
    ],
    beverages: [
      {
        text: "Lemon Iced Tea",
        price: "Rs. 80",
        description: "Lemon flavored Iced Tea, the Georgia kind"
      },
      {
        text: "Cinnamon Frappe",
        price: "Rs. 130",
        description: "Blended iced coffee, with cinnamon sprinkles"
      },
      {
        text: "Wine",
        price: "Rs. 600",
        description: "The one from Goa"
      },
      {
        text: "Alcohol",
        price: "Rs. 300",
        description: "Whiskey, Rum, Vodka, Gin? Order any."
      }
    ]
  },
  methods: {
    addFooditemToMenu: function() {
      this.orderMenu.text.push(this.fooditem.text);
      this.orderMenu.price.push(this.fooditem.price);
      this.orderStatus=true;
    },
    addBeverageToMenu: function() {
      this.orderMenu.text.push(this.beverage.text);
      this.orderMenu.price.push(this.beverage.price);
      this.orderStatus=true;
    },
    calculateBill: function() {

    }
  }
})
