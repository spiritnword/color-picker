let hue = 0
let sat = 100
let light = 50

const getHSL = () => {
  return 'hsl(${hue}), ${sat}%, ${light}%)'
}

const main = () => {
  document.addEventListener
  const hueInput = document.getElementById('hue')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    document.querySelector('.sec1').style.backgrounColor = getHSL()
  })
  document.getElementById('sat')
  document.getElementById('light')
}
document.addEventListener('DOMContentLoaded', main)
