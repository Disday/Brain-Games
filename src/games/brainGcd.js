import _ from 'lodash';

const gcd = (x, y) => {
  if (x % y === 0) {
    return y;
  }
  return gcd(y, Math.abs(y - x));
};

export const getGameGoal = () => 'Find the greatest common divisor of given numbers.';

export const getQuestionAnswerPair = () => {
  const number1 = _.random(1, 100);
  const number2 = _.random(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2);
  return [question, String(correctAnswer)];
};
