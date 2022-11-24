export const data = [
  { name: 'Main', link: '/' },
  {
    name: 'About',
    children: [
      {
        name: 'Company',
        children: [
          {
            name: 'Second menu 2',
            link: '/about/compony/second',
          },
        ],
      },
      { name: 'Command', link: '/about/command' },
      {
        name: 'Other',
        children: [
          {
            name: 'Second Other menu',
            link: '/other/second',
          },
        ],
      },
    ],
  },
];
