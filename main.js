const cue = document.getElementById('quest')
const btn = document.getElementById('btn')

const ops = [
  "Tell me about yourself.",
  "What is website development?",
  "What is Front-end development?",
  "What are/is your strength/s and weakness/es?",
  "Elaborate what is framework.",
  //"Explain the HTTP & HTTP/2.",
  "What's your most struggle from your past experience?",
  "What is web3 and how do you adhere to it in your web design?",
  //"What do you know about Cpanel?",
  //"What is Wordpress?",
  //"What do you know about boostrap?",
]

/*
function vap() {
  const list = Math.floor(Math.random() * 8);
  document.getElementById('quest').innerHTML = ops[list];
  document.getElementById('btn').innerHTML = Next;
}*/


let count = 0;


btn.addEventListener("click", function() {
  const list = Math.floor(Math.random() * ops.length);
  count += 1;

  cue.innerHTML = ops[list];
  btn.innerHTML = "Next"; 

  console.log(ops[list], count)
  if(count == 6) {
    cue.innerHTML = "Done!";
    btn.innerHTML = "Go back"
    count = 0
  }

  if(count == 5) {
    cue.innerHTML = "What is your expected salary?";
  }

  if(btn.clicked == true) {
    location.reload()
  }
})

/*
for(let i=0, tempnames=ops, len=ops.length; i<len; i++) {
  let rnd = Math.floor(Math.random() * tempnames.length);
  console.log(tempnames[rnd])
  tempnames.splice(rnd, 1)
}

let count = 0;


btn.addEventListener("click", function() {
  for(let i=0, tempnames=ops, len=ops.length; i<len; i++) {
    let rnd = Math.floor(Math.random() * tempnames.length);
    cue.innerHTML = tempnames[rnd];
    tempnames.splice(rnd, -1)
    btn.innerHTML = "Next";
  }

  count += 1;
  console.log(count)
  console.log(cue.innerHTML)

  if(count == 6) {
    cue.innerHTML = "Done!";
    btn.innerHTML = "Go back"
    count = 0
  }

  if(btn.clicked == true) {
    location.reload()
  }
})*/