import { describe, expect, it } from 'vitest'
import { filterTasks } from '../src/taskFilters.js'

const tasks = [
  { id: 1, completed: true },
  { id: 2, completed: false },
]

describe('filterTasks', () => {
  it('returns every task for all', () => {
    expect(filterTasks(tasks, 'all')).toEqual(tasks)
  })

  it('returns only open tasks for active', () => {
    expect(filterTasks(tasks, 'active')).toEqual([{ id: 2, completed: false }])
  })

  it('returns only completed tasks for completed', () => {
    expect(filterTasks(tasks, 'completed')).toEqual([{ id: 1, completed: true }])
  })

  it('uses all as the safe default for an unknown filter', () => {
    expect(filterTasks(tasks, 'unknown')).toEqual(tasks)
  })
})

describe('filterTasks with inherited object keys', () => {
  it.each(['constructor', 'toString', 'hasOwnProperty', 'valueOf', '__proto__'])(
    'treats %s as an unknown filter and returns all tasks',
    (key) => {
      expect(filterTasks(tasks, key)).toEqual(tasks)
    },
  )
})
