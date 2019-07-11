interface ITab {
  name: string,
  isActive: boolean,
  slotName: string
}

interface IArticleItem {
  title: string,
  img: string,
  isPass: boolean,
  publishTime: string,
  tjCount: number,
  ydCount: number,
  fxCount: number
}

export {
  IArticleItem, ITab,

}