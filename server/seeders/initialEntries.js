module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Entries', [
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
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Entries', null, {});
  }
};

