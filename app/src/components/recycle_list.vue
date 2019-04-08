<template>
  <RecycleScroller
    class="scroller"
    :items="items"
    :item-size="20"
    key-field="id"
    @visible="onVisible"
    @hidden="onHidden"
  >
    <template v-slot="props">
      <item :title="props.item.title"/>
    </template>
  </RecycleScroller>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// @ts-ignore
import { RecycleScroller } from 'vue-virtual-scroller'
import Item from 'components/item.vue'
import { genItems, ItemModel } from './item.ts'

@Component({
  components: {
    RecycleScroller,
    Item
  }
})
export default class List extends Vue {

  items: ItemModel[] = []

  mounted() {
    this.items = genItems()
  }

  onVisible() {
    console.log('isVisible')
  }

  onHidden() {
    console.log('isHidden')
  }
}
</script>

<style lang="scss" scoped>
  .scroller {
    height: 100%;
  }
</style>
