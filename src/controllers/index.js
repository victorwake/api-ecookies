const path = require('path');
const fs = require('fs');

const filePathGet = path.join(__dirname, '../json/first_call_get.json');
const filePathPost = path.join(__dirname, '../json/first_call_post.json');


const first_call_get = (req, res) => {
  try {
    const dataBuffer = fs.readFileSync(filePathGet);
    const data = JSON.parse(dataBuffer.toString());
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al procesar la solicitud');
  }
};

const first_call_post = (req, res) => {
  try {
    const dataBuffer = fs.readFileSync(filePathPost);
    const data = JSON.parse(dataBuffer.toString());
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al procesar la solicitud');
  }
};
  
module.exports = { first_call_get, first_call_post };