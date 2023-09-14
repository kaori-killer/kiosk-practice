import { useLocalStorage } from 'usehooks-ts';

import MenuItem from './MenuItem';

import Food from '../../types/Food';

type MenuProps = {
  menu: Food[];
};

export default function Menu({ menu }: MenuProps) {
  const [selectedFoods, selectFood] = useLocalStorage<Food[]>('cart', []);

  const handleClickSelect = (food: Food) => {
    selectFood([...selectedFoods, food]);
  };

  return (
    <ul>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
          >
            <button
              type="button"
              name={`#${food.name}`}
              onClick={() => handleClickSelect(food)}
            >
              선택
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
