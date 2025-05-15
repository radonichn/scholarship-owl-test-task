import type { Winner } from '~/types/winners';

export const getWinnersList = () => $fetch<Winner[]>('/api/winners');

export const getWinnerById = (id: string) => $fetch<Winner>(`/api/winners/${id}`);
