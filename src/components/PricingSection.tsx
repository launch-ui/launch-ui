import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { Button } from "@relume_io/relume-ui";

type BillingCycle = "monthly" | "quarterly" | "yearly";

type PricingOption = {
    id: BillingCycle;
    name: string;
    price: string;
    priceDetail: string;
    billingDetail: string;
    savings?: string;
    isPopular?: boolean;
    checkoutUrl: string;
};

const pricingOptions: PricingOption[] = [
    {
        id: "monthly",
        name: "Miesięcznie",
        price: "99 zł",
        priceDetail: "99 zł/mies",
        billingDetail: "Płatność co miesiąc",
        checkoutUrl: "https://easl.ink/Ry0g0",
    },
    {
        id: "quarterly",
        name: "Kwartalnie",
        price: "83 zł",
        priceDetail: "250 zł co 3 mies",
        billingDetail: "Płatność co 3 miesiące",
        savings: "47 zł taniej",
        checkoutUrl: "https://easl.ink/1Sq4e",
    },
    {
        id: "yearly",
        name: "Rocznie",
        price: "67 zł",
        priceDetail: "800 zł/rok",
        billingDetail: "Płatność raz na rok",
        savings: "388 zł taniej",
        isPopular: true,
        checkoutUrl: "https://easl.ink/INZqA",
    },
];

const features = [
    "Cotygodniowe masterclassy na żywo (środy 19:00)",
    "Dostęp do archiwum wszystkich nagrań",
    "Forum z szybkimi odpowiedziami",
    "60+ osób, które budują obok Ciebie",
    "Rezygnacja w każdej chwili",
    "Gwarancja 14 dni na pełny zwrot pieniędzy",
];

export const PricingSection = () => {
    const [selectedCycle, setSelectedCycle] = useState<BillingCycle>("yearly");

    return (
        <section id="pricing" className="bg-[#f6f6f6] px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto max-w-[600px]">
                <div className="mb-10 text-left md:mb-12 lg:mb-16">
                    <h2 className="font-heading mb-4 text-4xl font-bold md:text-5xl lg:text-6xl text-black">
                        Dołącz do 60+ osób, które budują z AI
                    </h2>
                    <p className="text-lg text-gray-600 md:text-xl">
                        Wybierz co Ci pasuje. Zrezygnujesz kiedy chcesz.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 lg:p-10">
                    {/* Mobile App Style Selection */}
                    <div className="flex flex-col gap-4 mb-8">
                        {pricingOptions.map((option) => (
                            <div
                                key={option.id}
                                onClick={() => setSelectedCycle(option.id)}
                                className={`cursor-pointer relative flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 ${selectedCycle === option.id
                                    ? "border-primary bg-primary/5"
                                    : "border-gray-100 hover:border-gray-200 bg-white"
                                    }`}
                            >
                                {option.isPopular && (
                                    <div className="absolute -top-3 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                        Najlepsza oferta
                                    </div>
                                )}
                                <div className="flex items-center gap-4">
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedCycle === option.id ? "border-primary" : "border-gray-300"
                                        }`}>
                                        {selectedCycle === option.id && (
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                        )}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-black text-lg">{option.name}</h3>
                                        <p className="text-sm text-gray-500">{option.billingDetail}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-xl md:text-2xl text-black">
                                        {option.price} <span className="text-sm font-normal text-gray-500">/mies</span>
                                    </div>
                                    {option.savings && (
                                        <div className="text-green-600 text-xs font-bold mt-1">
                                            {option.savings}
                                        </div>
                                    )}
                                    {!option.savings && (
                                        <div className="text-gray-400 text-xs mt-1">
                                            Standard
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Selected Plan Details & Features */}
                    <div className="border-t border-gray-100 pt-8">
                        <div className="text-left mb-8">
                            <p className="text-gray-500 mb-2">Wybrałeś: <span className="font-semibold text-black">{pricingOptions.find(o => o.id === selectedCycle)?.name}</span></p>
                            <p className="text-3xl font-heading font-bold text-black">
                                {pricingOptions.find(o => o.id === selectedCycle)?.priceDetail}
                            </p>
                        </div>

                        <ul className="grid grid-cols-1 gap-4 mb-8 max-w-2xl">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <BiCheck className="flex-shrink-0 w-6 h-6 text-green-500" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col items-center gap-4">
                            <a
                                href={pricingOptions.find(o => o.id === selectedCycle)?.checkoutUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full max-w-md"
                            >
                                <Button className="w-full bg-primary text-white hover:bg-primary/90 text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 border-0">
                                    Wchodzę
                                </Button>
                            </a>
                            <p className="text-sm text-gray-500">
                                Nie jesteś pewien? <a href="mailto:yo@wozu.co" className="underline hover:text-primary">Napisz do mnie najpierw — yo@wozu.co</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
