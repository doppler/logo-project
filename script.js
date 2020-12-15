const inputs = {
  cx: 0,
  cy: 0,
  r: 0,
  a: 0,
}

Object.keys(inputs).forEach(k => {
  const element = document.getElementById(k);
  element.value = 0;
  element.addEventListener('change', e => { inputs[e.target.id] = ~~e.target.value })
});

const calculatePoints = () => {
  const { cx, cy, r, a } = inputs;
  const x = cx + r * Math.cos((a - 90) * (Math.PI / 180))
  const y = cy + r * Math.sin((a - 90) * (Math.PI / 180))
  document.getElementById('output').innerHTML = JSON.stringify({ x, y }, null, 2)
}
document.getElementById('f').addEventListener('change', calculatePoints)