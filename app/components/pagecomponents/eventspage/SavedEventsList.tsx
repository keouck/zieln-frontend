"use client";
import { eventsData } from "@/app/data/eventsData";
import EventCard from "./EventCard";

const SavedEventsList = () => {
  return (
    <section className="component-px component-py border-t">
      <div className="flex">
        <h1 className="text-2xl md:text-4xl font-medium mb-4 lg:mb-8 border-b-2 border-black pb-2">
          Saved Events
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {eventsData.map((event: any, index: number) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default SavedEventsList;
