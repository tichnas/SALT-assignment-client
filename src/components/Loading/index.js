function Loading() {
  const size = 50;
  const strokeWidth = 4;

  const center = size / 2;
  const radius = center - strokeWidth / 2;

  return (
    <div className='loading'>
      <svg width={size} height={size}>
        <circle
          className='loading__circle'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
}

export default Loading;
