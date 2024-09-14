// Store and manage events
let events = JSON.parse(localStorage.getItem("events")) || [];

// Event creation
document.getElementById("eventForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const description = document.getElementById("description").value;
  const attendees = document.getElementById("attendees").value.split(",");

  const newEvent = { title, date, time, description, attendees, id: Date.now() };
  events.push(newEvent);
  localStorage.setItem("events", JSON.stringify(events));

  displayEvents();
  document.getElementById("eventForm").reset();
});

// Display Events
function displayEvents() {
  const eventList = document.getElementById("eventList");
  eventList.innerHTML = "";

  events.forEach((event, index) => {
    const eventItem = document.createElement("li");

    eventItem.innerHTML = `
      <h3>${event.title} (${event.date} at ${event.time})</h3>
      <p>${event.description}</p>
      <p>Attendees: ${event.attendees.join(", ")}</p>
      <button onclick="deleteEvent(${index})">Delete</button>
    `;
    eventList.appendChild(eventItem);
  });
}

// Delete event
function deleteEvent(index) {
  events.splice(index, 1);
  localStorage.setItem("events", JSON.stringify(events));
  displayEvents();
}

// Send reminders (mock functionality)
document.getElementById("sendReminders").addEventListener("click", function() {
  events.forEach(event => {
    alert(`Reminder sent to: ${event.attendees.join(", ")} for event: ${event.title}`);
  });
});

// RSVP Function
function rsvpEvent(response, eventId) {
    // Get the RSVP status element for the specific event
    const rsvpStatusElement = document.getElementById(`rsvp-status-${eventId}`);
    
    // Update RSVP status based on user input
    if (response === 'yes') {
        rsvpStatusElement.querySelector('span').textContent = 'Yes';
        alert('Thank you for RSVPing Yes!');
    } else if (response === 'no') {
        rsvpStatusElement.querySelector('span').textContent = 'No';
        alert('Sorry to hear you cannot attend.');
    }

    // Optionally, store RSVP in localStorage or send to backend here
    // Example:
    // localStorage.setItem(`rsvp_event_${eventId}`, response);
}

// Object to store event data
const events = {
    1: {
        title: "Event Title 1",
        attendees: []
    }
    // Add more events as needed
};

// Function to handle RSVP
function rsvpEvent(response, eventId) {
    const event = events[eventId];
    const attendeesList = document.getElementById(`attendees-list-${eventId}`);
    
    if (!event) {
        alert("Event not found.");
        return;
    }

    // Check if the user is already in the list
    if (event.attendees.includes(response)) {
        alert(`You have already RSVPed "${response}" to this event.`);
        return;
    }

    // Add the response to the event's attendees
    event.attendees.push(response);
    
    // Display the attendee in the list
    const attendeeItem = document.createElement('li');
    attendeeItem.textContent = `Attendee: ${response}`;
    attendeesList.appendChild(attendeeItem);

    // Show notification
    showNotification(`You have RSVP'd "${response}" for the event: ${event.title}`);
}

// Function to show notifications
function showNotification(message, duration = 5000) {
    const notificationContainer = document.getElementById('notifications');
    
    // Create a new notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    // Append the notification to the container
    notificationContainer.appendChild(notification);

    // Remove notification after a specified duration
    setTimeout(() => {
        notification.remove();
    }, duration);
}

document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const title = document.getElementById('event-title').value;
    const description = document.getElementById('event-description').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const location = document.getElementById('event-location').value;

    // Create new event item
    const eventItem = document.createElement('li');
    eventItem.classList.add('event-card');
    eventItem.innerHTML = `
        <h3>${title}</h3>
        <p>Description: ${description}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Location: ${location}</p>
        <!-- Reminder and RSVP sections -->
        <div class="reminder-section">
            <button class="reminder-btn" onclick="setReminder('${date}T${time}', ${Date.now()})">Set Reminder</button>
        </div>
        <p id="reminder-status-${Date.now()}">Reminder: <span>Not Set</span></p>
        <div class="rsvp-section">
            <button class="rsvp-btn" onclick="rsvpEvent('yes', ${Date.now()})">RSVP Yes</button>
            <button class="rsvp-btn" onclick="rsvpEvent('no', ${Date.now()})">RSVP No</button>
        </div>
        <p id="rsvp-status-${Date.now()}">RSVP Status: <span>Pending</span></p>
    `;

    // Append the new event to the event list
    document.getElementById('event-list').appendChild(eventItem);

    // Clear the form fields
    document.getElementById('event-form').reset();
});

// Object to store event data
const events = {
    1: {
        title: "Event Title 1",
        attendees: []
    }
    // Add more events as needed
};

// Function to handle RSVP
function rsvpEvent(response, eventId) {
    const event = events[eventId];
    const attendeesList = document.getElementById(`attendees-list-${eventId}`);
    
    if (!event) {
        alert("Event not found.");
        return;
    }

    // Check if the user is already in the list
    if (event.attendees.includes(response)) {
        alert(`You have already RSVPed "${response}" to this event.`);
        return;
    }

    // Add the response to the event's attendees
    event.attendees.push(response);
    
    // Display the attendee in the list
    const attendeeItem = document.createElement('li');
    attendeeItem.textContent = `Attendee: ${response}`;
    attendeesList.appendChild(attendeeItem);

    // Show notification
    showNotification(`You have RSVP'd "${response}" for the event: ${event.title}`);
}

// Function to show notifications
function showNotification(message, duration = 5000) {
    const notificationContainer = document.getElementById('notifications');
    
    // Create a new notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    // Append the notification to the container
    notificationContainer.appendChild(notification);

    // Remove notification after a specified duration
    setTimeout(() => {
        notification.remove();
    }, duration);
}

// Initialize
displayEvents();
