const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try {
    let dinnerPromise = await cookBeanSouffle();
    console.log(`${dinnerPromise} is served!`)
  } catch (error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();