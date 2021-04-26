import readlineSync from 'readline-sync';
import colors from 'colors';

const gameRounds = 3;
console.log(colors);

const proccessGame = (game) => {
  const userName = readlineSync.question('May I have your name? '.yellow);
  console.log('Welcome to the Brain Games!'.yellow);
  console.log(`Hello, ${userName}!`.yellow);
  console.log(game.getGameGoal());
  for (let i = 1; i <= gameRounds; i += 1) {
    const [question, correctAnswer] = game.getQuestionAnswerPair();
    const answer = readlineSync.question(`Question: ${question.yellow}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!'.green);
    } else {
      console.log(`'${answer.red}' is wrong answer ;(. Correct answer was '${correctAnswer.green}')`);
      console.log(`Let's try again, ${userName}!`.yellow);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`.green);
};

const controller = async (gameName) => {
  const game = await import(`./games/${gameName}.js`);
  proccessGame(game);
};
export default controller;
