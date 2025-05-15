export default defineEventHandler(async () => {
  try {
    const res = await $fetch('https://scholarshipowl.com/jsonapi/winner');
    return res;
  }
  catch (e) {
    console.log(e);

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch data',
    });
  }
});
