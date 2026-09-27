// Vercel Serverless Function: /api/feedback
// Lưu thư góp ý vào Upstash Redis (kết nối qua Vercel → Storage → Upstash for Redis).
import { buildEntry } from '../server/feedback.js'

const KEY = 'feedback'
const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN

async function redis(command) {
  const res = await fetch(REDIS_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
    body: JSON.stringify(command),
  })
  const data = await res.json()
  if (!res.ok || data.error) throw new Error(data.error || `Redis HTTP ${res.status}`)
  return data.result
}

const notConfigured = () =>
  Response.json({ error: 'Máy chủ chưa được kết nối nơi lưu thư góp ý.' }, { status: 503 })

export async function GET() {
  if (!REDIS_URL || !REDIS_TOKEN) return notConfigured()
  const items = await redis(['LRANGE', KEY, '0', '-1'])
  return Response.json(items.map((item) => JSON.parse(item)))
}

export async function POST(request) {
  if (!REDIS_URL || !REDIS_TOKEN) return notConfigured()

  let input
  try {
    input = await request.json()
  } catch {
    return Response.json({ error: 'Dữ liệu gửi lên không hợp lệ.' }, { status: 400 })
  }

  const { entry, error } = buildEntry(input)
  if (error) return Response.json({ error }, { status: 400 })

  await redis(['LPUSH', KEY, JSON.stringify(entry)])
  return Response.json({ ok: true, id: entry.id }, { status: 201 })
}
