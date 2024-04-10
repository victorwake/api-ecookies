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








// const readDataCallPostWhithPayload = (res) => {
//   try {
//     const dataBuffer = fs.readFileSync('./call_post_with_payload.json');
//     const data = dataBuffer.toString();
//     res.send(data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error al leer el archivo JSON');
//   }
// };

// const readDataCallPostWhithPayload = (res) => {
//     try {
//       const dataBuffer = fs.readFileSync('./call_post_with_payload.json');
//       const data = dataBuffer.toString();
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(data);
//     } catch (err) {
//       console.error(err);
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Error al leer el archivo JSON');
//     }
//   };
  
  
  
  // server.get('/callpayload', (req, res) => {
  //   readDataCallPostWhithPayload(res);
  // });
  
  
  // const readDataGet = (res) => {
  //     try {
  //       const dataBuffer = fs.readFileSync('./first_call_get.json');
  //       const data = dataBuffer.toString();
  //       res.send(data);
  //     } catch (err) {
  //       console.error(err);
  //       res.status(500).send('Error al leer el archivo JSON');
  //     }
  //   };
 
  
    // const readDataPost = (res) => {
    //   try {
    //     const dataBuffer = fs.readFileSync('./first_call_post.json');
    //     const data = dataBuffer.toString();
    //     res.send(data);
    //   } catch (err) {
    //     console.error(err);
    //     res.status(500).send('Error al leer el archivo JSON');
    //   }
    // };
  
    // const readDataPost = (res) => {
    //   try {
    //     const dataBuffer = fs.readFileSync('./first_call_post.json');
    //     const data = dataBuffer.toString();
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(data);
    //   } catch (err) {
    //     console.error(err);
    //     res.writeHead(500, { 'Content-Type': 'text/plain' });
    //     res.end('Error al leer el archivo JSON');
    //   }
    // };
    
    
  
  //   server.get('/datapost', (req, res) => {
  //     readDataPost(res);
  //   });
  
  //   server.get('/publicidad', (req, res) => {
  //     res.cookie('_hjid', '_hjid', {
  //         path: '/',
  //         expires: new Date('Thu, 31 Dec 2024 23:59:59 GMT'),
  //     });
  //     res.send('Cookie establecida correctamente');
  // });
  
  // server.get("/publicidad2", function (req, res) {
  //     const datacookie = { example: 'value' };
  //     const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); 
  //     res.cookie('_hjAbsoluteSessionInProgress', JSON.stringify(datacookie), {
  //         expires: expiryDate,
  //         path: '/',
  //         domain: 'localhost'
  //     });
  //     res.end('Hola');
  // })
  
  // server.get("/publicidad2", function (req, res) {
  //   const datacookie = {
  //       "cookie": "c5vNaN",
  //       "cookieID": "b40c217f7951f78a1ab53d17f7951f78a",
  //       "cookieNamePattern": "_hjAbsoluteSessionInProgress",
  //       "text": "_hjAbsoluteSessionInProgress",
  //       "value": "-1",
  //       "version": "NaN",
  //       "example": "<p></p>"
  //   };
  //   const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); 
  //   res.cookie('_hjAbsoluteSessionInProgress', JSON.stringify(datacookie), {
  //       expires: expiryDate,
  //       path: '/',
  //       domain: 'localhost'
  //   });
  //   res.end('Hola');
  // })
  
  // server.get("/publicidad8", function (req, res) {
  //   const datacookie = {
  //       "cookie": "c5vNaN",
  //       "cookieID": "b40c217f7951f78a1ab53d17f7951f78a",
  //       "cookieNamePattern": "_hjAbsoluteSessionInProgress",
  //       "text": "_hjAbsoluteSessionInProgress",
  //       "value": "-1",
  //       "version": "NaN",
  //       "example": "<p></p>"
  //   };
  //   const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); 
  //   res.cookie('_hjAbsoluteSessionInProgress', JSON.stringify(datacookie), {
  //       expires: expiryDate,
  //       path: '/',
  //       domain: 'localhost'
  //   });
  //   res.end('Hola');
  // })
  
  // server.get("/publicidad3", function (req, res) {
  //   const datacookie = { example: 'value' };
  //   const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); 
  //   res.cookie('anonymous-consents', JSON.stringify(datacookie), {
  //       expires: expiryDate,
  //       path: '/',
  //       domain: 'localhost',
  //       sameSite: 'Lax',
  //   });
  //   res.end('Hola');
  // })
  
  // server.get("/publicidad4", function (req, res) {
  //   const datacookie = { example: 'value' };
  //   const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); 
  //   res.cookie('PUBLICIDAD_', JSON.stringify(datacookie), {
  //       expires: expiryDate,
  //       path: '/',
  //       domain: 'localhost',
  //       sameSite: 'Lax',
  //   });
  //   res.end('Hola');
  // })
  
  