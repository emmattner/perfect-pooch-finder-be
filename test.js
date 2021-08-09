
const OneCupOfFood = 224;
const KgForOneCup = 6800;


function calculateFood(weight) {
  const ratio = KgForOneCup / OneCupOfFood;
  return Math.round(weight * 1000 / ratio);
}

calculateFood()