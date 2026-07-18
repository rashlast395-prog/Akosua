export const sendContact = async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ ok: false, message: 'All fields are required.' });
  res.json({ ok: true, message: 'Message received. I will get back to you shortly.' });
};
