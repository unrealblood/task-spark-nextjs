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