// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetTypography from '@unocss/preset-typography'

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
  ],
  content: {
    pipeline: {
      include: ['index.html', 'src/**/*.{ts,tsx,html}'],
    },
  },
})
