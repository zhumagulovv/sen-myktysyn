import { MENU_ITEM } from "../constants/constants.js";

const menuList = document.getElementById("menu_list");
const menuListFooter = document.getElementById("menu_list_footer");

const menuItem = MENU_ITEM.map((item) => {
  return `
        <li>
            <a href="${item.href}" class="text-[#f4f4f4] text-lg">${item.text}</a>
        </li>
    `;
});

menuList.innerHTML += menuItem.join("");
menuListFooter.innerHTML += menuItem.join("");

// const time = 1000;
// const step = 1;

// function outNum(num, elem) {
//   let e = document.querySelector("#out");
//   let n = 0;
//   let t = Math.round(time / (num / step));
//   let interval = setInterval(() => {
//     n = n + step;
//     if (n == num) {
//       clearInterval(interval);
//     }
//     e.innerHTML = n + "+";
//   }, t);
// }

// outNum(100, "#out");
