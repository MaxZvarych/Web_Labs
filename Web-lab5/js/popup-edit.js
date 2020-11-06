import { updateSecurity } from "./api.js";

let popup = document.getElementById("popup"),
  popupToggle = document.getElementById("edit_btn"),
  popupClose = document.querySelector(".close-popup");

popupToggle.onclick = function () {
  let documentOwner = document.getElementById("typedownername").value,
    price = document.getElementById("typedprice").value,
    levelOfRisk = document.getElementById("level_of_risk").value,
    trendOfBidding = document.getElementById("bidding_trend").value;
  if (documentOwner == "" || price >= 1000000 || price <= 1) {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
    const id = getIdFromURL();
    updateSecurity(id, {
      documentOwner,
      price,
      levelOfRisk,
      trendOfBidding,
    });
    clearInputs();
  }
};

function clearInputs() {
  document.getElementById("typedownername").value = "";
  document.getElementById("typedprice").value = "";
  document.getElementById("level_of_risk").value = "";
  document.getElementById("bidding_trend").value = "";
}

popupClose.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

var getIdFromURL = () => {
  let url = window.location.href;
  const splitted = url.split("?id=");
  return splitted[1];
};
console.log(getIdFromURL());
