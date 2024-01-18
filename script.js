function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 184; i++) {
      let randnum = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${randnum}</div>`;
    }
  
    let bbl = document.querySelector(".content");
    bbl.innerHTML = clutter;
  }
  
  let timer = 60;
  let score = 0;
  let hitrn = 0;
  
  function runtimer() {
    let timeint = setInterval(() => {
      if (timer > 0) {
        timer--;
        let time = document.querySelector("#time");
        time.textContent = timer;
      } else {
        clearInterval(timeint);
        document.querySelector(".content").innerHTML=` <h1>GAME OVER</h1>`;
      }
    }, 1000);
  }
  
  function runhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
  }
  
  function incScore() {
    score += 10;
    let scoreElem = document.querySelector("#scoreVal");
    scoreElem.textContent = score;
  }
  
  document.querySelector(".content").addEventListener("click", (event) => {
    let clickedNum = Number(event.target.textContent);
    if (clickedNum === hitrn) {
      incScore();
      makeBubble();
      runhit();
    }
  });
  
  runtimer();
  makeBubble();
  runhit();
  incScore();
  