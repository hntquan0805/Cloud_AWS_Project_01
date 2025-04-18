'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('comments', [
      { 
        id: 1,
        postId: 1, 
        title: 'Great Article',
        content: '<p>Absolutely love the peaceful vibe in this photo. Makes me want to pack my bags and go explore right now!</p>',
        date: '2024-03-04', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        id: 2,
        postId: 1, 
        title: 'Such a beautiful journeys!',
        content: '<p>Your blog always takes me on the most beautiful journeys. I love how you capture the soul of every destination.</p>',
        date: '2023-05-12', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        id: 3, 
        postId: 1, 
        title: 'Thank you!',
        content: '<p>This view is breathtaking — it feels like a hidden gem waiting to be discovered. Thanks for sharing such a magical spot with us!</p>',
        date: '2013-05-10', 
        createdAt: new Date(),
        updatedAt: new Date() 
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments', null, {});
  }
};
