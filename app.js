const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const JWT = require('jsonwebtoken');
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/BloggingWebsite').then(() => {
  console.log("Connected to the database");
}).catch(err => {
  console.error(err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

////////////////////////////////////////////////////////////////
function authenticate(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.send('No token');
  }

  JWT.verify(token, 'hager12345', (err, decoded) => {
    if (err) {
      return (err);
    }

    req.user = decoded;
    next();
  });
}

/////////////////////////////////////////////////////////////
function authorize(roles) {
  return (req, res, next) => {
    const userRoles = req.user.roles;

    if (roles.some(role => userRoles.includes(role))) {
      next();
    } else {
      return res.send('Unauthorized');
    }
  };
}


app.use('/users', userRoutes);
app.use('/blogs', authenticate, blogRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
