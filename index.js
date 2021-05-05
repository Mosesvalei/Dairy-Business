let shedA = 510;
let shedB = 308;
let shedC = 486;
let shedD = 572;
let total;
total = shedA + shedB + shedC + shedD;
function totalProduction() {
  let expectedOutput = `Your production in Shed A is ${shedA} litres per day.
    Your production in Shed B is ${shedB} litres per day.
    Your production in Shed C is ${shedC}litres per day.
    Your production in Shed D is ${shedD} litres per day.
    The total production is ${total} litres per day.`;
  let dairy = document.getElementById("dairy");
  dairy.innerText = expectedOutput;
}
totalProduction();
let week = 7;
let year = 366;
// let selling_price = 45
function incomeOverTime(selling_price) {
  selling_price = prompt("What is the selling price");
  if(selling_price > 45){
    alert("Your intrests rates are 123532 compare to the previous years")
  }
  let weeklyTotal = week * 45 * total;
  let yearlyTotal = year * selling_price * total;
  let monthsDiv = document.createElement("div");
  monthsDiv.innerHTML = `<p>Your weekly income will be Ksh ${weeklyTotal}</p>`;
  document.getElementById("weekly").appendChild(monthsDiv);
  console.log(monthsDiv);
  let yearDiv = document.createElement("div");
  yearDiv.innerHTML = `<p>Your weekly income will be Ksh ${yearlyTotal}</p>`;
  document.getElementById("yearly").appendChild(yearDiv);
  console.log(yearDiv);
  let months = {
    January: 31,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
  for (const [key, value] of Object.entries(months)) {
      let months = document.createElement('div');
      months.innerHTML = `<p>Your total income for  ${key} is ${value * total * selling_price}</p>`;
      document.getElementById("monthly").appendChild(months);
  console.log(months)
  console.log(key)
    }
}
incomeOverTime();