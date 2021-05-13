import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Please enter a phrase: ', function(phrase) {
    let phraseReversed = phrase
        .toLowerCase()
        .replace(/ /g, '')
        .split('')
        .reverse()
        .join('');

    if (phrase.replace(/ /g, '') === phraseReversed) {
        console.log(`Phrase "${phrase}" is a polindrome`);
    } else {
        console.log(`Phrase "${phrase}" is NOT a polindrome`);
    }
    rl.close();
})