module.exports = function towelSort(matrix) {

  if (Array.isArray(matrix) === false || matrix.length <= 0 ) {
    return [];
  } else {
    let numOfMatrix = matrix.length;
    let resultOne = [];
    for (let i = 0; i < numOfMatrix; i++) {
      if (i % 2 === 0) {
        resultOne.push(matrix[i]);
      } else {
        resultOne.push(matrix[i].reverse());
      }
    }  return (resultOne.toString().split(','))
  }    
} 
