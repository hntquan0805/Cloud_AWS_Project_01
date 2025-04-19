'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('blogs', [
      { 
        id: 1,
        author: 'Admin',
        title: 'A Night Under the Stars – Camping by the Lake',
        content: '<p>There’s something magical about disconnecting from the chaos of daily life and spending a quiet evening by the water. This serene lakeside campsite was the perfect escape — with a cozy camper, a crackling fire, and a sky full of stars. The gentle sound of waves lapping against the shore created the ultimate soundtrack for a peaceful night. Whether you’re traveling solo or with friends, camping near a lake lets you reconnect with nature and find joy in life’s simplest moments.</p>',
        day: '14',
        month: '02',
        year: '2024',
        tag: 'Forest',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        id: 2,
        author: 'Admin',
        title: 'Standing Tall in the Swiss Alps – A Moment of Awe',
        content: '<p>Nothing prepares you for the moment you stand face to face with the towering peaks of the Swiss Alps. The sheer scale, the crisp mountain air, and the silence that wraps around you — it’s truly humbling. On this hike, I found myself surrounded by snow-capped mountains, endless skies, and a feeling of complete freedom. The solitary figure in this photo captures the essence of the moment: small against nature, but completely alive. If you ever get the chance to explore the Swiss Alps, take it — your soul will thank you.</p>',
        day: '10',
        month: '03',
        year: '2023',
        tag: 'Mountain, History',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      { 
        id: 3,
        author: 'Admin',
        title: 'River Reflections – A Peaceful Escape in the Heart of the City',
        content: '<p>Tucked between rows of charming old buildings, this quiet river feels like a secret flowing through the heart of town. As sunlight dances on the water and gentle ripples reflect the architecture on both sides, time seems to slow down. Whether you are strolling along the riverbank or sipping coffee at a riverside café, there is a peaceful rhythm here that soothes the soul. It is in places like these — where nature and human stories blend so seamlessly — that you discover what makes a city truly unforgettable.</p>',
        day: '02',
        month: '01',
        year: '2021',
        tag: 'Culture',
        createdAt: new Date(),
        updatedAt: new Date() 
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('blogs', null, {});
  }
};
