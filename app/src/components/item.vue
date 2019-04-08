<template>
  <a class="item"> {{ title }} </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Item extends Vue {
  @Prop()
  title!: string
}
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
}
</style>
