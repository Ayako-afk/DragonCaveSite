const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  const filePath = path.resolve('./dragons.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const shuffled = data.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 200);

  res.status(200).json(selected);
}
