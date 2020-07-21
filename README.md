# Shopping Cart 🛒

## Ecosystem

| Project | Description |
|---------|-------------|
| [react]               | As Front-End Framework |
| [react redux]               |Global State Manager |
| [styled-components]        |Css with javascript logic|
| [Jest, Cypress]        |Testing|


## To run the application 🚀

Run the client:
````
cd shopping-cart
yarn 
yarn start
````

Run Jest tests:
`````
yarn test
`````

Run Cypress tests:
`````
yarn run cypress open
when cypress is open click in: shoppingCart.spec.js
`````

## To build the application 📦
`````
yarn run build
yarn global add serve
serve -s build
`````

## Notes 📝

- I suppose that we access to this screen after having selected and added these products to the cart on some previous screen, so I have initialized all the products quantity in the cart at 1.
- When the application is loaded, I add all the products of the cart in the redux state, to have access to them from all the application. Each product has a property quantity that I modify if I increase or decrease the quantity of any product. This way I have access to all the data in an object. If it had had an API, it would have created another variable with the product codes, to make requests to the API with this data.
- ### **checkout class**
    - I have created a function `pricingRules` which I pass as a parameter when an instance of `Checkout` class is created, this function is used to calculate the price of each product, applying discounts. The function has a switch statement, whether in the future we will have more promotions by adding a new case it will be enough for us