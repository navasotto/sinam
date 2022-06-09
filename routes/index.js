

const general = require('../src/general/routes');

module.exports = (app) => {
  console.log("in index");
  app.use("/epidemic-tracker/hello/:message", general);

  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};