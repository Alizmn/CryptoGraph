# Project step by step
1. start with `npx create-react-app` then removing the unnecessary files
2. Apply for free Nomic Api and read the document
3. Install Storybook to build component in Isolation

```sh
Install:
npx sb init
Start:
npm run storybook
```
building story:
```javascript
export default {
  title: "SparkGraph",
  component: SparkGraph
};

const Template = (args) => <SparkGraph {...args}/>;

export const Empty = Template.bind({});
Empty.args = {desc:"Ali", hello:"Asghar"}; 
```


# MOMIC API
## Connection example
https://api.nomics.com/v1/markets?<b>key=your-api-key-goes-here</b>
## API info
### Currencies Ticker
Price, volume, market cap, and rank for all currencies across 1 hour, 1 day, 7 day, 30 day, 365 day, and year to date intervals. Current prices are updated every 10 seconds.

```javascript
axios.get("https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&per-page=100&page=1")
  .then(response => response.json())
  .then(data => console.log(data))
```
### Currencies Metadata
The currencies endpoint returns all the currencies and their metadata that Nomics supports.
It includes logos, description and other general information.

```javascript
axios.get("https://api.nomics.com/v1/currencies?key=demo-26240835858194712a4f8cc0dc635c7a&ids=BTC,ETH,XRP&attributes=id,name,logo_url")
  .then(response => response.json())
  .then(data => console.log(data))
```

### Currencies Sparkline

The currencies sparkline endpoint returns prices for all currencies within a customizable time interval suitable for sparkline charts.

<b>Note</b> the timestamps and prices are built off of OHLCV candles using the close price. This means that the timestamp represents the start of the candle, and the price is the close price of that candle. This means the response's final timestamp and price value are always as current as possible, but also that the price is effectively "off" by one candle. This endpoint is designed to serve as a convenient way to render sparklines, if you need exactly aligned times and prices you can use the Aggregated OHLCV Candles endpoint.

```javascript
axios.get("https://api.nomics.com/v1/currencies/sparkline?key=demo-26240835858194712a4f8cc0dc635c7a&ids=BTC,ETH,XRP&start=2018-04-14T00%3A00%3A00Z&end=2018-05-14T00%3A00%3A00Z")
  .then(response => response.json())
  .then(data => console.log(data))
```




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
