import { MENU_ITEM } from "../constants/constants.js";

const menuList = document.getElementById("menu_list");

const menuItem = MENU_ITEM.map((item) => {
  return `
        <li>
            <a href="${item.href}" class="text-[#f4f4f4] text-lg">${item.text}</a>
        </li>
    `;
});

menuList.innerHTML += menuItem.join("");
