import api from './api';

// InventoryItem model interface
export interface InventoryItem {
  id: number;
  name: string;
  description?: string;
  quantity: number;
  price: number;
  categoryId: number;
}

// API methods for InventoryItem
export const InventoryItemApi = {
  getAll: async (): Promise<InventoryItem[]> => {
    const response = await api.get<InventoryItem[]>('/InventoryItem');
    return response.data;
  },

  getById: async (id: number): Promise<InventoryItem> => {
    const response = await api.get<InventoryItem>(`/InventoryItem/${id}`);
    return response.data;
  },

  create: async (item: Omit<InventoryItem, 'id'>): Promise<InventoryItem> => {
    const response = await api.post<InventoryItem>('/InventoryItem', item);
    return response.data;
  },

  update: async (id: number, item: InventoryItem): Promise<void> => {
    await api.put(`/InventoryItem/${id}`, item);
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/InventoryItem/${id}`);
  },
};