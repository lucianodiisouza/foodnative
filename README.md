# foodnative
Using React-Native and react-native-paper, FoodNative resumes a food app flow, adding products to cart, customizing options, and sending it.
All flow are managed by flux architecture with actions and reducers.

### Screenshots

<br>

![FoodNative Screenshot](https://github.com/lucianodiisouza/foodnative/blob/main/screenshots/foodnative.gif)

### Can i run it?
The fake-backend used here, come from `tw-dev-server` library, be sure to have it installed using `npm i -g tw-dev-server` and typing `tw-dev-server` command at separated terminal window. <br />
After clone the project to your local machine, be sure that you have all dependencies necessary tiping `yarn` at project root to install yarn dependencies and `pod install` at ios folder (if you are in a MacOS machine) <br />
run project using `npx react-native run-android` or `npx react-native run-ios` (MacOS machine only).

To add products to api and show it on mobile, you need to use de tw-dev-server GUI, located at https://treinaweb.github.io/tw-dev-server/ an post to `api/foodnative/products` will insert the product, use the json format bellow to right field names:  <br />

```JSON

{
    "name": "Pizza a moda da Casa",
    "price": 29.80,
    "picture": "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    "options": [ "Mozzarella", "Peperonni", "Cebola", "Calabresa", "Manjericão"]
}
```


enjoy it!
