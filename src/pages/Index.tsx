import { useState } from "react";
import { PlanCard } from "@/components/PlanCard";
import { PlanRequestModal } from "@/components/PlanRequestModal";

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUserPlan] = useState<string>("Órbita"); // Simulating current user plan

  const plans = [
    {
      title: "Gravedad",
      subtitle: "Tu primer paso al universo digital",
      features: [
        "Publicación de productos en canal mayorista y minorista",
        "Cotizador activo y estadísticas básicas",
        "Participación en campañas generales de tráfico",
        "Soporte por email"
      ],
      description: "Ideal para empresas que dan sus primeros pasos en el canal digital. Para iniciar a explorar sin compromiso."
    },
    {
      title: "Órbita",
      subtitle: "Herramientas clave para avanzar",
      badge: "MAS POPULAR",
      badgeColor: "popular" as const,
      features: [
        "Publicación ilimitada de productos",
        "Soporte por WhatsApp",
        "Plan de incentivos comerciales",
        "Reportes mensuales de performance",
        "Mejora de catálogo y acompañamiento operativo",
        "Participación en campañas destacadas",
        "Posicionamiento medio en resultados de búsqueda"
      ],
      description: "Ideal para empresas activas que quieren mejorar su gestión, visibilidad y rendimiento comercial."
    },
    {
      title: "Galaxia",
      subtitle: "Tu negocio se destaca en el canal digital",
      badge: "RECOMENDADO",
      badgeColor: "recommended" as const,
      features: [
        "Acceso a tu propia AgroWeb personalizada",
        "Panel de gestión para tus vendedores",
        "Reuniones trimestrales de performance",
        "Posicionamiento destacado en newsletters",
        "Prioridad alta en resultados de búsqueda",
        "Acceso a consorcios de compra",
        "Mayor desc. en logística y serv."
      ],
      description: "Ideal para empresas que buscan escalar, automatizar su operación y destacarse frente a la competencia."
    },
    {
      title: "Interestelar",
      subtitle: "Alianza estratégica, expansión sin límites",
      features: [
        "Consultor/acomercial dedicado/a",
        "Posicionamiento premium en homepage y listados",
        "Campañas de co-branding con Bipolos",
        "Participación en proyectos y clientes validados",
        "Acceso ampliado a infra estructural logística (CDR y PUMs)",
        "Reuniones personalizadas y condiciones comerciales pref.",
        "Clean team"
      ],
      description: "Para referentes del mercado que buscan maximizar su crecimiento omnicanal y operar como socios estratégicos de Bipolos."
    }
  ];

  const handlePlanSelect = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Elige tu Plan Digital
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Encuentra el plan perfecto para hacer crecer tu negocio
          </p>
          {currentUserPlan && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full">
              <span className="text-sm font-semibold text-accent">
                Plan actual: {currentUserPlan}
              </span>
            </div>
          )}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <PlanCard
              key={plan.title}
              title={plan.title}
              subtitle={plan.subtitle}
              features={plan.features}
              badge={plan.badge}
              badgeColor={plan.badgeColor}
              isCurrentPlan={currentUserPlan === plan.title}
              onSelect={() => handlePlanSelect(plan.title)}
            />
          ))}
        </div>

        {/* Plan Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div key={`desc-${plan.title}`} className="p-4 bg-secondary/20 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Request Modal */}
      <PlanRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan || ""}
      />
    </div>
  );
};

export default Index;
