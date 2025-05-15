import type { IWinner } from '~/types/winners';

export const getWinnersList = () => $fetch<IWinner[]>('/api/winners');

export const getWinnerById = (id: string) => $fetch<IWinner>(`/api/winners/${id}`);
