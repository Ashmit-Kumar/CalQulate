export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-white via-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="w-full text-center py-24 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 leading-tight mb-6">
          Smart Food Insights at Your Fingertips
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mb-8">
          Snap a photo of your grocery label and CalQulate instantly breaks down the nutrition facts for smarter eating.
        </p>
        <a
          href="/upload"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Try It Now
        </a>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "⚡ Instant Analysis",
              desc: "AI reads your label in seconds — no manual input required.",
            },
            {
              title: "📊 Nutritional Breakdown",
              desc: "Get insights on sugar, calories, fat, and vitamins, simplified.",
            },
            {
              title: "🔐 Privacy First",
              desc: "Your data is never stored — CalQulate processes it securely in real-time.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-blue-50 border border-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
<section className="bg-gradient-to-br from-blue-100 to-white py-20 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">How It Works</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          step: "1",
          title: "Snap a Photo",
          desc: "Take a clear picture of the food label using your phone.",
          icon: "📸",
        },
        {
          step: "2",
          title: "Upload Instantly",
          desc: "Drop the image into CalQulate — no signup or typing needed.",
          icon: "☁️",
        },
        {
          step: "3",
          title: "Get Insights",
          desc: "We’ll show you the nutrition facts in a clean, digestible format.",
          icon: "📊",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
        >
          <div className="w-12 h-12 flex items-center justify-center text-2xl bg-blue-100 text-blue-700 rounded-full mb-4 mx-auto">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* Call to Action */}
<section className="relative overflow-hidden py-20 px-4 bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800 text-white">
  <div className="max-w-3xl mx-auto text-center relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
      Make Informed Food Choices — Effortlessly
    </h2>
    <p className="text-blue-200 mb-8 text-base md:text-lg">
      CalQulate gives you real-time nutrition breakdowns from food labels — no manual input, no stress.
    </p>
    <a
      href="/upload"
      className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-medium shadow hover:bg-gray-100 transition duration-300"
    >
      🚀 Upload a Label
    </a>
  </div>

  {/* Background blur glow */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl opacity-30" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-2xl opacity-20" />
</section>


    </main>
  );
}
