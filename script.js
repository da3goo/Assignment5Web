// Task 1
function findNearestAndBlabla(){
    let num1 = Number(prompt("Number 1")); //[20]
    let num2 = Number(prompt("Number 2")); //[10]
    let num3 = Number (prompt("Number 3")); //[40]

    if (num1 == "" || num2 == "" || num3 == ""){
        document.getElementById('nearestRes').textContent = "Enter nums!";
        return;
    }

    let distances = [Math.abs(100-num1),Math.abs(100-num2),Math.abs(100-num3)]; // [80,90,60]

    
    
    distances.sort(); //[60,80,90]


    document.getElementById('nearestRes').textContent = (100 - distances[0]) + " is nearest";
    document.getElementById('farthestRes').textContent = (100 - distances[2]) + " is farthest";
}

//Task 2
function sortWords(){
    let text = document.getElementById('string1').value;
    if (text == ""){
        alert("No string!")
        return;
    }

    let words = text.split(' ').map(word => [...word].sort().join(''));
    let res = "";
    for (let i = 0; i < words.length; i++) { 
        res += words[i]; 
        if (i != words.length - 1) {
            res += " ";
        }
    }

    document.getElementById('sortingRes').textContent = res;
}
//Task 3
function task3(){
    let input = document.getElementById('task3Text1').value;
    if (input === ""){
        alert("No string!");
        return;
    }

    let counts = {};

    for (let char of input){
        counts[char] = (counts[char] || 0) + 1;
    }
    for (let char of input){
        if (counts[char] === 1){
            document.getElementById('task3Res').textContent = char + " is not repeated first character";
            return;
        }
    }
}
//Task 4
function task4(){
    let result = '';
    let input = document.getElementById('task4Input').value;
    if (input === ""){
        alert("No string!");
        return;
    }

    for (let char of input){
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= "Z")){
            if (char === 'z') result+='z';
            else if(char === 'Z') result += 'Z';
            else{
                result += String.fromCharCode(char.charCodeAt(0) + 1);
            }
        }
        else{
            result += char;
        }
    }
    alert(result);
}

//Task 5
function task5(){
    let words = [
        prompt("String 1"),
        prompt("String 2"),
        prompt("String 3")
    ]
    let longest = words[0];
    let shortest = words[0];
    for(let word of words){
        if (word.length > longest.length){
            longest = word;
        }
        if (word.length < shortest.length){
            shortest = word;
        }
    }
    document.getElementById('task5Res').innerHTML = "The longest is :" + longest + "<br> The shortest is:" + shortest ;

}

//Task6
function task6(){
    let words = document.querySelector('#task6Input').value.split(' ');

    resWords = words.map(word => {
        if (word.length > 7){
            return `<span class= "highlight">${word} </span>`;
        }else if(word.length < 3){
            return `<span class = "bold"> ${word} </span>`;
        }
        else{
            return word;
        }
    });
    console.log(resWords);

    document.querySelector('#task6Res').innerHTML = resWords.join(' ');

}
//Task 7
function task7(){
    let input = document.querySelector('#task7Input').value;
    let updated = input.replace(/\?/g, '*').replace(/!/g, '@');
    document.querySelector('#task7Res').innerHTML = updated;
}

//Task 8 
function task8(){
    let input = document.getElementById('task8Input').value;
    let res = input.split(/(?<=[.!?])/);
    document.getElementById('task8Result').innerHTML = res.join(' ');
}
//Task 9 
function task9(){
    let words = document.getElementById('task9Input').value.split(' ');
    let count = 0;
    for (let word of words){
        count+= 1;
    }
    alert(count);
}
//Task 10
function task10(){
    let paragraph = document.getElementById('task10Input').value;
    let words = paragraph.split(' ');
    let highlightedWords = words.map(word => {
        if (word.toLowerCase().startsWith('a')){
            return `<span class ="italic">${word} </span>`;
        }else if(word.toLowerCase().endsWith('y')){
            return `<span class ="underline"> ${word} </span>`;
        }else{
            return word;
        }
    });
    console.log(highlightedWords);

    document.getElementById('task10Result').innerHTML = highlightedWords.join(' ');
}