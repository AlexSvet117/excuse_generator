
// This line of code will make sure the page is fully loaded
window.onload = function () {
    // Write the logic in this function

    // 1. Get the excuse element
    const excuse = document.getElementById('excuse');

    const transcript = document.getElementById('transcript')

    // 2. Generate a random excuse
    const quote1 = ['My cat', 'My dog', 'My hamster', 'My neighbour', 'My alligator']
    const quote2 = ['ate my', 'stole my', 'hid my', 'destroyed my', 'traded my']
    const quote3 = ['laptop', 'computer', 'car keys', 'wallet', 'house keys']
    const quote4 = ['yesterday,', 'a minute ago,', 'a year ago,', 'last winter,', 'this night,']
    const quote5 = ['he told me!', 'for real life!', 'I swear!', `it's true!`, 'I mean it!']

    const transcriptMsg = ['Who to blame', 'What they did', 'What object suffered', 'When did it happen', 'Certainty lvl']

    const random1 = Math.floor(Math.random() * quote1.length)
    const random2 = Math.floor(Math.random() * quote2.length)
    const random3 = Math.floor(Math.random() * quote3.length)
    const random4 = Math.floor(Math.random() * quote4.length)
    const random5 = Math.floor(Math.random() * quote5.length)

    const fullQuote = `${quote1[random1]} ${quote2[random2]} ${quote3[random3]} ${quote4[random4]} ${quote5[random5]}`
    const transcriptMsgSbm = `${transcriptMsg[0]} ${transcriptMsg[1]} ${transcriptMsg[2]} ${transcriptMsg[3]} ${transcriptMsg[4]}`

    // 3. Insert the excuse into the excuse element
    excuse.innerHTML = fullQuote;
    transcript.innerHTML = transcriptMsgSbm;
}