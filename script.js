new Vue ({
  el: '#app',
  data: {
    bill: 0,
    foodname: [],
    beveragename: [],
    price: [],
    orderStatus: false,
    fooditems: [
      {
        text: "Butter Chicken",
        price: 250,
        description: "Boneless chicken chunks cooked in spices and butter"
      },
      {
        text: "Chicken Biryani",
        price: 130,
        description: "Boneless chicken chunks with buttered yellow rice"
      },
      {
        text: "Veg Burger",
        price: 80,
        description: "Burger, with aloo patty, and loaded with veggies"
      },
      {
        text: "BBQ Chicken Pizza",
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
    addFooditemToMenu: function(fooditem) {
      this.foodname.push(fooditem.text);
      this.price.push(fooditem.price),
      this.orderStatus=true;
    },
    addBeverageToMenu: function(beverage) {
      this.beveragename.push(beverage.text);
      this.price.push(beverage.price);
      this.orderStatus=true;
    },
    calculateBill: function() {
      this.bill=0;
      for(i=0;i<this.price.length;i++)
      {
        this.bill+=parseInt(this.price[i]);
      }

    },
    removefood: function (index) {
      this.foodname.splice(index,1);
      this.price.splice(index,1);
    },
    removebeverage: function(index) {
      this.beveragename.splice(index,1);
      this.price.splice(index,1);
    }
  }
})
