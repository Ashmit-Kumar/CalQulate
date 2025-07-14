"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../../components/ui/button";

// Function to extract numerical values from nutrient strings
function extractNutrientValueFromString(nutrient: string | undefined): number {
  if (!nutrient) return 0;
  return parseFloat(nutrient.replace(/[^\d.-]/g, '')) || 0; // Clean and convert to number
}

// Function to evaluate food health based on its nutrients
function evaluateHealth(data: any) {
  if (!data || typeof data !== 'object') {
    return {
      isHealthy: false,
      message: "⚠️ Invalid input data.",
      healthDetails: [],
      recommendations: [],
    };
  }

  const nutrients = {
    calories: extractNutrientValueFromString(data["Calories"]),
    totalFat: extractNutrientValueFromString(data["Total Fat"]),
    saturatedFat: extractNutrientValueFromString(data["Saturated Fat"]),
    transFat: extractNutrientValueFromString(data["Trans Fat"]),
    polyunsaturatedFat: extractNutrientValueFromString(data["Polyunsaturated Fat"]),
    monounsaturatedFat: extractNutrientValueFromString(data["Monounsaturated Fat"]),
    cholesterol: extractNutrientValueFromString(data["Cholesterol"]),
    sodium: extractNutrientValueFromString(data["Sodium"]),
    potassium: extractNutrientValueFromString(data["Potassium"]),
    totalCarbohydrate: extractNutrientValueFromString(data["Total Carbohydrate"]),
    dietaryFiber: extractNutrientValueFromString(data["Dietary Fiber"]),
    sugars: extractNutrientValueFromString(data["Sugars"]),
    protein: extractNutrientValueFromString(data["Protein"]),
    vitaminA: extractNutrientValueFromString(data["Vitamin A"]),
    vitaminC: extractNutrientValueFromString(data["Vitamin C"]),
    calcium: extractNutrientValueFromString(data["Calcium"]),
    iron: extractNutrientValueFromString(data["Iron"]),
    vitaminD: extractNutrientValueFromString(data["Vitamin D"]),
    thiamin: extractNutrientValueFromString(data["Thiamin"]),
    riboflavin: extractNutrientValueFromString(data["Riboflavin"]),
    niacin: extractNutrientValueFromString(data["Niacin"]),
    vitaminB6: extractNutrientValueFromString(data["Vitamin B6"]),
    folicAcid: extractNutrientValueFromString(data["Folic Acid"]),
    vitaminB12: extractNutrientValueFromString(data["Vitamin B12"]),
    pantothenicAcid: extractNutrientValueFromString(data["Pantothenic Acid"]),
  };

  // Define thresholds and conditions for health evaluation
  const thresholds = {
    calories: 250,
    sugars: 10,
    sodium: 150,
    saturatedFat: 3,
    transFat: 0,
    healthyFat: 1.5,  // Monounsaturated or polyunsaturated fat
    dietaryFiber: 3,
    protein: 3,
    vitaminA: 1,
    vitaminC: 1,
    calcium: 10,
    iron: 1,
    vitaminD: 1,
    vitaminB12: 1,
  };

  const healthDetails = [
    {
      nutrient: "Calories",
      value: nutrients.calories,
      threshold: thresholds.calories,
      isHealthy: nutrients.calories <= thresholds.calories,
      message: nutrients.calories <= thresholds.calories ? "✅ Within healthy range" : "⚠️ Too many calories",
    },
    {
      nutrient: "Sugars",
      value: nutrients.sugars,
      threshold: thresholds.sugars,
      isHealthy: nutrients.sugars <= thresholds.sugars,
      message: nutrients.sugars <= thresholds.sugars ? "✅ Low sugar content" : "⚠️ High sugar content",
    },
    {
      nutrient: "Sodium",
      value: nutrients.sodium,
      threshold: thresholds.sodium,
      isHealthy: nutrients.sodium <= thresholds.sodium,
      message: nutrients.sodium <= thresholds.sodium ? "✅ Low sodium" : "⚠️ High sodium",
    },
    {
      nutrient: "Saturated Fat",
      value: nutrients.saturatedFat,
      threshold: thresholds.saturatedFat,
      isHealthy: nutrients.saturatedFat <= thresholds.saturatedFat,
      message: nutrients.saturatedFat <= thresholds.saturatedFat ? "✅ Low saturated fat" : "⚠️ High saturated fat",
    },
    {
      nutrient: "Trans Fat",
      value: nutrients.transFat,
      threshold: thresholds.transFat,
      isHealthy: nutrients.transFat === thresholds.transFat,
      message: nutrients.transFat === thresholds.transFat ? "✅ No trans fat" : "⚠️ Contains trans fat",
    },
    {
      nutrient: "Healthy Fats (Mono/Polyunsaturated)",
      value: Math.max(nutrients.monounsaturatedFat, nutrients.polyunsaturatedFat),
      threshold: thresholds.healthyFat,
      isHealthy: Math.max(nutrients.monounsaturatedFat, nutrients.polyunsaturatedFat) >= thresholds.healthyFat,
      message: Math.max(nutrients.monounsaturatedFat, nutrients.polyunsaturatedFat) >= thresholds.healthyFat ? "✅ Contains healthy fats" : "⚠️ Lacks healthy fats",
    },
    {
      nutrient: "Dietary Fiber",
      value: nutrients.dietaryFiber,
      threshold: thresholds.dietaryFiber,
      isHealthy: nutrients.dietaryFiber >= thresholds.dietaryFiber,
      message: nutrients.dietaryFiber >= thresholds.dietaryFiber ? "✅ High fiber content" : "⚠️ Low fiber content",
    },
    {
      nutrient: "Protein",
      value: nutrients.protein,
      threshold: thresholds.protein,
      isHealthy: nutrients.protein >= thresholds.protein,
      message: nutrients.protein >= thresholds.protein ? "✅ Adequate protein" : "⚠️ Low protein",
    },
    {
      nutrient: "Vitamins & Minerals (A, C, Calcium, Iron)",
      value: nutrients.vitaminA && nutrients.vitaminC && nutrients.calcium && nutrients.iron,
      threshold: 1,
      isHealthy: nutrients.vitaminA > 0 && nutrients.vitaminC > 0 && nutrients.calcium >= 10 && nutrients.iron >= 1,
      message: nutrients.vitaminA > 0 && nutrients.vitaminC > 0 && nutrients.calcium >= 10 && nutrients.iron >= 1
        ? "✅ Nutrient-rich in vitamins and minerals"
        : "⚠️ Lacks key vitamins/minerals",
    },
  ];

  const isHealthy = healthDetails.every(detail => detail.isHealthy);
  const message = isHealthy ? "✅ This food is considered healthy." : "⚠️ This food may not be healthy.";

  // Generate dietary recommendations based on health details
  const recommendations = [];
  if (nutrients.sodium > 150) {
    recommendations.push("⚠️ High sodium content. Avoid for those with high blood pressure or heart conditions.");
  }
  if (nutrients.sugars > 10) {
    recommendations.push("⚠️ High sugar content. Not suitable for diabetics or those watching sugar intake.");
  }
  if (nutrients.dietaryFiber < 3) {
    recommendations.push("⚠️ Low in fiber. Consider adding fiber-rich foods to your diet for better digestion.");
  }
  if (nutrients.protein < 3) {
    recommendations.push("⚠️ Low protein. Might not be ideal for athletes or those needing high protein intake.");
  }
  if (nutrients.calcium < 10) {
    recommendations.push("⚠️ Low in calcium. Not suitable for those with low bone density or who need calcium-rich foods.");
  }
  if (nutrients.iron < 1) {
    recommendations.push("⚠️ Low iron content. Consider for people needing more iron (e.g., pregnant women).");
  }

  return {
    isHealthy,
    message,
    healthDetails,
    recommendations,
  };
}

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [responseData, setResponseData] = useState<any>(null);
  const [tavilyData, setTavilyData] = useState<any>(null);
  const [groqRecommendations, setGroqRecommendations] = useState<any>(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const GROQ_API_URL = process.env.NEXT_PUBLIC_GROQ_API_URL; // Assuming you have this set in your environment variables

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setSuccess(false);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedFile || !API_URL) return;

    const formData = new FormData();
    formData.append("File", selectedFile);
    


    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setResponseData(data);
      setSuccess(true);
