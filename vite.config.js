import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
const names = [
  '',
  'About',
  'Team',
  'Sponsor',
  'Contact',
]
const dynamicRoutes = names.map(name => `/${name}`)
export default defineConfig({
  plugins: [react(),
    Sitemap({ hostname: 'https://example.com',
      dynamicRoutes,
     }),
  ],
})
