import api from './api';

// Category model interface
export interface Category {
  id: number;
  name: string;
  description?: string;
}

// API methods for Category
export const CategoryApi = {
  getAll: async (): Promise<Category[]> => {
    const response = await api.get<Category[]>('/Category');
    return response.data;
  },

  getById: async (id: number): Promise<Category> => {
    const response = await api.get<Category>(`/Category/${id}`);
    return response.data;
  },

  create: async (category: Omit<Category, 'id'>): Promise<Category> => {
    const response = await api.post<Category>('/Category', category);
    return response.data;
  },

  update: async (id: number, category: Category): Promise<void> => {
    await api.put(`/Category/${id}`, category);
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/Category/${id}`);
  },
};