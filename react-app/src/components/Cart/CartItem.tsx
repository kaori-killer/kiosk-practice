import MenuItem from '../Restaurant/MenuItem';

import Food from '../../types/Food';

type CartItemProps = {
    food: Food;
    index: number;
    onClickCancle: (index: number) => void;
}

export default function CartItem({
  food,
  index,
  onClickCancle,
}: CartItemProps) {
  return (
    <MenuItem food={food}>
      <button
        type="button"
        name={`#${food.name}`}
        onClick={() => onClickCancle(index)}
      >
        취소
      </button>
    </MenuItem>
  );
}
