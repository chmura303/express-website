const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'));

// web pages
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    style: '/css/index.css',
    js: '/js/main.js',
  });
});

app.get('/index', (req, res) => {
  res.render('index', {
    title: 'Home',
    style: '/css/index.css',
    js: '/js/main.js',
  });
});

app.get('/section-space', (req, res) => {
  res.render('section-space', {
    title: 'Space',
    style: '/css/section.css',
    js: '/js/main.js',
  });
});

app.get('/section-nature', (req, res) => {
  res.render('section-nature', {
    title: 'Nature',
    style: '/css/section.css',
    js: '/js/main.js',
  });
});

app.get('/section-mind', (req, res) => {
  res.render('section-mind', {
    title: 'Mind',
    style: '/css/section.css',
    js: '/js/main.js',
  });
});

app.get('/contact-us', (req, res) => {
  res.render('contact-us', {
    title: 'Contact Us',
    style: '/css/contact-us.css',
    js: '/js/main.js',
  });
});

app.get('/article-nature-killer-whale', (req, res) => {
  res.render('article-nature-killer-whale', {
    title: 'How killer whales are like people',
    style: '/css/article.css',
    js: '/js/main.js',
  });
});

app.get('/article-nature-cat', (req, res) => {
  res.render('article-nature-cat', {
    title:
      "The truth about cats' domestication and why they really quite like us",
    style: '/css/article.css',
    js: '/js/main.js',
  });
});

app.get('/article-mind-test', (req, res) => {
  res.render('article-mind-test', {
    title: 'Controversial psychology tests are often still used in US courts',
    style: '/css/article.css',
    js: '/js/main.js',
  });
});

app.get('/article-space-rocket', (req, res) => {
  res.render('article-space-rocket', {
    title: 'New Japanese Rocket Is Destroyed During First Test Flight to Space',
    style: '/css/article.css',
    js: '/js/main.js',
  });
});

app.get('/article-space-moon', (req, res) => {
  res.render('article-space-moon', {
    title:
      'The moon may be made of magma that once covered Earth’s entire surface',
    style: '/css/article.css',
    js: '/js/main.js',
  });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404',
    style: '/css/article.css',
    js: '/js/main.js',
  });
});
