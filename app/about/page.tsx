export const metadata = {
  title: "About – CalQulate",
  description: "Learn about the mission and technology behind CalQulate.",
};

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 md:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">About CalQulate</h1>
        <p className="text-gray-600 text-lg">
          Empowering healthier decisions through intelligent food analysis.
        </p>
      </div>

      <div className="space-y-10 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">What is CalQulate?</h2>
          <p>
            <strong>CalQulate</strong> is an AI-powered nutrition assistant that allows you to
            instantly analyze food label images. Whether you're shopping at a store or reviewing
            pantry items, just upload a photo and get a detailed breakdown of calories, fats,
            sugars, vitamins, and other key nutrients.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
          <p>
            We believe that nutrition should be <strong>transparent, accessible, and actionable</strong>.
            CalQulate was created to simplify how people understand what they eat. Our goal is to make
            healthy choices easier by using technology to break down complex nutrition facts into
            clear and useful insights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">How It Works</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Take or upload a photo of any food label (ingredient list or nutrition chart).</li>
            <li>Our AI extracts and interprets key nutrients from the label.</li>
            <li>We instantly generate a health assessment and personalized dietary advice.</li>
            <li>No data is stored — everything runs in real time with a privacy-first design.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why Use CalQulate?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fast & Easy</strong> – No signup required. Just upload and get results instantly.</li>
            <li><strong>Smart Analysis</strong> – Backed by AI for meaningful, contextual insights.</li>
            <li><strong>Health-Conscious</strong> – Designed for diabetics, athletes, families, and everyday users.</li>
            <li><strong>Educational</strong> – Learn how different nutrients affect your health.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Privacy Commitment</h2>
          <p>
            We never store your photos or personal data. All processing is done in real time and discarded
            immediately after generating your nutrition report. Your privacy and security are at the heart of everything we do.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Made With Purpose</h2>
          <p>
            CalQulate is built by a team of developers, nutrition advocates, and AI researchers with a passion
            for making health data accessible. Whether you're counting macros or just curious about what's in your food —
            we’ve got your back.
          </p>
        </section>
      </div>

      <div className="mt-16 text-center">
        <a
          href="/upload"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Try CalQulate Now
        </a>
      </div>
    </section>
  );
}
