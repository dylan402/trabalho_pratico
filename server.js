const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const userRoutes = require('./routes/UserRoutes');
const menuRoutes = require('./routes/MenuRoutes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));
app.use(
  '/fontawesome',
  express.static(
    path.join(__dirname, '/node_modules/@fortawesome/fontawesome-free/')
  )
);
app.use(
  '/bootstrap',
  express.static(path.join(__dirname, '/node_modules/bootstrap/'))
);
app.use(
  '/jquery',
  express.static(path.join(__dirname, '/node_modules/jquery/'))
);
app.use(
  '/jquery-mask',
  express.static(path.join(__dirname, '/node_modules/jquery-mask-plugin/'))
);
app.use(
  '/jquery-confirm',
  express.static(path.join(__dirname, '/node_modules/jquery-confirm/'))
);

app.use('/users', userRoutes);
app.use('/menu', menuRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/view/index.html'));
});

app.listen(8081, () => {});
