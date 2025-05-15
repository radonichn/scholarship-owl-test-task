<script setup lang="ts">
import type { IWinner } from '~/types/winners';
import { formatDate } from '#shared/utils/formatDate';

const toast = useToast();

const rowsPerPage = ref([10, 20, 50]);

const scholarshipWinners = ref<IWinner[] | null>(null);
const isLoading = ref<boolean>(true);

const fetchWinners = async () => {
  const { data, error, status } = await useWinners();

  isLoading.value = status.value === 'pending';

  if (error?.value) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Something went wrong, please try again',
      life: 3000,
    });
  }

  if (data.value?.data) {
    scholarshipWinners.value = data.value?.data;
  }
};
fetchWinners();
</script>

<template>
  <div class="max-w-5xl shadow px-4 rounded-lg mx-auto bg-white">
    <DataTableSkeleton
      v-if="isLoading"
      :rows="rowsPerPage[0]"
    />
    <DataTable
      v-else
      :value="scholarshipWinners"
      paginator
      :rows="rowsPerPage[0]"
      :rows-per-page-options="rowsPerPage"
      striped-rows
      class="w-full mx-auto"
    >
      <Column header="Photo">
        <template #body="slotProps">
          <img
            :src="`${slotProps.data.attributes.winnerPhoto}`"
            :alt="slotProps.data.attributes.winnerName"
            class="w-12 h-12 rounded-full"
          >
        </template>
      </Column>
      <Column
        field="attributes.winnerName"
        header="Name"
      />
      <Column header="Scholarship title">
        <template #body="slotProps">
          <p>{{ slotProps.data.attributes.scholarshipTitle }}</p>
        </template>
      </Column>
      <Column header="Won at">
        <template #body="slotProps">
          <p>{{ formatDate(slotProps.data.attributes.wonAt) }}</p>
        </template>
      </Column>
      <Column header="More">
        <template #body="slotProps">
          <NuxtLink
            :to="{
              name: 'winner-id',
              params: { id: slotProps.data.id },
            }"
          >
            <Button
              label="More info"
              variant="outlined"
              size="small"
            />
          </NuxtLink>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
