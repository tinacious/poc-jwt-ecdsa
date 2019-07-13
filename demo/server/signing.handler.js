const JWT = require('jsonwebtoken');
const Fs = require('fs');


const handler = (request, response) => {
  // Read the private key
  return Fs.readFile('./keys/private.key', 'utf8', (err, privateKey) => {
    if (err) throw err;

    // Read the public key
    Fs.readFile('./keys/public.key', 'utf8', (err, publicKey) => {
      if (err) throw err;

      const payload = {
        name: 'Tina',
        email: 'info@tinaciousdesign.com'
      };

      // Sign the payload
      const encodedToken = JWT.sign(payload, privateKey, { algorithm: 'ES256' });

      return response.json({
        public_key: publicKey,
        encoded: encodedToken,
      });
    });
  });
};


module.exports = handler;
