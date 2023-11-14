// Your JS code here
// select elements

var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

//eventListeners

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;

  //console.log(subType);
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);

  //console.log(subDuration);
  updateSubscriptionDiv();
});

//function to calculate

var updateSubscriptionDiv = function () {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }

  //template literal and call function in event handlers

  var total = subDuration * monthlyCost;
  result.innerText = `Hi , you have chosen a ${subDuration} month ${subType} plan for $${total} FANTASTIC!!`;
};
