let buttons = document.getElementsByTagName("li");
let submit = document.getElementById("submit");
let main = document.querySelector('.main');
let icon = document.querySelector('.icon');
let result = document.querySelector('#result');
let selectedItem = document.querySelector('#selecteditem');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].removeAttribute("style");
    }

    buttons[i].style.backgroundColor = "#fc7614";
    buttons[i].style.color = "#fff";
    selectedItem.textContent = i + 1;
  });
}

function sendData() {
  submit.addEventListener('click', () => {
    main.style.display = 'none';
    icon.style.display = 'none';
    result.style.display = 'block';
  })
}

sendData();