document.getElementById("calculateBtn").addEventListener("click", function () {
  const balance = parseFloat(document.getElementById("balance").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseFloat(document.getElementById("years").value);
  const extra = parseFloat(document.getElementById("extra").value) || 0;

  if (isNaN(balance) || isNaN(rate) || isNaN(years)) {
    document.getElementById("results").innerHTML =
      "<p>Please enter a valid balance, interest rate, and loan term.</p>";
    return;
  }

  const monthlyRate = rate / 100 / 12;
  const totalMonths = years * 12;

  let monthlyPayment;

  if (monthlyRate === 0) {
    monthlyPayment = balance / totalMonths;
  } else {
    monthlyPayment =
      balance *
      (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  const actualMonthlyPayment = monthlyPayment + extra;
  const totalPaid = actualMonthlyPayment * totalMonths;
  const totalInterest = totalPaid - balance;

  document.getElementById("results").innerHTML = `
    <h2>Results</h2>
    <p>Base Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
    <p>Monthly Payment with Extra: $${actualMonthlyPayment.toFixed(2)}</p>
    <p>Estimated Total Paid: $${totalPaid.toFixed(2)}</p>
    <p>Estimated Total Interest: $${totalInterest.toFixed(2)}</p>
  `;
});