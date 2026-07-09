const events = [];

exports.createEvent = (req, res) => {
    const event = {
        id: Date.now(),
        ...req.body,
        receivedAt: new Date().toISOString()
    };

    events.push(event);

    console.log("📩 Event Received");
    console.log(event);

    res.status(201).json({
        success: true,
        event
    });
};

exports.getEvents = (req, res) => {
    res.status(200).json({
        success: true,
        total: events.length,
        events
    });
};
