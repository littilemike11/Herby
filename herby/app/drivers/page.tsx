// import Link from "next/link";
// export default function DriversPage() {
//   return (
//     <>
//       <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-green-50 to-white text-green-900">
//         {/* ─── Navbar ─────────────────────────────────────────── */}
//         <nav className="w-full flex justify-center border-b border-green-100 bg-white/60 backdrop-blur-sm h-16 sticky top-0 z-50">
//           <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
//             <div className="flex gap-5 items-center text-2xl font-bold text-green-800">
//               <Link href="/">Herby</Link>
//             </div>
//             <nav className="flex gap-6 text-sm font-medium text-green-800">
//               {/* <Link href="/drivers" className="hover:text-green-600 transition">
//               Drivers
//             </Link>
//             <Link
//               href="/dispensaries"
//               className="hover:text-green-600 transition"
//             >
//               Dispensaries
//             </Link>
//             <Link href="/about" className="hover:text-green-600 transition">
//               About
//             </Link> */}
//               <Link
//                 href="/signup"
//                 className="inline-block bg-green-800 text-white hover:bg-green-100 hover:text-green-700 font-semibold px-6 py-3 rounded-full shadow-md transition"
//               >
//                 Get Started
//               </Link>
//             </nav>
//           </div>
//         </nav>
//         {/* ─── Hero Section ───────────────────────────────────── */}
//         {/* be a delievery driver using herby */}
//         <p>
//           Delivering with Herby is a great alternative to traditional part-time
//           delivery driver jobs or other part-time employment, temporary jobs, or
//           seasonal work. Or maybe you drive with Herby or are an Herby customer
//           and want to supplement your income. See how becoming a cannabis
//           deliverer on the Herby platform can help you meet your goals.
//         </p>
//         {/* ─── Why Herby Section ──────────────────────────────── */}
//         {/* how it works */}
//         <p>
//           sign up, choose an order, assign yourself, pick up / deliver adn eary
//           money
//         </p>
//         {/* what you need / requirments */}
//         <p>age, vehicle car / scooter or bicycle, documentation</p>
//         {/* ─── FAQ Section ────────────────────────────────────── */}
//         {/* ─── Signup CTA Section ─────────────────────────────── */}
//       </main>
//     </>
//   );
// }
import Link from "next/link";
import {
  Truck,
  DollarSign,
  Clock,
  ShieldCheck,
  CheckCircle,
  FileText,
} from "lucide-react";
import Image from "next/image";
import hundred_bill from "@/app/images/hundred_bill.jpg";
import { DriverSignUpForm } from "@/components/drivers/driver-sign-up-form";
export default function DriversPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-green-50 to-white text-green-900">
      {/* ─── Navbar ─────────────────────────────────────────── */}
      <nav className="w-full flex justify-center border-b border-green-100 bg-white/60 backdrop-blur-sm h-16 sticky top-0 z-50">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center text-2xl font-bold text-green-800">
            <Link href="/">Herby</Link>
          </div>
          <nav className="flex gap-6 items-center text-sm font-medium text-green-800">
            <Link
              href="/dispensaries"
              className="hover:text-green-600 transition"
            >
              Dispensaries
            </Link>
            <Link href="#why-us" className="hover:text-green-600 transition">
              Why Us
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-green-600 transition"
            >
              How it Works
            </Link>
            <Link
              href="#requirements"
              className="hover:text-green-600 transition"
            >
              Requirements
            </Link>

            <Link href="#faq" className="hover:text-green-600 transition">
              FAQ
            </Link>
            <Link
              href="/signup"
              className="inline-block bg-green-800 text-white hover:bg-green-100 hover:text-green-700 font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </nav>

      {/* ─── Hero Section ───────────────────────────────────── */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10 py-24 px-5 text-center md:text-left">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight">
            Drive with <span className="text-green-700">Herby</span>
          </h1>
          <p className="text-lg text-green-700">
            Deliver cannabis products from licensed dispensaries directly to
            customers. Earn flexibly, work safely, and be part of a growing,
            compliant delivery network.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Start Earning Now
          </Link>
        </div>

        <div className="flex-1">
          <Image
            src={hundred_bill}
            alt="hundred dollar bill"
            className="rounded-2xl shadow-lg w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* ─── Why Drive with Herby ───────────────────────────── */}
      <section id="#why-us" className="w-full bg-green-100 py-24">
        <div className="max-w-5xl mx-auto px-5 text-center space-y-12">
          <h2 className="text-3xl font-bold text-green-900">
            Why Drive with Herby?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-green-800">
              <DollarSign className="w-10 h-10 mb-4 text-green-700" />
              <h3 className="font-semibold text-lg mb-2">Earn Flexibly</h3>
              <p>Work when you want. Take deliveries that fit your schedule.</p>
            </div>

            <div className="flex flex-col items-center text-green-800">
              <Clock className="w-10 h-10 mb-4 text-green-700" />
              <h3 className="font-semibold text-lg mb-2">Fast Payments</h3>
              <p>
                Get paid quickly for every delivery — no waiting till payday.
              </p>
            </div>

            <div className="flex flex-col items-center text-green-800">
              <ShieldCheck className="w-10 h-10 mb-4 text-green-700" />
              <h3 className="font-semibold text-lg mb-2">Safe & Verified</h3>
              <p>
                All dispensaries and customers are verified for compliant,
                secure deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ───────────────────────────────────── */}
      <section
        id="how-it-works"
        className="w-full max-w-5xl py-24 px-5 text-center space-y-12"
      >
        <h2 className="text-3xl font-bold text-green-900">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-green-800">
            <FileText className="w-10 h-10 mb-4 text-green-700" />
            <h3 className="font-semibold text-lg mb-2">1. Sign Up</h3>
            <p>
              Complete your driver profile and submit required documents for
              verification.
            </p>
          </div>
          <div className="flex flex-col items-center text-green-800">
            <Truck className="w-10 h-10 mb-4 text-green-700" />
            <h3 className="font-semibold text-lg mb-2">2. Pick Orders</h3>
            <p>
              Browse available delivery requests from local dispensaries and
              assign yourself.
            </p>
          </div>
          <div className="flex flex-col items-center text-green-800">
            <CheckCircle className="w-10 h-10 mb-4 text-green-700" />
            <h3 className="font-semibold text-lg mb-2">3. Deliver & Earn</h3>
            <p>
              Deliver products safely, update statuses in the app, and earn
              money fast.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Requirements ───────────────────────────────────── */}
      <section id="requirements" className="w-full bg-green-50 py-24 px-5">
        <div className="max-w-5xl mx-auto  space-y-10">
          <h2 className="text-3xl font-bold text-center text-green-900">
            Driver Requirements
          </h2>
          <ul className="max-w-lg mx-auto space-y-4 text-green-800">
            <li>✅ Must be 21 years or older</li>
            <li>✅ Valid driver’s license & insurance</li>
            <li>✅ Vehicle (car, scooter, or bike depending on region)</li>
            <li>✅ Smartphone with Herby Driver App</li>
            <li>✅ Clean driving record & background check</li>
          </ul>
        </div>
      </section>

      {/* ─── FAQ Section ────────────────────────────────────── */}
      <section id="faq" className="w-full max-w-5xl py-24 px-5">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-900">
          FAQs
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto text-green-800">
          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How do I get paid?
            </summary>
            <p className="mt-3 text-sm">
              Drivers receive direct deposits for completed deliveries. You can
              track earnings in your dashboard.
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Can I choose my own schedule?
            </summary>
            <p className="mt-3 text-sm">
              Yes! Herby gives you full flexibility to pick up deliveries when
              it fits your time.
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How long does it take to start workin with Herby?
            </summary>
            <p className="mt-3 text-sm">
              Our signup process takes just a few minutes, and most Drivers can
              start earning within days.
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              How does delivering with Herby work?
            </summary>
            <p className="mt-3 text-sm">
              Millions of people order weed and other cannibus goods through a
              Dispensary. When customers place an order, we offer the deliveries
              to Drivers, who earn money by picking up and delivering them.
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              What materials do I need to be a Herby driver?
            </summary>
            <p className="mt-3 text-sm">
              To earn money, all you need is a smartphone and a mode of
              transportation, such as a car, bike, scooter, or motorcycle. We'll
              take care of everything else!
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Are there car requirements for driving with Herby?
            </summary>
            <p className="mt-3 text-sm">
              Nope. You can use any car to drive, deliver, and earn. You just
              need a valid driver's license and insurance.
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Why should I be a Herby driver?
            </summary>
            <p className="mt-3 text-sm">
              You're the boss. As an independent contractor, you have the
              freedom to drive when it works for your schedule. You are in
              control of how many hours you want to driver per day or per week.
              It's a great alternative to seasonal, temporary, and part-time
              work.
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Do I need any experience to be a Herby driver?
            </summary>
            <p className="mt-3 text-sm">
              Nope! You don't need any prior work experience. But if you do have
              previous experience in the rideshare, food, or courier service
              industries, delivering with Herby is a great way to earn money.
            </p>
            <p className="mt-3 text-sm">
              We welcome drivers and bikers from other gig economy or commercial
              services such as UberEats, Postmates, Lyft, Caviar, Eat24, Google
              Express, GrubHub, AmazonFresh, Instacart, Amazon, Uber, Waitr, and
              Bite Squad. We encourage drivers from all backgrounds and
              industries, and include catering drivers, truck drivers, and taxi
              drivers.
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              What is the difference between delivery and rideshare?
            </summary>
            <p className="mt-3 text-sm">
              With delivery, there are two big differences:
            </p>
            <ul className="mt-2 text-sm list-disc list-inside space-y-1">
              <li>You don't have passengers in your car.</li>
              <li>
                You can use any mode of transportation: your car (two doors is
                fine), bicycle, or motorcycle.
              </li>
            </ul>
            <p className="mt-3 text-sm">
              It’s also a bit more active than ridesharing, as you get in and
              out of your car or bike to pick up and deliver the food.
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              What's a delivery like?
            </summary>
            <p className="mt-3 text-sm">
              Once you receive a delivery or task opportunity, you'll see where
              it is and what you'll make, and can choose to accept or reject it.
              Once you accept, there are generally three steps, all of which are
              clearly outlined in the Driver app:
            </p>
            <ol className="mt-2 text-sm list-decimal list-inside space-y-1">
              <li>Drive to the Dispensary</li>
              <li>Pick up the order</li>
              <li>Drive to the customer to drop off the order</li>
            </ol>
          </details>
        </div>
      </section>

      {/* ─── Signup CTA ─────────────────────────────────────── */}
      <section className="w-full py-24 px-5 bg-green-800 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl text-white font-bold">
            Start Driving with Herby Today
          </h2>
          <p className="text-lg text-green-100">
            Work flexibly, earn reliably, and help bring safe, compliant
            cannabis products to customers in your area.
          </p>
          {/* <Link
            href="/signup"
            className="inline-block bg-white text-green-800 hover:bg-green-100 font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Join Now
          </Link> */}
        </div>
        <div className="w-96 flex justify-center mx-auto">
          <DriverSignUpForm />
        </div>
      </section>
    </main>
  );
}
