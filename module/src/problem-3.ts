{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const lowercaseSentence = sentence.toLowerCase();
    const lowercaseWord = word.toLowerCase();
    const punctuation = /[\.,?!]/g;
    const newSentence = lowercaseSentence.replace(punctuation, "").split(" ");
    let count = 0;
    for (let i = 0; i < newSentence.length; i++) {
      if (newSentence[i].includes(lowercaseWord)) {
        count = count + 1;
      }
    }

    return count;
  };

  const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "Type");
  // console.log(result);
}
