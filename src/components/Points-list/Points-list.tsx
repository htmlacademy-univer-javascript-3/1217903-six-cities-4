import {MouseEvent} from 'react';
import {PointTypes} from '../../types/map-type';

type ListProps = {
  points: PointTypes;
  onListItemHover: (listItemName: string) => void;
};

function List({points, onListItemHover}: ListProps): JSX.Element {

  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };

  return (
    <ul className="list">
      {points.map((point, index) => {
        const keyValue = `${index}-${point.title}`;
        return (
          <li
            className="list__item"
            key={keyValue}
            onMouseEnter={handleListItemHover}
          >
            {point.title}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
