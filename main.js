const input = require('readline-sync');
//setting up readline-sync for later
const fs = require('fs');

const FILE_PATH = './inventory.json';

let inven = [];
//we are setting up our main variable here for later
// dont worry about below i used tutorials to do it
if (fs.existsSync(FILE_PATH)) {
    const fileContent = fs.readFileSync(FILE_PATH, 'utf8').trim();
    if (fileContent.length > 0) {
        inven = JSON.parse(fileContent);
    }
}

//setting up our other variables of different types for later
let itom = ""; //it's important that this is initialized as a string for the sake of using the functions in the while loop and i called it itom because some functions will use item as its own thing
let quant; 
let iter; 

while (itom.toUpperCase() !== "END") { // at first everything was a for loop because that is all I remembered from highschool but as the lessions went on i decided that a while loop serves best
    itom = input.question("add item to list? (input 'END' to stop) "); //readline-sync is one of my favorite functions what is a code if it cannot recieve inputs
    itom = itom.replaceAll(" ", ""); // using what i learned to simplifiy the code and nothing goes wrong later when we have to split it
    console.log(itom); // I was using this for debugging and could remove it if needed
    if (itom.toUpperCase() == "END") { // to uppercase to ensure that it ends instead of adding and item called end
        console.log("ending... data storing"); //more for fun
        break; // not really nessicary but ensures in case of bug
    } else {
         
    quant = input.questionInt("Quantity? (use negitive numbers to substract) ");  //more inputs questionInt this time so we make sure we get a number
    iter = inven.findIndex(item => item.includes(itom)); // this right here is why itom cannot be called item but finding the index to use for later
    
    if (iter == -1) { // if its not already on the list this one is important for adding item
        inven.push(`${itom} ${quant}`); // we all know pushing adds something to the end of the array
    } else { 
        let parts = inven[iter].split(" "); // this is the fun part lets change something and we start by seperating itom and quant
        let oldQuant = Number(parts[parts.length - 1]); //this is accessing the second part of parts aka the number at the end
        inven[iter] = `${itom} ${oldQuant + quant}`; //putting it all back together making sure they are adding or subtracting if you used a negative number

       
    } 
   
}

    inven.sort(); // sorting the list alphabetically for readabillity 
    console.log(inven); // loging it
    
    
} 

// more turorial stuff
fs.writeFileSync(FILE_PATH, JSON.stringify(inven, null, 2), 'utf8');


console.log(`this is your completed inventory:`);
//pardom me i forgot to push this
//okay i fixed it really should have waited to submit this but the functioning version i forgot to push and was on a different machine and i needed to add these comments too
inven.forEach(ite => {
  console.log(ite);
});

//for (const ite of inven) {
 //   console.log(ite);
//} // i had for each here but it stopped working ill get back to it this loop works fine but that above is cleaner if i didnt mess it up a few times



console.log("have a lovely day!");