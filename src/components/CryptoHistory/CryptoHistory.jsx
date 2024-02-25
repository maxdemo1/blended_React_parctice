import { format } from 'date-fns';

import style from './CryptoHistory.module.css';

const tableHeaders = ['№', 'price', 'amount', 'date'];
export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>{tableHeaders[0]}</th>
          <th className={style.th}>{tableHeaders[1]}</th>
          <th className={style.th}>{tableHeaders[2]}</th>
          <th className={style.th}>{tableHeaders[3]}</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, price, amount, date }) => {
          return (
            <tr className={style.tr} key={id}>
              <td className={style.td}>{id}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{format(new Date(date), 'Pp')}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
