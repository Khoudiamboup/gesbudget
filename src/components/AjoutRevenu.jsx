import React, { useState } from 'react';
import { createIncome } from '../api';
import { Link } from 'react-router-dom';

const AjoutRevenu = () => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createIncome({ source, amount, date });
    setSource('');
    setAmount(0);
    setDate('');
  };

  return (
    <center>
      <div className="container h-48 w-96 p-4">
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="source" className="block font-bold mb-2">
              Source de revenu
            </label>
            <input
              type="text"
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block font-bold mb-2">
              Montant
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-gray-400"
            ><Link
            to="/"
            className=" text-white px-4 py-2 rounded hover:bg-gray-400"
          >Valider        </Link>
            </button>
            <Link
              to="/"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Annuler
            </Link>
          </div>
        </form>
      </div>
    </center>
  );
};

export default AjoutRevenu;