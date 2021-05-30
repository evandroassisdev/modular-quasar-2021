export default class Table {
  constructor (
    controller = null,
    reflesh = false,
    select = {},
    selects = [],
    newBtn = true,
    editBtn = true,
    actionClick = false,
    actionClickGroup = false,
    fields = [],
    template = true,
    manualData = [],
    activeSelect = false,
    subTable = null
  ) {
    this.controller = controller
    this.reflesh = reflesh
    this.select = select
    this.selects = selects
    this.newBtn = newBtn
    this.editBtn = editBtn
    this.actionClick = actionClick
    this.actionClickGroup = actionClickGroup
    this.fields = fields
    this.template = template
    this.manualData = manualData
    this.activeSelect = activeSelect
    this.subTable = subTable
  }
}
