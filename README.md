# Ecommerce

# steps

1. Intro
2. Install tools
3. create react app
4. creat git repository
5. Listing Products
   1.create products array
   2.add product images
   3.render products
   4.style products

6.Added Routing
i.npm i react-router-rom
ii.create route for home page
iii.create router for products page

7. Create node server
   Create Node.JS Server
   run npm init in root folder
   Update package.json set type: module
   Add .js to imports
   npm install express
   create server.js
   add start command as node backend/server.js
   require express
   create route for / return backend is ready.
   move products.js from frontend to backend
   create route for /api/products
   return products
   run npm start

8. Fetch products from backend
   set proxy in package.json
   npm install axios
   use state hook
   use effect hook
   use reducer hook
9. Manage state by reducer hooks
   define reduce
   update fetch data
   get state from useReducer
10. add bootstrap ui framework
    npm i react-bootstrap bootstrap
    update App.js
11. Create product and rating component
    create rating component
    create product component
    use rating component in product component
12. Create product details screen
    fetch product from backend
    create 3 columns for images, info and action
13. Create loading and message component
    create loading component
    use spinner component
    create message component
    create util.js to define getError function
14. Implement add to cart
    create react context
    define reducer
    create store provider
    implement add to cart button click handler
15. Complete add to cart
    check exist item in the cart
    check count in stock in backend
16. create cart screen
    create two columns
    display items list
    create action column
17. Complete cart screen
    click handler for inc/dec item
    click handler for remove item
    click handler for checkout
