new Vue ({
  el: '#app',
  data: {
    bill: 0,
    foodbill: 0,
    beveragebill: 0,
    foodname: [],
    beveragename: [],
    orderStatus: 0,
    fooditems: [
      {
        text: "Butter Chicken",
        price: 250,
        description: "Boneless chicken chunks cooked in tomato, onions, spices and butter"
      },
      {
        text: "Chicken Biryani",
        price: 130,
        description: "Boneless chicken chunks with buttered yellow rice"
      },
      {
        text: "Veg Burger",
        price: 80,
        description: "Veg Burger"
      },
      {
        text: "Barbeque Chicken Pizza",
        price: 180,
        description: "It's a pizza, with chicken, and barbeque sauce!"
      }
    ],
    beverages: [
      {
        text: "Lemon Iced Tea",
        price: 80,
        description: "Lemon flavored Iced Tea, the Georgia kind"
      },
      {
        text: "Cinnamon Frappe",
        price: 130,
        description: "Blended iced coffee, with cinnamon sprinkles"
      },
      {
        text: "Wine",
        price: 600,
        description: "The one from Goa"
      },
      {
        text: "Alcohol",
        price: 300,
        description: "Whiskey, Rum, Vodka, Gin? Order any."
      }
    ]
  },
  methods: {
    addFooditemToMenu: function() {
      this.foodname.push(this.text);
      this.foodbill+=this.price;
      this.orderStatus=1;
    },
    addBeverageToMenu: function() {
      this.beveragename.push(this.text);
      this.beveragebill+=this.price;
      this.orderStatus=1;
    },
    calculateBill: function() {
      this.bill=this.foodbill+this.beveragebill;
    }
  }
})
