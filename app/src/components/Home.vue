<template>
  <div>
    <label for="">
      <input type="radio" name="viewType" :value="ViewType.Recycler" v-model="picked">
      RecyclerView
    </label>
    <label for="">
      <input type="radio" name="viewType" :value="ViewType.Ordinary" v-model="picked">
      NormalView
    </label>
    <div class="container" :style="`width: ${lists.length * 150}px;`">
    <div class="wrapper" v-for="list of lists" :key="list.id">
      <component :is="selectedList"/>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import RecycleList from 'components/recycle_list.vue'
import OrdinalyList from 'components/ordinaly_list.vue'
import Item from 'components/item.vue'

enum ViewType {
  Recycler,
  Ordinary,
}

const componentViewMap = {
  [ViewType.Recycler]: RecycleList,
  [ViewType.Ordinary]: OrdinalyList,
}

interface ListModel {
  id: string | number
  title: string
}

@Component({
  components: {
    RecycleList,
    OrdinalyList,
    Item,
  }
})
export default class Home extends Vue {
  ViewType = ViewType
  lists: ListModel[] = []

  mounted() {
    this.lists = this.genList()
  }

  genList() {
    return Array(3).fill(0).map((v,i)=>{
      console.log(v)
      return {
        id: i,
        title: `num ${i}`
      }}
    )
  }

  picked = ViewType.Recycler

  get selectedList() {
    return componentViewMap[this.picked]
  }
}
</script>

<style lang="scss" scoped>
.container {
  .wrapper {
    height: 300px;
    width: 100px;
    display: inline-block;
  }
}
</style>
