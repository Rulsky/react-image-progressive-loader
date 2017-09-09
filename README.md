# react-image-progressive-loader

### Yet another simple [React](https://facebook.github.io/react) [component](https://facebook.github.io/react/docs/react-component.html) for showing small-size blurred version of the image while full-size version is loading

#### how to use:

##### 1) Install

````bash
npm i -S react-image-progressive-loader

````

or

````bash
yarn add react-image-progressive-loader

````

##### 2) use it in your component as a plain component

````javascript
import React, { Component } from 'react';
import Img from 'react-image-progressive-loader'
import { base64, url, descr, style } from './your-dataprovider'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Img
          src={url} // required
          base64={base64} // required
          blurStr='15px' // optional
          contrastStr= '50%' // optional
          transtionTime= '.2s' // optional
          transitionDelay= '.05s' // optional
          className='your-class-name(s)' // optional
          alt={descr} // optional
          style={style} // optional
        />
      </div>
    );
  }
}

export default App;

````

example based upon boilerplate code from [create-react-app](https://github.com/facebookincubator/create-react-app) with full list of available properties and default values. You can omit

#### Behavior:

component has own list of styles which are related to animation, and these styles are merged with given styles as props. More in details below.

1) initial render:
  - src of `<img/>` is set to `props.base64`.
  - style object is merged with `props.style` in order next order: `props.style` --> component's internal styles

2) componentDidMount fires promisified load of `props.src`

3) on Promise's fulfillment:
  - src of `<img/>` is set to `props.src`
  - style object is merged with `props.style` in order next order: component's internal styles --> `props.style`



#### Properties:
| PROP            	|  TYPE  	| DEFAULT VALUE 	| REQUIRED 	|
|-----------------	|:------:	|:-------------:	|---------:	|
| src             	| String 	|   undefined   	|      yes 	|
| base64          	| String 	|   undefined   	|      yes 	|
| blurStr         	| String 	|      15px     	|       no 	|
| contrastStr     	| String 	|      50%      	|       no 	|
| transtionTime   	| String 	|      0.2s     	|       no 	|
| transitionDelay 	| String 	|     0.05s     	|       no 	|
| className       	| String 	|   undefined   	|       no 	|
| alt             	| String 	|   undefined   	|       no 	|
| style           	| Object 	|   undefined   	|       no 	|
