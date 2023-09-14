import { useInterval, useLocalStorage } from 'usehooks-ts';

import Cart from './components/Cart/Cart';
import FilterableRestaurantTable from './components/Restaurant/FilterableRestaurantTable';
import ReceiptPrinter from './components/Recipet/ReceiptPrinter';

import useFetchRestaurants from './hooks/useFetchRestaurants';

import Receipt from './types/Receipt';

const emptyReceipt = {} as Receipt;

const delay = 5000;

export default function App() {
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);

  useInterval(() => {
    if (receipt.id) {
      setReceipt(emptyReceipt);
    }
  }, receipt.id ? delay : null);

  const restaurants = useFetchRestaurants();

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilterableRestaurantTable restaurants={restaurants} />
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}
