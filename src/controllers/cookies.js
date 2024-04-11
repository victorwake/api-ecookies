
const cookiePermitida = (req, res) => {
    const datacookie = {
        "cookie": "c5vNaN",
        "cookieID": "b40c217f7951f78a1ab53d17f7951f78a",
        "cookieNamePattern": "_hjAbsoluteSessionInProgress",
        "text": "_hjAbsoluteSessionInProgress",
        "value": "-1",
        "example": "<p>Prueba de instalación de cookie</p>"
    };
    const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); 
    res.cookie('_hjAbsoluteSessionInProgress', JSON.stringify(datacookie), {
        expires: expiryDate,
        path: '/',
        domain: 'localhost'
    });
    res.status(200).send('Cookie agregada correctamente');
  };

  const cookieAdd = (req, res) => {
    const datacookie = {
        "cookie": "Eliminar",
        "cookieID": "g40c217f7951f65a1ab53d17f7951f14g",
        "cookieNamePattern": "_cookieAeliminar",
        "text": "_cookieAeliminar",
        "value": "-1",
        "example": "<p>Prueba de instalación de cookie</p>"
    };
    const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); 
    res.cookie('_cookieAeliminar', JSON.stringify(datacookie), {
        expires: expiryDate,
        path: '/',
        domain: 'localhost'
    });
    res.status(200).send('Cookie agregada correctamente');
  };
  
  const cookieTercerosAdd = (req, res) => {
    const datacookie = { example: 'value' };
    const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); 
    res.cookie('anonymous-consents', JSON.stringify(datacookie), {
        expires: expiryDate,
        path: '/',
        domain: 'localhost',
        sameSite: 'Lax',
    });
    res.end('cookieTercerosAdd');
  }
  
  module.exports = { cookiePermitida, cookieAdd, cookieTercerosAdd };