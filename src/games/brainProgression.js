import _ from 'lodash';

const generateProgression = () => {
  const start = _.random(0, 20);
  const step = _.random(2, 9);
  const stepsCount = _.random(5, 10);
  const generate = (arr) => {
    if (arr.length === stepsCount) {
      return arr;
    }
    arr.push(_.last(arr) + step);
    return generate(arr);
  };
  return generate([start]);
};

export const getGameGoal = () => 'What number is missing in the progression?';

export const getQuestionAnswerPair = () => {
  const progression = generateProgression();
  const censoredIndex = _.random(0, progression.length - 1);
  const censoredElement = progression[censoredIndex];
  const question = progression
    .map((elem, key) => (key === censoredIndex ? '..' : elem))
    .join(' ');
  return [question, String(censoredElement)];
};
