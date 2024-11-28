document.addEventListener("DOMContentLoaded", () => {
  const nB = document.getElementById("navButton");
  const nC = document.getElementById("navController");
  const l1 = document.getElementById("line1");
  const l2 = document.getElementById("line2");
  const l3 = document.getElementById("line3");
  const dDB = document.getElementById("dropDownButton");
  const dD = document.getElementById("dropDown");
  const dDL1 = document.getElementById("dropDownList-1");
  const dDL2 = document.getElementById("dropDownList-2");
  const dDL3 = document.getElementById("dropDownList-3");
  const dDL4 = document.getElementById("dropDownList-4");
  const dDL5 = document.getElementById("dropDownList-5");

  const navSide = () => {
    if (nB && nC && l1 && l2 && l3) {
      nB.addEventListener("click", () => {
        nC.classList.toggle("w-0");
        nC.classList.toggle("w-36");
        l1.classList.toggle("rotate-45");
        l2.classList.toggle("opacity-0");
        l2.classList.toggle("invisible");
        l3.classList.toggle("-rotate-45");
      });
    }
  };
  navSide();
  const dropDown = () => {
    if(dDB && dD){
      dDB.addEventListener("click", () =>{
        dD.classList.toggle("hidden")
        setTimeout(() => {
          dDL1.classList.toggle("opacity-100")
        }, 100);
        setTimeout(() => {
          dDL2.classList.toggle("opacity-100")
        }, 200);
        setTimeout(() => {
          dDL3.classList.toggle("opacity-100")
        }, 300);
        setTimeout(() => {
          dDL4.classList.toggle("opacity-100")
        }, 400);
        setTimeout(() => {
          dDL5.classList.toggle("opacity-100")
        }, 500);
      })
    }
  }
  dropDown();
});
