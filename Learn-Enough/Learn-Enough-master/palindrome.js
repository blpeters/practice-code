// Adds 'reverse' to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}


//Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  
  //Returns content processed for palindrom testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }
  
  //Returns true for palindrome. False otherwise. 
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

