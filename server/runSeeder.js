const { sequelize } = require('./models/index.js');
const queryInterface = sequelize.getQueryInterface();
const Sequelize = require('sequelize');

async function runSeeder() {
  try {
    await queryInterface.bulkInsert('Entries', [
      {
        id: 1,
        description: 'Work Income',
        value: 1000.0,
        isExpense: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        description: 'Water Bill',
        value: 20.0,
        isExpense: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        description: 'Rent',
        value: 300,
        isExpense: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        description: 'Power Bill',
        value: 50,
        isExpense: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    console.log('Seeding successful!');
  } catch (error) {
    console.error('Error running seeder:', error);
  } finally {
    await sequelize.close();
  }
}

runSeeder();

