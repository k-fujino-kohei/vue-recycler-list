<template>
  <div class="scroller">
    <item v-for="item of items" :key="item.id" :title="item.title"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Item from 'components/item.vue'
import { genItems, ItemModel } from './item.ts'

@Component({
  components: {
    Item
  }
})
export default class OrdinalyList extends Vue {
  items: ItemModel[] = []

  mounted() {
    this.items = genItems()
  }
}
</script>

<style lang="scss" scoped>
  .scroller {
    height: 100%;
    overflow-y: auto;
  }
</style>
