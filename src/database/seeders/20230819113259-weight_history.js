'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'weight_history',
      [
        {
          userId: 1,
          weight: 70.5,
          date: new Date('2023-07-01'),
        },
        {
          userId: 1,
          weight: 68.2,
          date: new Date('2023-07-15'),
        },
        {
          userId: 2,
          weight: 85.0,
          date: new Date('2023-07-10'),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('weight_history');
  },
};
