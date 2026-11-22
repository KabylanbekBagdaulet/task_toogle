let fallbackCounter = 0

export function createTaskId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID()
  fallbackCounter += 1
  return `task-${Date.now()}-${fallbackCounter}`
}
