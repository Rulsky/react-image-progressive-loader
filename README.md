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
import { base64, url, descr } from './your-dataprovider'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Img
          src={url}
          base64={base64}
          className='your-class-name(s)'
          alt={descr}
        />
      </div>
    );
  }
}

export default App;

````
example based upon boilerplate code from [create-react-app](https://github.com/facebookincubator/create-react-app)
