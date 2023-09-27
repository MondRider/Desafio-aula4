function verify() {
  var num1 = document.querySelector ('#input1');
  var num2 = document.querySelector ('#input2');
  var msg = document.querySelector ('.message');
  var span1 = document.querySelector ('#span1')
  var span2 = document.querySelector ('#span2')
  var result = document.querySelector ('#resultado')
  var span3 = document.querySelector ('#span3')

  if (num1.value % num2.value == 0) {
    msg.textContent = `é múltiplo de`;
    span1.textContent = `${num1.value}`;
    span2.textContent = `${num2.value}`;
    result.textContent = `O resultado da divisão é:`;
    span3.textContent = `${num1.value / num2.value}`;
  }

  else {
  msg.textContent = `não é múltiplo de`;
  span1.textContent = `${num1.value}`;
  span2.textContent = `${num2.value}`;
  result.textContent = '';
  span3.textContent = '';
}
};