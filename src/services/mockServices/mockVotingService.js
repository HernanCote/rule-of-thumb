const candidates = [
  {
    name: 'Kanye West',
    imageUrl: 'kanye.jpg',
    offset: '1 month ago',
    industry: 'Entertainment',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    thumsUp: 0,
    thumbsDown: 5
  },
  {
    name: 'Mark Zuckerberg',
    imageUrl: 'mark.jpg',
    offset: '1 month ago',
    industry: 'Business',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    thumsUp: 5,
    thumbsDown: 1
  },
  {
    name: 'Kristina Fernándes de Kirchner',
    imageUrl: 'kristina.jpg',
    offset: '1 month ago',
    industry: 'Politics',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    thumsUp: 2,
    thumbsDown: 3
  },
  {
    name: 'Malala Yousafzai',
    imageUrl: 'malala.jpg',
    offset: '1 month ago',
    industry: 'Entertainment',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    thumsUp: 6,
    thumbsDown: 2
  }
];

export function getCandidates() {
  return candidates;
}
