import _ from 'lodash';

import Receipt from '../../types/Receipt';

type ReceiptPrinterProps = {
  receipt: Receipt;
}

export default function ReceiptPrinter({ receipt }: ReceiptPrinterProps) {
  if (_.isEmpty(receipt)) {
    return <p>[영수증 나오는 곳]</p>;
  }

  const { id, menu, totalPrice } = receipt;

  return (
    <div>
      <h2>영수증</h2>
      <h3>주문번호</h3>
      <p>{id}</p>
      <h3>주문목록</h3>
      <ul>
        {menu.map((food) => {
          const { name, price } = food;
          const key = `${food.id}-${name}`;
          return (
            <li
              key={key}
            >
              {name}
              (
              {price}
              원)
            </li>
          );
        })}
      </ul>
      <p>
        총 가격:
        {' '}
        {totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}
