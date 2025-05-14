<script setup lang="ts">
import type { IWinner } from '~/types/winners';

const toast = useToast();
const dayjs = useDayjs();

const scholarshipWinners = ref<IWinner[] | null>(null);
const isLoading = ref<boolean>(true);

const getFormattedDateTime = (date: string): string => dayjs(date).format('MM-DD-YYYY')

const fetchWinners = () => {
  const { data, error, pending } = useWinners();

  isLoading.value = pending.value;

  if (error?.value) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Something went wrong, please try again', life: 3000
    });
    return;
  }

  if (data.value?.data) {
    scholarshipWinners.value = data.value?.data
  }
}
fetchWinners();

watch(() => scholarshipWinners.value, (newValue) => {
  if (newValue) {
    isLoading.value = false;
  }
}, {immediate: true});

</script>

<template>
  <div>
    Loading: <p>{{ JSON.stringify(isLoading) }}</p>
    <DataTable 
      :value="scholarshipWinners"
      paginator 
      :rows="5"
      :rows-per-page-options="[5, 10, 20, 50]"
      class="max-w-5xl mx-auto"
    >
    <Column header="Photo">
        <template #body="slotProps">
          <Skeleton v-if="isLoading"/>
            <img :src="`${slotProps.data.attributes.winnerPhoto}`" :alt="slotProps.data.attributes.winnerName" class="w-12 rounded" >
        </template>
    </Column>
    <Column field="attributes.winnerName" header="Name">
      <Skeleton v-if="isLoading"/>
      </Column>
    <Column header="Amount won">
      <Skeleton v-if="isLoading"/>
      <template #body="slotProps">
            <p>${{ slotProps.data.attributes.amountWon }}</p>
        </template>
    </Column>
    <Column header="Won at">
      <Skeleton v-if="isLoading"/>

      <template #body="slotProps">
            <p>{{ getFormattedDateTime(slotProps.data.attributes.wonAt) }}</p>
        </template>
    </Column>
    </DataTable>
  </div>
</template>