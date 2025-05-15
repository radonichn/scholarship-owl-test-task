<template>
  <Panel>
    <template #header>
      <div class="flex items-center gap-2">
        <Skeleton
          shape="circle"
          size="4rem"
        />
        <Skeleton
          width="10rem"
        />
      </div>
    </template>
    <Skeleton
      v-for="i in 3"
      :key="i"
      width="20rem"
      class="mb-2"
    />
    <Skeleton
      width="100%"
      height="100px"
    />
  </Panel>
</template>

<script setup lang="ts">
</script>
