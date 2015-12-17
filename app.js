(function() {
   var app = angular.module('store', []);

   app.controller('StoreController', function(){
      this.products = ingredients;
   });

   app.controller('PanelController', function(){
      this.tab = 1;
      this.selectTab = function(setTab){
         this.tab = setTab;
      };
      this.isSelected = function(checkTab){
         return this.tab === checkTab;
      };
   });

   app.controller('ReviewController', function(){
      this.review = {};
      this.addReview = function(product){
         product.reviews.push(this.review);
         this.review = {};
      };
   });

   app.directive('productName', function(){
      return {
         restrict: 'E',
         templateUrl: 'product-name.html'
      };
   });

///////////////////////////////
///////////////////////////////
///////////////////////////////

   var ingredients = [
   {
      name: "L-Arganine",
      price: 5.00,
      description: "Vaso dialator",
      canPurchase: true,
      soldOut: false,
      images: [
      {
         full:"arganine.png",
         thumbnail: ""
      },
      {
         full: "",
         thumbnail: ""
      }
      ],
      reviews: []
   },

   {
      name: "L-Glutamine",
      price: 3.00,
      description: "Muscle recover",
      canPurchase: true,
      soldOut: false,
      images: [
      {
         full:"glutamine.jpg",
         thumbnail: ""
      },
      {
         full: "",
         thumbnail: ""
      }
      ],
      reviews: []
   },

   {
      name: "Caffeine",
      price: 8.00,
      description: "Gets you jacked up",
      canPurchase: true,
      soldOut: false,
      images: [
      {
         full:"caffeine.gif",
         thumbnail: ""
      },
      {
         full: "",
         thumbnail: ""
      }
      ],
      reviews: []
   },

   {
      name: "L-Citrulline",
      price: 5.00,
      description: "Vaso dialator",
      canPurchase: true,
      soldOut: false,
      images: [
      {
         full:"citrulline.png",
         thumbnail: ""
      },
      {
         full: "",
         thumbnail: ""
      }
      ],
      reviews: []
   }
   ]

})();

