### Nominandi

A node.js name generator for **1010892** unique names

[![NPM version](https://img.shields.io/npm/v/nominandi.svg?style=flat-square)](https://www.npmjs.org/package/nominandi) [![Downloads](https://img.shields.io/npm/dt/nominandi.svg?style=flat-square)](https://www.npmjs.org/package/nominandi)

## Installation
To use in your project install via npm
```bash
$ npm install --save nominandi
```

## Usage
Create object:
```javascript
var Nominandi = require('nominandi');
var nomi = new Nominandi();
```
generate name:
```javascript
console.log(nomi.generate()); //"Sesceius"
```
names won't be repeat until resetting Nominandi:
```javascript
nomi.reset();
```
get amount of possible names:
```javascript
console.log(nomi.names()); //1010892
```
## Example names
 * Aexto
 * Vagno
 * Edroectia
 * Rorga
 * Osoeblo
 * Ectiomix
 * Quoesseius
 * Flius
 * Gaius
 * Clionda

## Copyright and license

[MIT License](LICENSE)