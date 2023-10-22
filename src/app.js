let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net']

generateAllCombinations(pronoun, adj, noun, extensions);

function generateAllCombinations(arr1, arr2, arr3, arr4) {
  const res = [];
  for (const i of arr1) {
    for (const j of arr2) {
      for (const k of arr3) {
        for (const l of arr4) {
          res.push(`${i}${j}${k}${l}`);
        }
      }
    }
  }

  console.log(
    `Estas son las ${res.length} combinaciones posibles para tu dominio: `
  );
  for (const item of res) {
    console.log(item);
  }
}
