import fixtures from '../../fixtures';
import extractCategories from './extractCategories';

describe('extractCategories', () => {
  it('returns categories from restaurants', () => {
    const { restaurants } = fixtures;

    const categoires = extractCategories(restaurants);

    expect(categoires).toEqual(['중식', '한식', '일식']);
  });
});
