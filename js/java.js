document.addEventListener('DOMContentLoaded', function(){
  const TotalInput = document.getElementById('Total');
  const quartersInput = document.getElementById('quarters');
  const dimesInput = document.getElementById('dimes');
  const nicklesInput = document.getElementById('nickles');
  const penniesInput = document.getElementById('pennies');
  const calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function() {
  processEntries();
});

function processEntries(){
  const amount = parseFloat(TotalInput.value);
  const result = makeChange(amount);

  quartersInput.value = result.quarters;
  dimesInput.value = result.dimes;
  nicklesInput.value = result.nickels;
  penniesInput.value = result.pennies;
}

function makeChange(amount){
  if(amount < 0 || amount > 99) {
    alert('Change entered should be between 0 and 99');
    return{
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
};
}
  const quarters = parseInt(amount / 25);
  const remainderQ = amount % 25;
  const dimes = parseInt(remainderQ / 10);
  const remainderD = remainderQ % 10;
  const nickels = parseInt(remainderD / 5);
  const remainderN = remainderD % 5;
  const pennies = remainderN;
return{
    quarters: quarters,
    dimes: dimes,
    nickels: nickels,
    pennies: pennies
};
}
});