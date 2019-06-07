<img alt="React Native Card Collection" src="https://github.com/WrathChaos/react-native-card-collection/blob/master/assets/logo.png" width="1050"/>

Easy to use & Ready to Go Fully Customizable Awesome Card Collections for React Native.

[![npm version](https://img.shields.io/npm/v/react-native-card-collection.svg)](https://www.npmjs.com/package/react-native-card-collection)
[![npm](https://img.shields.io/npm/dt/react-native-card-collection.svg)](https://www.npmjs.com/package/react-native-card-collection)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Card

<p align="center">
<img alt="React Native Card Collection" src="https://github.com/WrathChaos/react-native-card-collection/blob/master/assets/Screenshots/CardExample.png" width="49.7%" />
</p>


## Installation

Add the dependency:

### React Native:

```ruby
npm i react-native-card-collection
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-vector-icons": ">= 6.4.2",
"react-native-material-ripple": ">= 0.8.0",
"react-native-dynamic-vector-icons": ">= 0.0.3",
"@freakycoder/react-native-helpers": ">= 0.0.12"
```

## Basic Usage

```js
import { Card } from "react-native-card-collection";
import Container from "react-native-card-collection/components/Container/Container";

<Card headerText="Device Information">
    <Container title="Device OS" subtitle"iOS" />
</Card>
```

## Advanced Usage

In advanced usage you can use your own component as children it is all depends on you :) 

```js
import { Card } from "react-native-card-collection";
import Container from "react-native-card-collection/components/Container/Container";

<Card headerText="Device Information">
    {children}
</Card>
```

## Configuration - Props

## Card

| Property   |  Type  |       Default        | Description             |
| ---------- | :----: | :------------------: | ----------------------- |
| headerText | string | "Screen Information" | change the Card's title |

### Card's Container

| Property         |  Type  |   Default   | Description                                           |
| ---------------- | :----: | :---------: | ----------------------------------------------------- |
| title            | string | "Device OS" | change the Container's title                          |
| titleColor       | color  |    gray     | change the Container's title color                    |
| titleFontSize    | number |     13      | change the Container's title font size                |
| titleStyle       | style  |   default   | set your own style for the Container's title style    |
| subtitle         | string |     ""      | change the Container's subtitle                       |
| subtitleColor    | string |  "#222222"  | change the Container's subtitle color                 |
| subtitleFontSize | string |     15      | change the Container's subtitle font size             |
| subtitleStyle    | style  |   default   | set your own style for the Container's subtitle style |



### ToDos

- [x] LICENSE
- [ ] Write an article about the lib on Medium


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Card Collection Library is available under the MIT license. See the LICENSE file for more info.
