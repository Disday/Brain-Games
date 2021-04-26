import _ from 'lodash';

export const getGameGoal = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n === 2 || n === 3) return true;
  if (n < 2 || n % 2 === 0) return false;
  const iter = (divider) => {
    if (n % divider === 0) {
      return false;
    }
    if (divider >= Math.trunc(Math.sqrt(n))) {
      return true;
    }
    return iter(divider + 2);
  };
  return iter(3);
};

export const getQuestionAnswerPair = () => {
  const number = _.random(1, 1000);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [String(number), answer];
};
