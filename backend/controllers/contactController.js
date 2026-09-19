import Contact from '../models/Contact.js';
import { Resend } from 'resend';

export const submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            error: 'Please provide all fields'
        });
    }

    try {
        // Save message to MongoDB
        const contact = await Contact.create({
            name,
            email,
            message
        });

        // Resend email client
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Send notification email
        const { data, error } = await resend.emails.send({
            from: 'Portfolio <[EMAIL_ADDRESS]>',
            to: [process.env.EMAIL_USER],
            subject: `New Portfolio Message from ${name}`,
            replyTo: email,
            html: `
                <h2>New Portfolio Contact Message</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        if (error) {
            console.error('Resend Error:', error);

            return res.status(500).json({
                error: 'Message saved, but email notification failed'
            });
        }

        res.status(201).json({
            success: true,
            data: contact,
            message: 'Message sent successfully'
        });

    } catch (error) {
        console.error('Error in submitContactForm:', error);

        res.status(500).json({
            error: 'Failed to send message'
        });
    }
};