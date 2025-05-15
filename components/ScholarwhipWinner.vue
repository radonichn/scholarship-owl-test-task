<script setup lang="ts">
import type { IWinner } from '~/types/winners';

const toast = useToast();
const route = useRoute();

const scholarshipWinner = ref<IWinner | null>(null);
const isLoading = ref<boolean>(true);

const fetchWinner = async () => {
  const { data, error, status } = await useWinner(route.params.id as string);

  isLoading.value = status.value === 'pending';

  if (error?.value) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Something went wrong, please try again',
      life: 3000,
    });
  }

  console.log(data.value, 'here we go');

  if (data.value) {
    scholarshipWinner.value = data.value;
  }
};
fetchWinner();
</script>

<template>
  <div>
    <NuxtLink to="/">
      <Button
        label="Back"
        variant="outlined"
        size="small"
      />
    </NuxtLink>

    <p>{{ scholarshipWinner?.attributes?.winnerName }}</p>
  </div>
</template>
