# Headmon
Headmon is a very simple (so far) node app for tracking headache pain by date.

### Installation

Headmon requires [Node.js](https://nodejs.org/) to run.

Install node modules with `npm`.
Install front end deps with `bower`.
You must supply your own `mongodb` instance.

Create a directory called "connections" from root. Create a file called mongo.js in this directory and supply your connection information like so:
```
module.exports = {
    'DB_USER' :  'dbuser',
    'DB_PASSWORD' : 'password',
    'DB_URI' : 'example.mlab.com:343445/headmon'
};
```
Install some deps and run a server:
```sh
$ npm install
$ bower install
$ node app.js
```
