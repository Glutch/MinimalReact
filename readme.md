
# Minimal React Setup

  

## Create project folder

```javascript
mkdir newproject
cd newproject
npm init -y
```

Create the dist folder, and the master HTML file

```
mkdir dist
cd dist
touch index.html
```

> ./dist/index.html

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>The Minimal React Webpack Babel Setup</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/bundle.js"></script>
  </body>
</html>
```

## webpack

```
npm install webpack webpack-dev-server webpack-cli --save-dev
```

**Add** the start script in package.json

```JSON
"scripts": {
  "start": "webpack-dev-server --config ./webpack.config.js --mode development",
  "test": "webpack-dev-server --mode development"
},
```

Create the webpack config file

```
touch webpack.config.js
```

> ./webpack.config.js

```javascript
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
}
```

## create the src folder

```
mkdir src
cd src
touch index.js
```

> ./src/index.js

```javascript
console.log('Hello!')
```

## babel

```
npm install --save-dev babel-core babel-loader babel-preset-env //enables ES6 features
npm install --save-dev babel-preset-stage-2 //enables ...spread and other experimental features
npm install --save-dev babel-preset-react //enables jsx support
```

**Add** babel settings to webpack.config.js

```javascript
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
  ]
},
resolve: {
  extensions: ['*', '.js', '.jsx']
},
```

Create the babel settings file

```
touch .babelrc
```

> ./.babelrc

```javascript
{
  "presets": [
    "env",
    "react",
    "stage-2"
  ]
}
```

## react
```javascript
npm install --save react react-dom
```
> index.js
```javascript
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const Hello = () => <div>Hello!</div>
 
class App extends Component {
  render() {
    return (
      <Hello />
    )
  }
}

ReactDOM.render(<App  />, document.getElementById('app'))
```

## final project structure
```javascript
- dist
-- index.html
- src
-- index.js
- .babelrc
- package.json
- webpack.config.js
```

source https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
