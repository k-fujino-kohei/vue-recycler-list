export interface ItemModel {
  id: number,
  title: string,
}

export function genItems(length: number = 100, startIdx: number = 0): ItemModel[] {
  return Array(length).fill(0).map((_v,i)=>{
    return genItemModel(startIdx + i)
  })
}

export function addItems(curItems: ItemModel[]) {
  const newItems = genItems(20, curItems.length)
  curItems.concat(newItems)
}

function genItemModel(idx: number) {
  return {
    id: idx,
    title: `num ${idx}`
  }
}