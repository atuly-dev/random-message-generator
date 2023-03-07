//Random Number Generator in the range of 0 to num
function randomNumberGenerator(num) {

    return Math.floor(Math.random() * num);
}


//List of available message options
const messageOptions = {
    //available sun signs
    signInfo: ['star', 'moon', 'sun', 'comet'],
    //available fortune options
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    //available advices
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']

}
//this is the message user sees 
let messageOfTheDay = [];

//loop through different message option properties
for (let prop in messageOptions) {

    //generates a randomIndex to pass through all message options e.g. signInfo, fortuneOutput etc.
    let randomIndex = randomNumberGenerator(messageOptions[prop].length);

    //switch statment based on message option properties
    switch (prop) {

        case 'signInfo': messageOfTheDay.push(`Your sign in ${messageOptions[prop][randomIndex]}`)
            break;
        case 'fortuneOutput': messageOfTheDay.push(`You are having a ${messageOptions[prop][randomIndex]}`)
            break;
        case 'advice': messageOfTheDay.push(`You should ${messageOptions[prop][randomIndex]}`)
            break;
        default:
            break;
    }

}


//format the user message
function formatMessage(input) {
    console.log(input.join('\n'));
}

formatMessage(messageOfTheDay);


