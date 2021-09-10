const msFormData = {
  step1: {
    id: true,
    name: "Naprawa wysyłkowa",
    errorMsg: "Proszę wybrać typ usługi",
  },
  step2: { id: null, name: null, errorMsg: "Proszę wybrać kategorię produktu" },
  step3: { id: null, name: null, errorMsg: "Proszę wybrać model" },
  step4: { id: null, name: null, errorMsg: "Proszę wybrać typ naprawy" },
  step5: { id: null, name: null, errorMsg: "" },
};

function goToStep(step) {
  const error = document.querySelector(".ms-form__error");
  const prevStep = step - 1;
  if (step > 1 && msFormData["step" + prevStep].id === null) {
    error.textContent = msFormData["step" + prevStep].errorMsg;
  } else {
    error.textContent = "";
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.querySelector(".ms-form__container").innerHTML =
          this.responseText;

        const options = document.querySelectorAll(`.step-${step}__option`);
        options.forEach((option) => {
          option.addEventListener("click", (event) =>
            chooseOption(step, event.target.id, event.target.textContent, event)
          );
        });
        if (msFormData["step" + step].id) {
          const el = document.getElementById(msFormData["step" + step].id);
          if (el) el.classList.add("active");
        }
      }
    };
    const json = JSON.stringify(msFormData);

    xmlhttp.open(
      "POST",
      `/flixapple/wp-content/plugins/web_wolf_store/step${step}render.php`
    );
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(json);
  }
}

function chooseOption(step, id, name, event) {
  const options = document.querySelectorAll(".ms-form__option");
  options.forEach((option) => option.classList.remove("active"));
  event.target.classList.add("active");
  msFormData["step" + step].id = id;
  msFormData["step" + step].name = name;
}
