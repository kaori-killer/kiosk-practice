import { useLocalStorage } from 'usehooks-ts';

import CartItem from './CartItem';
import OrderButton from './OrderButton';

import useCreateOrder from '../../hooks/useCreateOrder';

import Food from '../../types/Food';
import Receipt from '../../types/Receipt';

type CartProps = {
  setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const [selectedFoods, setFoods] = useLocalStorage<Food[]>('cart', []);

  const { createOrder } = useCreateOrder();

  const handleClickSelect = (index: number) => {
    const food = selectedFoods.filter((_, i) => i !== index);
    setFoods(food);
  };

  const handleClickOrder = async () => {
    const receipt = await createOrder(selectedFoods);
    setReceipt(receipt);

    setFoods([]);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {selectedFoods.map((food, index) => {
          const key = `${food.id}-${index}`;
          return (
            <CartItem
              key={key}
              food={food}
              index={index}
              onClickCancle={handleClickSelect}
            />
          );
        })}
      </ul>
      <OrderButton
        foods={selectedFoods}
        onClick={handleClickOrder}
      />
    </div>
  );
}
