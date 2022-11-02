const SuccessIconSvg = () => {
  return (
    <svg
      width="122"
      height="122"
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_510_99228)">
        <circle cx="61" cy="61" r="37" fill="#43AD6D" fillOpacity="0.5" />
      </g>
      <g filter="url(#filter1_dii_510_99228)">
        <circle cx="61" cy="49" r="37" fill="url(#paint0_radial_510_99228)" />
      </g>
      <path d="M45 46.1538L58.5 60L78 40" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <defs>
        <filter
          id="filter0_f_510_99228"
          x="0"
          y="0"
          width="122"
          height="122"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_510_99228" />
        </filter>
        <filter
          id="filter1_dii_510_99228"
          x="19"
          y="6"
          width="86"
          height="88"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0666667 0 0 0 0 0.0862745 0 0 0 0 0.00784314 0 0 0 0.16 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_510_99228" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_510_99228"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.791667 0 0 0 0 1 0 0 0 0 0.875 0 0 0 0.32 0"
          />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_510_99228" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-3" dy="-6" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_510_99228"
            result="effect3_innerShadow_510_99228"
          />
        </filter>
        <radialGradient
          id="paint0_radial_510_99228"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(50 33) rotate(62.0764) scale(56.5884 45.1467)"
        >
          <stop stopColor="#54C782" />
          <stop offset="0.75922" stopColor="#46B170" />
          <stop offset="1" stopColor="#43AD6D" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default SuccessIconSvg;
