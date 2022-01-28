'use strict';



/* Write a function that take a string and return true if the string only contain uppercase and lowercase
characters (no numbers and symbols) and it should end with capital A else return false */

function capitalA(s){
    let regex2 = /[a-zA-Z]+/g;
    let regex1=/[^a-z]+/g;
    let regex3= /(A)$/g;
    if(regex2.test(s)&&regex3.test(s)){
    
    return "true" ;
      
}
  else if(regex1.test(s)){
    return "false";
  }
  
}


/* Write a function that take a string and return true if the the sting is following the emails pattern
which end with io (example@example.io) */

function ioEmail(email){
    let regex1 = /example@example.io/gi;
    if(regex1.test(email)){
        return "true";
    }
    else{
        return "false";
    }
    // Add your logic.
    
}

/* You have a text that contain image names with their extention you need to write a function to 
find all images in that text and return their names and extention in an array 
required extention are jpg, jpeg and png.
*/

function imagesSearcher(text){
    let arr = [];
    for(let i=0; i<text.length;i++){
        let str = text[i];
        let reg= /(jpg)$/gi;
        let reg1= /(jpeg)$/gi;
        let reg2= /(png)$/gi; 
        if(reg.test(str)||reg1.test(str)||reg2.test(str)){
           arr.push(str);
         }
      }
      console.log(arr);    // Add your logic.
    return arr;
}


describe("Test capitalA", ()=>{
    test("It should return true if the input has uppercase and lowercase characters (no numbers and symbols) and it should end with capital A else return false ", () => {
        expect(capitalA("Hello world A")).toStrictEqual(true);

        expect(capitalA("Hello world")).toStrictEqual(false);

        expect(capitalA("Hello world a")).toStrictEqual(false);
    })
});

describe("Test ioEmail", () => {
    test("It should return true if the input is in email format that end with .io", () => {
        expect(ioEmail("example@example.io")).toStrictEqual(true);
        expect(ioEmail("ex@ample@example.io")).toStrictEqual(false);
        expect(ioEmail("ex.ample@example.io")).toStrictEqual(false);
        expect(ioEmail("example@example.gmail")).toStrictEqual(false);
    })
});


describe("Test imagesSearcher", () => {
    test("It should return all images names that end with jpg, jpeg and png extention", () => {
        expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, cat.png sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dog.jpg Ut enim ad minim veniam, quis nostrud exercitation ullamco cow.jpeg laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).toStrictEqual(['cat.png', 'dog.jpg', 'cow.jpeg']);
        expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).toStrictEqual([]);
        expect(imagesSearcher("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. horse.gif Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore dolphin.pdf eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa mouse.tiff qui officia deserunt mollit anim id est laborum.")).toStrictEqual([]);
    })
})