// Loop trough an array

const data = [
  {
    fact: "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.",
    length: 114,
  },
  {
    fact: "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.",
    length: 97,
  },
  {
    fact: "The technical term for a cat’s hairball is a “bezoar.”",
    length: 54,
  },
  {
    fact: "A group of cats is called a “clowder.”",
    length: 38,
  },
  {
    fact: "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
    length: 142,
  },
  {
    fact: "Cats make about 100 different sounds. Dogs make only about 10.",
    length: 62,
  },
  {
    fact: "Every year, nearly four million cats are eaten in Asia.",
    length: 55,
  },
  {
    fact: "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
    length: 100,
  },
  {
    fact: "Approximately 24 cat skins can make a coat.",
    length: 43,
  },
  {
    fact: "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.",
    length: 278,
  },
];

// Oppgave:
// 1: Se på variable 'data' og identifiser hva den inneholder.
// 2: Skriv en consol.log ut resultatet som gir teksten "Cats make about 100 different sounds. Dogs make only about 10."

// Bonus oppgave:
// 1. Lag en 'for loop' som gir ut alle fact resultatene


//oppg1

//opg2
console.log(data[5].fact);

//bonus 1
data.forEach((i) => {
  console.log(i.fact);
});

for (let i = 0; i < data.length; i++) {
  console.log(data[i].fact);
}

for (let d in data) {
  console.log(data[d].fact);
}

//
//

function timeout() {
  console.log("Noe Kommer til  skje!");

  setTimeout(function() {
    console.log("Nå har det skjedd!");
  }, 3000);
};

timeout();
console.log("kommentar etter timeout funskjon");

//json kan kun ha en array inni seg

//saynch to import json file
async function fetchFile() {//await wont work without asynch
  const dataFile = await fetch("data.json");
  console.log(dataFile);

  const response = await dataFile.json();
  console.log(response);

  for ( let i = 0; i < response.length; i++) {
    console.log(response[i].fact);
  }

  response.forEach((i) => {
    console.log(i + " response for each");
  })
}

fetchFile();


//
//


//

function klokke() {
  let d;
  setInterval(function() {
    d = new Date();
    console.log(d.getHours() + ':' + 
                d.getMinutes() + '.' +
                d.getSeconds()
    );
  }, 1000);
}

klokke();