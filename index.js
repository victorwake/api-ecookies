const server = require('./app');
const port = "http://localhost:3000/";
const portColor = '\x1b[34m';
const resetColor = '\x1b[0m';


server.listen(3000, () => {
  console.log(`Server is running on port ${portColor}${port}${resetColor}`);
});
