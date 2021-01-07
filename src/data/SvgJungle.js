function SvgJungle({darkState}) {
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
      viewBox="0 45 264.58 160"
    >
      <path
        style={{
          fontVariationSettings: "normal",
        }}
        fillRule="evenodd"
        fill={backGround}

        paintOrder="stroke markers fill"
        d="M0 0h264.583v264.583H0z"
      />
      <path
        d="M124.023 151.802s1.576 3.496 3.149 5.51a2.94 3.402 32.238 00.947 1.041 2.94 3.402 32.238 00.187.105c.076.05.151.097.225.133a.46.46 0 00.204.04 2.94 3.402 32.238 003.682-1.61 2.94 3.402 32.238 00-.237-4.076.493.493 0 00-.093-.132c-.2-.19-.505-.345-.872-.474l-.005-.001a2.94 3.402 32.238 00-.121-.039c-2.332-.754-7.066-.497-7.066-.497zM115.321 153.345s3.597-1.344 5.713-2.78a3.404 2.938 35.387 001.101-.876 3.404 2.938 35.387 00.118-.18c.055-.072.106-.144.147-.215a.457.457 0 00.053-.2 3.404 2.938 35.387 00-1.37-3.773 3.404 2.938 35.387 00-4.09-.029.483.483 0 00-.137.084c-.203.187-.378.481-.53.838l-.002.005a3.404 2.938 35.387 00-.046.118c-.906 2.274-.956 7.008-.956 7.008zM136.553 149.22s2.942-2.464 4.458-4.522a3.405 2.937 16.045 00.746-1.193 3.405 2.937 16.045 00.05-.208 1.9 1.9 0 00.067-.252.446.446 0 00-.017-.207 3.405 2.937 16.045 00-2.55-3.102 3.405 2.937 16.045 00-3.866 1.335.481.481 0 00-.1.125c-.13.243-.197.579-.222.966v.005a3.405 2.937 16.045 00-.005.127c-.095 2.445 1.438 6.925 1.438 6.925zM99.8 150.303s.414 3.812 1.284 6.214a2.938 3.404 50.312 00.578 1.283 2.938 3.404 50.312 00.145.157c.057.072.114.14.172.196.05.048.113.079.182.101a2.938 3.404 50.312 004-.39 2.938 3.404 50.312 001.04-3.95.475.475 0 00-.048-.154c-.13-.243-.373-.485-.681-.721l-.005-.004a2.938 3.404 50.312 00-.103-.074c-1.983-1.439-6.565-2.659-6.565-2.659zM92.678 146.357s3.62 1.28 6.165 1.538a3.4 2.94 75.537 001.408.035 3.4 2.94 75.537 00.206-.062 1.95 1.95 0 00.25-.07.459.459 0 00.171-.12 3.4 2.94 75.537 001.38-3.769 3.4 2.94 75.537 00-3.114-2.647.476.476 0 00-.16-.023c-.275.012-.598.125-.945.3l-.004.002a3.4 2.94 75.537 00-.112.061c-2.158 1.16-5.245 4.754-5.245 4.754z"
        fill={secondary.light}
        paintOrder="stroke markers fill"
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
        <path
          d="M73.107 133.83c29.261 23.82 54.22 24.409 83.91 3.458"
          fill="none"
          stroke={secondary.light}
          strokeWidth={2.461}
        />
        <text
          style={{
            lineHeight: 1.25,
            InkscapeFontSpecification: "'Fira Code, Bold'",
          }}
          x={53.158}
          y={139.288}
          transform="scale(1.0008 .9992)"
          fontWeight={700}
          fontSize={45.794}
          fontFamily="Fira Code"
          letterSpacing={-0.009}
          wordSpacing={0}
          fill={primary.light}
          strokeWidth={0.859}
        >
          <tspan x={53.158} y={139.288}>
            {"J"}
            <tspan
              dx="0.29790282 -1.680172 -1.4061012 -3.3126795 -4.0872269"
              letterSpacing={0}
            >
              {"UNGLE"}
            </tspan>
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SvgJungle