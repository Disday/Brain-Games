import random from 'lodash/random.js';

export const getGameGoal = () => 'Answer "yes" if number is even, otherwise answer "no"';

export const getQuestionAnswerPair = () => {
  const number = random(1, 100);
  const isEven = number % 2 === 0 ? 'yes' : 'no';
  return [number, isEven];
};
