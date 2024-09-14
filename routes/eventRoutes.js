const express = require('express');
const Event = require('../models/event');

const router = express.Router();

// Create a new event
router.post('/', async (req, res) => {
    const { title, description, date, time, location } = req.body;

    try {
        const newEvent = new Event({
            title,
            description,
            date,
            time,
            location,
        });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// RSVP to an event
router.post('/:id/rsvp', async (req, res) => {
    const { id } = req.params;
    const { attendee } = req.body;

    try {
        const event = await Event.findById(id);
        if (!event) return res.status(404).json({ error: 'Event not found' });

        if (!event.attendees.includes(attendee)) {
            event.attendees.push(attendee);
            await event.save();
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Send reminders (for scheduled events)
router.post('/:id/reminder', async (req, res) => {
    const { id } = req.params;

    try {
        const event = await Event.findById(id);
        if (!event) return res.status(404).json({ error: 'Event not found' });

        // Example reminder logic - you'd implement more complex logic
        if (!event.reminders) {
            // Send reminder (implement your logic here)
            console.log(`Reminder sent for event: ${event.title}`);
            event.reminders = true;
            await event.save();
        }

        res.status(200).json({ message: 'Reminder sent' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get attendees of an event
router.get('/:id/attendees', async (req, res) => {
    const { id } = req.params;

    try {
        const event = await Event.findById(id);
        if (!event) return res.status(404).json({ error: 'Event not found' });

        res.status(200).json({ attendees: event.attendees });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
