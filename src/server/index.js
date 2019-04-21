import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../client/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./dist'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const AppComponent = ReactDOMServer.renderToString(<App />);

  res.render('pages/index', {AppComponent: AppComponent});

});

app.get('/hola', (req, res) =>{
  return res.send("hola");
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
