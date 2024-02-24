import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {stats.map((stat, index) => {
          return (
            <li className={style.item} key={stat.id}>
              <StatisticsItem stat={stat} icon={icons[index]} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
