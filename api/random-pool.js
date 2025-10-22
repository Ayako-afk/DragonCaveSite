import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('dragons')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  const shuffled = data.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 200);

  res.status(200).json(selected);
}
