// import { refetchAllSecurities } from "./script.js";
import { getAllSecurities, postSecurity } from "./api.js";
let popup = document.getElementById("popup"),
  popupToggle = document.getElementById("submit_btn"),
  popupClose = document.querySelector(".close-popup");

popupToggle.onclick = function (event) {
  event.preventDefault();
  let documentOwner = document.getElementById("typedownername").value,
    price = document.getElementById("typedprice").value,
    levelOfRisk = document.getElementById("level_of_risk").value,
    trendOfBidding = document.getElementById("bidding_trend").value;
  if (documentOwner == "" || price >= 1000000 || price <= 1) {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
    postSecurity({
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
  document.getElementById("typedlevel_of_risk").value = "";
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
