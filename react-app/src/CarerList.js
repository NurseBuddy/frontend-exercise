import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarers } from './carerReducer';

function CarerList() {
  const dispatch = useDispatch();
  const carers = useSelector((state) => state.peopleList.carers);

  useEffect(() => {
    if (carers == null || carers.length === 0) {
      dispatch(getCarers());
    }
  }, [carers, dispatch]);

  const formatCarers = () => carers?.map((carer) => (
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
