import type { IWinner } from '~/types/winners';
import type { AsyncDataRequestStatus } from '#app';

export const useWinner = async (winnerId: string): Promise<{
  data: Ref<IWinner | null>;
  error: Ref<unknown>;
  status: Ref<AsyncDataRequestStatus>;
}> => {
  const { data, error, status } = await useAsyncData(`winner/${winnerId}`, () =>
    $fetch<IWinner>(`/api/winners/${winnerId}`),
  );
  return { data, error, status };
};
