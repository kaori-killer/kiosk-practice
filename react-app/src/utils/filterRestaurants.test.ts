import fixtures from '../../fixtures';

import filterRestaurants from './filterRestaurants';

const context = describe;

describe('filterRestaurants', () => {
  const { restaurants } = fixtures;

  context('with "전체" category', () => {
    it('returns all restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { filterText: '', filterCategory: '전체' },
      );

      expect(filteredRestaurants.length).toBe(restaurants.length);
    });
  });

  context('with "한식" category', () => {
    it('returns seleted category restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { filterText: '', filterCategory: '한식' },
      );

      expect(filteredRestaurants.length).toBe(1);
    });
  });

  context('with "중식" category', () => {
    it('returns seleted category restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { filterText: '', filterCategory: '중식' },
      );
      expect(filteredRestaurants.length).toBe(1);
    });
  });
  context('with "일식" category', () => {
    it('returns seleted category restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        restaurants,
        { filterText: '', filterCategory: '일식' },
      );
      expect(filteredRestaurants.length).toBe(1);
    });
  });
  context('with filter text', () => {
    it('returns filtered restaurants', () => {
      const filterText = '메가반점';

      const filteredRestaurants = filterRestaurants(
        restaurants,
        { filterText, filterCategory: '전체' },
      );

      const filterRestaurant = filteredRestaurants[0];

      expect(filteredRestaurants.length).toBe(1);
      expect(filterRestaurant.name).toBe(filterText);
    });
  });
});
