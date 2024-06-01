import { useState } from 'react';
import { SortingTypesArr } from '../../consts';
export type SortingProps = {
  sortingType: string;
  onChangeSortingType: (type: string) => void;
};

function Sorting({ sortingType, onChangeSortingType }: SortingProps): JSX.Element {
  const [sortingOptionsOpened, setSortingOptionsOpened] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSortingOptionsOpened(!sortingOptionsOpened)}>
        {sortingType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {sortingOptionsOpened &&
        <ul className="places__options places__options--custom places__options--opened">
          {SortingTypesArr.map((type) => (
            <li
              className={type === sortingType ? 'places__option' : 'places__option places__option--active'}
              tabIndex={0}
              onClick={() => {
                onChangeSortingType(type);
                setSortingOptionsOpened(!sortingOptionsOpened);
              }}
              key={type}
            >
              {type}
            </li>)
          )}
        </ul>}
    </form>
  );
}

export default Sorting;
