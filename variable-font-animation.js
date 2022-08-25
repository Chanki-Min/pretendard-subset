const container = document.querySelector(".container");
const sliders = document.querySelectorAll(".slider");
const sliderValues = document.querySelectorAll(".output");
const buttons = document.querySelectorAll(".button");

// Display property values
for (let i = 0; i < sliders.length; i++) {
  sliderValues[i].innerHTML = sliders[i].value;
}

// Update text property and displayed property value for each slider
sliders.forEach(slider => {
    const sliderIndex = slider.getAttribute("data-index");
    const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    slider.oninput = function() {
      const cssValue = this.id === 'font-size' ? this.value+'px' : this.value;

      container.style.setProperty(`--${this.id}`, cssValue);
      output.innerHTML = this.value;
    };
  });

// Reset text property and update display property value for each slider
buttons.forEach(button => {
  const buttonIndex = button.getAttribute("data-index");
  const resetOutput = document.querySelector(
    `.output[data-index="${buttonIndex}"]`
  );
  const resetSlider = document.querySelector(
    `.slider[data-index="${buttonIndex}"]`
  );
  button.onclick = function() {
    container.style.removeProperty(`--${resetSlider.id}`);
    resetOutput.innerHTML = resetSlider.defaultValue;
    resetSlider.value = resetSlider.defaultValue;
    console.log(resetSlider.defaultValue);
  };
});


const openTypeContainer = document.getElementById('opentype-select')
openTypeContainer.addEventListener('change', (ev) => {
  const id = ev.target.id
  const editables = document.querySelectorAll('*[contenteditable="true"]');

  for (const el of editables) {
    el.classList.remove('tnum', 'ss01', 'ss07')
  }

  if (id === 'nop') {
    return
  }
  for (const el of editables) {
    el.classList.add(id)
  }

})
