const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

function varietyOfWords(strSentence) {
    let str = strSentence.replace(/([^a-z0-9 ]+)/gi, "");           
    let str1 = str.split(" ")
    let uniqueWord = [], j = 1, k, duplicate = 0;
    
    uniqueWord[0] = str1[0]
    for (let i = 1; i < str1.length; i++) {
        duplicate = 0;
        for (k = 0; k < uniqueWord.length; k++) {
            if (str1[i] === uniqueWord[k]) {
                duplicate = 1;
                break
            }
        }
        if (duplicate == 0) {
            uniqueWord[j++] = str1[i]     
        }
    }
    
    return uniqueWord.length
}

console.log(varietyOfWords(sentence))