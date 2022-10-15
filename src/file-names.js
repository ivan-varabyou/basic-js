const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input            ["file", "file",    "image", "file(1)",    "file"],
 * the output should be ["file", "file1", "image", "file(1)1", "file2"]
 *
 */

 function renameFiles(names) {
  const nameArr = [...names];
  const maskArr = new Array(names.length);
  const countArr = new Array(names.length);
  let test, indexMask;

  for(let i =0; i < nameArr.length; i++) {
    count = 1;

            indexMask = unIndex(nameArr[i],maskArr)
            if(indexMask >= 0) {
                if(nameArr[i] == nameArr[indexMask]) {
                    countArr[i] = countArr[indexMask] + count;
                } else {
                    countArr[i] = countArr[indexMask];
                }
                test = maskArr.indexOf(nameArr[i]+'('+countArr[i]+')');
                if(test < 0) {
                    maskArr[i] =  nameArr[i]+'('+countArr[i]+')';
                } else {
                    ++count
                    maskArr[i] =  nameArr[i]+'('+count+')';
                }

            } else {
                countArr[i] = 0;
                maskArr[i] = nameArr[i];
            }

        function unIndex(name,arr=maskArr) {
            return arr.lastIndexOf(name)
        }

  }
  return maskArr;

}

module.exports = {
  renameFiles
};
