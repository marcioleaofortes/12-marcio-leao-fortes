
//  Older Than Me: Create a function that outputs a 
//  string specifying if the person in example below 
//  is older or younger than you."


// Your code here

function compareAge(name, age) {
    if (age > 31) {
      return name + " is older than me.";
    } else {
      return name + " is younger than me.";
    }
  }
  
  console.log(compareAge('Joel', 36));
  console.log(compareAge('Samuel', 24));
  console.log(compareAge('Lily', 28));




// compareAge("Joel", 36) ➞ "Joel is older than me."
// compareAge("Samuel", 24) ➞ "Samuel is younger than me."
// compareAge("Lily", 28) ➞ "Lily is oder than me."