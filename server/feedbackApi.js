// API nhỏ lưu thư góp ý vào data/feedback.json.
// Chạy kèm Vite (npm run dev / npm run preview) nên không cần server riêng.
import fs from 'node:fs/promises'
import path from 'node:path'

const DATA_FILE = path.resolve('data/feedback.json')
const MAX_BODY = 100_000

async function readAll() {
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, 'utf8'))
  } catch {
    return []
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
      if (body.length > MAX_BODY) {
        reject(new Error('Body too large'))
        req.destroy()
      }
    })
    req.on('end', () => resolve(body))
    req.on('error', reject)
  })
}

function send(res, status, data) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(data))
}

const clean = (value, max) => String(value ?? '').trim().slice(0, max)

async function handler(req, res) {
  if (req.method === 'GET') return send(res, 200, await readAll())

  if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed' })

  let input
  try {
    input = JSON.parse(await readBody(req))
  } catch {
    return send(res, 400, { error: 'Dữ liệu gửi lên không hợp lệ.' })
  }

  const message = clean(input.message, 3000)
  if (message.length < 10) {
    return send(res, 400, { error: 'Nội dung góp ý cần ít nhất 10 ký tự.' })
  }

  const rating = Number(input.rating)
  const entry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    name: clean(input.name, 80) || 'Ẩn danh',
    email: clean(input.email, 120),
    topic: clean(input.topic, 60) || 'Khác',
    rating: rating >= 1 && rating <= 5 ? Math.round(rating) : null,
    message,
    createdAt: new Date().toISOString(),
  }

  const all = await readAll()
  all.unshift(entry)
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(all, null, 2))
  send(res, 201, { ok: true, id: entry.id })
}

export default function feedbackApi() {
  const mount = (server) => {
    server.middlewares.use('/api/feedback', handler)
  }
  return {
    name: 'feedback-api',
    configureServer: mount,
    configurePreviewServer: mount,
  }
}
