/* eslint-disable @next/next/no-img-element */
export default function Introduction() {
  return (
    <section className="component-px component-py ">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h1 className="component-heading mb-4">About Zieln</h1>
          <p className="md:text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam
            at dicta totam numquam? Dolore veritatis vitae porro cupiditate
            consequuntur, delectus asperiores, nam dignissimos amet corporis
            assumenda odio voluptates recusandae. Quam sint non assumenda eaque
            nihil! Explicabo qui, ullam, consequuntur officia reprehenderit
            odio, iure sunt repellat nisi quaerat exercitationem sequi.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1661277604122-4324e519402a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Event"
            className="w-full rounded-ss-[80px] rounded-ee-[80px]"
          />
        </div>
      </div>
    </section>
  );
}
