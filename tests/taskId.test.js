import { describe, expect, it } from 'vitest'
import { createTaskId } from '../src/taskId.js'

describe('createTaskId', () => {
  it('returns unique ids even when called many times in the same millisecond', () => {
    const ids = Array.from({ length: 1000 }, () => createTaskId())
    expect(new Set(ids).size).toBe(1000)
  })
})
