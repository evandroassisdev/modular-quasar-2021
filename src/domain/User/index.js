export default class User {
  constructor(
    id = null,
    name = null,
    cpf = null,
    email = null,
    phone = null,
    avatar = null,
    enterprises = [],
    roleId = null,
    password = null,
    newPassword = null,
    confirmatePassword = null
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.cpf = cpf
    this.phone = phone
    this.avatar = avatar
    this.enterprises = enterprises
    this.roleId = roleId
    this.password = password
    this.newPassword = newPassword
    this.confirmatePassword = confirmatePassword
  }
}
