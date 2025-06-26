import api from './api';

// User model interface
export interface User {
  id: number;
  name: string;
  email: string;
  // Add other fields as needed, e.g. password, role, etc.
}

// API methods for User
export const UserApi = {
  getAll: async (): Promise<User[]> => {
    const response = await api.get<User[]>('/User');
    return response.data;
  },

  getById: async (id: number): Promise<User> => {
    const response = await api.get<User>(`/User/${id}`);
    return response.data;
  },

  getByEmail: async (email: string): Promise<User> => {
    const response = await api.get<User>(`/User/by-email/${encodeURIComponent(email)}`);
    return response.data;
  },

  create: async (user: Omit<User, 'id'>): Promise<User> => {
    const response = await api.post<User>('/User', user);
    return response.data;
  },

  update: async (id: number, user: User): Promise<void> => {
    await api.put(`/User/${id}`, user);
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/User/${id}`);
  },
};