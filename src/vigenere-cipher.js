const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

  //  прямой и реверсивный typeMachine = direct, reverse (invert string)

  class VigenereCipheringMachine {
    constructor(type=true) {
      this.direct = type;
      this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    encrypt(message, key) {
      this.check(message, key)
      let code ,totalCode, codeMassage, codeKey
      totalCode = '',

      message = message.toUpperCase()
      key = key.toUpperCase()

      while (message.length > key.length) {
        key = key + key
      }

      for(let i = 0, iEng = 0; message.length > i; i++) {
        if([...this.abc].includes(message[i])) {
            codeMassage = message.charCodeAt(i)
            codeKey = key.charCodeAt(iEng)

            code = codeMassage + codeKey - 65
            if (code > 90) code = code - 26

            totalCode = totalCode + String.fromCharCode(code)
            iEng++
        } else {
            totalCode = totalCode + message[i]
        }
      }
      return (this.direct) ? totalCode: totalCode.split('').reverse().join('')
    }
    decrypt(encryptedMessage, key) {
      this.check(encryptedMessage, key)
      let code, message ,totalCode, codeMassage, codeKey
      totalCode = '',

      message = encryptedMessage.toUpperCase()
      key = key.toUpperCase()

      while (message.length > key.length) {
        key = key + key
      }

      for(let i = 0, iEng = 0; message.length > i; i++) {
        if([...this.abc].includes(message[i])) {
            codeMassage = message.charCodeAt(i)
            codeKey = key.charCodeAt(iEng)

            code = codeMassage - codeKey + 65
            if (code < 65) code = code + 26

            totalCode = totalCode + String.fromCharCode(code)
            iEng++
        } else {
            totalCode = totalCode + message[i]
        }
      }
      return (this.direct) ? totalCode: totalCode.split('').reverse().join('')
    }

    check(message, key) {
      if((!message || !key) || (typeof message != 'string' || typeof key != 'string'))  throw  Error('Incorrect arguments!')
    }
  }

  const directMachine = new VigenereCipheringMachine();
  const reverseMachine = new VigenereCipheringMachine(false);

  console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'), 'ATTACK AT DAWN!')

module.exports = {
  VigenereCipheringMachine
};
