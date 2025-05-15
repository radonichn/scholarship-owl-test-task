<script setup lang="ts">
import { getWinnerById } from '~/api/winners';
import { DEFAULT_DATE_FORMAT } from '#shared/utils/constants';

const route = useRoute();
const dayjs = useDayjs();

const { data: winner, error, pending } = await useLazyAsyncData(async () => getWinnerById(route.params.id as string));

const toast = useToast();

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

const generalDataItems = computed<{ label: string; value: string }[]>(() => [
  {
    label: 'Won at',
    value: dayjs(winner.value?.attributes?.wonAt).format(DEFAULT_DATE_FORMAT),
  },
  {
    label: 'Amount won',
    value: `$${winner.value?.attributes?.amountWon}`,
  },
  {
    label: 'Scholarship title',
    value: `${winner.value?.attributes?.scholarshipTitle}`,
  },
]);
</script>

<template>
  <div>
    <NuxtLink
      to="/"
    >
      <Button
        label="Go back"
        variant="outlined"
        size="small"
        class="mb-4"
      />
      <SkeletonCard v-if="pending" />
      <Panel v-else>
        <template #header>
          <div class="flex items-center gap-2">
            <Avatar
              :image="winner?.attributes?.winnerPhoto"
              shape="circle"
              size="xlarge"
            />
            <span class="font-bold">{{ winner?.attributes?.winnerName }}</span>
          </div>
        </template>
        <p
          v-for="item of generalDataItems"
          :key="item.label"
          class="mb-2"
        >
          <span class="font-medium">{{ item.label }}:</span>
          {{ item.value }}
        </p>
        <p class="italic mb-4">
          {{ winner?.attributes?.testimonialText }}
        </p>
        <iframe
          width="auto"
          height="315"
          class="w-full"
          :src="winner?.attributes?.testimonialVideo"
        />
      </Panel>
    </NuxtLink>
  </div>
</template>
