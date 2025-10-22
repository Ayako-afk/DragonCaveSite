const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const dragon = req.body;

  const filePath = path.resolve('./dragons.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  data.push(dragon);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.status(200).json({ message: 'Dragon added to pool!' });
}
