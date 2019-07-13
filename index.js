// Proof of concept for ECDSA signing using jsonwebtoken
const JWT = require('jsonwebtoken');
const Fs = require('fs');


console.log('\n🌚  BACK-END THINGS\n');

// The sample data we want to be read-only by the client
const sampleData = {
  name: 'Tina',
  email: 'info@tinaciousdesign.com'
};

// get private key
const privateKey = Fs.readFileSync('./keys/private.key');
// encode data with the private key using the ES256 algorithm
const encodedToken = JWT.sign(sampleData, privateKey, { algorithm: 'ES256' });
console.log(`This is the token you send to the front-end: \n${encodedToken}`);


console.log('\n🌞  FRONT-END THINGS\n');

// get the public key
const publicKey = Fs.readFileSync('./keys/public.key');
console.log(`Public key that the front-end would have stored somewhere: \n\n${publicKey}`);
// verify the token
const decodedToken = JWT.verify(encodedToken, publicKey, { algorithm: 'ES256' });
console.log(`The front-end decoded the following data: \n${JSON.stringify(decodedToken, null, 2)}`);
