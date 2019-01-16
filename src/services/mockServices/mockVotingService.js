const candidates = [
  {
    name: 'Kanye West',
    imageUrl: 'kanye.png',
    offset: '1 month ago',
    industry: 'Entertainment',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    thumbsUp: 0,
    thumbsDown: 5
  },
  {
    name: 'Mark Zuckerberg',
    imageUrl: 'mark.png',
    offset: '1 month ago',
    industry: 'Business',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    thumbsUp: 5,
    thumbsDown: 2
  },
  {
    name: 'Kristina Fernándes de Kirchner',
    imageUrl: 'kristina.png',
    offset: '1 month ago',
    industry: 'Politics',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    thumbsUp: 2,
    thumbsDown: 3
  },
  {
    name: 'Malala Yousafzai',
    imageUrl: 'malala.png',
    offset: '1 month ago',
    industry: 'Entertainment',
    information:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    thumbsUp: 6,
    thumbsDown: 2
  }
];

export function getCandidates() {
  return candidates;
}
