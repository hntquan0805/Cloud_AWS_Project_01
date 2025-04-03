'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('comments', [
      { 
        id: 1,
        postId: 1, 
        title: 'Great Article',
        content: '<p>Donec id erum quidem rerumd facilis est et expedita distinctio lorem ipsum dolorlit non mi portas sats eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna..</p>',
        date: '2024-03-04', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        id: 2,
        postId: 1, 
        title: 'A quick question',
        content: '<p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p <p>Donec id erum quidem rerumd facilis est et expedita distinctio lorem ipsum dolorlit non mi portas sats eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna.</p>',
        date: '2023-05-12', 
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        id: 3, 
        postId: 1, 
        title: 'Thank you!',
        content: '<p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>',
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
