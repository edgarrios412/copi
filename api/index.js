const {conn} = require("./src/db.js")
const app = require("./src/app.js")
const PORT = process.env.PORT || 3000;

conn.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log('Server listening on port ' + PORT); // eslint-disable-line no-console
    });
});