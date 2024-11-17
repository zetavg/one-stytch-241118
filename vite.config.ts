import type { UserConfig } from 'vite'
import { one } from 'one/vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

export default {
  ssr: {
    noExternal: true,
  },
  build: {
    rollupOptions: {
      external: ['expo-linear-gradient']
    }
  },
  plugins: [
    one({
      web: {
        deploy: 'vercel',
        defaultRenderMode: 'ssg',
      },

      app: {
        key: 'pygmy',
      },
    }),

    tamaguiPlugin({
      optimize: true,
      components: ['tamagui'],
      config: './config/tamagui.config.ts',
      outputCSS: './code/styles/tamagui.css',
    }),
  ],
} satisfies UserConfig