const groqData = {
  nutrients: {
    calories: data["Calories"],
    totalFat: data["Total Fat"],
    saturatedFat: data["Saturated Fat"],
    transFat: data["Trans Fat"],
    polyunsaturatedFat: data["Polyunsaturated Fat"],
    monounsaturatedFat: data["Monounsaturated Fat"],
    cholesterol: data["Cholesterol"],
    sodium: data["Sodium"],
    potassium: data["Potassium"],
    totalCarbohydrate: data["Total Carbohydrate"],
    dietaryFiber: data["Dietary Fiber"],
    sugars: data["Sugars"],
    protein: data["Protein"],
    vitaminA: data["Vitamin A"],
    vitaminC: data["Vitamin C"],
    calcium: data["Calcium"],
    iron: data["Iron"],
    vitaminD: data["Vitamin D"],
    thiamin: data["Thiamin"],
    riboflavin: data["Riboflavin"],
    niacin: data["Niacin"],
    vitaminB6: data["Vitamin B6"],
    folicAcid: data["Folic Acid"],
    vitaminB12: data["Vitamin B12"],
    pantothenicAcid: data["Pantothenic Acid"],
  },
};
const groqPrompt = `
    Based on the nutritional values: ${JSON.stringify(groqData)}, 
    please analyze the potential health benefits, risks, and provide actionable recommendations.
    
    Health Benefits: 
    List the potential health benefits based on the nutrients provided (e.g., high fiber, low sugar, etc.).
    
    Health Risks:
    Identify any health risks based on high levels of certain nutrients (e.g., high sodium, sugar, etc.).
    
    Recommendations:
    Provide dietary recommendations or suggestions for improvement, based on the analysis of the nutritional values.
    `;
      // Pass the response data to Tavily API for more results
       const groqRes = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GROQ_API_URL}`,
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",  // same model as the curl example
            messages: [
            {
                role: "user",
                content: groqPrompt
            },
            ],
        }),
        });

      if (groqRes.ok) {
        const groqRecommendations = await groqRes.json();
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa "+groqRecommendations)
        setGroqRecommendations(groqRecommendations);
      }

    //   if (tavilyRes.ok) {
    //     const tavilyData = await tavilyRes.json();
    //     console.log("Talllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"+tavilyData)
    //     setTavilyData(tavilyData);
    //   }

      // Reset file input after successful upload
      setSelectedFile(null);
      setPreviewUrl(null);

      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setSuccess(false);
    }
  }
function extractSectionContent(response, sectionTitle) {
    const content = response?.choices[0]?.message?.content || "";
    console.log("Full Response Content:", content); // Debugging log

    // Adjust the search for section titles by considering the `**`
    const startIndex = content.indexOf(`${sectionTitle}`);
    if (startIndex === -1) {
        console.log("start ssssssssssssdhbsjfhbfjdsf idsfigsfgsdfghdsgfhsdgfigds f hsdfhjdf");
        return [];  // Section not found, returning empty array
    }

    // Find where the section ends
    const endIndex = content.indexOf(startIndex + 1);
    if (endIndex === -1) {
        console.log("Section end not found.");
        return [content.slice(startIndex + sectionTitle.length).trim()]; // In case there's no bold title ending
    }

    // Slice the content between the start and end of the section
    const sectionContent = content.slice(startIndex + sectionTitle.length + 2, endIndex).trim();  // +2 for the bold mark
    console.log(`Extracted ${sectionTitle}:`, sectionContent); // Debugging log

    // Split the section into lines and filter out empty lines
    const formattedContent = sectionContent
        .split("\n")
        .map(line => line.trim())
        .filter(line => line !== "");

    console.log("Extracted section content:", formattedContent); // Debugging log

    return formattedContent;  // Return the formatted content
}

function formatGroqResponse(raw: string): {
  benefits: string[];
  risks: string[];
  recommendations: string[];
} {
  const sections = {
    benefits: [] as string[],
    risks: [] as string[],
    recommendations: [] as string[],
  };

  if (!raw) return sections;

  const content = raw
    .replace(/\*\*/g, "") // remove markdown bold
    .replace(/[\r\n]+/g, "\n")
    .trim();

  // Try to split using emoji-based anchors or fallback headers
  const parts = content.split(/✅\s*Health Benefits|⚠️\s*Health Risks|💡\s*Recommendations/i);

  // Match headings with extracted chunks
  if (parts.length >= 2) {
    // Check which comes first
    const benefitMatch = content.match(/✅\s*Health Benefits/i);
    const riskMatch = content.match(/⚠️\s*Health Risks/i);
    const recMatch = content.match(/💡\s*Recommendations/i);

    const order = [benefitMatch, riskMatch, recMatch]
      .map((m, i) => (m ? { index: m.index!, label: i } : null))
      .filter(Boolean)
      .sort((a, b) => a!.index - b!.index)
      .map((entry) => entry!.label);

    const orderedParts = parts.slice(1); // Remove the pre-heading text

    order.forEach((labelIndex, i) => {
      const sectionText = orderedParts[i]?.trim() || "";

      const lines = sectionText
        .split(/\n|(?<=\.)\s(?=[A-Z])/g) // Split by line or period+space+capital letter
        .map((s) => s.trim())
        .filter((s) => s.length > 0 && s.length < 300);

      if (labelIndex === 0) sections.benefits = lines;
      if (labelIndex === 1) sections.risks = lines;
      if (labelIndex === 2) sections.recommendations = lines;
    });
  }

  return sections;
}


return (
    <section className="mx-auto max-w-3xl px-6 py-12 space-y-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Upload a Food Label</h1>
        <p className="text-gray-600">Get instant AI insights from any nutrition label</p>
      </div>

      {/* Upload Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        <div className="flex flex-col items-center gap-4">
          <label
            htmlFor="file-upload"
            className="w-full flex flex-col items-center justify-center border-2 border-dashed border-blue-300 bg-blue-50 hover:bg-blue-100 rounded-xl cursor-pointer transition p-8 text-center"
          >
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-48 w-auto rounded-md shadow-md"
              />
            ) : (
              <>
                <span className="text-5xl">📤</span>
                <p className="mt-2 text-sm text-gray-600">Upload an image here</p>
              </>
            )}
          </label>

          <Button
            type="submit"
            disabled={!selectedFile}
            className="w-full mt-4"
          >
            {success ? "Uploaded ✔" : "Upload"}
          </Button>
        </div>
      </form>

      {/* Response & Insights */}
      {success && responseData && (
        <div className="bg-white shadow-xl rounded-xl p-8 space-y-8">
          {/* Raw Response */}
          <details className="rounded-md bg-blue-50 p-4 text-sm">
            <summary className="cursor-pointer font-medium text-blue-700">Server Response</summary>
            <pre className="mt-4 whitespace-pre-wrap">{JSON.stringify(responseData, null, 2)}</pre>
          </details>

          {/* Health Overview */}
          <div>
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Health Evaluation</h2>
            <p className="text-gray-700">{evaluateHealth(responseData).message}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {evaluateHealth(responseData).healthDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between border rounded-lg p-3 text-sm ${
                    detail.isHealthy ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50"
                  }`}
                >
                  <span>{detail.nutrient}</span>
                  <span className={detail.isHealthy ? "text-green-600" : "text-red-600"}>
                    {detail.message}
                  </span>
                </div>
              ))}
            </div>

            {evaluateHealth(responseData).recommendations.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Dietary Recommendations</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-red-600">
                  {evaluateHealth(responseData).recommendations.map((rec, idx) => (
                    <li key={idx}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

{/* Groq recommendation */}
     {groqRecommendations && (
  <div className="space-y-6">
    <h2 className="text-xl font-semibold text-blue-700">AI-Generated Nutrition Insights</h2>

    {(() => {
      const raw = groqRecommendations?.choices?.[0]?.message?.content || "";
      const { benefits, risks, recommendations } = formatGroqResponse(raw);

      return (
        <>
          {benefits.length > 0 && (
            <div>
              <h3 className="text-green-700 font-medium mb-2">✅ Health Benefits</h3>
              <ul className="list-disc pl-5 space-y-1 text-green-700 text-sm">
                {benefits.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {risks.length > 0 && (
            <div>
              <h3 className="text-red-700 font-medium mb-2">⚠️ Health Risks</h3>
              <ul className="list-disc pl-5 space-y-1 text-red-700 text-sm">
                {risks.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {recommendations.length > 0 && (
            <div>
              <h3 className="text-blue-700 font-medium mb-2">💡 Recommendations</h3>
              <ul className="list-disc pl-5 space-y-1 text-blue-700 text-sm">
                {recommendations.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      );
    })()}
  </div>
)}

        </div>
      )}
    </section>
  );
}