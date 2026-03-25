export function getDateLabel(dateString) {
  const taskDate = new Date(dateString);
  
  const today = new Date();
  
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1); // Subtract 1 day from today

  // Compare the date strings
  if (taskDate.toDateString() === today.toDateString()) {
    return "Today";
  } else if (taskDate.toDateString() === yesterday.toDateString()) {
    return "Yesterday";
  } else {
    // For older dates, return a readable format like "3/15/2026"
    return taskDate.toLocaleDateString(); 
  }
}

export function getTodayTotalTasksCount(tasksArray) {
  // 1. Get today's date string (local time)
  const todayString = new Date().toDateString();

  // 2. Filter for tasks that are both completed AND have today's date
  const todaysTotalTasks = tasksArray.filter(task => {
    const taskDateString = new Date(task.date).toDateString();
    return taskDateString === todayString;
  });

  // 3. Return the count
  return todaysTotalTasks.length;
}

export function getTodayCompletedCount(tasksArray) {
  // 1. Get today's date string (local time)
  const todayString = new Date().toDateString();

  // 2. Filter for tasks that are both completed AND have today's date
  const todaysCompletedTasks = tasksArray.filter(task => {
    const taskDateString = new Date(task.date).toDateString();
    return task.completed === true && taskDateString === todayString;
  });

  // 3. Return the count
  return todaysCompletedTasks.length;
}

export function getTotalPendingTasks(tasksArray) {
  // 2. Filter for tasks that are both completed AND have today's date
  const pendingTasks = tasksArray.filter(task => {
    return task.completed === false;
  });

  // 3. Return the count
  return pendingTasks.length;
}

export function getAllTotalCompletedTasks(tasksArray) {
  // 2. Filter for tasks that are both completed AND have today's date
  const completedTasks = tasksArray.filter(task => {
    return task.completed === true;
  });

  // 3. Return the count
  return completedTasks.length;
}