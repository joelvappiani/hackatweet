// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('../../models/connection')


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
