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

interface IOverviewItem {
  name: string,
  count: number
}

interface IDataHeader {
  cloumnCNName: string,
  cloumnName: string
}

interface IRender {
  (row): string
}
interface IColumn {
  name: string,
  key: string,
  render: IRender
}

interface IDataItem {
  id: string | number,
  [proName: string]: any
}

interface ITableData {
  rows: Array<IColumn>,
  rowDatas: Array<IDataItem>
}
export {
  IArticleItem, ITab, IOverviewItem,ITableData

}