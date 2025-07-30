import { defineConfig, presetUno, presetTypography } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetTypography()],
  content: {
    pipeline: {
      include: ['index.html', 'src/**/*.{ts,tsx,html}'],
    },
  },
  theme: {
    colors: {
      primary: '#3B82F6', // Tailwind blue-500
    },
  },
  variants: [
    // Enables `dark:` variant
    matcher => matcher.startsWith('dark:') ? matcher.slice(5) : undefined,
  ],
})
