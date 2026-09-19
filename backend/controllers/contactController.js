import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

export const submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all fields' });
    }

    try {
        // Save to DB
        const contact = await Contact.create({ name, email, message });

        // Send Email notification
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `New Portfolio Message from ${name}`,
            text: `You received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ success: true, data: contact, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error in submitContactForm:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
};
