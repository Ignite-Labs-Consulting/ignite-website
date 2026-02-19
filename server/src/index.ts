import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// POST /api/contact
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, company, service, message } = req.body

  // Validate required fields
  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ message: 'Name is required.' })
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ message: 'A valid email is required.' })
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ message: 'Message is required.' })
  }

  // Log the submission (in production, you'd send an email or store in a DB)
  console.log('📬 New contact form submission:')
  console.log(`  Name:    ${name.trim()}`)
  console.log(`  Email:   ${email.trim()}`)
  console.log(`  Company: ${company || '(not provided)'}`)
  console.log(`  Service: ${service || '(not specified)'}`)
  console.log(`  Message: ${message.trim().slice(0, 100)}${message.length > 100 ? '…' : ''}`)

  res.status(200).json({ message: 'Message received. We\'ll be in touch within 24 hours.' })
})

// Serve React build in production
const clientDist = path.join(__dirname, '../../client/dist')
app.use(express.static(clientDist))

app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(clientDist, 'index.html'))
})

// Error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`🚀 Ignite Labs server running on http://localhost:${PORT}`)
})
