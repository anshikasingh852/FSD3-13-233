import http from'http';
import {reviews,items} from "./data.js";
const server = http.createServer((req, res) => {
    const product = {
        id:1,
        name:'Mobile',
        price:4000,
        rating:4.7,
        review:225
    };
    const items = [
      {
        id: 1,
        name: "Traditional Clay Matka",
        price: 599,
        image: "images/clay-matka.jpg",
        desc: "Handcrafted clay pot for naturally cool and refreshing drinking water.",
      },
      {
        id: 2,
        name: "Earthen Water Pot",
        price: 699,
        image: "images/earthen-pot.jpg",
        desc: "Traditional Indian earthen pot with excellent natural cooling properties.",
      },
      {
        id: 3,
        name: "Decorative Matka",
        price: 899,
        image: "images/decorative-matka.jpg",
        desc: "Beautifully decorated clay matka suitable for both home use and decoration.",
      },
      {
        id: 4,
        name: "Large Clay Water Pot",
        price: 999,
        image: "images/large-matka.jpg",
        desc: "Large-capacity traditional matka ideal for families and daily use.",
      },
      {
        id: 5,
        name: "Handpainted Matka",
        price: 799,
        image: "images/handpainted-matka.jpg",
        desc: "Hand-painted Indian clay pot combining traditional design with functionality.",
      },
      {
        id: 6,
        name: "Terracotta Water Pot",
        price: 749,
        image: "images/terracotta-pot.jpg",
        desc: "Premium terracotta pot that keeps water naturally cool and fresh.",
      },
      {
        id: 7,
        name: "Matka with Tap",
        price: 1099,
        image: "images/matka-tap.jpg",
        desc: "Convenient clay water pot with an attached tap for easy water dispensing.",
      },
      {
        id: 8,
        name: "Designer Clay Matka",
        price: 1299,
        image: "images/designer-matka.jpg",
        desc: "Stylish designer matka made from natural clay for modern homes.",
      },
      {
        id: 9,
        name: "Small Earthen Pot",
        price: 449,
        image: "images/small-matka.jpg",
        desc: "Compact clay pot perfect for small families, offices, or personal use.",
      },
      {
        id: 10,
        name: "Premium Handmade Matka",
        price: 1499,
        image: "images/premium-matka.jpg",
        desc: "Premium handcrafted matka made by skilled Indian artisans.",
      },
    ];
    if(req.url === '/api/products'){

       // res.end(JSON.stringify(product));
       res.end(JSON.stringify(items));
    }
    else if(req.url === '/api/reviews'){
        res.end(JSON.stringify(reviews));
     }
     else{
        res.statusCode = 404;
        res.end();
     }
});

server.listen(3000, () => console.log('prg4 is running...')
)