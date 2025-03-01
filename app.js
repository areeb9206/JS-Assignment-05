// Chapter 17-20:- (ARRAYS AND LOOP)

// Q1. Declare and initialize an empty multidimensional array. (Array of arrays)

var arr1 = [];

// Q2. Declare and initialize a multidimensional array representing the following matrix:

var arr2 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// Extra Work
console.log(arr2[1][2]);

// Q3. Write a program to print numeric counting from 1 to 10.

for(var i = 1; i <= 10; i++){
    document.write(i,"<br>")
}

// Q4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var number = +prompt(
    "Enter a number to show its multiplication table",
    "5"
  );
  var multiplication = +prompt(
    "Enter length multiplication table"
  );

  document.write("<h2>Multiplication table of " + number + "<br>Length ",multiplication,"</h2>");

  for (var i = 1; i <= multiplication; i++) {
    document.write(number + " x ", i, " = " + number * i + "<br><br>");
  }

//   Q5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(var f = 0; f < fruits.length; f++){
    document.write(fruits[f],"<br>")
    };

    for(var f = 0; f < fruits.length; f++){
        document.write("<br>Element at index ", f , " is ", fruits[f]," <br>")

        };

// Q6. Generate the following series in your browser. See example output.


// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<h2>Counting</h2>");
for (let i = 1; i <= 15; i++) {
  document.write(i, " ");
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<h2> Reverse counting</h2>");
for (let a = 10; a >= 1; a--) {
  document.write(a, " ");
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<h2> Even</h2>");
for (var b = 0; b <= 20; b += 2) {
  document.write(b, " ");
}

//  d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<h2>Odd</h2>");
for (var c = 1; c <= 19; c += 2) {
  document.write(c, " ");
}

document.write("<h2>Series</h2>");
for (var d = 2; d <= 30; d += 2) {
  document.write(" ", d + "k  <br>");
}

// Q7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Wite a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

var userInp = prompt("What do you want to order?")
var items = ["cake", "apple pie", "cookie", "chips", "patties"];

var flag = false;

for(var h = 0; h < items.length; h++){
if(userInp === items[h]){
document.write(userInp," is Available at ", h ," index in our bakery<br>")
flag = true;
}
}
if(flag == false){document.write("We're sorry ",userInp, " is not available in our bakery<br>" )
}

// Q8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]

var ABC = [24, 53, 78, 91, 12];

var largest = ABC[0]; 

for (var i = 1; i < ABC.length; i++) {
    if (ABC[i] > largest) {
        largest = ABC[i]; 
    }
}

document.write("All Numbers: " + ABC, "<br>")
document.write("The largest number is ", largest,"<br>")



// Q9. Write a program to identify the smallest number in thegiven array. A = [24, 53, 78, 91, 12]


var AB = [24, 53, 78, 91, 12];

var smallest = AB[0]; 

for (var i = 1; i < AB.length; i++) {
    if (AB[i] < smallest) {
        smallest = AB[i]; 
    }
}

document.write("All Numbers: " + AB, "<br>")
document.write("The smallest number is ", smallest)


// 10. Write a program to print multiples of 5 ranging 1 to 100.

document.write("<h2> Multiples of 5</h2>");
for (var z = 5; z <= 100; z += 5) {
  document.write(z, " ");
}