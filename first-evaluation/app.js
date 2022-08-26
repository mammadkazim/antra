const leftContainer = document.getElementById("available-courses");
const rightContainer = document.getElementById("selected-courses");
let totalCredit = document.getElementById("total-credit");
let selectButton = document.getElementById("select-button");
let ulLeft = document.createElement("ul");
let totalCreditValue = 0;
let availableCourses = [];
const baseUrl = "http://localhost:4232";
const coursesPath = "courseList";
fetch([baseUrl, coursesPath].join("/"))
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    availableCourses = [...data];
    let totalCreditValue = 0;
    leftContainer.append(ulLeft);
    availableCourses.forEach((elem) => {
      elem.selected = false;
      let li = document.createElement("li");
      ulLeft.append(li);
      li.innerHTML = `
        <p>${elem.courseName}</p>
        <p>Course type:${elem.required === true ? "compulsory" : "Elective"}</p>
        <p>Course credit:${elem.credit}</p>
        `;
      li.addEventListener("click", (e) => {
        li.classList.toggle("clicked");
        elem.selected = elem.selected === false ? true : false;
        let selectedCourses = availableCourses.filter(
          (item) => item.selected === true
        );
        console.log(selectedCourses);
        totalCreditValue = selectedCourses.reduce(
          (acc, cur) => acc + cur.credit,
          0
        );
        totalCredit.innerHTML = totalCreditValue;
        if (totalCreditValue > 18)
          alert("You can not choose more than 18 credits in one semester");
      });
    });
    selectButton.addEventListener("click", () => {
      console.log(availableCourses);
      let ul = document.createElement("ul");
      rightContainer.append(ul);
      if (
        confirm(
          `You have chosen ${totalCreditValue} credits for this semester. You cannot change it once you confirm. do you confirm?`
        )
      )
        {availableCourses.forEach((item) => {
          if (item.selected) {
            let li = document.createElement("li");
            ul.append(li);
            li.innerHTML = `
          <p>${item.courseName}</p>
          <p>Course type:${
            item.required === true ? "compulsory" : "Elective"
          }</p>
          <p>Course credit:${item.credit}</p>
          `;
          }
        });
      availableCourses = availableCourses.filter(
        (item) => item.selected !== true
      );
      ulLeft.innerHTML = "";
      availableCourses.forEach((elem) => {
        let li = document.createElement("li");
        ulLeft.append(li);
        li.innerHTML = `
          <p>${elem.courseName}</p>
          <p>Course type:${
            elem.required === true ? "compulsory" : "Elective"
          }</p>
          <p>Course credit:${elem.credit}</p>
          `;
      });
      selectButton.setAttribute("disabled", "");
    }
    });
  });
