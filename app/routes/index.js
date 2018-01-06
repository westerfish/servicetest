// routes/index.js
const noteRoutes = require('./note_routes');

console.log('Inside index.js');
module.exports = function(app, db) {
    noteRoutes(app, db);
  // Other route groups could go here, in the future
};
