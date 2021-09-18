const paragraph =  "I love teaching. If you do not love  teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

numberOfWords(paragraph, "love", "you");

function numberOfWords(paragraph, word1, word2) {
  
  let q = paragraph.split(word1).length - 1;
  let w = paragraph.split(word2).length - 1;
  console.log(
    q > w
      ? `The word ${word1} more frequently occurred than ${word2}.`
      : `The word ${word2} more frequently occurred than ${word1}.`
  );
}