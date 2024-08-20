const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP Error ${response.status}: ${errorText}`);
  }
  return await response.json();
};

export const fetchTransactions = async () => {
  const response = await fetch('/api/transactions');
  return handleResponse(response);
};

export const deleteTransaction = async (id) => {
  const response = await fetch(`/api/transactions/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

export const updateTransaction = async (id, updatedTransaction) => {
  const response = await fetch(`/api/transactions/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedTransaction),
  });
  return handleResponse(response);
};

export const fetchBudgetSummary = async () => {
  const response = await fetch('/api/budget-summary');
  return handleResponse(response);
};

export const createExpense = async (expense) => {
  const response = await fetch('/api/expenses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(expense),
  });
  return handleResponse(response);
};

export const createIncome = async (income) => {
  const response = await fetch('/api/incomes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(income),
  });
  return handleResponse(response);
};