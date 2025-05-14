import type { IWinner } from '~/types/winners';

export const useWinners = (): {
  data: Ref<{ data: IWinner[] } | null>;
  error: Ref<unknown>;
  pending: Ref<boolean>;
} => {
  const { data, error, pending } = useLazyFetch<{ data: IWinner[] }>(
    'https://scholarshipowl.com/jsonapi/winner',
  );
  return { data, error, pending };
};
