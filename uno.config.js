import { presetIcons } from 'unocss'
import { defineConfig } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        my: FileSystemIconLoader('./src/my')
      }
    }),
  ],
})