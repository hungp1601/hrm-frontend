import { join } from 'path'

const root = process.cwd()

/* Paths */
export const ROOT_DIR = root

export const SRC_DIR = join(ROOT_DIR, 'src')
export const STYLES_DIR = join(SRC_DIR, 'styles')
export const CONFIGS_DIR = join(SRC_DIR, 'configs')

/* Server */
export const NUXT_HOST = 'localhost' // localhost
export const NUXT_PORT = process.env.PORT || '4000'

/* URL */
export const BASE_URL = process.env.BASE_URL || (NUXT_HOST + ':' + NUXT_PORT)
export const BASE_API_URL = process.env.BASE_API_URL || 'http://localhost:3000' // 'https://ilya-blog-backend.herokuapp.com' // process.env.BASE_API_URL
export const FULL_API_URL = process.env.FULL_API_URL

console.log('BASE_API_URL', BASE_API_URL)

/* Other */
export const BROWSERS_SUPPORT = ['last 1 version', 'not dead', '> 0.2%']
export const NODE_SUPPORT = '9.0.0'
