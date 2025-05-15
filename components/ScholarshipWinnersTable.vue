<script setup lang="ts">
import { DEFAULT_DATE_FORMAT } from '#shared/utils/constants';
import { getWinnersList } from '~/api/winners';

const toast = useToast();
const dayjs = useDayjs();

const rowsPerPage = ref([10, 20, 50]);

const { data, error, pending } = await useLazyAsyncData(getWinnersList);

onMounted(() => {
  if (error?.value) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: error.value.statusMessage,
      life: 3000,
    });
  }
});
</script>

<template>
  <div class="max-w-5xl shadow px-4 rounded-lg mx-auto bg-white">
    <SkeletonDataTable
      v-if="pending"
      :rows="rowsPerPage[0]"
    />
    <DataTable
      v-else-if="data"
      :value="data"
      paginator
      :rows="rowsPerPage[0]"
      :rows-per-page-options="rowsPerPage"
      striped-rows
      class="w-full mx-auto"
    >
      <Column header="Photo">
        <template #body="slotProps">
          <Avatar
            :image="slotProps.data.attributes.winnerPhoto"
            shape="circle"
            size="large"
          />
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
          <p>{{ dayjs(slotProps.data.attributes.wonAt).format(DEFAULT_DATE_FORMAT) }}</p>
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
