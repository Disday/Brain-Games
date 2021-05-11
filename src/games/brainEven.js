import random from 'lodash/random.js';

const isEven = (num) => num % 2 === 0;

export const getGameGoal = () => 'Answer "yes" if number is even, otherwise answer "no"';

export const getQuestionAnswerPair = () => {
  const number = random(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [String(number), answer];
};
