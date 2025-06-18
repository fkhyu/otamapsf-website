export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-white dark:bg-stone-900">
      <div className="w-full max-w-xl rounded-3xl shadow-xl p-8 md:p-12 flex flex-col gap-8 bg-orange-50/60 dark:bg-orange-950/30">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-300 mb-2 text-center">Support</h1>
        <p className="text-lg text-stone-700 dark:text-stone-200 text-center mb-6">We're here to help! Contact us using any of the methods below.</p>
        <div className="flex flex-col gap-6 text-base md:text-lg">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-orange-600 dark:text-orange-300">Email:</span>
            <a href="mailto:team@otamaps.fi" className="underline text-stone-800 dark:text-stone-100 hover:text-orange-600 dark:hover:text-orange-300 transition-colors">team@otamaps.fi</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-orange-600 dark:text-orange-300">Phone:</span>
            <a href="tel:+358401602008" className="underline text-stone-800 dark:text-stone-100 hover:text-orange-600 dark:hover:text-orange-300 transition-colors">+358 40 1602008</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-semibold text-orange-600 dark:text-orange-300">Address:</span>
            <span className="text-stone-800 dark:text-stone-100">Tietotie 6, Espoo 02150, Finland</span>
          </div>
        </div>
      </div>
    </div>
  );
}
