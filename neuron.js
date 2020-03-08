function relu(x) {
  if (x < 0) { return 0 }
  else { return x }
}

let L1 = [ 1, 2, 3, 4, 5 ]

let w1 = [
  [ 0.5, -0.2, -0.4, 0.4, 0.7 ],
  [ 0.1, -0.8, 0.6, -0.9, -0.2 ]
]

let L2 = [ 0, 0 ]

let w2 = [
  [0.2, 0.8]
]

let L3 = [ 0 ]

let z2 = [0, 0]
for (let j = 0; j < L2.length; j++) {
  for (let i = 0; i < L1.length; i++) {
    z2[j] += L1[i] * w1[j][i]
  }
  L2[j] = relu(z2[j])
}

let z3 = 0
for (let i = 0; i < L2.length; i++) {
  z3 += L2[i] * w2[0][i]
}
L3[0] = relu(z3)

console.log('Слой L2', L2)
console.log('Слой L3', L3)

// 3 входа 2 нейрона и один выход

// O\
//    O\
// O\    O
//    O/
// O/
//
