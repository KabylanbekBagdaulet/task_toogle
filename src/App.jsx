import { useMemo, useState } from 'react'
import { filterTasks } from './taskFilters.js'
import { createTaskId } from './taskId.js'

const initialTasks = [
  { id: 1, title: 'Review the repository map', completed: true },
  { id: 2, title: 'Run the verification checks', completed: false },
  { id: 3, title: 'Record the release decision', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [draft, setDraft] = useState('')
  const [filter, setFilter] = useState('all')
  const [error, setError] = useState('')

  const visibleTasks = useMemo(() => filterTasks(tasks, filter), [tasks, filter])
  const remainingCount = tasks.filter((task) => !task.completed).length

  function addTask(event) {
    event.preventDefault()
    const title = draft.trim()
    if (!title) {
      setError('Enter a task before adding it.')
      return
    }
    if (title.length > 80) {
      setError('Keep task names under 80 characters.')
      return
    }
    setTasks((current) => [...current, { id: createTaskId(), title, completed: false }])
    setDraft('')
    setError('')
  }

  function toggleTask(id) {
    setTasks((current) => current.map((task) => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )))
  }

  function removeTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id))
  }

  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">CLEARLIST / ASSIGNMENT 05</p>
        <h1>Make the next step obvious.</h1>
        <p className="intro">A deliberately small task tracker with visible rules, focused behavior, and no hidden data collection.</p>
      </section>

      <section className="workspace" aria-label="Task tracker">
        <div className="summary-row">
          <div>
            <p className="label">CURRENT QUEUE</p>
            <h2>{remainingCount} open {remainingCount === 1 ? 'task' : 'tasks'}</h2>
          </div>
          <span className="status-dot" aria-label="Ready" />
        </div>

        <form className="task-form" onSubmit={addTask}>
          <label htmlFor="task-title">Add a task</label>
          <div className="input-row">
            <input
              id="task-title"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="e.g. Check the acceptance criteria"
              maxLength={80}
            />
            <button type="submit">Add task</button>
          </div>
          {error && <p className="error" role="alert">{error}</p>}
        </form>

        <div className="filter-row" aria-label="Task filters">
          {['all', 'active', 'completed'].map((option) => (
            <button
              className={filter === option ? 'filter active' : 'filter'}
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              aria-pressed={filter === option}
            >
              {option}
            </button>
          ))}
        </div>

        <ul className="task-list">
          {visibleTasks.map((task) => (
            <li className={task.completed ? 'task completed' : 'task'} key={task.id}>
              <button className="check" type="button" onClick={() => toggleTask(task.id)} aria-label={`Mark ${task.title} ${task.completed ? 'active' : 'complete'}`}>
                {task.completed ? '✓' : ''}
              </button>
              <span>{task.title}</span>
              <button className="remove" type="button" onClick={() => removeTask(task.id)} aria-label={`Remove ${task.title}`}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        {visibleTasks.length === 0 && <p className="empty">Nothing here yet. Add a small next step.</p>}
      </section>

      <footer>Data stays in this page and is cleared on refresh.</footer>
    </main>
  )
}

export default App
