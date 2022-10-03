function sum(x = 1, y = 2, z = 3) {
  return x + y + z
}

// Recebe os defaults - Receive default values
console.log(sum())

// Recebe somente o valor de x - Receive just x's value, y and z defaults
console.log(sum(3))

// Recebe x e y - Receive just x and y value, z default
console.log(sum(3,2))

// Recebe x, y e z - Receive x, y and z value
console.log(sum(3,4,5))