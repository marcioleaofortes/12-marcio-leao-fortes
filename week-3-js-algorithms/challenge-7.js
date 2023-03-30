
// 7 - Create the function. It should accept two 
// string parameters and returns the longer one


// Your code here

function longerString(String1, String2) {
    if (String1.length >= String2.length) {
      return String1;
    } else {
      return String2;
    }
  }
  
  console.log(longerString('codemify', 'test')) // codemify
  console.log(longerString('automation', 'coding')) // automation
  console.log(longerString('automation', 'the codemify')) // the codemify
        



