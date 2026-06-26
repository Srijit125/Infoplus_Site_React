import { Icon, Rocket } from "lucide-react";
import { infrastructurePoints } from "../assets/constants/types";
import { PageHero } from "../components/shared/PageHero";

function InfrastructureManagement() {
  return (
    <div className="w-full">
      <PageHero
        title="Infrastructure Management"
        description="We're Deliver industry-leading best practices and technologies"
        variant="centered"
      />
      <div className="flex flex-wrap items-center justify-center ml-40 mr-40 gap-10">
        <span>
          Infoplus has built its reputation helping the leading global
          organizations with administration and management of technology,
          information, and data in a proactively way. Our integrated IT
          infrastructure management solutions and services give a consolidated
          end-to-end view of your infrastructure and applications. Our main goal
          for our clients is to minimize downtime and maintain business
          productivity. The dashboards that we provide will help you to view the
          status of your business-critical services dynamically. We, together
          with our partners, deliver this through industry-leading best
          practices and technologies. Using our infrastructure management
          services, clients have consistently achieved.
        </span>
        <span />
        <p>
          Through our customer-centric approach, competency, flexibility, and
          future-driven technology exposure, you can experience these key
          benefits immediately.
        </p>
        <div className="grid mt-10 gap-4 grid-cols-3">
          {infrastructurePoints.map((point: string, key: number) => (
            <div
              key={key}
              className="flex flex-col items-center border-2 rounded-lg p-4 "
            >
              <Rocket />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfrastructureManagement;
