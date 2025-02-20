
# Easy JSON LocalStorage

Simple but useful script!
It has simple features to save and load Json to browser local storage.


It contains 3 methods.
```javascript
var getJsonData = function (root, key);
var getBoolean = function (root, key, defaultValue);
var setJson = function (root, key, data);
```

Usage
```javascript
import { getJsonData, getBoolean, setJson } from './localStorage';

setJson('main', 'tab', 'test'); //Specify the key main in the local storage, and then specify the key tab inside JSON and store the value test.
var data = getJsonData('main','tab'); //Get the value within the key (main) of the local storage, the key tab from JSON.
console.log(data); //result  : test
```

### chrome dev tool, localstorage screenshot
![chrome dev tool, localstorage](https://github.com/OFox213/easy-json-localstorage/blob/main/screenshot1.png?raw=true "Optional Title")
