const Contact = require('../models/Contact');

// @desc    Create new contact message
// @route   POST /api/contact
// @access  Public
exports.createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error sending message',
      error: error.message
    });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Private
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving messages',
      error: error.message
    });
  }
};
