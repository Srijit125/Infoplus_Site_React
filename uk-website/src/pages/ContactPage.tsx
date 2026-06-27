import ContactUsForm from "../components/forms/contactUsForm";
import { PageHero } from "../components/shared/PageHero";
import { MapPin, Mail, Phone } from "lucide-react";
import { ScrollReveal } from "../components/ui/ScrollReveal";

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
      address: "No. 99, 1st Floor, Greeta Tower, Industrial Estate, Perungudi, Chennai 600096.",
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

            {/* Contact form */}
            <ScrollReveal direction="left" className="lg:col-span-7">
              <ContactUsForm />
            </ScrollReveal>

            {/* Offices */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <ScrollReveal direction="up">
                <div>
                  <span className="text-[#f85d37] text-[12px] font-semibold uppercase tracking-widest mb-3 block">
                    Our Offices
                  </span>
                  <h2 className="text-[30px] font-bold text-[#111111]">Global Offices</h2>
                </div>
              </ScrollReveal>

              {offices.map((office, i) => (
                <ScrollReveal key={i} variant="card" delay={i * 100}>
                  <div className="group bg-white border border-[#e5e4e7] p-7 rounded-2xl hover:border-[#6128a6]/40 hover:shadow-[0_8px_32px_rgba(97,40,166,0.08)] transition-all duration-300">
                    <h3 className="text-[17px] font-semibold text-[#111111] mb-4 group-hover:text-[#6128a6] transition-colors">
                      {office.city}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 text-[#555555]">
                        <MapPin className="w-4 h-4 text-[#6128a6] shrink-0 mt-0.5" />
                        <p className="text-[14px] leading-relaxed">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-3 text-[#555555]">
                        <Mail className="w-4 h-4 text-[#6128a6] shrink-0" />
                        <a href={`mailto:${office.email}`} className="text-[14px] hover:text-[#f85d37] transition-colors">
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-[#555555]">
                        <Phone className="w-4 h-4 text-[#6128a6] shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="text-[14px] hover:text-[#f85d37] transition-colors">
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
