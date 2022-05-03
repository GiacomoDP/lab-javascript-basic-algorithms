// Iteration 1: Names and Input
//
// Iteration 2: Conditionals
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Giacomo"

//1.2 Print `"The driver's name is XXXX"`.
console.log (`"The driver's name is ${hacker1}"`)
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Luca"
//1.4 Print `"The navigator's name is YYYY"`. //
console.log (`"The navigator's name is ${hacker2}"`)

if (hacker1.length>hacker2.length ) {
        console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.lenght>hacker1.lenght)  {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
  ;


// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
for (let string = 0; string < hacker1.length; string++) { 
    let hackerCapital = ""
    hacker1Capital [string]= console.log(`${hacker1 [string]. toUpperCase()}` )
}

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
for (let string = hacker2.length-1; string >= 0; string--) 
{console,log(`${hacker2 [string]}` )
}



//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?




