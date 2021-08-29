//! Templates for views

module.exports = async (app) => {

    //? index.js
    app.get('/', (req, res) => {
      res.render('index')
    });
}