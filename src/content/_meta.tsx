export default {
  index: {
    title: 'Home',
    type: 'page',
    display: 'normal',
  },
  sop: {
    type: 'page',
    title: 'S.O.P.',
    display: 'children',
  },
  training: {
    type: 'page',
    title: 'Training',
    display: 'children',
  },
  about: {
    title: 'About',
    type: 'page',
    display: 'hidden',
  },
  media: {
    title: 'Media',
    type: 'page',
    display: 'normal',
  },
  company: {
    title: 'About Us',
    type: 'menu',
    items: {
      lore: {
        title: 'The Lore',
        href: '/about',
      },
      team: {
        title: 'The Team',
        href: '/about',
      },
      contact: {
        title: 'Contact Us',
        href: 'mailto:hi@example.com',
      },
    },
  },
}
