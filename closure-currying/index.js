// 1. Create a function that every time you invoke it, it will print out the message “Congrats you earn the chance!“, however it can only print out the message with the first 5 invokes. all the rest invokes will print out the message “Sorry you missed the chance” (run function once count as 1 invoke) (hint : using closure)

function logMessage() {
  let count = 1;
  return function inner(){
    count <= 5
      ? console.log("Congrats, you earned the chance!")
      : console.log("Sorry you missed the chance");

    count++;
  };
}

const invokeLogMessage = logMessage();
invokeLogMessage();
invokeLogMessage();
invokeLogMessage();
invokeLogMessage();
invokeLogMessage();
invokeLogMessage();
invokeLogMessage();


// 2. Implement the callback function "longerThan" for : Array.filter(longerThan(minimumLength))  which takes minimumLength as an input and filter all the strings whose length is longer than minimumLength (hint : using currying)

function longerThan(minimumLength) {
  return (elem) => elem.length > minimumLength;
}
const arr = ['whose', 'length', 'is', 'longer', 'than', 'minimumLength']
console.log(arr.filter(longerThan(4)))

