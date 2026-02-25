import { LiveFormModal } from "../components/LiveFormModal";
import { SEO } from "../components/SEO";

export default function Live() {
  return (
    <>
      <SEO
        title="Odbierz pełny webinar i materiały dodatkowe | Vibe Hero"
        description="Zbuduj aplikację z AI, która działa. Pełne nagranie + wszystkie materiały i prompty z warsztatu o budowaniu kontekstu dla AI."
        ogImage="/og-live.png"
        url="https://vibehero.pl/live"
      />

      {/* Minimal Navbar */}
      <nav className="fixed top-0 right-0 left-0 z-[999] border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-[5%]">
          <a href="/">
            <img
              src="/Vibe-hero-logo.png"
              alt="Vibe Hero Logo"
              className="max-h-8 w-auto"
            />
          </a>
        </div>
      </nav>

      <main className="relative min-h-screen w-full bg-white pt-16">
        <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center gap-8 px-[5%] py-16 text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 className="font-h1 text-3xl leading-tight font-bold text-balance sm:text-4xl sm:leading-tight lg:text-5xl">
                Odbierz pełny webinar i materiały dodatkowe
              </h1>
              <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
                Pełne, 60-minutowe nagranie + wszystkie prompty i materiały z
                warsztatu.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <LiveFormModal triggerText="Odbierz dostęp" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
