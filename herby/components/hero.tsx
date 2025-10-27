import { NextLogo } from "./next-logo";
import { SupabaseLogo } from "./supabase-logo";

// export function Hero() {
//   return (
//     <div className="flex flex-col gap-16 items-center">
//       <div className="flex gap-8 justify-center items-center">
//         <a
//           href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <SupabaseLogo />
//         </a>
//         <span className="border-l rotate-45 h-6" />
//         <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
//           <NextLogo />
//         </a>
//       </div>
//       <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
//       <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
//         The fastest way to build apps with{" "}
//         <a
//           href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
//           target="_blank"
//           className="font-bold hover:underline"
//           rel="noreferrer"
//         >
//           Supabase
//         </a>{" "}
//         and{" "}
//         <a
//           href="https://nextjs.org/"
//           target="_blank"
//           className="font-bold hover:underline"
//           rel="noreferrer"
//         >
//           Next.js
//         </a>
//       </p>
//       <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
//     </div>
//   );
// }

export function Hero() {
  return (
    <main className=" bg-gradient-to-b from-[#f4f8f4] to-[#35df43] text-[#1b1f1a]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-5xl font-bold text-green-900 leading-tight max-w-2xl">
          The Delivery Network for{" "}
          <span className="text-green-700">All Things Cannabis</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-green-800/80">
          Herby connects dispensaries and drivers to move cannabis products
          safely, legally, and efficiently — all in one platform.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/signup/dispensary"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Join as a Dispensary
          </a>
          <a
            href="/signup/driver"
            className="border border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition"
          >
            Become a Driver
          </a>
        </div>
      </section>
      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20 bg-white">
        <h3 className="text-3xl font-bold text-center text-green-900 mb-12">
          How It Works
        </h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="p-6 border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-green-800 mb-3">
              1. Dispensaries Post Orders
            </h4>
            <p className="text-green-800/80">
              Dispensaries use Herby to list available deliveries — synced from
              their inventory via a third-party pos like Dutchie, or directly in
              the app.
            </p>
          </div>
          <div className="p-6 border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-green-800 mb-3">
              2. Drivers Accept & Pickup
            </h4>
            <p className="text-green-800/80">
              Verified drivers see nearby orders and accept them based on route,
              product type, and payout.
            </p>
          </div>
          <div className="p-6 border border-green-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <h4 className="text-xl font-semibold text-green-800 mb-3">
              3. Track & Deliver
            </h4>
            <p className="text-green-800/80">
              Dispensaries and drivers stay connected through real-time updates
              — from pickup to verified drop-off.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="signup"
        className="px-6 py-24 bg-gradient-to-r from-green-700 to-green-800 text-white text-center"
      >
        <h3 className="text-gray-300 text-4xl font-bold mb-6">
          Join the Herby Network
        </h3>
        <p className="text-green-100 max-w-xl mx-auto mb-10">
          Whether you're a dispensary looking for reliable delivery, or a driver
          ready to move with purpose — Herby connects you to opportunity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/signup/dispensary"
            className="bg-white text-green-800 font-semibold px-8 py-3 rounded-lg hover:bg-green-100 transition"
          >
            For Dispensaries
          </a>
          <a
            href="/signup/driver"
            className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition"
          >
            For Drivers
          </a>
        </div>
      </section>
    </main>
  );
}
