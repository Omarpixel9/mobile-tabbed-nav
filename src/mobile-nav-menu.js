const menuModel = [
  { title: 'All', link: 'https://www.google.com' },
  { title: 'Maps', link: 'https://www.google.com' },
  { title: 'Images', link: 'https://www.google.com' },
  { title: 'Videos', link: 'https://www.google.com' },
  { title: 'Shopping', link: 'https://www.google.com' },
  { title: 'More' },
];

// Generates and returns a nav element containing input of array of menu model
const generateNavMenu = (menuItems) => {
  const container = document.createElement('nav');
  menuItems.forEach((item, index) => {
    const link = document.createElement('a');
    link.textContent = item.title;
    link.classList.add('navLink');
    // link.href = item.link;
    if (index === 0) link.classList.add('selected');
    link.addEventListener('click', () => {
      Array.from(container.children).forEach((child) => {
        child.classList.remove('selected');
      });
      link.classList.add('selected');
    });
    container.appendChild(link);
  });
  return container;
};

export { generateNavMenu, menuModel };
