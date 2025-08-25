import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
const names = [
  '',
  'about',
  'team',
  'sponsor',
  'contact',
]
const dynamicRoutes = names.map(name => `/${name}`)
export default defineConfig({
  plugins: [react(),
    Sitemap({ hostname: 'https://utdshpe.org',
      dynamicRoutes,
     }),
  ],
})
