import readlineSync from 'readline-sync';

const gameRounds = 3;

const proccessGame = (game) => {
  const userName = readlineSync.question('What is your name? ');
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
  console.log(game.getGameGoal());
  for (let i = 1; i <= gameRounds; i += 1) {
    const [question, correctAnswer] = game.getQuestionAnswerPair();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}')`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

const controller = async (gameName) => {
  const game = await import(`./games/${gameName}.js`);
  proccessGame(game);
};
export default controller;
