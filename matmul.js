function matmul(mat1, mat2) {  // multiply a given set of matrices
 const new_mat = [];
 var new_val = 0;
 for (let i = 0; i < mat1.length; i++) {
  for (let j = 0; j < mat2.length; j++) {
   for (let a = 0; a < mat1[0].length; a++) {
    new_val += mat1[i][a] * mat2[a][j];
    new_mat.push(new_val);
    new_val = 0;
   }
  }
 }
 return new_mat;
}
