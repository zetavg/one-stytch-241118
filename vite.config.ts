import type { UserConfig } from 'vite'
import { one } from 'one/vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

export default {
  ssr: {
    noExternal: true,
  },
  plugins: [
    one({
      web: {
        deploy: 'vercel',
        defaultRenderMode: 'ssg',
      },

      // NOTE: Uncomment this to fix buildtime error
      // deps: {
      //   "@stytch/react-native": {
      //     '**/*.js':['flow', 'jsx']
      //   }
      // },

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
