// pricing section starts

function priceChange() {
  // Get the pricing elements for each plan
  var pricingBasic = document.getElementById("pricingBasic");
  var pricingBusiness = document.getElementById("pricingBusiness");
  var pricingAddon1 = document.getElementById("pricingAddon1");
  var pricingAddon2 = document.getElementById("pricingAddon2");

  // Toggle pricing and plan duration for Basic plan
  togglePricing(pricingBasic, 5, 48);
  togglePlanDuration("plan_durationBasic");

  // Toggle pricing and plan duration for Business plan
  togglePricing(pricingBusiness, 11, 105.6);
  togglePlanDuration("plan_durationBusiness");

  // Toggle pricing and plan duration for Addon1
  togglePricing(pricingAddon1, 3, 28.8);
  togglePlanDuration("plan_durationAddon1");

  // Toggle pricing and plan duration for Addon2
  togglePricing(pricingAddon2, 3, 28.8);
  togglePlanDuration("plan_durationAddon2");
}

function togglePricing(element, initialPrice, newPrice) {
  // Toggle between current price and new price with font size change
  if (element.innerHTML === "SGD " + initialPrice) {
    element.innerHTML = `<span class="togglefont">SGD ${newPrice}</span>`;
  } else {
    element.innerHTML = `SGD ${initialPrice}`;
  }
}

function togglePlanDuration(elementId) {
  var plan_duration = document.getElementById(elementId);
  // Toggle between "Billed Monthly." and "Billed Yearly" based on checkbox state
  var checkbox = document.querySelector("input[type=checkbox]");
  if (checkbox.checked) {
    plan_duration.innerHTML = `<span class="yrly">Billed Yearly</span>`;
  } else {
    plan_duration.innerHTML = "Billed Monthly.";
  }
}


  document.addEventListener("DOMContentLoaded", function() {
    // Get all anchor elements in the document
    var anchors = document.querySelectorAll("a");

    // Loop through each anchor element
    anchors.forEach(function(anchor) {
      // Check if the href attribute contains only "#"
      if (anchor.getAttribute("href") === "#") {
        // Set the href attribute to the desired redirect page
        anchor.setAttribute("href", "/request-demo.html");
      }
    });
  });