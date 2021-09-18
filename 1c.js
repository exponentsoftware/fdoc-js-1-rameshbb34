const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;
function countWords(param) {
    let answer1 = [];
    answer =param.split(' ');
    for(let i=0;i<answer.length;i++) {
        if(answer[i].length > 1) {
            answer1.push(answer[i]);
        }
    }
    return answer1.length;
}
console.log(countWords(sentence));