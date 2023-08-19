'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'weight_history',
      [
        {
          user_id: 1,
          weight: 70.5,
          date: new Date('2023-07-01'),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          weight: 68.2,
          date: new Date('2023-07-15'),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          weight: 85.0,
          date: new Date('2023-07-10'),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('weight_history');
  },
};
