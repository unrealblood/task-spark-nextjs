export default async function SvgProgressRing({ completedTasks, totalTasks }) {
  const percentage = totalTasks === 0 
  ? 0 
  : Math.round((completedTasks / totalTasks) * 100);
  
  // SVG Math setup
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  // This calculates how much of the stroke to hide based on the percentage
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg border-gray-200 border w-100 h-80">
      <h2 className="font-bold mb-2 text-xl">Daily Completion</h2>
      
      <div className="relative flex items-center justify-center w-50 h-50">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Track Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#e5e7eb" // Light Gray
            strokeWidth="10"
          />
          {/* Foreground Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#3b82f6" // Blue
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round" // Gives the progress bar rounded edges
          />
        </svg>

        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-700">{percentage}%</span>
        </div>
      </div>

      <p className="mt-4 text-lg font-bold text-gray-500">
        {completedTasks} of {totalTasks} tasks finished
      </p>
    </div>
  );
}