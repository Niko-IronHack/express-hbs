const express = require('express');
const app = express();
const hbs     = require('hbs');
const path    = require('path');


app.get('/', (req, res, next) => { // with hbs 
    // send views/index.hbs for displaying in the browser

    let data = { //Get data from your database in here....  
        name: "Picachu",
        bootcamp: "<h1>IronHack WebDev</h1>,",
        lastName: "Gonzalez",
        address: "Kanto Region",
        cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]

      };
    
    res.render('index', data);
});
  
app.get('/players', (req, res, next) => {
    res.render('players');
});





app.get('/cat', (request, response, next) => {
    response.send(`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Cat</title>
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <h1>Cat</h1>
          <p>This is my second route</p>
          <img src="cool-cat.gif" />
        </body>
      </html>
    `);
  });


app.use(express.static('public')); //Where all the client side css, images, and javascript goes

app.set('views', __dirname + '/views'); //Where all the handelbar templates go 
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.listen(3000, () => {
    console.log('My first app listening on port 3000!')
});