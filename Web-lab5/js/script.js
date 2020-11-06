let securities = [];

import { getAllSecurities, deleteSecurity } from "./api.js";

export const EDIT_BUTTON_PREFIX = "edit-button-";
export const REMOVE_BUTTON_PREFIX = "remove-button-";
const mysecurities = document.getElementById("mysecurities");

const deleteItem = (event) => {
  const id = event.target.id.replace(REMOVE_BUTTON_PREFIX, "");
  deleteSecurity(id).then(refetchAllSecurities);
};

function displaysecurities(securities) {
  mysecurities.innerHTML = "";
  securities.forEach((item) => {
    addItemToPage(item);
  });
}

function addRemove(securities) {
  securities.forEach((item) => {
    const remove_btn = document.getElementById(
      `${REMOVE_BUTTON_PREFIX}${item.id}`
    );
    remove_btn.addEventListener("click", deleteItem);
  });
}

export const addItemToPage = (
  { id, documentOwner, price, levelOfRisk, trendOfBidding },
  deleteItem
) => {
  mysecurities.innerHTML += `<div class="securities-pair" id="${id}">
  <div class="securities-pair__image"></div>
  <h1 class="securities-pair__title">This security</h1>
  <p class="securities-pair__paragraph" id="security_paragraph">Owner : ${documentOwner} <br>
  Its price: ${price}$ <br>
  Its level of risk : ${levelOfRisk}  <br>
  Its bidding trend: ${trendOfBidding}. <br>
  </p>
  <div class="edit-remove__buttons">
      <button class="edit" id="${EDIT_BUTTON_PREFIX}${id}" onClick='location.href="/edit-security.html?id="+${id}'/>Edit</button>
      <button class="remove" id="${REMOVE_BUTTON_PREFIX}${id}">Remove</button>
  </div>
  </div>`;
};

const searchButton = document.getElementById("SearchButton");

searchButton.addEventListener("click", (event) => {
  event.preventDefault();

  let foundItem = document.getElementById("typedsecurities").value;
  let foundList = [];
  securities.forEach((item) => {
    if (
      item.documentOwner.includes(foundItem) ||
      item.levelOfRisk.includes(foundItem) ||
      item.price == foundItem ||
      item.trendOfBidding.includes(foundItem)
    ) {
      foundList.push(item);
    }
  });
  foundList.sort(function (obj1, obj2) {
    return obj1.price - obj2.price;
  });
  displaysecurities(foundList);
  let securities_price = 0;
  foundList.forEach((item) => {
    securities_price += item.price;
  });
  document.getElementById("resultResponces").innerHTML = securities_price;
});

function cleansecurities() {
  document.getElementById("typedsecurities").value = "";
  displaysecurities(securities);
}

const sort_sequrities = document.getElementById("sort_securities");
sort_sequrities.addEventListener("click", () => {
  securities.sort(function (obj1, obj2) {
    return obj1.price - obj2.price;
  });
  displaysecurities(securities);
});

const countPrice = document.getElementById("count_btn");
countPrice.addEventListener("click", () => {
  let securities_price = 0;
  securities.forEach((item) => {
    securities_price += item.price;
  });
  document.getElementById("resultResponces").innerHTML = securities_price;
});

getAllSecurities().then(console.log);

export const refetchAllSecurities = async () => {
  const allSecurities = await getAllSecurities();
  securities = allSecurities;
  displaysecurities(securities);
  addRemove(securities);
};
refetchAllSecurities();
