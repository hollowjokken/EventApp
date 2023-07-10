import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import EventsList from "./EventsList";
import EventFilters from "./EventFilters";
import { Box, Typography } from "@mui/material";

const EventApp = ({ events }) => {
  const [subscribedEvents, setSubscribedEvents] = useState(undefined);
  const [selectedCategory, setSelectedCategory] = useState("");

  const allCategories = Array.from(
    new Set(events.flatMap(({ categories }) => categories))
  );

  const handleEventsChange = (id) => {
    const selectedEvent = subscribedEvents.find((event) => event?.id === id);

    setSubscribedEvents(
      selectedEvent
        ? [...subscribedEvents.filter((event) => event.id !== id)]
        : [...subscribedEvents, events.find((event) => event?.id === id)]
    );
  };

  const filteredEvents = selectedCategory
    ? events.filter(({ categories }) => categories.includes(selectedCategory))
    : events;

  useEffect(() => {
    const storedEvents = window.localStorage.getItem("SUBSCRIBED_EVENTS");

    if (storedEvents) {
      setSubscribedEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    if (subscribedEvents) {
      window.localStorage.setItem(
        "SUBSCRIBED_EVENTS",
        JSON.stringify(subscribedEvents)
      );
    }
  }, [subscribedEvents]);

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Welcome
      </Typography>
      {subscribedEvents && subscribedEvents.length > 0 && (
        <>
          <Typography variant="body2">Your next event:</Typography>
          {subscribedEvents.map((event) => (
            <EventCard {...event} />
          ))}
        </>
      )}
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        Discover Upcoming Events:
      </Typography>
      <EventFilters
        categories={allCategories}
        onSelectCategory={setSelectedCategory}
      />
      <EventsList events={filteredEvents} onEventsChange={handleEventsChange} />
    </Box>
  );
};

export default EventApp;
