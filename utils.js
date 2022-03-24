export function getRandomInt(i = 0, nbCups) {
  const rand = Math.floor(Math.random() * nbCups) + 1;
  return rand != i ? rand : getRandomInt(i, nbCups);
}
