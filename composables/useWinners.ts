import type { IWinner } from '~/types/winners';
import type { AsyncDataRequestStatus } from '#app';

export const useWinners = async (): Promise<{
  data: Ref<{ data: IWinner[] } | null>;
  error: Ref<unknown>;
  status: Ref<AsyncDataRequestStatus>;
}> => {
  const { data, error, status } = await useAsyncData('winners', () =>
    $fetch<{ data: IWinner[] }>('/api/winners'),
  );
  return { data, error, status };
};
