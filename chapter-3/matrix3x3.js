const matrix3x3x3 = []
for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = []  // inicializar array
  for (let j = 0; j < 3; j ++) {
    matrix3x3x3[i][j] = []
    for (let k = 0; k < 3; k ++) {
      matrix3x3x3[i][j][k] = i + j + k
    }
  }
}

for (let i = 0; i < matrix3x3x3.length; i++) {
  for (let j = 0; j < matrix3x3x3[i].length; j++) {
    for (let k = 0; k < matrix3x3x3[j].length; k++) {
      console.log(matrix3x3x3[i][j][k])
    }
  }
}

console.table(matrix3x3x3)