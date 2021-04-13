'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.float('price')
      table.timestamps()
      table.integer('user_id').unsigned().references('id').inTable('users');
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemSchema
