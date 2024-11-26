let spaceOne = prompt('Plural Noun')
let spaceTwo = prompt('Food Or Drink')
let spaceThree = prompt('Famous NYC Location')
let spaceFour = prompt('Adjective')
let spaceFive = prompt('Adjective')
let spaceSix = prompt('Famous NYC Location')
let spaceSeven = prompt('Adjective')
let spaceEight = prompt('Noun')
let spaceNine = prompt('Noun')
let spaceTen = prompt('Plural Noun')
let spaceEleven = prompt('Holiday Song')
let spaceTwelve = prompt('Adjective')
let spaceThirteen = prompt('Famous NYC Location')
let spaceFourteen = prompt('Adjective')

console.log(spaceOne)
console.log(spaceTwo)
console.log(spaceThree)
console.log(spaceFour)
console.log(spaceFive)
console.log(spaceSix)
console.log(spaceSeven)
console.log(spaceEight)
console.log(spaceNine)
console.log(spaceTen)
console.log(spaceEleven)
console.log(spaceTwelve)
console.log(spaceThirteen)
console.log(spaceFourteen)

let myStory = `Last Christmas, I traveled to New York to see the holiday lights. The streets were filled with ${spaceOne}, and I could smell ${spaceTwo} in the air. I walked through ${spaceThree} and was amazed by the giant Christmas tree, which was so ${spaceFour}. I stopped to buy a ${spaceFive} scarf from a street vendor and continued toward ${spaceSix}. Suddenly, a ${spaceSeven} pigeon flew by, nearly knocking over my ${spaceEight}! I laughed and headed into a cozy café for a cup of ${spaceNine}. There, I saw a group of people dressed as ${spaceTen}, singing ${spaceEleven}. It was so ${spaceTwelve} that I couldn’t help but join in. Afterward, I walked down to ${spaceThirteen} to see the lights. As I left, I felt so ${spaceFourteen} and promised to come back next year!
`

console.log(myStory)

document.getElementById('Story').innerHTML = myStory;
