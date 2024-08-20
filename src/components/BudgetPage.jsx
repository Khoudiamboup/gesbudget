import React, { useState, useEffect } from 'react';
import { fetchTransactions, deleteTransaction, updateTransaction, fetchBudgetSummary } from '../api';import { Link, useNavigate } from 'react-router-dom';

const BudgetPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({ totalIncome: 0, totalExpenses: 0, remainingBudget: 0 });
  const [isAddingExpense, setIsAddingExpense] = useState(false);
  const [isAddingIncome, setIsAddingIncome] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const transactionsData = await fetchTransactions();
      setTransactions(transactionsData);
      const summaryData = await fetchBudgetSummary();
      setSummary(summaryData);
    };
    loadData();
  }, []);

  const handleAddTransaction = () => {
    setIsAddingExpense(false);
    setIsAddingIncome(false);
    fetchTransactions().then(data => setTransactions(data));
    fetchBudgetSummary().then(data => setSummary(data));
  };

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    fetchTransactions().then(data => setTransactions(data));
  };

  const handleEdit = async (transaction) => {
    navigate(`/edit/${transaction.id}`, { state: { transaction } });
  };

  const expenses = transactions.filter(t => t.type === 'expense');
  const incomes = transactions.filter(t => t.type === 'income');

  return (
    <div className="container mx-auto p-4">
      {/* Logo */}
      <div className="text-center mb-8">
        <h1 className="text-yellow-500 text-5xl font-bold">Budget</h1>
      </div>

      {/* Première section : cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="card bg-green-800 p-4 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold text-white">Budget</h2>
          <p className="text-2xl text-gray-200">{summary.remainingBudget} Cfa</p>
        </div>
        <div className="card bg-green-800 p-4 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold text-white">Dépenses</h2>
          <p className="text-2xl text-gray-200">{summary.totalExpenses} Cfa</p>
        </div>
        <div className="card bg-green-800 p-4 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold text-white">Solde</h2>
          <p className="text-2xl text-gray-200">{summary.totalIncome} Cfa</p>
        </div>
      </div>

      {/* Deuxième section : liste des dépenses */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Liste des Dépenses</h2>
        <table className="w-full bg-white border border-gray-500 rounded shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border-b">Titre</th>
              <th className="p-2 border-b">Montant</th>
              <th className="p-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(transaction => (
              <tr key={transaction.id}>
                <td className="p-2 border-b">{transaction.category}</td>
                <td className="p-2 border-b">{transaction.amount} €</td>
                <td className="p-2 border-b">
                  <button
                    onClick={() => handleEdit(transaction)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(transaction.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/ajoutdepense" className="mt-4 bg-blue-400 text-yellow-800 px-4 py-2 rounded">
          Ajouter Dépense
        </Link>
      </div>

      {/* Troisième section : liste des revenus */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Liste des Revenus</h2>
        <table className="w-full bg-white border border-gray-500 rounded shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border-b">Titre</th>
              <th className="p-2 border-b">Montant</th>
              <th className="p-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {incomes.map(transaction => (
              <tr key={transaction.id}>
                <td className="p-2 border-b">{transaction.category}</td>
                <td className="p-2 border-b">{transaction.amount} €</td>
                <td className="p-2 border-b">
                  <button
                    onClick={() => handleEdit(transaction)}
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(transaction.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/ajoutrevenu" className="mt-4 bg-blue-400 text-yellow-800 px-4 py-2 rounded">
          Ajouter Revenu
        </Link>
      </div>
    </div>
  );
};

export default BudgetPage;