import { IconContext } from 'react-icons';

import style from './Statistics.module.css';

export const StatisticsItem = ({ stat, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ color: 'blue', size: '2em' }}>
        {icon}
      </IconContext.Provider>
      <span className={style.counter}>{stat.total}</span>
      <p className={style.text}>{stat.title}</p>
    </>
  );
};
