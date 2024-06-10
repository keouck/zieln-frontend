import { PrimaryButton, SecondaryButton } from "../../globalcomponents/Buttons";

export default function Banner() {
  return (
    <section
      className="relative bg-cover bg-center text-white h-60 lg:h-80 overflow-hidden flex items-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative max-w-4xl mx-auto text-center component-px component-py">
        <h1 className="text-2xl lg:text-5xl font-bold mb-2 md:mb-4">Upcoming Events</h1>
        <p className="md:text-xl mb-3 md:mb-6">
          Stay updated with our latest events and activities. Join us and be a
          part of our vibrant community!
        </p>
        <SecondaryButton buttonName="+ Add Event" />
      </div>
    </section>
  );
}
