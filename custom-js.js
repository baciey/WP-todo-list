function multiStepForm() {
  class Steps {
    msFormData = {
      step1: {
        id: true,
        name: "Naprawa wysyłkowa",
        errorMsg: "Proszę wybrać typ usługi",
      },
      step2: {
        id: null,
        name: null,
        errorMsg: "Proszę wybrać kategorię produktu",
      },
      step3: { id: null, name: null, errorMsg: "Proszę wybrać model" },
      step4: { id: null, name: null, errorMsg: "Proszę wybrać typ naprawy" },
      step5: { id: null, name: null, errorMsg: "" },
    };
    stepNumber = 1;

    switchStep(num, e) {
      const error = document.querySelector(".ms-form__error");
      if (this.msFormData["step" + this.stepNumber].id === null && num === 1) {
        error.textContent = this.msFormData["step" + this.stepNumber].errorMsg;
      } else {
        error.textContent = "";
        this.stepNumber += num;
        this.handleAjax();
      }
    }
    renderHtml(response) {
      if (this.stepNumber > 1) backButton.disabled = false;
      optionsContainer.innerHTML = response;
      nextButton.textContent = "go to step " + Number(this.stepNumber + 1);
      title.textContent = "Zgłoś naprawę step " + this.stepNumber;
    }

    addEvents() {
      const options = document.querySelectorAll(
        `.step-${this.stepNumber}__option`
      );
      options.forEach((option) => {
        option.addEventListener("click", (event) =>
          this.chooseOption(event.target.id, event.target.textContent, event)
        );
      });
    }

    addClassList() {
      if (this.msFormData["step" + this.stepNumber].id) {
        const el = document.getElementById(
          this.msFormData["step" + this.stepNumber].id
        );
        if (el) el.classList.add("active");
      }
    }

    handleAjax() {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          this.renderHtml(xmlhttp.responseText);
          this.addEvents();
          this.addClassList();
        }
      };
      const json = JSON.stringify(this.msFormData);
      xmlhttp.open(
        "POST",
        `/flixapple/wp-content/plugins/web_wolf_store/step${this.stepNumber}render.php`
      );
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(json);
    }
    chooseOption(id, name, event) {
      const options = document.querySelectorAll(".ms-form__option");
      options.forEach((option) => option.classList.remove("active"));
      event.target.classList.add("active");
      this.msFormData["step" + this.stepNumber].id = id;
      this.msFormData["step" + this.stepNumber].name = name;
    }
  }

  const step = new Steps();
  const backButton = document.querySelector(".back");
  const nextButton = document.querySelector(".next");
  const title = document.querySelector(".title");
  const optionsContainer = document.querySelector(".options-container");

  backButton.addEventListener("click", (e) => step.switchStep(-1, e));
  nextButton.addEventListener("click", (e) => step.switchStep(1, e));
}
multiStepForm();
