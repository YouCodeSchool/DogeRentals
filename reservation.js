// var cars = {
//   motorcycle: {
//     gearBox: null,
//     engine: ["electric", "essence"],
//     price: 10,
//   },

//   city: {
//     gearBox: "manual",
//     engine: ["electric", "hybrid", "essence", "diesel"],
//     price: 12,
//   },

//   compact: {
//     gearBox: "manual",
//     engine: ["hybrid", "essence", "diesel"],
//     price: 14,
//   },

//   sedan: {
//     gearBox: "automatic",
//     engine: ["hybrid", "essence", "diesel"],
//     price: 20,
//   },

//   van: {
//     gearBox: "manual",
//     engine: ["diesel"],
//     price: 16,
//   },

//   heavy: {
//     gearBox: "manual",
//     engine: ["essence", "diesel"],
//     price: 900,
//   },

//   truck: {
//     gearBox: "automatic",
//     engine: ["diesel"],
//     price: 250,
//   },
// };

// var price = 0;
// function Selectedcar(Id) {
//   var carslist = document.getElementById(Id);
//   return carslist.options[carslist.selectedIndex].value;
// }

// function trans() {
//   var choice = Selectedcar("vehicles");
//   if (choice != "null") {
//     var transmission = document.getElementById("transmission");
//     var mode = cars[choice]["gearBox"];

//     transmission.innerHTML = "transmission :" + mode;

//     price = cars[choice]["price"];
//     if (mode == "automatic") {
//       price += (price * 19) / 100;
//     }

//     if (mode == null) {
//       transmission.innerHTML = "no transmission ";
//     }

//     var engines = document.getElementById("engines");
//     engines.innerHTML =
//       "<option value='null' selected disabled hidden>--- select ---</option>";

//     for (engine in cars[choice]["engine"]) {
//       var option = document.createElement("option");
//       option.text = cars[choice]["engine"][engine];
//       option.value = cars[choice]["engine"][engine];
//       engines.add(option);
//     }
//   }
// }

// function calculate_price() {
//   var paying = document.getElementById("price");
//   var choice_of_car = Selectedcar("vehicles");
//   var choice_of_engine = Selectedcar("engines");
//   if (choice_of_car != "null") {
//     var price = cars[choice_of_car]["price"];
//     price = price;
//   }
//   if (choice_of_engine == "null") {
//     alert("choose an engine");
//     price = 0;
//   }

//   if (choice_of_engine == "electrique") {
//     price += (price * 5) / 100;
//   }
//   if (choice_of_engine == "hybrid") {
//     price += (price * 9) / 100;
//   }

//   if (choice_of_engine == "essence") {
//     price += (price * 14) / 100;
//   }

//   if (choice_of_engine == "diesl") {
//     price += (price * 21) / 100;
//   }

//   var duration = document.getElementById("duration");
//   var cost = price * duration.value;
//   Swal.fire({
//     title: "Are you sure?",
//     text: "Do you want to continue this purchase Cost : " + cost + " £",
//     icon: "info",
//     showCancelButton: true,
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Confirm!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire("Done!", "Your order has been made.", "success");
//     }
//   });
// }

let cars = document.querySelector("#vehicles");
let engines = document.querySelector("#engines");
let duration = document.querySelector("#duration");
let transmission = document.getElementById("transmission");
let carPrice, enginePrice, transmissionPrice, days, total;
let price = document.getElementById("price");
let calculer = document.getElementById("calculer");

function calculate_price() {

  console.log(cars.value);
  console.log(engines.value);

  switch (cars.value) {
    case "motorcycle":
      carPrice = 10;
      transmissionPrice = 0;
      transmission.innerText = "None";
      engines.options[1].hidden = false;
      engines.options[2].hidden = true;
      engines.options[3].hidden = true;
      engines.options[4].hidden = false;
      engines.options[5].hidden = true;
      break;
    case "city":
      carPrice = 12;
      transmissionPrice = 0;
      transmission.innerText = "Manual";
      engines.options[1].hidden = false;
      engines.options[2].hidden = false;
      engines.options[3].hidden = false;
      engines.options[4].hidden = false;
      engines.options[5].hidden = true;
      
      break;
    case "compact":
      carPrice = 14;
      transmissionPrice = 0;
      transmission.innerText = "Manual";
      engines.options[1].hidden = true;
      engines.options[2].hidden = false;
      engines.options[3].hidden = false;
      engines.options[4].hidden = false;
      engines.options[5].hidden = true;
      break;
    case "sedan":
      carPrice = 20;
      transmissionPrice = 19;
      transmission.innerText = "Automatic";
      engines.options[1].hidden = true;
      engines.options[2].hidden = false;
      engines.options[3].hidden = false;
      engines.options[4].hidden = false;
      engines.options[5].hidden = true;
      break;
    case "van":
      carPrice = 16;
      transmissionPrice = 0;
      transmission.innerText = "Manual";
      engines.options[1].hidden = true;
      engines.options[2].hidden = true;
      engines.options[3].hidden = true;
      engines.options[4].hidden = false;
      engines.options[5].hidden = true;
      break;
    case "heavy":
      carPrice = 900;
      transmissionPrice = 0;
      transmission.innerText = "Manual";
      engines.options[1].hidden = true;
      engines.options[2].hidden = true;
      engines.options[3].hidden = false;
      engines.options[4].hidden = false;
      engines.options[5].hidden = true;
      break;
    case "truck":
      carPrice = 250;
      transmissionPrice = 19;
      transmission.innerText = "Automatic";
      engines.options[1].hidden = true;
      engines.options[2].hidden = true;
      engines.options[3].hidden = true;
      engines.options[4].hidden = false;
      engines.options[5].hidden = true;
      break;

    case "bicycle":
      carPrice = 200;
      transmissionPrice = 0;
      transmission.innerText = "none";
      engines.options[1].hidden = true;
      engines.options[2].hidden = true;
      engines.options[3].hidden = true;
      engines.options[4].hidden = true;
      engines.options[5].hidden = false;
      break;
  }

  switch (engines.value) {
    case "electric":
      enginePrice = 5;
      break;
    case "hybrid":
      enginePrice = 9;  
      break;
    case "essence":
      enginePrice = 14;
      break;
    case "diesel":
      enginePrice = 21;
      break;
    case "human":
      enginePrice = 0;
      break;
    
  }

  console.log(carPrice);
  console.log(enginePrice);
  console.log(transmissionPrice);
  console.log(days);
}

calculate.addEventListener("click", function () {
  days = duration.value;
  total =
    (carPrice +
      (carPrice * enginePrice) / 100 +
      (carPrice * transmissionPrice) / 100) *
    days;
    total = total.toFixed(2);
  price.innerText = total;
});
