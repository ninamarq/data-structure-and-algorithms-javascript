// Jeito errado e de maior uso de memória - Wrong way to do this and a higher use of memory
const janTemp = 39.0
const fevTemp = 35.6
const marTemp = 31.0
const aprilTemp = 22.0

// Melhor armazenamento e trabalho sequencial - Better saving and sequencial work
const monthlyTemperature = []
monthlyTemperature.push(janTemp, fevTemp, marTemp, aprilTemp)
console.log(monthlyTemperature)

console.log(monthlyTemperature.length)