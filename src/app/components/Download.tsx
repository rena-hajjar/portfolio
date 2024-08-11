export default function Download({color}: {color: string}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="35"
        viewBox="0 0 45 35"
        fill="none"
      >
        <g clip-path="url(#clip0_8_62)">
          <path
            d="M12.8571 16.25L22.5 23.75L32.1428 16.25"
            stroke={color}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5 1.25V23.75"
            stroke={color}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.25 33.75H33.75"
            stroke={color}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_8_62">
            <rect width="45" height="35" fill={color} />
          </clipPath>
        </defs>
      </svg>
    );
}