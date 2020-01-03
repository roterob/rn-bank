import { useState } from 'react';
import { useObjectState } from 'simple-react-state';

const data = {
  accounts: [
    { id: 1, account: 'ES6621000418401234567891', amount: 4680.78 },
    { id: 2, account: 'ES9420805801101234567891', amount: 160.0 },
  ],
  lastMovements: [
    {
      _id: 1,
      account: 'ES6621000418401234567891',
      date: 'Lunes',
      concept: 'Reint. cajero',
      amount: -160.0,
    },
    {
      _id: 2,
      account: 'ES6621000418401234567891',
      date: '10 Dic',
      concept: 'Farmacia Reviejo',
      amount: -10.44,
    },
    {
      _id: 3,
      account: 'ES6621000418401234567891',
      date: '10 Dic',
      concept: 'Factura F201900123',
      amount: 955.59,
    },
    {
      _id: 4,
      account: 'ES9420805801101234567891',
      date: 'Martes',
      concept: 'Reint. cajero',
      amount: 160.0,
    },
    {
      _id: 5,
      account: 'ES9420805801101234567891',
      date: '9 Dic',
      concept: 'Farmacia Reviejo',
      amount: 10.44,
    },
  ],
  receipts: [
    {
      id: 1,
      icon: 'Shopping',
      origin: 'Fundación Unicef Comite.',
      amount: 20,
      date: '27 Dic',
    },
    { id: 2, icon: 'Cash', origin: 'Red Ofisat S.I.', amount: 156.76, date: '19 Dic' },
    { id: 3, icon: 'Home', origin: 'Gas Natural Servicios Sdg', amount: 115.82, date: '18 Dic' },
  ],
};

const useScreenState = () => {
  const [state, setState] = useObjectState({
    accounts: data.accounts,
    lastMovements: data.lastMovements,
    receipts: data.receipts,
  });

  return {
    ...state,
  };
};

export default useScreenState;
