export const fetchCompletedTodos = async () => {
  try {
    const response = await fetch("/data/completedTodos.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке выполненных тудушек:", error);
    return [];
  }
};

