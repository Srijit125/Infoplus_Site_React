import ContactUsForm from "../components/forms/contactUsForm";
import { PageHero } from "../components/shared/PageHero";
import { MapPin, Mail, Phone } from "lucide-react";

export function ContactPage() {
  const offices = [
    {
      city: "London, UK",
      address: "Unit 6 Capital Business Park, Manor Way, Borehamwood WD6 1GW.",
      email: "uk@infoplusltd.co.uk",
      phone: "+44 20 8207 3474",
    },
    {
      city: "Chennai, India",
      address:
        "No. 99, 1st Floor, Greeta Tower, Industrial Estate, Perungudi, Chennai 600096.",
      email: "india@infoplusltd.co.uk",
      phone: "+91 44 1234 5678",
    },
    {
      city: "Frankfurt, Germany",
      address: "14th Floor, Tower 185, Friedrich-Ebert-Anlage 35-37, 60327.",
      email: "germany@infoplusltd.co.uk",
      phone: "+49 69 1234 5678",
    },
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Let's build something extraordinary together"
        description="Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions."
        badge="CONTACT US"
        variant="centered"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Form */}

            <ContactUsForm />

            {/* Global Offices */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Global Offices
              </h2>
              {offices.map((office, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-blue-500 transition-colors group"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {office.city}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-slate-600">
                      <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-blue-600"
                      >
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        className="hover:text-blue-600"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
