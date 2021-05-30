// import Area from '@domain/Area'
export default class POP {
  constructor (
    name = '',
    groupId = null,
    number = null,
    // area = new Area(),
    areas = [],
    // insertedAreas = [],
    // descriptionAction = null, //DESABILITADO
    repairProcedures = '',
    comments = ''
  ) {
    // this.id = id
    this.name = name
    this.groupId = groupId
    this.number = number
    // this.area = area
    this.areas = areas
    // this.insertedAreas = insertedAreas
    // this.descriptionAction = descriptionAction
    this.repairProcedures = repairProcedures
    this.comments = comments
  }
}
