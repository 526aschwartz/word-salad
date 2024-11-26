let pluralNoun = prompt('Plural Noun')
let foodDrink = prompt('Food Or Drink')
let famousLocation = prompt('Famous NYC Location')
let adjectiveWord = prompt('Adjective')
let nounWord = prompt('Noun')
let holidaySong = prompt('Holiday Song')

console.log(pluralNoun)
console.log(foodDrink)
console.log(famousLocation)
console.log(adjectiveWord)
console.log(nounWord)
console.log(holidaySong)


let myStory = `Last Christmas, I traveled to New York to see the holiday lights. The streets were filled with ${pluralNoun}, and I could smell ${foodDrink} in the air. I walked through ${famousLocation} and was amazed by the giant Christmas tree, which was so ${adjectiveWord}. I stopped to buy a ${adjectiveWord} scarf from a street vendor and continued toward ${famousLocation}. Suddenly, a ${adjectiveWord} pigeon flew by, nearly knocking over my ${nounWord}! I laughed and headed into a cozy café for a cup of ${nounWord}. There, I saw a group of people dressed as ${pluralNoun}, singing ${holidaySong}. It was so ${adjectiveWord} that I couldn’t help but join in. Afterward, I walked down to ${famousLocation} to see the lights. As I left, I felt so ${adjectiveWord} and promised to come back next year!
`

console.log(myStory)

document.getElementById('Story').innerHTML = myStory;
