import { Send, Shield } from "lucide-react";
import { useState, type SubmitEvent } from "react";
function contactUsForm() {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Submitting...");
    const formData = new FormData(event.target);
    formData.append("type", "Infoplus UK Contact");
    const response = await fetch(
      "https://www.infoplus.co.uk/WebMail/api/Email/contact",
      {
        method: "POST",
        body: formData,
      },
    );
    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Form submission error:", data);
      setResult("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="lg:col-span-7 bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">
        Send us a message
      </h2>
      <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            How can we help?
          </label>
          <textarea
            rows={5}
            className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your project or inquiry..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-2xl px-8 py-5 font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>
        <div className="text-center text-sm text-blue-600 mt-4">{result}</div>
        <div className="flex items-start gap-2 text-[12px] text-[#888] mt-2">
          <Shield className="w-4 h-4 text-[#6128a6]/50 shrink-0 mt-0.5" />
          <span>We respect your privacy. We promise we won't spam you :)</span>
        </div>
      </form>
    </div>
  );
}

export default contactUsForm;
