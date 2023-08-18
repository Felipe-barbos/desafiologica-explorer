

const student = [
  {
    name: "Felipe Barbosa",
    nOne: 7,
    nTwo: 10,
  },
  {
    name: "Eduarda Andrade",
    nOne: 10,
    nTwo: 10,
  },
  {
    name: "Marcelo Ferreiro",
    nOne: 4,
    nTwo: 6,
  }

];


function calcMedia(nOne, nTwo) {
  return `${(nOne + nTwo) / 2}`
}


for (i = 0; i < student.length; i++) {

  let average = calcMedia(student[i].nOne, student[i].nTwo);

  if (average >= 7) {
    alert(`A média do aluno ${student[i].name} é: ${average}
            Parabéns!! ${student[i].name} Você foi aprovado no curso!
    `)
  }
  else {
    alert(`A média do aluno ${student[i].name} é: ${average}
    Não foi dessa vez ${student[i].name}. Tente na próxima!!
`)
  }
}

