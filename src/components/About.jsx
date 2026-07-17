import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#176B49]">
            About Getvia
          </span>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#17201C] md:text-6xl">
            Making local discovery clearer and more meaningful.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-lg leading-8 text-[#667069]">
            Getvia is a business discovery ecosystem that helps people
            understand and connect with businesses and professionals
            through clear and complete digital profiles.
          </p>

          <p className="text-lg leading-8 text-[#667069]">
            Businesses can showcase services, products, offers,
            images, opening hours, contact details and customer
            experiences in one organised place.
          </p>

          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <article className="rounded-3xl bg-[#F7F8F3] p-6">
              <h3 className="text-lg font-extrabold text-[#0F5132]">
                Our mission
              </h3>

              <p className="mt-3 text-[#667069]">
                Make useful businesses easier to discover, understand
                and contact.
              </p>
            </article>

            <article className="rounded-3xl bg-[#F7F8F3] p-6">
              <h3 className="text-lg font-extrabold text-[#0F5132]">
                Our vision
              </h3>

              <p className="mt-3 text-[#667069]">
                Build a trusted ecosystem for meaningful local
                connections and growth.
              </p>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
