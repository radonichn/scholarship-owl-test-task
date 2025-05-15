<template>
  <DataTable :value="skeletonRows">
    <Column
      v-for="col in cols"
      :key="col"
      header=""
    >
      <template #body>
        <Skeleton
          width="100%"
          height="1.5rem"
        />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { rows = 5, cols = 5 } = defineProps<{ rows?: number; cols?: number }>();

const skeletonRows = ref(
  Array.from({ length: rows }, () => ({})),
);
</script>
