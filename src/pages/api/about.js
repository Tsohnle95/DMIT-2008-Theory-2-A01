import profile from '@/data/profile.json';
export default function handler(req, res) {
  // Respond with a 200 ok and send the about object onlny
  res.status(200).json(profile.about);
}