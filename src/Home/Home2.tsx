import { Meteors } from "./meteors";
import { motion } from "framer-motion";
import { Button } from "./moving-border";
import { LampContainer } from "./lamp";
import CTA from "./CTA";
const items = [
  { text: "Increase table bookings & sales" },
  { text: "Capture revenue in advance & improve cashflow" },
  { text: "Elevate your guests' experience" },
  { text: "Reduce admin, calls, & messaging" },
  { text: "Prevent missed or double-bookings" },
  { text: "Reduce no-shows and late arrivals" },
  { text: "Increase total spend & repeat bookings" },
  { text: "Eliminate wasted effort & time" },
  {
    text: "Boost organisation & control",
  },
  { text: "Increase loyalty and repeat business" },
];

const mySvgIcon = (
  <svg
    className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
    stroke="currentColor"
    viewBox="0 0 52 52"
  >
    <polygon
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      points="29 13 14 29 25 29 23 39 38 23 27 23"
    />
  </svg>
);
export default function Home2() {
  return (
    <div className="pb-16">
      <div>
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Table booking & bottle ordering system for clubs
              </h1>

              <p className="mx-auto mt-4 text-xl max-w-xl sm:text-xl/relaxed">
                Say goodbye to WhatsApp chats and taking payment over the phone.
                Increase table bookings, bottle sales and supercharge your
                nightclub's efficiency and guest experience.
              </p>
              <div className="mt-8">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Borders are cool
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Deliver a complete VIP experience from booking to booth.
            </h2>

            <p className="text-base text-gray-700 md:text-lg">
              An advanced table booking system can streamline your business,
              boost profits, free up staff time, and decrease operational costs.{" "}
            </p>
          </div>
        </div>
        <div className="max-w-lg space-y-3 sm:mx-auto flex flex-col items-center lg:max-w-xl">
          {items.map((item, index) => (
            <div
              key={index}
              style={{ width: "90%" }}
              className="flex items-center p-2  border rounded shadow  "
            >
              <div className="mr-2 text-gray-800">{mySvgIcon}</div>
              <span className="text-gray-800  ">{item.text}</span>
            </div>
          ))}
        </div>
        <CTA />
      </div>
    </div>
  );
}
