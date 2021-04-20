import _ from 'lodash';

const operations = [
  ['+', _.add],
  ['-', _.subtract],
  ['*', _.multiply],
];

export const getGameGoal = () => 'What is the result of the expression?';

export const getQuestionAnswerPair = () => {
  const operand1 = _.random(1, 10);
  const operand2 = _.random(1, 10);
  const [operator, operation] = _.shuffle(operations).shift();
  const question = `${operand1} ${operator} ${operand2}`;
  const correctAnswer = String(operation(operand1, operand2));
  // console.log([question, correctAnswer]);
  // console.log(typeof correctAnswer);
  return [question, correctAnswer];
};
