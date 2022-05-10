const numbers = ["one", "two", "three"];
const numbersHtml = numbers.map(function (numbers){
  return `<li>${numbers}</li>` ; 
});
document.getElementById("mylist").innerHTML = numbersHtml.join();

//Activity 2//

const grades =["A","B", "A"];
function convertGradeToPoints(grade){
    let points = 0;
    if(grade === "A"){
        points = 4;
    }else if (grade === "B"){
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// activity 3//
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function(total, item){
   return total + item; 
});
const gpa = pointsTotal/ gpaPoints.length;

//Activity 4 .filter//

const words = ["watermelon","peach", "apple", "tomato","grape"]

const shortWords =words.filter(function(word){
    return word.length < 6;
});

//Activity 5.indexof//
const number = [12, 3, 4, 21, 54];
const luckNumber = 21;
let luckIndex = number.indexOf(luckNumber);