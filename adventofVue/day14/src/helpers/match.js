export const hasDuplicateInArray = arr => {
  return new Set(arr).size !== arr.length
}

export const hasDuplicates = list => {
  const nameList = list.map(person => person.name)
  const emailList = list.map(person => person.email)
  return hasDuplicates(nameList) || hasDuplicates(emailList)
}
function getRandomArr(min = 0, max) {
  const arr1 = []
  const arr2 = []
  while (arr1.length !== max || arr2.length !== max) {
    let rnd1 = Math.floor(Math.random() * (max - min))
    let rnd2 = Math.floor(Math.random() * (max - min))
    if (rnd1 === rnd2) continue
    if (arr1.length !== max && !arr1.includes(rnd1)) arr1.push(rnd1)
    if (arr2.length !== max && !arr2.includes(rnd2)) arr2.push(rnd2)
  }
  return [arr1, arr2]
}
export const matchPeople = people => {
  let secretSantaList = []
  let length = people.length
  const [rndArr1, rndArr2] = getRandomArr(0, length)
  for (let i = 0; i < length; i++) {
    const giver = { name: people[rndArr1[i]].name, email: people[rndArr1[i]].email }
    const receiver = { name: people[rndArr2[i]].name, email: people[rndArr2[i]].email }
    secretSantaList.push({ giver, receiver })
  }
  // Return an array of randomly matched up people.
  // The array should have objects with the following structure:
  // { giver: {name: 'NAME_HERE, email: 'EMAIL_HERE'}, receiver: {name: 'NAME_HERE, email: 'EMAIL_HERE'}}

  // Rules:
  // 1. For every person there has to be a giver
  // 2. A person cannot be their own giver

  return secretSantaList
}
