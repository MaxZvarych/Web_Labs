let data = [];

export const comparator = (a, b, field) => {
  switch (field) {
    case "sortPriceAsc":
      return a.price - b.price;
    case "sortOwnerAsc":
      if (a.owner > b.owner) return 1;
      else if (a.owner < b.owner) return -1;
      else return 0;
  }
};

export const sortBy = (inputList, sortType) => {
  if (sortType === "default") {
    return [...data];
  }
  let result = inputList.sort((a, b) => comparator(a, b, sortType));
  return result;
};

export const filterByPrice = (inputList, filterPrice) => {
  if (filterPrice === "default") {
    return inputList;
  }
  let result = [];
  switch (filterPrice) {
    case "priceLess100":
      result = inputList.filter(({ price }) => price < 100);
      break;
    case "priceOver100":
      result = inputList.filter(({ price }) => price > 100);
      break;
    case "priceOver200":
      result = inputList.filter(({ price }) => price > 200);
      break;
    case "priceOver500":
      result = inputList.filter(({ price }) => price > 500);
      break;
    case "priceOver1000":
      result = inputList.filter(({ price }) => price > 1000);
      break;
  }
  console.log("filter price", result);
  return result;
};

export const filterByRiskLevel = (inputList, filterRiskLevel) => {
  if (filterRiskLevel === "default") {
    return inputList;
  }
  let result = [];
  switch (filterRiskLevel) {
    case "riskLow":
      result = inputList.filter(({ riskLevel }) => riskLevel === "LOW");
      break;
    case "riskMedium":
      result = inputList.filter(({ riskLevel }) => riskLevel === "MEDIUM");
      break;
    case "riskHigh":
      result = inputList.filter(({ riskLevel }) => riskLevel === "HIGH");
      break;
    case "riskUltraHigh":
      result = inputList.filter(({ riskLevel }) => riskLevel === "ULTRAHIGH");
      break;
  }
  console.log("filter level of risk", result);
  return result;
};

export const filterByBiddingTrend = (inputList, filterBiddingTrend) => {
  if (filterBiddingTrend === "default") {
    return inputList;
  }
  let result = [];
  switch (filterBiddingTrend) {
    case "trendAscending":
      result = inputList.filter(
        ({ biddingTrend }) => biddingTrend === "ASCENDING"
      );
      break;
    case "trendDescending":
      result = inputList.filter(
        ({ biddingTrend }) => biddingTrend === "DESCENDING"
      );
      break;
  }
  console.log("filter trend of bidding", result);
  return result;
};

export const executeFilters = (props, sourceList) => {
  data = sourceList;
  let inputList = [...data];
  inputList = sortBy(inputList, props.sortType);
  inputList = filterByPrice(inputList, props.filterPrice);
  inputList = filterByRiskLevel(inputList, props.filterRiskLevel);
  inputList = filterByBiddingTrend(inputList, props.filterBiddingTrend);

  return inputList;
};
