import api from '../axiosConfig';

export const addTransaction = async (transactionData: any): Promise<any> => {
  try {
    const response = await api.post('/transactions', transactionData);
    return response.data;
  } catch (error) {
    console.error('Error adding transaction:', error.response?.data || error.message);
    throw error;
  }
};

export const getTransactions = async (): Promise<any[]> => {
  try {
    const response = await api.get('/transactions');
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error.response?.data || error.message);
    throw error;
  }
};

export const getTransactionById = async (id: string): Promise<any> => {
  if (!id) {
    throw new Error('Transaction ID is required');
  }

  try {
    const response = await api.get(`/transactions/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transaction:', error.response?.data || error.message);
    throw error;
  }
};

export const updateTransaction = async (id: string, transactionData: any): Promise<any> => {
  if (!id) {
    throw new Error('Transaction ID is required');
  }

  try {
    const response = await api.put(`/transactions/${id}`, transactionData);
    return response.data;
  } catch (error) {
    console.error('Error updating transaction:', error.response?.data || error.message);
    throw error;
  }
};

export const deleteTransaction = async (id: string): Promise<any> => {
  if (!id) {
    throw new Error('Transaction ID is required');
  }

  try {
    const response = await api.delete(`/transactions/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting transaction:', error.response?.data || error.message);
    throw error;
  }
};