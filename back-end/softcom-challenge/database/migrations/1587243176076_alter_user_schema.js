'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUserSchema extends Schema {
  up () {
    this.alter('users', (table) => {
      table.string('cnpj')
    })
  }
}

module.exports = AlterUserSchema
