// Завдання 1

// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.



let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log(`Повідомлення №${counter}`);

  if (counter === 5) {
    clearInterval(intervalId);
    console.log("Інтервал зупинено!");
  }
}, 1000);


// Завдання 2

// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.


const boxes = document.querySelectorAll(".box");
let pos = 0;

const animation = setInterval(() => {
  pos += 5;

  boxes.forEach(box => {
    box.style.left = pos + "px";
  });

  if (pos > 300) clearInterval(animation);
}, 50);



// Завдання 3

// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.


let score = 0;
let time = 5;

const btn = document.getElementById("btn");
const scoreField = document.getElementById("score");
const timerField = document.getElementById("timer");

btn.addEventListener("click", () => {
  score++;
  scoreField.textContent = score;
});

timerField.textContent = `Час: ${time}`;

const timerId = setInterval(() => {
  time--;
  timerField.textContent = `Час: ${time}`;

  if (time <= 0) {
    clearInterval(timerId);
    btn.disabled = true;
    timerField.textContent = "Гру закінчено!";
  }
}, 1000);


// Завдання 4

// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

let time1 = Number(prompt("Введіть час у секундах:"));

const timerId1 = setInterval(() => {
  console.log(`Залишилось: ${time1} сек.`);
  time1--;

  if (time1 < 0) {
    clearInterval(timerId1);
    console.log("Час вийшов!");
  }
}, 1000);