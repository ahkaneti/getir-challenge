import React from 'react';

import { SortWrapper, SortList, SortValue } from './styles';

import { edit, selectSort } from 'redux/features/sort/sortSlice';
import { useDispatch, useSelector } from 'react-redux';

import { SORT_MODES } from 'tokens/sort';

export const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const changeSort = sortVal => {
    dispatch(edit(sortVal));
  };

  return (
    <SortWrapper>
      <p>Sorting</p>
      <SortList>
        <SortValue>
          <i
            className={
              sort === SORT_MODES.LOW_TO_HIGH
                ? 'ri-checkbox-circle-line'
                : 'ri-checkbox-blank-circle-line'
            }
            onClick={() => changeSort(SORT_MODES.LOW_TO_HIGH)}
          />
          <label>{SORT_MODES.LOW_TO_HIGH}</label>
        </SortValue>
        <SortValue>
          <i
            className={
              sort === SORT_MODES.HIGH_TO_LOW
                ? 'ri-checkbox-circle-line'
                : 'ri-checkbox-blank-circle-line'
            }
            onClick={() => changeSort(SORT_MODES.HIGH_TO_LOW)}
          />
          <label>{SORT_MODES.HIGH_TO_LOW}</label>
        </SortValue>
        <SortValue>
          <i
            className={
              sort === SORT_MODES.NEW_TO_OLD
                ? 'ri-checkbox-circle-line'
                : 'ri-checkbox-blank-circle-line'
            }
            onClick={() => changeSort(SORT_MODES.NEW_TO_OLD)}
          />
          <label>{SORT_MODES.NEW_TO_OLD}</label>
        </SortValue>
        <SortValue>
          <i
            className={
              sort === SORT_MODES.OLD_TO_NEW
                ? 'ri-checkbox-circle-line'
                : 'ri-checkbox-blank-circle-line'
            }
            onClick={() => changeSort(SORT_MODES.OLD_TO_NEW)}
          />
          <label>{SORT_MODES.OLD_TO_NEW}</label>
        </SortValue>
      </SortList>
    </SortWrapper>
  );
};