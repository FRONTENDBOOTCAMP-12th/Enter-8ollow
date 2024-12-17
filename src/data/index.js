import { ADJECTIVE } from './adjective.js';
import { ANIMALS } from './animals.js';

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const randomAdjective = getRandomElement(ADJECTIVE);
const randomAnimal = getRandomElement(ANIMALS);

const nickName = `${randomAdjective} ${randomAnimal}`;

export { nickName };
