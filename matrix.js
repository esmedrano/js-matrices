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
