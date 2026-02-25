import { BiCheck } from "react-icons/bi";
import { WaitlistModal } from "./WaitlistModal";

type PricingPlan = {
  planName: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  isHighlighted?: boolean;
};

type Props = {
  heading: string;
  pricingPlans: PricingPlan[];
};

export type Pricing11Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Pricing11 = (props: Pricing11Props) => {
  const { heading, pricingPlans } = {
    ...Pricing11Defaults,
    ...props,
  };
  return (
    <section
      id="pricing"
      className="bg-[#f6f6f6] px-0 md:px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="w-full max-w-xl mx-auto px-4 md:container md:px-0">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="font-heading rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingPlan = ({ plan }: { plan: PricingPlan }) => {
  const borderColor = plan.isHighlighted ? "border-primary" : "border-black";
  const titleColor = plan.isHighlighted ? "text-primary" : "text-black";

  return (
    <div
      className={`border-[3px] ${borderColor} flex h-full flex-col justify-between rounded-[3px] p-8 text-left`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h3
            className={`font-heading text-left text-xl leading-[1.4] ${titleColor}`}
          >
            {plan.planName}
          </h3>
          <h4 className="font-heading lg:text-10xl my-2 text-left text-[56px] leading-[1.2] font-bold">
            {plan.monthlyPrice}
          </h4>
          <p className="text-left text-base leading-[1.5] capitalize">
            {plan.yearlyPrice}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 py-2">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-none self-start">
                <BiCheck className="size-6" />
              </div>
              <p className="text-left text-base leading-[1.5] capitalize">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <WaitlistModal triggerText="Dołącz do waitlisty" className="w-full" />
      </div>
    </div>
  );
};

export const Pricing11Defaults: Props = {
  heading: "Wybierz swoją opcję:",
  pricingPlans: [
    {
      planName: "Sprint Pass",
      monthlyPrice: "399 pln",
      yearlyPrice: "133 pln / miesiąc",
      features: [
        "Dostęp do społeczności",
        "Live Coworking Dostępne Codziennie",
        "Dostęp do sprintów",
        "Dostęp do Masterclass",
        "Gwarancja - możesz poprosić o zwrot do 30 dni",
      ],
      isHighlighted: false,
    },
    {
      planName: "community pass",
      monthlyPrice: "999 pln",
      yearlyPrice: "tylko 83,25 / miesiąc",
      features: [
        "Stały dostęp do społeczności",
        "Live Coworking Dostępne Codziennie",
        "Dostęp do sprintów",
        "Dostęp do Masterclass",
        "Gwarancja - możesz poprosić o zwrot do 30 dni",
        "1 godzina konsultacji 1:1 Live",
        "Pierwszeństwo wejścia na spotkania offline (vibetalks.pl)",
      ],
      isHighlighted: true,
    },
  ],
};
