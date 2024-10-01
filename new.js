// videos from 71-78
// task1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newmix = mix.map(function (ele) {
    return typeof ele === "string"?ele:"";

}).reduce(function (cu,acc)
{
    return `${cu}${acc}`;
});
console.log(newmix);
// Elzero
// task2
    let myString = "EElllzzzzzzzeroo";
let task2 = myString.split("").filter(function (ele,index) {
    return myString.indexOf(ele) === index;
        ;
}).join("");
console.log(task2);
// Elzero
// task 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let task3 = myArray.reduce(function (cu, acc) {
    if (Array.isArray(acc)) {
        return cu+acc.join("");;
    } else {
        return cu + acc;
    }
});
console.log(task3);
// Elzero
// task4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newnum = numsAndStrings.filter(function (ele) {
    return typeof ele === "number";
}).map(function(ele)
    {
    return -ele;
    });

console.log(newnum);

// [-1, -10, 10, 20, -5, -3]
// task5
let nums = [2, 12, 11, 5, 10, 1, 99];
let newnums = nums.reduce(function (acc, ele) {
    return ele % 2 == 0 ? acc * ele : acc + ele;
},1);
console.log(newnums);
// 500
// from 79 to 85
// task1
// Create Your Object Here
let member = new Object({ name: "Elzero",age:38,country:"Egypt",fullDetails(){return`My Name Is ${member.name}, My Age Is 38, I Live in ${member.country}`;} });
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
// task2
// Method One
// Create Your Object Here
let objMethodOne = { property: "Method One" };

console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo =new Object( { property: "Method Two" });
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
let objMethodThree = Object.create({ property: "Method Three" });
console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign({ property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"
// task 3
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a}, threeNums, twoNums);
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
// task 4
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
let ok=Object.keys(myFavGames);
for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ${ok[i]}`);
    console.log(`The Publisher Is ${myFavGames[ok[i]].publisher}`);
    console.log(`The Price Is ${myFavGames[ok[i]].price} `);

    //   Check If Nested Object Has Property (bestThree)
    if (myFavGames[ok[i]].bestThree!==undefined ) {
      console.log("- Game Has Releases");
      console.log(`First => ${myFavGames[ok[i]].bestThree.one}`);
      console.log(`Second =>${myFavGames[ok[i]].bestThree.two}`);
      console.log(`Third =>${myFavGames[ok[i]].bestThree.three}`);
    }
    console.log("#".repeat(20));

}
// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"


// videos from 86-93
// task1
console.log(document.getElementById("elzero"));
console.log(document.getElementsByTagName("div")[0]);
console.log(document.getElementsByClassName("element")[0]);
console.log(document.getElementsByName("js")[0]);
console.log(document.querySelector("div"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("[name='js']"));
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("[name='js']")[0]);
console.log(document.body.firstElementChild);
console.log(document.body.children[0]);
console.log(document.body.childNodes[1]);

// task2

// let myelement = document.querySelectorAll("img");
// myelement.forEach((img) => {
//   img.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
//   img.setAttribute("alt", "Elzero Logo");
//      img.style="background-color:red";
// });
// task3
let dollar = document.querySelector("input");
let result = document.getElementsByClassName("result")[0];
dollar.oninput = function ()
{
  result.innerHTML = `{${dollar.value}} USD Dollar = {${(dollar.value*15.6).toFixed(2)}} Egyptian Pound`;
}
// task4
let first = document.querySelector(".one");
let second = document.querySelector(".two");
first.setAttribute("title", first.className);
second.setAttribute("title", second.className);
first.textContent = first.className;
second.textContent = `${ second.className } ${second.attributes.length}`;

// task 5
for (let i = 0; i < document.querySelectorAll("img").length;i++)
{
  if (document.querySelectorAll("img")[i].hasAttribute("alt"))
  {
    document.querySelectorAll("img")[i].setAttribute("alt", "Old");
  }
  else
  {
      document.querySelectorAll("img")[i].setAttribute("alt", "Elzero New");
    }
}

// task6
let elnum = document.getElementsByName("elements")[0];
form =  document.querySelector("form");
type = document.querySelector("select");
text = document.getElementsByName("texts")[0];
results = document.querySelector(".results");
form.onsubmit = function (event)
{
  event.preventDefault();
  document.querySelectorAll(".box").forEach(el => el.remove());

  for (let i = 1; i <= elnum.value; i++)
  {
    let myel = document.createElement(type.value);
    let mytext = document.createTextNode(text.value);
    myel.className = "box";
    myel.title = "Element";
    myel.id = `id-${i}`;
    myel.style.display = "inline-block";
    myel.style.width = "200px";
        myel.style.margin = "20px";
 myel.style.padding = "10px";
    myel.style.color = "white";
    myel.style.backgroundColor = "blue";
    myel.style.textAlign = "center";
    myel.appendChild(mytext);
    results.appendChild(myel);
  }

}
let input = document.querySelectorAll(".input");
  let submit = document.querySelector("[type='submit']");
box = document.querySelectorAll(".box");
for (let i = 0; i < input.length; i++) {
  input[i].style.display = "block";
    input[i].style.boxSizing = "border-box";
  input[i].style.width = "200px";
  input[i].style.padding = "10px";
  input[i].style.margin = "15px auto";
  
}
submit.style.display = "block";
submit.style.boxSizing = "border-box";
submit.style.width = "200px";
submit.style.padding = "10px";
submit.style.margin = "15px auto";
submit.style.backgroundColor = "green";
submit.style.color = "white";