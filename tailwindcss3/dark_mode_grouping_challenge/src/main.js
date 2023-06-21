document.addEventListener('DOMContentLoaded', () => {
  const cast = [
    { id: 0, name: 'Aneirin', slug: 'aneirin', bio: 'Aneirin is the foremost expert of cold climates in planetoids universe-wide, with a particular inquisitiveness in areas colder than -300 F.'},
    { id: 1, name: 'Celestia Dristi', slug: 'celestia-dristi', bio: 'Helps individuals and companies to improve personal and professional agility and growth in technology and systems.'},
    { id: 2, name: 'Charmaine', slug: 'charmaine', bio: 'Charmaine loves fossils from every society and planet, and helping to piece together the stories they tell of an earlier time.'},
    { id: 3, name: 'Emmyloo Em', slug: 'emmyloo-em', bio: 'She claims that her devotion to lexicography began as early as two years old, when she spoke her first full sentence.'},
    { id: 4, name: 'Gill', slug: 'gill', bio: 'Carries on generations as a hydrologist specializing in underground reservoirs of aquatic-based planetoids.'},
    { id: 5, name: 'Ichabod', slug: 'ichabod', bio: 'Operations supervisor Ichabod is unwavering in adherence to the perfection of order and function.'},
    { id: 6, name: 'Laverne', slug: 'laverne', bio: 'Pursued understanding relationships among dissimilar measurable quantities at Quantumnus U.'},
    { id: 7, name: 'Mindigo', slug: 'mindigo', bio: 'Earned the nickname "MindiGoGo" because of her tireless work in advanced travel and commodity conveyance.'},
    { id: 8, name: 'Nalda', slug: 'nalda', bio: 'Began work as a mind reader and universal translator when founding Interplanetary Understanders and Lie Detectors.'},
    { id: 9, name: 'Narf the Fourth', slug: 'narf-the-fourth', bio: 'Known to friends as Norf, oversees the manufacturing of astronomic spaceship accessories at Saucer & Rocket, Inc.'},
    { id: 10, name: 'Portman', slug: 'portman', bio: 'No one loves animals, critters, varmints, and beasties as much as Dr. Portman, whether they are wild or a beloved pet.'},
    { id: 11, name: 'Seymour', slug: 'seymour', bio: 'If it isn\'t counted, it doesn\'t count! is the mantra Seymour originated and propagated in the industry of inventory control.'},
    { id: 12, name: 'Trisaphron', slug: 'trisaphron', bio: 'Earned a master\'s degree in practical operations after completing a bachelor\'s of science in impractical mathematics.'},
    { id: 13, name: 'Two', slug: 'two', bio: 'With growing interest by organizations, Two finds that it is increasingly critical to focus on sustainability.'},
    { id: 14, name: 'Violette', slug: 'violette', bio: 'Violette holds a doctorate in Planetary Behaviorism. She has been fascinated in researching the behavior of sentient beings.'}
  ];

  const castContainer = document.querySelector('.cast-container');

  cast.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'w-[300px] mx-4';

    const cardContent = `
      <div class="shadow-lg rounded-lg overflow-hidden">
        <img src="../images/${item.slug}.png" alt="${item.name}" class="h-72 w-full object-cover">
        <div class="p-4">
          <h3 class="text-2xl font-bold text-gray-800 mb-2">${item.name}</h3>
          <p class="text-gray-600 text-sm">${item.bio}</p>
        </div>
        <a href="#" class="block bg-indigo-500 text-white text-center py-2 font-semibold">More Info</a>
      </div>
    `;

    card.innerHTML = cardContent;
    castContainer.appendChild(card);
  });
});