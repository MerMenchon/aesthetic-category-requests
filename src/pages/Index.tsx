import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PlanCard } from "@/components/PlanCard";
import { PlanRequestModal } from "@/components/PlanRequestModal";

// Configuración de precios por nivel
const PRICE_LEVELS = {
  1: {
    "🌑 Gravedad": "GRATIS",
    "🛰️ Órbita": "USD 750",
    "🌌 Galaxia": "USD 2.200",
    "🚀 Interestelar": "USD 3.950"
  },
  2: {
    "🌑 Gravedad": "GRATIS",
    "🛰️ Órbita": "USD 950",
    "🌌 Galaxia": "USD 2.950",
    "🚀 Interestelar": "USD 4.950"
  },
  3: {
    "🌑 Gravedad": "GRATIS",
    "🛰️ Órbita": "USD 1.200",
    "🌌 Galaxia": "USD 3.500",
    "🚀 Interestelar": "USD 5.950"
  }
};

// Mapeo de planes por número
const PLAN_ORDER = ["🌑 Gravedad", "🛰️ Órbita", "🌌 Galaxia", "🚀 Interestelar"];

// Funciones utilitarias
const getPriceByLevel = (planName: string, level: number): string => {
  return PRICE_LEVELS[level as keyof typeof PRICE_LEVELS]?.[planName as keyof typeof PRICE_LEVELS[1]] || "GRATIS";
};

const getPlanBadge = (planIndex: number, highlightedPlanIndex: number) => {
  if (planIndex + 1 === highlightedPlanIndex) {
    return {
      badge: planIndex === 1 ? "MAS POPULAR" : "RECOMENDADO",
      badgeColor: planIndex === 1 ? "popular" as const : "recommended" as const
    };
  }
  return {};
};

const Index = () => {
  const [searchParams] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUserPlan] = useState<string>("🛰️ Órbita"); // Simulating current user plan

  // Obtener parámetros de la URL con valores por defecto
  const priceLevel = Math.min(3, Math.max(1, parseInt(searchParams.get('priceLevel') || '2')));
  const highlightedPlan = Math.min(4, Math.max(1, parseInt(searchParams.get('highlightedPlan') || '2')));

  const basePlans = [{
    title: "🌑 Gravedad",
    subtitle: "Tu primer paso al universo digital",
    features: ["✔️ Marketplace B2C y B2B", "✔️ Publicación de productos en canal mayorista y minorista", "✔️ Cotizador activo y estadísticas básicas", "✔️ Participación en campañas generales de tráfico", "✔️ Soporte por email"],
    notIncluded: ["✖️ Setup Agroweb", "✖️ Customización Homepage + 3 landings", "✖️ Setup gestor interno"],
    details: {
      discount: "0%",
      subscription: "No aplica",
      bonus: "No aplica"
    },
    description: "Ideal para empresas que dan sus primeros pasos en el canal digital. Para iniciar a explorar sin compromiso."
  }, {
    title: "🛰️ Órbita",
    subtitle: "Herramientas clave para avanzar",
    features: ["✔️ Marketplace B2C y B2B", "✔️ Publicación ilimitada de productos", "✔️ Soporte por WhatsApp", "✔️ Plan de incentivos comerciales", "✔️ Reportes mensuales de performance", "✔️ Mejora de catálogo y acompañamiento operativo", "✔️ Participación en campañas destacadas", "✔️ Posicionamiento medio en resultados de búsqueda"],
    notIncluded: ["✖️ Setup Agroweb", "✖️ Customización Homepage + 3 landings", "✖️ Setup gestor interno"],
    details: {
      discount: "0%",
      subscription: "Mensual",
      bonus: "USD 950 (si accedés al plan de incentivo 100%)"
    },
    description: "Ideal para empresas activas que quieren mejorar su gestión, visibilidad y rendimiento comercial."
  }, {
    title: "🌌 Galaxia",
    subtitle: "Tu negocio se destaca en el canal digital",
    features: ["✔️ Marketplace B2C y B2B", "✔️ AgroWebs", "✔️ Gestor interno", "✔️ Acceso a tu propia AgroWeb personalizada", "✔️ Panel de gestión para tus vendedores", "✔️ Reuniones trimestrales de performance", "✔️ Posicionamiento destacado en newsletters", "✔️ Prioridad alta en resultados de búsqueda", "✔️ Acceso a consorcios de compra", "✔️ Mayor desc. en logística y serv."],
    setupCosts: ["✅ Setup Agroweb: USD 9.000", "✖️ Customización Homepage + 3 landings (no incluida)", "✅ Setup gestor interno: USD 5.000"],
    details: {
      discount: "-10%",
      subscription: "Trimestral",
      bonus: "USD 950 (si accedés al plan de incentivo 100%)"
    },
    description: "Ideal para empresas que buscan escalar, automatizar su operación y destacarse frente a la competencia."
  }, {
    title: "🚀 Interestelar",
    subtitle: "Alianza estratégica, expansión sin límites",
    features: ["✔️ Marketplace B2C y B2B", "✔️ AgroWebs", "✔️ Gestor interno", "✔️ Consultor/acomercial dedicado/a", "✔️ Posicionamiento premium en homepage y listados", "✔️ Campañas de co-branding con Bipolos", "✔️ Participación en proyectos y clientes validados", "✔️ Acceso ampliado a infra estructural logística (CDR y PUMs)", "✔️ Reuniones personalizadas y condiciones comerciales pref.", "✔️ Clean team"],
    setupCosts: ["✅ Setup Agroweb: USD 9.000", "✅ Customización Homepage + 3 landings: USD 5.900", "✅ Setup gestor interno: USD 5.000"],
    details: {
      discount: "-20%",
      subscription: "Semestral",
      bonus: "USD 950 (si accedés al plan de incentivo 100%)"
    },
    description: "Para referentes del mercado que buscan maximizar su crecimiento omnicanal y operar como socios estratégicos de Bipolos."
  }];

  // Aplicar precios dinámicos y badges
  const plans = basePlans.map((plan, index) => ({
    ...plan,
    price: getPriceByLevel(plan.title, priceLevel),
    ...getPlanBadge(index, highlightedPlan)
  }));
  const handlePlanSelect = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true);
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Elige tu Plan Digital
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Encuentra el plan perfecto para hacer crecer tu negocio
          </p>
          {currentUserPlan && <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full">
              <span className="text-sm font-semibold text-accent">
                Plan actual: {currentUserPlan}
              </span>
            </div>}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => <PlanCard key={plan.title} title={plan.title} subtitle={plan.subtitle} price={plan.price} features={plan.features} notIncluded={plan.notIncluded} setupCosts={plan.setupCosts} details={plan.details} badge={plan.badge} badgeColor={plan.badgeColor} isCurrentPlan={currentUserPlan === plan.title} onSelect={() => handlePlanSelect(plan.title)} />)}
        </div>

      </div>

      {/* Request Modal */}
      <PlanRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} planName={selectedPlan || ""} />
    </div>;
};
export default Index;