// function addingEventListener() {
//     const input = document.getElementById('button');

// const clickAlertFunction = (clickAlert) => alert('I was clicked!')
// input.addEventListener('click', clickAlertFunction);
// }
// addingEventListener()

function addingEventListener() {
  const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}
addingEventListener();