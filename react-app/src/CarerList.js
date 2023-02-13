import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarers } from './carerReducer';

const nameSorter = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

function CarerList() {
  const dispatch = useDispatch();
  const carers = useSelector((state) => state.peopleList.carers);

  useEffect(() => {
    if (carers == null || carers.length === 0) {
      dispatch(getCarers());
    }
  }, [carers, dispatch]);

  const sortedCarers = [...carers]?.sort(nameSorter);

  const formatCarers = () => sortedCarers?.map((carer) => (
    <li id={carer.id}>
      <a href={`/carers/${carer.id}`}>{carer.name}</a>
    </li>
  ));

  return (
    <>
      <h2>Carers</h2>
      <ul>
        {formatCarers()}
      </ul>
    </>
  );
}

export default CarerList;
