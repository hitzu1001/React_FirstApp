import fruits from './Fruits_Module/fruits';
import { choice, remove } from './Fruits_Module/helper';

// Randomly draw a fruit from the array
let pickedFruit = choice(fruits);
// Log the message `I’d like one RANDOMFRUIT, please.`
console.log(`I’d like one ${pickedFruit}, please.`);
// Log the message `Here you go: RANDOMFRUIT`
console.log(`Here you go: ${pickedFruit}`);
// Log the message `Delicious! May I have another?`
console.log(`Delicious! May I have another?`);
// Remove the fruit from the array of fruits
var remaining = remove(fruits, pickedFruit);
// Log the message `I’m sorry, we’re all out. We have FRUITSLEFT other fruits left.`
console.log(`I'm sorry, we’re all out. We have ${remaining.length} other fruits left.`);