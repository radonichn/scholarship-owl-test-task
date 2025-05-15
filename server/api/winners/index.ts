import type { Winner } from '~/types/winners';

export default defineEventHandler(async () => {
  try {
    const res = await $fetch<{ data: Winner[] }>('https://scholarshipowl.com/jsonapi/winner');
    return res.data;
  } catch (e) {
    console.log(e);

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch data',
    });
  }
});
