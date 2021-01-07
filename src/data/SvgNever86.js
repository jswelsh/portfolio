import * as React from "react"

function SvgNever86({darkState}) {
  const backGround = darkState ? "#303030" : "#ffffff"
  const primary = {
    light: darkState ? '#ce93d8' : '#03a9f4ff',
    dark: darkState ? '#8e24aa': '#2962ffff'
  }
  const secondary = {
    light: darkState ? '#03a9f4ff' : '#ce93d8',
    dark: darkState ? '#2962ffff' : '#8e24aa'
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 65 264.58 160"
    >
      <path
        style={{
          fontVariationSettings: "normal",
        }}
        fill={backGround}
        fillRule="evenodd"
        paintOrder="stroke markers fill"
        d="M264.583 0v264.583H0V0z"
      />
      <path
        d="M209.636 171.187c1.01-2.003 1.015-4.022.013-4.527l-1.66-.836a2.01 2.01 0 00-1.049-1.324l-4.803-2.42a2.01 2.01 0 00-1.688-.052l-30.411-15.314a13.138 20.243 26.728 00-5.213-16.658 13.138 20.243 26.728 00-.294-.141l.002-.005-82.94-41.765-2.01-1.012-5.693-2.867c-2.003-1.009-5.24 1.405-7.258 5.411l-10.925 21.697c-2.018 4.007-2.03 8.044-.026 9.053l5.694 2.867 2.009 1.012 82.94 41.765.003-.005a13.138 20.243 26.728 00.288.152 13.138 20.243 26.728 0016.487-5.733l30.411 15.314a2.009 2.009 0 001.048 1.324l4.803 2.42a2.009 2.009 0 001.689.052l1.66.837c1.002.504 2.62-.703 3.63-2.706z"
        fill={primary.dark}
      />
      <text
        style={{
          lineHeight: 1.25,
          InkscapeFontSpecification: "'Fira Code, Bold'",
        }}
        x={103.021}
        y={73.602}
        transform="matrix(.89354 .45119 -.4503 .89177 0 0)"
        fontWeight={700}
        fontSize={35.027}
        fontFamily="Fira Code"
        letterSpacing={0}
        wordSpacing={0}
        fill={secondary.light}
        strokeWidth={1.314}
      >
        <tspan x={103.021} y={73.602}>
          {"!==86"}
        </tspan>
      </text>
      <circle
        cx={204.32}
        cy={196.32}
        r={4.432}
        fill={secondary.light}
        paintOrder="stroke markers fill"
      />
      <path
        d="M199.91 196.36c-.29-4.503 4.401-16.321 4.401-16.321s4.963 11.926 4.435 16.22c-.36 2.927-8.648 3.045-8.837.1z"
        fill={secondary.light}
      />
      <g>
        <rect
          style={{
            fontVariationSettings: "normal",
          }}
          width={39.688}
          height={264.583}
          ry={0}
          fill={primary.dark}
          fillRule="evenodd"
          paintOrder="stroke markers fill"
        />
        <rect
          style={{
            fontVariationSettings: "normal",
          }}
          width={39.688}
          height={264.583}
          x={224.896}
          ry={0}
          fill={primary.dark}

          fillRule="evenodd"
          paintOrder="stroke markers fill"
        />
      </g>
    </svg>
  );
}

export default SvgNever86
