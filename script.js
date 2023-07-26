let flag = 0;
let dpdClose = document.getElementById("dropdown");
let closeBg = document.querySelector(".background");

function openClose() {
  if (flag === 0) {
    document.querySelector(".dropdown-btn").classList.toggle("change");
    dpdClose.classList.toggle("show");
    document.body.style.overflowY = "hidden";
    closeBg.style.display = "block";
    flag = 1;
  } else {
    document.querySelector(".dropdown-btn").classList.remove("change");
    dpdClose.classList.remove("show");
    document.body.style.overflowY = "scroll";
    closeBg.style.display = "none";
    flag = 0;
  }
}

window.onclick = function (event) {
  if (event.target == closeBg) {
    document.querySelector(".dropdown-btn").classList.remove("change");
    document.getElementById("dropdown").classList.remove("show");
    document.body.style.overflowY = "scroll";
    closeBg.style.display = "none";
    flag = 0;
  }
};

function openSkill(event, skillName, stat) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("skills-right");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tabcontent = document.getElementsByClassName("statistic");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("skill");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(skillName).style.display = "block";
  event.currentTarget.className += " active";

  document.getElementById(stat).style.display = "flex";
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("portfolio-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("portfolio-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}


fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    var arr = Array(20);

    for (var i = 0; i < arr.length; i++) {
      let div = document.querySelector(".modal-div");
      const card = document.createElement("div");
      card.classList.add("modal");
      card.setAttribute("data-modal", json[i].id);
      const img = document.createElement("img");
      img.classList.add("modal-content");
      img.src = json[i].img;
      const link = document.createElement("a");
      link.classList.add("modal-link");
      link.classList.add("disable");
      link.href = json[i].link;
      link.target = "_blank";
      const button = document.createElement("button");
      button.classList.add("close");
      card.append(link);
      link.append(img);
      card.append(button);
      div.append(card);
    }

    enable = document.querySelectorAll(".modal-link");
    for (let j = 0; j < 20; j++) {
      if (j == 0 || j == 2 || j == 7 || j == 8 || j == 9) {
        enable[j].classList.remove("disable");
      }
    }

    small = document.querySelectorAll(".modal-content");
    for (let k = 0; k < 20; k++) {
      if (k == 3 || k == 4) {
        small[k].classList.add("small");
      }
    }

    middle = document.querySelectorAll(".modal-content");
    for (let r = 0; r < 20; r++) {
      if (r == 16 || r == 17 || r == 18 || r == 19) {
        middle[r].classList.add("middle");
      }
    }

    let btns = document.querySelectorAll('.portfolio-img');
    btns.forEach((el) => {
      el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
          el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-modal="${path}"]`).classList.add('modal--visible');
        document.body.style.overflowY = "hidden";
      });
    });


    let modals = document.querySelectorAll('.modal');
    let close = document.querySelectorAll(".close");

    close.forEach(button => {
      button.onclick = function () {
        modals.forEach((el) => {
          el.classList.remove('modal--visible');
        });
        document.body.style.overflowY = "scroll";
      };
    });
  });

