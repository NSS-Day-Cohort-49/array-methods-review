console.log('hello, world!');
const greetingListContainer = document.querySelector("#container")

const greetings = ["Hello", "Bonjour", "Hola", "Shikamoo"]


const worldGreetings = []
// for each greeting in the greetings array...
// 1) create a variable to describe each SINGLE thing in the array ( const word or const greeting )
// 2) reference the array that those things are in ( greetings )
for (const greeting of greetings) {
  //...do this
  const newGreeting = `${greeting}, world!`
  worldGreetings.push(newGreeting)
}
console.log("Our worldGreetings array:", worldGreetings)

// map returns an array of the values that the callback function returns
const worldGreetings2 = greetings.map(
  // bundle up the stuff we want map to do n times
  // This function does NOT run when we call map()
  // It will be called 4 times on greeting
  // What the function returns will be put in the new array
  // What we pass to map is a function reference
  (greeting) => { return `${greeting}, world!` }
)

console.log('array of greetings from map', worldGreetings2  );


// let HTMLStringToPutInTheDOM = `
//   <ul>
//     ${
//       // The result of calling map will be an array. We can call join() on that array to produce a string of everything inside that array
//       greetings.map(
//         (greeting) => {
//           return `<li>${greeting}, world!</li>`
//         }
//       ).join("") // what we pass to join() is what will be inserted between each string
//     }
//   </ul>
// `

let HTMLStringToPutInTheDOM = `
  <ul>
    ${
      // The result of calling map will be an array. We can call join() on that array to produce a string of everything inside that array
      greetings.map(
        (greeting) => {
          return `<li>${greeting}, world!</li>`
        }
      ).join("") // what we pass to join() is what will be inserted between each string
    }
  </ul>
`
greetingListContainer.innerHTML = HTMLStringToPutInTheDOM

const greetings2 = [
  {
    word: "Hello",
    language: "English"
  },
  {
    word: "Bonjour",
    language: "French"
  },
  {
    word: "Hola",
    language: "Spanish"
  },
  {
    word: "Shikamoo",
    language: "Swahili"
  }
]

let HTMLStringToPutInTheDOM2 = `
  <ul>
    ${
      // The result of calling map will be an array. We can call join() on that array to produce a string of everything inside that array
      greetings2.map(
        // What is greeting? SO important to understand that it is an object, because greetings is an array of objects,
        (greeting) => {
          return `<li>${greeting.word}, world!</li>`
        }
      ).join("") // what we pass to join() is what will be inserted between each string
    }
  </ul>
`
greetingListContainer.innerHTML = HTMLStringToPutInTheDOM2

// FILTER
// What if we don't want all of the things in an array, but just some things?
const greetingsThatstartwithH = greetings.filter(
  (greeting) => greeting.startsWith("H")
)

console.log('filtered greetings', greetingsThatstartwithH );

// Find does not return an Array.
// It returns one item from the array
const spanishGreeting = greetings2.find(
  (greetingObj) => { return greetingObj.language === "Spanish"}
)

console.log('Spanish?', spanishGreeting );
