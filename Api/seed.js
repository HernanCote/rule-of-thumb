const { Candidate } = require('./models/candidate');
const mongoose = require('mongoose');
const config = require('config');

const data = [
  {
    name: 'Kanye West',
    imageUrl: 'kanye.jpg',
    offset: '1 month ago',
    industry: 'Entertainment',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    name: 'Mark Zuckerberg',
    imageUrl: 'mark.jpg',
    offset: '1 month ago',
    industry: 'Business',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    name: 'Cristina Fernándes de Kirchner',
    imageUrl: 'kristina.jpg',
    offset: '1 month ago',
    industry: 'Politics',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  },
  {
    name: 'Malala Yousafzai',
    imageUrl: 'malala.jpg',
    offset: '1 month ago',
    industry: 'Entertainment',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }
];

async function seed() {
  await mongoose.connect(config.get('db'));

  await Candidate.deleteMany({});

  for (let candidate of data) {
    const newCandidate = await new Candidate({
      name: candidate.name,
      imageUrl: candidate.imageUrl,
      offset: candidate.offset,
      industry: candidate.industry,
      information: candidate.information
    }).save();
  }

  mongoose.disconnect();
  console.info('Done seeding database!');
}

seed();
