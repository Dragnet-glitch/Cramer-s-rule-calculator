function calculateDeterminant() {
  const a = Number(document.getElementById('a11').value);
  const b = Number(document.getElementById('a12').value);
  const c = Number(document.getElementById('a21').value);
  const d = Number(document.getElementById('a22').value);
  const e = document.getElementById('a13').value;
  const f = document.getElementById('a23').value;
  const g = Number(document.getElementById('b1').value);
  const h = Number(document.getElementById('b2').value);
  let detAx = (a * d);
  let detBx = (b * c);
  let detA =  (a * d) - (b * c); 
  let detX = (g * d) - (b * h);
  let detY = (a * h) - (g * c);
  let intX = e;
  let intY = f;
  let intA = a;
  let intB = b;
  let intC = c;
  let intD = d;
  let intG = g;
  let intH = h;
  let rDet = detX / detA;
  let yDet = detY / detA;
  return {rDet, yDet, intX, intY, intA, intB, intC, intD, detAx, detBx, intG, intH, detA};
}
document.getElementById('press').addEventListener('click', function () {
  const inputs = document.querySelectorAll('#matrix input');
  let allFilled = true;
  inputs.forEach(input => {
      if (input.value.trim() === '') {
          allFilled = false;
      }
  });
  const errorDiv = document.getElementById('error');
  const resultDiv = document.getElementById('result');
  let inv = calculateDeterminant();
  if (!allFilled) {
      errorDiv.textContent = 'Please enter values for all inputs.';
      errorDiv.style.color = 'red';
      errorDiv.style.font = 'sans-serif';
      resultDiv.textContent = ''; // Clear previous results
  } else {
      // Hide the error and proceed with calculations
      errorDiv.textContent = '';
      resultDiv.textContent = `the solution for ${inv.intX} is ${inv.rDet} and for ${inv.intY} is ${inv.yDet}
      check:
      ${inv.intA} times ${inv.intD} is ${inv.detAx}
      and ${inv.intB} times ${inv.intC} is ${inv.detBx}
      if we swap ${inv.intG} and ${inv.intH} into ${inv.intA} and ${inv.intC}
      and find the determinant and divide by ${inv.detA} which is 
      the initial determinat of the numbers we get ${inv.rDet}`;
      resultDiv.style.color = 'green'; 
  }
});
document.querySelector('.buttons button:nth-child(2)').addEventListener('click', function () {
  // Clear all input fields
  const inputs = document.querySelectorAll('#matrix input');
  inputs.forEach(input => input.value = '');
  // Clear error and result messages
  document.getElementById('error').textContent = '';
  document.getElementById('result').textContent = '';
});


