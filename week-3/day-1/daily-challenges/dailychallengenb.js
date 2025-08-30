// Instructions

// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.

let sentence = "The movie is not that bad, I like it";

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf("not");

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).
let wordBad = sentence.indexOf("bad");

// If the word “bad” comes after the word “not”, console.log the sentence with the substring “not” to “bad” replaced with “good”.
if (wordBad > wordNot && wordNot !== -1 && wordBad !== -1) {
    let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(newSentence);
} else {
    // If the condition is not fulfilled, console.log the original sentence.
    console.log(sentence);
}
