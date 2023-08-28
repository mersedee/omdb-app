import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-helvetica)']
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))',
        'gradient-poster': 'linear-gradient(180deg, rgba(17, 3, 34, 0.46) 0%, rgba(48, 10, 97, 0.57) 100%)'
      }
    }
  },
  plugins: []
}
export default config
