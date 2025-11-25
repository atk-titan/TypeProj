export default function ArcMaskComponent({
  className = "h-20 ",
  progress = 60,
}) {
  return (
    <div className="relative w-fit">
      {/* SVG Arc with Gradient */}
      <svg
        className={className}
        viewBox="0 0 246 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      > 
        {/* Background arc (optional - for contrast) */}
        <path
          d="M20.2159 123.671C17.2159 93 45.0129 20 122.716 20C200.419 20 227.216 91 225.216 123.671"
          stroke="#1f1f1f"
          strokeWidth="35"
          strokeLinecap="round"
          opacity="0.2"
        />
        
        {/* Animated gradient arc */}
        <path
          d="M20.2159 123.671C17.2159 93 45.0129 20 122.716 20C200.419 20 227.216 91 225.216 123.671"
          stroke="#FF3B30"
          strokeWidth="35"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset={100 - progress}
          style={{
            transition: 'stroke-dashoffset 0.5s ease-in-out'
          }}
        />
      </svg>
      
      <h1 className="absolute bottom-0 w-full pb-2 text-center text-2xl font-semibold text-gray-900">
        {progress}%
      </h1>
    </div>
  );
}