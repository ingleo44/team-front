export function drawerItems() {
  const items = [
    {
      key: 'Categories',
      label: 'Categories',
      to: "#",
    },
    {
      key: 'All',
      label: 'All',
      to: '/products',
      icon: 'inbox'
    }, {
      key: 'Tech',
      label: 'tech',
      to: '/products/tech',
      icon: 'star',
    }, {
      key: 'Services',
      label: 'Services',
      to: '/products/services',
      icon: 'send',
    }, {
      key: 'Office',
      label: 'Office',
      to: '/products/office',
      icon: 'drafts',
    }
  ];
  return items;
}
