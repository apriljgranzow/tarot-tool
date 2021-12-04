import * as data from '../../dataset/tarot-images.json';

const createImageMap = () => {
  const imageMap = new Map();
  data.cards.forEach((card) => {
    const { name, img } = card;
    imageMap.set(name, img);
  });
  return imageMap;
};

const imageMap = createImageMap();

export default imageMap;
