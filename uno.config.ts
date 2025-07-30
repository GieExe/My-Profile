//C:\Users\Giebert\Desktop\Tito\my-portfolio\uno.config.ts
import { defineConfig, presetUno, presetTypography } from 'unocss'

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
