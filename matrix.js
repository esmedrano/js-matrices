function matmul(mat1, mat2) {  // multiply a given set of matrices
 const new_mat = [];
 var new_val = 0;
 for (let i = 0; i < mat1.length; i++) {
  for (let j = 0; j < mat2[0].length; j++) {
   for (let a = 0; a < mat1[0].length; a++) {
    new_val += mat1[i][a] * mat2[a][j];
   }
  }
  new_mat.push(new_val);
  new_val = 0;
 }
 return new_mat;
}
function transpose(mat) {  // transpose a given matrix
 const new_mat = [];  	
 for (let r = 0; r < mat[0].length; r++) {
 new_mat.push([]);
  for (let c = 0; c < mat.length; c++) {
   new_mat[r].push(mat[c][r]);  // push the inverse of the current index
  } 
 }
 return new_mat;
}
