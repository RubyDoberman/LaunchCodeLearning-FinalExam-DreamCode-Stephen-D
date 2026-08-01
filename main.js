// SO I am comming back in here to add some more comments to better explain what is going on because i finished earlier than i thought i would and this rushed comments made when i was sleepy are not good enough\
const input = require('readline-sync'); // this is readline-sync its used to get inputs from the user and needs to be installed at the beginning here or at least before you start using it in your code
// it makes the most sense to do it at the beginning to me
//
//setting up readline-sync for later
const fs = require('fs'); // this it fs i think it stands for file system and I found a tutorial for this because it lets me do something i really wanted to do
// the tutorial never explained the lodgic behind it
// these are both made by initiating them as functions i dont know if what you call fs is important but with readline-sync you can call it anything but its important to call it something that lets you know what it does
const FILE_PATH = './inventory.json'; // the tutorial said pretty much nothing but how to do it but i can confidently say all this does is set up a file path to make it easier to call back to later


let inven = []; //here we are creating an empty array to act as the basis of our system setting it up as an array now to avoid errors later we want the code to know its an array so we don't get a run on string instead

//we are setting up our main variable here for later
// dont worry about below i used tutorials to do it
if (fs.existsSync(FILE_PATH)) {
    const fileContent = fs.readFileSync(FILE_PATH, 'utf8').trim();
    if (fileContent.length > 0) {
        inven = JSON.parse(fileContent);
    }
}
// I do know what it does though it checks the inventory.json file and pulls the data from it if it exists into our string, its loading our data for us
//setting up our other variables of different types for later
//now we are setting up our variables its important to use let and not const because all these are going to be changing with your inputs from readline and we want that
let itom = ""; //it's important that this is initialized as a string for the sake of using the functions in the while loop and i called it itom because some functions will use item as its own thing
let quant; // this is going to be a number which it what variables default to so we dont need to initialize it
let iter; //same as above make sure you name it something that makes sense for it perpose i like to use shortend versions of the word quant is quantity and iter is iteration, if i had to have more versions of thse variables i would use the shortened name then what its for example quantFood or quantPet


while (itom.toUpperCase() !== "END") { // at first everything was a for loop because that is all I remembered from highschool but as the lessions went on i decided that a while loop serves best, since it will keep going unil whatever is in the parenthesis is false and we want it to keep going until the user inputs END you can end the loop when you are done adding items
    itom = input.question("what item are you adding to the list? (input 'END' to stop) "); //readline-sync is one of my favorite functions what is a code if it cannot recieve inputs, to call upon readline-sync you need to use the function you set up for readline earlier then use the .question method then in the parenthesis you use a string to ask your question defining what should be inputted, i could rephrase my question but ill leave this writting here to you know that coding is refined over time
    itom = itom.replaceAll(" ", ""); // using what i learned to simplifiy the code and nothing goes wrong later when we have to split it, i am essentially using the replaceAll method to remove all spaces from the input because space is what we use for the split later
    console.log(itom); // I was using this for debugging and could remove it if needed, but i am leaving it in for now as an example of how you can use console.log to find errors in your code this console.log lead to the solution above this
    if (itom.toUpperCase() == "END") { // to uppercase to ensure that it ends instead of adding and item called end, toUpperCase is a method that makes a string all uppercase and it make it so we only have to check for END instead of end as well and it just makes the entire program easier to use, if then statements are basic logic tools think of it as cause and effect if this then that or else this happens type stuff

        console.log("ending... data storing"); //more for fun just wanted to put something here to check if the loop was really ending when i wanted it to and changed it contents for fun
        break; // not really nessicary but ensures in case of bug break, ends a loop and we want the loop to end when the user inputs END this should happen automatically because its a while loop but this prevents it from running through the rest of the code should a mistake happen
    } else { 
        //else is essentially saying this is what you do if the if statement is false, and for this code holds the meat of the code

         
    quant = input.questionInt("Quantity? (use negitive numbers to substract) ");  //more inputs questionInt this time so we make sure we get a number i ask you to use a negative number for subtraction because a negative plus a positive is alway the same as subtracting a positive with the negative number's positive counterpart
    iter = inven.findIndex(item => item.includes(itom)); // this right here is why itom cannot be called item but finding the index to use for later we are essentially taking the item input and checking if its already in the list then taking that index and storing it as variable called iter or current iteration
    if (iter == -1) { // if its not already on the list this one is important for adding item
        inven.push(`${itom} ${quant}`); // we all know pushing adds something to the end of the array i alos prefer the entire `` strings they clean up the code block which i switched this to after that lesson, the push method just adds a variable to the end of the array in this case we are adding a combined string of itom and quant seperated by a space which will be important for later
    } else { 
        let parts = inven[iter].split(" "); // this is the fun part lets change something and we start by seperating itom and quant at the " "
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