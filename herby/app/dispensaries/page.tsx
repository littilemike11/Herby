import Link from "next/link";
import cannabis_shop from "@/app/images/cannabus_shop.jpg";
import { CheckCircle, Truck, Leaf, BarChart3, Store } from "lucide-react";
import Image from "next/image";
import { DispensarySignUpForm } from "@/components/dispensaries/dispensary-sign-up-form";
export default function DispensaryPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-green-50 to-white text-green-900">
      {/* ─── Navbar ─────────────────────────────────────────── */}
      <nav className="w-full flex justify-center border-b border-green-100 bg-white/60 backdrop-blur-sm h-16 sticky top-0 z-50">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center text-2xl font-bold text-green-800">
            <Link href="/">Herby</Link>
          </div>
          <nav className="flex gap-6 text-sm font-medium items-center text-green-800">
            {/* <Link href="/drivers" className="hover:text-green-600 transition">
              Drivers
            </Link>
            <Link
              href="/dispensaries"
              className="hover:text-green-600 transition"
            >
              Dispensaries
            </Link>
            <Link href="/about" className="hover:text-green-600 transition">
              About
            </Link> */}
            <Link href="/drivers" className="hover:text-green-600 transition">
              Drivers
            </Link>
            <Link href="#why-us" className="hover:text-green-600 transition">
              Why Us
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
            Grow your reach with <span className="text-green-700">Herby</span>
          </h1>
          <p className="text-lg text-green-700">
            Connect with verified drivers to deliver your cannabis products
            quickly, safely, and compliantly. Focus on your business — we’ll
            handle the logistics.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            List Your Dispensary
          </Link>
        </div>

        <div className="flex-1">
          <Image
            src={cannabis_shop}
            alt="Cannabis dispensary sign"
            className="rounded-2xl shadow-lg w-full object-cover h-96"
            loading="lazy"
          />
        </div>
      </section>

      {/* ─── Why Herby Section ──────────────────────────────── */}
      <section id="why-us" className="w-full bg-green-100 py-24">
        <div className="max-w-5xl mx-auto px-5 text-center space-y-12">
          <h2 className="text-3xl font-bold text-green-900">
            Why Partner with Herby?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-green-800">
              <Truck className="w-10 h-10 mb-4 text-green-700" />
              <h3 className="font-semibold text-lg mb-2">
                Seamless Delivery Network
              </h3>
              <p>
                Connect with verified drivers ready to deliver your orders
                across town.
              </p>
            </div>

            <div className="flex flex-col items-center text-green-800">
              <BarChart3 className="w-10 h-10 mb-4 text-green-700" />
              <h3 className="font-semibold text-lg mb-2">
                Insights & Tracking
              </h3>
              <p>
                View delivery performance, routes, and turnaround times in real
                time.
              </p>
            </div>

            <div className="flex flex-col items-center text-green-800">
              <Store className="w-10 h-10 mb-4 text-green-700" />
              <h3 className="font-semibold text-lg mb-2">Expand Your Reach</h3>
              <p>
                Reach new customers and streamline fulfillment with less
                overhead.
              </p>
            </div>
          </div>
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
              How does Herby work with dispensaries?
            </summary>
            <p className="mt-3 text-sm">
              Once you sign up, you’ll be able to post delivery orders and get
              matched with licensed drivers in your area. Deliveries are tracked
              and managed through your Herby dashboard.
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Do I need special licenses?
            </summary>
            <p className="mt-3 text-sm">
              Yes, Herby only partners with dispensaries that are properly
              licensed under their state’s cannabis distribution laws.
            </p>
          </details>

          <details className="bg-green-50 rounded-xl p-5 shadow-sm">
            <summary className="font-semibold cursor-pointer">
              Can drivers deliver multiple orders?
            </summary>
            <p className="mt-3 text-sm">
              Yes, depending on your region’s regulations, Herby can optimize
              routes for multiple drop-offs to ensure faster delivery times.
            </p>
          </details>
        </div>
      </section>

      {/* ─── Signup CTA Section ─────────────────────────────── */}
      <section className="w-full py-24 px-5 bg-green-800 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl text-white font-bold">
            List your dispensary on Herby
          </h2>
          <p className="text-lg text-green-100">
            Join our growing network of dispensaries and let Herby manage your
            delivery logistics — securely, efficiently, and compliantly.
          </p>
          {/* <Link
            href="/signup"
            className="inline-block bg-white text-green-800 hover:bg-green-100 font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Get Started
          </Link> */}
        </div>
        <div className="w-96 flex justify-center mx-auto">
          <DispensarySignUpForm />
        </div>
      </section>
    </main>
  );
}
