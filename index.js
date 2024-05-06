const encryptor = require('simple-encryptor');

const key = 'real secret keys should be long and random';

// const engine = encryptor(key);

const encrypted = encryptor(key).encrypt('testing');
console.log('encrypted: %s', encrypted);

// const decrypted = engine.decrypt(encrypted);

// console.log('decrypted: %s', decrypted);
// const myHmac = engine.hmac('testing');

// console.log('decrypted myHmac: %s', myHmac);

// // nested object:
// const obj = {
//     foo: {
//         bar: [1, "baz"]
//     }
// };

// const objEnc = engine.encrypt(obj);
// // // Should print gibberish:
// console.log('obj encrypted: %s', objEnc);
// const objDec = encryptor.decrypt(objEnc);
// // Should print: {"foo":{"bar":[1,"baz"]}}
// console.log('obj decrypted: %j', objDec);