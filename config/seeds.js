require('dotenv').config();

const db = require('./connection');
const { User, Breed } = require('../models');
const breedData = require('./breeds');

const OneCupOfFood = 224;
const KgForOneCup = 6800;


function calculateFood(weight) {
  const ratio = KgForOneCup / OneCupOfFood;
  return Math.round(weight * 1000 / ratio);
}

db.once('open', async () => {
  await User.deleteMany({})
  await Breed.deleteMany({})

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });


  for (const breed of breedData) {
    const maxWeight = breed.weight.metric.split('-')[1];
    const minWeight = breed.weight.metric.split('-')[0];
    const foodLevel = calculateFood(maxWeight);
    await Breed.create({
      breed: breed.name,
      bredFor: breed.bred_for,
      group: breed.breed_group,
      minWeight,
      maxWeight,
      image: breed.image.url,
      countryOfOrigin: breed.origin,
      temperament: breed.temperament,
      minHeight: breed.height.metric.split('-')[0],
      maxHeight: breed.height.metric.split('-')[1],
      lifespan: breed.lifespan,
      foodLevel,
    })

  }

  console.log('users seeded');

  process.exit();
});
