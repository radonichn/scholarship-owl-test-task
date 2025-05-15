import type { Winner } from '@/types/winners';

export default defineEventHandler(async (event): Promise<Winner> => {
  try {
    const res = await $fetch<{ data: Winner[] }>('https://scholarshipowl.com/jsonapi/winner');
    const winnerId = getRouterParam(event, 'id');
    const winner = res.data.find(v => v.id === winnerId);

    if (!winner) {
      throw createError({
        statusCode: 404,
        statusMessage: `A user with ID ${winnerId} does not exist`,
      });
    }

    return winner;
  }
  catch (e) {
    console.log(e);

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch data',
    });
  }
});
