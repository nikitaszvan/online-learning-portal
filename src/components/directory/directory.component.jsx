import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://images.pexels.com/photos/132477/pexels-photo-132477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://images.pexels.com/photos/63332/science-world-false-creek-vancouver-british-columbia-63332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
