
const somethingChanged = () => {
  // Find the value of the hue
  let hueValue = document.querySelector('input[name=hue]').value
  // Find the value of the saturation
  let saturationValue = document.querySelector('input[name=saturation]').value
  // Find the value of the lightness
  let lightnessValue = document.querySelector('input[name=lightness]').value
  // Find the value of the alpha

  // Build a background color string in HSL form
  let hslBackgroundColor = `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`

  // Go find our box we called `sec1` in the DOM
  let sec1 = document.getElementById('sec1')

  // Put that style as the background color
  sec1.style.backgroundColor = hslBackgroundColor
}

const main = () => {
  let sliders = document.querySelectorAll('input[name]')
  for (var i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener('input', somethingChanged)
  }
}

document.addEventListener('DOMContentLoaded', main)
