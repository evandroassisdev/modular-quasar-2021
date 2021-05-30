export default class Enterprise {
  constructor (
    name = null,
    type = null,
    location = null,
    syndicId = null,
    managerId = null,
    logo = null
  ) {
    this.name = name
    this.type = type
    this.location = location
    this.syndicId = syndicId
    this.managerId = managerId
    this.logo = logo
  }
}
