<script lang="ts" setup>
useHead({
  title: 'Scholarship winners table',
  meta: [
    {
      name: 'description',
      content: 'This is a scholarship winners table (test task for ScholarshipOwl)',
    },
  ],
});
</script>

<template>
  <main>
    <h1 class="text-center text-3xl mt-4 mb-8 font-medium">
      Scholarship winners table
    </h1>
    <ScholarshipWinnersTable />
  </main>
</template>
