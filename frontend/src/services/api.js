const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/tasks`

export const getTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/`)
  if (!response.ok) throw new Error("Failed to fetch todos")
  console.log(response)
  return response.json()
}

export const createTask = async (todo) => {
  const response = await fetch(`${API_BASE_URL}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  })
  if (!response.ok) throw new Error("Failed to create todo")
  return response.json()
}

export const updateTask = async (id, updates) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  })
  if (!response.ok) throw new Error("Failed to update todo")
  console.log(response)
  return response.json()
}

export const deleteTask = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) throw new Error("Failed to delete todo")
  console.log(response)
  return response.json()
}
