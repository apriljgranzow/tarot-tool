import imageMap from '../src/imageMap';

describe('Tarot Image Map', () => {
  test('It gets the correct image from the map', () => {
    console.log(imageMap);
    expect(imageMap.get('Wheel of Fortune')).toBe('m10.jpg');
  });
});
