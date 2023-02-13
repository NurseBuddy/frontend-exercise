import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCarer } from './carerReducer';

function Carer() {
  const { carerId } = useParams();
  const dispatch = useDispatch();
  const carer = useSelector((state) => state.peopleList.carer);

  useEffect(() => {
    if (carer === null) {
      dispatch(getCarer(carerId));
    }
  }, [carer, carerId, dispatch]);

  if (!carer) {
    return null;
  }

  return (
    <div>
      <h2>{carer?.name}</h2>
      <p>
        {carer?.id}
        {' '}
        -
        {' '}
        {carer?.name}
      </p>
    </div>
  );
}

export default Carer;
