// 1. На HTML-сторінці є елемент div:
//     <body>
// 	<div id="test">First</div>
//   </body>
// Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами.

function task01() {
    // перший спосіб
    // const el = document.getElementById("test");
    // el.innerHTML = "Last";

    // другий спосіб
    // const el = document.querySelector("#test");
    // el.textContent = "Last";

    // третій спосіб
    const el = document.getElementsByTagName('div')[0];
    el.innerHTML = 'Last';
}

// 2. На сторінці є елемент зображення:
//      <body>
// 		   <img class="image" src="dog.jpg">
//      </body>
// Потрібно змінити зображення dog.jpg на cat.jpg.
// Виведіть в модальному вікні вміст тегу img з новим зображенням.

function task02() {
    const img = document.querySelector('.image');
    img.setAttribute('src', './img/cat.jpg');
    alert(img.outerHTML);
}

// 3.
//        <body>
// <h2>Article header</h2>
//   <div id="text">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//   </div>
// <p>Another text</p>
//     </body>
// На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору
//  (використати метод document.querySelectorAll). І вивести їх вміст із вказанням номеру абзацу в такому форматі:
// Selector text 0: First paragraph
// Selector text 1: Second paragraph
// Selector text 2: Third paragraph

function task03() {
    const elememnts = document.querySelectorAll('#text p');
    elememnts.forEach((el, i) => {
        console.log(`Selector text ${i}: ${el.innerText}`);
    });
}

// 4. На HTML-сторінці є ненумерований список з id="list",
// який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
// 	1) першого елемента списку
// 	2) останнього елемента списку
// 	3) другого елемента списку
// 	4) четвертого елемента списку
// 	5) третього елемента списку
// Зробіть завдання 2 різними способами.
// Приклад:
// 1
// 2
// 3
// 4
// 5
// Результат виводу: 1, 5, 2, 4, 3

function task04() {
    const arr = [...document.querySelectorAll('#list li')].map(
        (e) => e.innerHTML
    );
    let res = '';

    // First way
    // for(let i=0; i<(arr.length/2); i++){
    //     if(arr.length % 2 !== 0 && i == Math.floor(arr.length/2)){
    //         res += arr[i];
    //     } else {
    //         res += arr[i] + " " + arr[arr.length-i-1] + " ";
    //     }
    // }

    // Second way
    while (arr.length > 0) {
        res += arr.shift();

        if (arr.length > 0) {
            res += ' ' + arr.pop();
        } else {
            break;
        }

        res += ' ';
    }

    alert(res);
    console.log(res);
}

// 5. Для сторінки
//   <body>
//        <h1>I'am a big header!!!</h1>
// <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
// </div>
// <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
// </ul>
// <span>Make me invisible, please!</span>
// 	    </body>
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано нижче:

function task05() {
    const h1 = document.querySelector("h1");
    h1.style = "background: rgb(118 234 126);";

    const arr_p = [...document.querySelectorAll("#myDiv p")];
    arr_p.shift().style = "font-weight: bold;";
    arr_p.shift().style = "color: red;";
    arr_p.shift().style = "text-decoration: underline;";
    arr_p.shift().style = "font-style: italic;";

    [...document.querySelectorAll("#myList li")].forEach(el => el.style = "display: inline-block;");

    document.getElementsByTagName("span")[0].style = "display: none;";
}


// 6. Задано HTML-сторінку:
//     <body>
// <input type="text" id="input1" value="Text1">
// <input type="text" id="input2" value="Text2">
//   </body>
// 1)Користувач почергово вводить 2 повідомлення (використати prompt()).
//      1-е повідомлення записується в 1-ий <input>, 2-ге – в 2-ий.
// 2)Поміняти значення 1-го і 2-го інпутів місцями.

function task06_1() {
    const input1 = document.getElementById("input1");
    input1.value = prompt("Enter some text");

    const input2 = document.getElementById("input2");
    input2.value = prompt("Enter some text");
}

function task06_2() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");

    const tmp = input1.value
    input1.value = input2.value;
    input2.value = tmp;
}


// 7. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.

// 		<body>
// 		  <main class="mainClass check item">
// 		        <div id="myDiv">
//            <p>First paragraph</p>
//          </div>
//        </main>
// 	    </body>
