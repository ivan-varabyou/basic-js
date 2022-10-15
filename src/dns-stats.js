const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

 function getDNSStats(domains) {
  if(!domains[0]) return {}
  const subDomainNameArr = []
  let eArr, domainName,zone,domainNameZone
  domains.forEach(e => {
      eArr = e.split('.')
      if(eArr.length > 2) {
          subDomainNameArr.push('.'+eArr[0])
      } else if (eArr.length = 2) {
          zone = '.'+eArr[1]
          domainName = '.'+eArr[0]
          domainNameZone = zone+domainName
      }
  });
  const dns = {}
  let countSub = subDomainNameArr.length || 0
  dns[zone] = 1 + countSub;
  dns[domainNameZone] = 1 + countSub;
  if(countSub != 0) {
      subDomainNameArr.forEach(e => {
          let subZone = domainNameZone+e
          dns[subZone] = 1
      })
  }
  return dns;
}

module.exports = {
  getDNSStats
};
