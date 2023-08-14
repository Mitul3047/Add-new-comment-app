/* document.querySelector("#submit-btn").addEventListener("click", function () {
  //   console.log("clicked");

  const textAreaElement = document.getElementById("text-area");
  const areaValue = textAreaElement.value;
  //   console.log(textAreaElement.value);

  const p = document.createElement("p");
  p.innerText = areaValue;
  //   console.log(p);

  const container = document.querySelector("#review");
  container.appendChild(p);
  document.getElementById("text-area").value = "";
});

document.getElementById("text-area").addEventListener("keyup", function (e) {
  console.log(e.target.value);
  if (e.key === "Enter") {
    // console.log("Enter key pressed!");
    const textAreaElement = document.getElementById("text-area");
    const areaValue = textAreaElement.value;
    //   console.log(textAreaElement.value);

    const p = document.createElement("p");
    p.innerText = areaValue;
    //   console.log(p);

    const container = document.querySelector("#review");
    container.appendChild(p);
    document.getElementById("text-area").value = "";
  }
});
 */



// document.getElementById('submit-btn').addEventListener('click' function(){})

document.querySelector('#submit-btn').addEventListener('click', function(){
  const textArea = document.querySelector('#text-area');
  // console.log(textArea.value)
  const areaValue = textArea.value;

  // now create to p tag to psuh in user feedback
   
  const p = document.createElement('p');
  p.innerText = areaValue;
  // console.log(p)
  //  now push in review

  const container = document.querySelector('#review')
   container.appendChild(p)
   textArea.value ='';

})