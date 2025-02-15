/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require('../data/dinosaurs');
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
  // Should return an object key tallest dinosaur name and length value
  // Should return First dinosaur if there are mutiples with the same length
  // Should return an empty object if there are no dinosaurs.

  // Initialize an empty object to store the tallest Dinosaur.
  let tallestDino = {}
  // Initialize a varible to keep track of length.
  let maxLength = 0;

  // Make a for loop to iterate the dinosaurs array.
    for (const dinosaur of dinosaurs) {
      // Check if dinosaur length is greater then current max length.
      if (dinosaur.lengthInMeters > maxLength) {
        
        //Update the max length.
        maxLength = dinosaur.lengthInMeters;
        
        //Update the tallest dinosaur object with the current dinosaur name and length
        tallestDino = {
          // Use bracket for key
          [dinosaur.name]: dinosaur.lengthInMeters * 3.281
        };
      }
    }
    // Return it to empty object;
  return tallestDino;
}


/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  // Should return a string description of a dinosaur, by ID
  // Should work for dinosaurs with only one value in mya
  // Should return an error message if dinosaur cannot be found
  // Should not mutate the original dinosaurs array
  

  // MAKE A VARIABLE USING THE .FIND METHOD
  const singleDinosaur = dinosaurs.find(dinosaur => dinosaur.dinosaurId === id);
  
  // MAKE A IF STATMENT WITH TWO NEW VARIABLES INSIDE THE IF STATMENT
  if (singleDinosaur) {
  
  
  const myaRange = Math.min(...singleDinosaur.mya);
  const description = `${singleDinosaur.name} (${singleDinosaur.pronunciation})\n${singleDinosaur.info} It lived in the ${singleDinosaur.period} period, over ${myaRange} million years ago.`;
    
  return description;
  
    } else {
      return `A dinosaur with an ID of '${id}' cannot be found.`; 
  }
}


  

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` argument is provided when the function is called, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
   function getDinosaursAliveMya(dinosaurs, mya, key) {
    // STEP 1 MAKE A EMPTY ARRAY TO STORE THE VALUES OF THE DINOSAURS
    const result = [];

    // STEP 2 MAKE A VARIABLE (INITIALIZE MINMYA AND MAX MYA) FOR BOTH VALUES MAKE IT AT 0 YOU WILL UPDATE IT LATER
    let minMya, maxMya;
    
    // STEP 3 USE .FILTER (WHICH CONSTRUCTS A NEW ARRAY OF ALL VAULES FOR WHICH THE CALL FUNCTION RETURNS TRUTHY)
    dinosaurs.filter(dinosaur => {
    // CHECK IF THE CURRENT DINOSAURS 'MYA' ARRAY HAS ONLY ONE VALUE
      if (dinosaur.mya.length === 1) {
        // IF THERES ONLY ONE MYA VALUE, SET BOTH 'MINMYA' AND 'MAXMYA' TO THAT VALUE, MAKE SURE TO DO -1 TO GET THE FULL RANGE.
        minMya = dinosaur.mya[0] - 1;
        maxMya = dinosaur.mya[0];
      
      } else {
        // IF THERE ARE MUTIPLE MYA VALUES, ASSIGN MINMYA AND MAXMYA WITH .MAX AND .MIN, USE ... SPREAD TO ACCESS A COPY OF THE ARRAY
        minMya = Math.min(...dinosaur.mya);
        maxMya = Math.max(...dinosaur.mya);
      }
      // CHECK IF THE MYA PROVIDED FALLS WITHIN THE RANGE OF MIN AND MAX MYA
      if (mya >= minMya && mya <= maxMya) {
        if (key && dinosaur[key]) {
          // IF 'KEY' is PROVIDED AND THE CURRENT DINOSAUR HAS A PROPERTY PUSH IT 
          result.push(dinosaur[key]);
        } else {
          //IF 'KEY' IS NOT PROVIDED OR THE DINOSAUR DOESN'T HAVE THAT PROPERTY PUSH IT 
          result.push(dinosaur.dinosaurId);
        }
      }
    });
    //RETURN THE RESULT 
    return result;
  }
  
  
  
    
  


module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya
};
