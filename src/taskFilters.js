export const FILTERS = {
  all: () => true,
  active: (task) => !task.completed,
  completed: (task) => task.completed,
}

export function filterTasks(tasks, filter) {
  // Own-property check: inherited keys such as "constructor" must not select a predicate.
  const predicate = Object.hasOwn(FILTERS, filter) ? FILTERS[filter] : FILTERS.all
  return tasks.filter(predicate)
}
