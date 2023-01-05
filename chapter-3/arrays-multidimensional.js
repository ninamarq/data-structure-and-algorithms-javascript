let averageTemp = []

// Dia 1 // 1st day
averageTemp[0] = []
averageTemp[0][0] = 31
averageTemp[0][1] = 33
averageTemp[0][2] = 31
averageTemp[0][3] = 27
averageTemp[0][4] = 29
averageTemp[0][5] = 33

// Dia 2 // 2nd day
averageTemp[1] = []
averageTemp[1][0] = 30
averageTemp[1][1] = 27
averageTemp[1][2] = 31
averageTemp[1][3] = 29
averageTemp[1][4] = 25
averageTemp[1][5] = 26

const printMatrix = (myMatrix) => {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j])
    }
  }
}

printMatrix(averageTemp)
console.table(averageTemp)