
import { useState } from "react";
import { PlanCard } from "@/components/PlanCard";
import { PlanRequestModal } from "@/components/PlanRequestModal";

// Define customer types and plan types
type CustomerType = 1 | 2 | 3; // 1: Agronomía, 2: Empresa Chica, 3: Empresa Grande
type PlanType = 1 | 2 | 3 | 4; // 1: Gravedad, 2: Órbita, 3: Galaxia, 4: Interestelar

// Mapeo explícito de números a planes
const PLAN_MAPPING = {
  1: "🌑 Gravedad",
  2: "🛰️ Órbita", 
  3: "🌌 Galaxia",
  4: "🚀 Interestelar"
};

// Mapeo explícito de números a tipos de cliente
const CUSTOMER_TYPE_MAPPING = {
  1: "Agronomía",
  2: "Empresa Chica",
  3: "Empresa Grande"
};



const PLAN_CONFIGURATIONS = {
 // 1: AGRONOMIA
 1: {
   // 1: GRAVEDAD
   1: {
     title: "🌑 Gravedad",
     subtitle: "Tu primer paso al universo digital",
     price: "GRATIS",
     features: ["✔️ Marketplace B2C y B2B", "✔️ Publicación de productos en canal mayorista y minorista", "✔️ Cotizador activo y estadísticas básicas", "✔️ Participación en campañas generales de tráfico", "✔️ Soporte por email"],
     notIncluded: ["✖️ Setup Agroweb", "✖️ Customización Homepage + 3 landings", "✖️ Setup gestor interno"],
     details: {},
     description: ""
   },
   // 2: ÓRBITA
   2: {
     title: "🛰️ Órbita",
     subtitle: "Herramientas clave para avanzar",
     price: "USD 950",
     features: ["✔️ Marketplace B2C y B2B", "✔️ Publicación ilimitada de productos", "✔️ Soporte por WhatsApp", "✔️ Plan de incentivos comerciales", "✔️ Reportes mensuales de performance", "✔️ Mejora de catálogo y acompañamiento operativo", "✔️ Participación en campañas destacadas", "✔️ Posicionamiento medio en resultados de búsqueda"],
     notIncluded: ["✖️ Setup Agroweb", "✖️ Customización Homepage + 3 landings", "✖️ Setup gestor interno"],
     details: {
       discount: "0%",
       subscription: "Mensual",
       bonus: "USD 950 si cumplís con las condiciones*"
     },
     description: ""
   },
   // 3: GALAXIA
   3: {
     title: "🌌 Galaxia",
     subtitle: "Tu negocio se destaca en el canal digital",
     price: "USD 2.950",
     features: ["✔️ Marketplace B2C y B2B", "✔️ AgroWebs", "✔️ Gestor interno", "✔️ Acceso a tu propia AgroWeb personalizada", "✔️ Panel de gestión para tus vendedores", "✔️ Reuniones trimestrales de performance", "✔️ Posicionamiento destacado en newsletters", "✔️ Prioridad alta en resultados de búsqueda", "✔️ Acceso a consorcios de compra", "✔️ Mayor desc. en logística y serv."],
     setupCosts: ["✅ Setup Agroweb: USD 9.000", "✖️ Customización Homepage + 3 landings (no incluida)", "✅ Setup gestor interno: USD 5.000"],
      details: {
        discount: "-10%",
        subscription: "Trimestral",
        bonus: "USD 950 si cumplís con las condiciones*"
      },
     description: ""
   },
   // 4: INTERESTELAR
   4: {
     title: "🚀 Interestelar",
     subtitle: "Alianza estratégica, expansión sin límites",
     price: "USD 4.950",
     features: ["✔️ Marketplace B2C y B2B", "✔️ AgroWebs", "✔️ Gestor interno", "✔️ Consultor/acomercial dedicado/a", "✔️ Posicionamiento premium en homepage y listados", "✔️ Campañas de co-branding con Bipolos", "✔️ Participación en proyectos y clientes validados", "✔️ Acceso ampliado a infra estructural logística (CDR y PUMs)", "✔️ Reuniones personalizadas y condiciones comerciales pref.", "✔️ Clean team"],
     setupCosts: ["✅ Setup Agroweb: USD 9.000", "✅ Customización Homepage + 3 landings: USD 5.900", "✅ Setup gestor interno: USD 5.000"],
      details: {
        discount: "-20%",
        subscription: "Semestral",
        bonus: "USD 950 si cumplís con las condiciones*"
      },
     description: ""
   }
 },
 // 2: EMPRESA CHICA
 2: {
   // 1: GRAVEDAD
   1: {
     title: "🌑 Gravedad",
     subtitle: "Tu primer paso al universo digital",
     price: "USD 300",
     features: ["✔️ Marketplace B2C y B2B", "✔️ Publicación de productos en canal mayorista y minorista", "✔️ Cotizador activo y estadísticas básicas", "✔️ Participación en campañas generales de tráfico", "✔️ Soporte por email"],


     notIncluded: ["✖️ Setup Agroweb", "✖️ Customización Homepage + 3 landings", "✖️ Setup gestor interno", "✖️ (Costo Mensual) Clean team", "✖️ (Unica vez) PDP Premium c/u", "✖️ PDP Premium en todos los canales (B2C, B2B, Agrowebs, Gestor Interno)"],
     details: {
       discount: "0%",
       subscription: "-",
     },
     description: ""
   },
   // 2: ÓRBITA
   2: {
     title: "🛰️ Órbita",
     subtitle: "Herramientas clave para avanzar",
     price: "USD 2.950",
     features: ["✔️ Marketplace B2C y B2B", "✔️ Publicación ilimitada de productos", "✔️ Soporte por WhatsApp", "✔️ Plan de incentivos comerciales", "✔️ Reportes mensuales de performance", "✔️ Mejora de catálogo y acompañamiento operativo", "✔️ Participación en campañas destacadas", "✔️ Posicionamiento medio en resultados de búsqueda", "✔️ PDP Premium en todos los canales (B2C, B2B, Agrowebs, Gestor Interno)"],
     notIncluded: ["✖️ Setup Agroweb", "✖️ Customización Homepage + 3 landings", "✖️ Setup gestor interno", "✖️ (Costo Mensual) Clean team"],
     details: {
       discount: "0%",
       subscription: "Mensual",
       bonus: "USD 950 si cumplís con las condiciones*"
     },
     description: "Ideal para empresas activas que quieren mejorar su gestión, visibilidad y rendimiento comercial."
   },
   // 3: GALAXIA
   3: {
     title: "🌌 Galaxia",
     subtitle: "Tu negocio se destaca en el canal digital",
     price: "USD 4.950",
     features: ["✔️ Marketplace B2C y B2B", "✔️ AgroWebs", "✔️ Gestor interno", "✔️ Acceso a tu propia AgroWeb personalizada", "✔️ Panel de gestión para tus vendedores", "✔️ Reuniones trimestrales de performance", "✔️ Posicionamiento destacado en newsletters", "✔️ Prioridad alta en resultados de búsqueda", "✔️ Acceso a consorcios de compra", "✔️ Mayor desc. en logística y serv.", "✔️ PDP Premium en todos los canales (B2C, B2B, Agrowebs, Gestor Interno)", "✔️ (Costo Mensual) Clean team (OPCIONAL) USD 6.350"],
     setupCosts: ["✅ Setup Agroweb: USD 9.000", "✖️ Customización Homepage + 3 landings (no incluida)", "✅ Setup gestor interno: USD 5.000"],
     details: {
       discount: "-10%",
       subscription: "Trimestral"
     },
     description: "Ideal para empresas que buscan escalar, automatizar su operación y destacarse frente a la competencia."
   },
   // 4: INTERESTELAR
   4: {
     title: "🚀 Interestelar",
     subtitle: "Alianza estratégica, expansión sin límites",
     price: "USD 11.950",
     features: ["✔️ Marketplace B2C y B2B", "✔️ AgroWebs", "✔️ Gestor interno", "✔️ Consultor/acomercial dedicado/a", "✔️ Posicionamiento premium en homepage y listados", "✔️ Campañas de co-branding con Bipolos", "✔️ Participación en proyectos y clientes validados", "✔️ Acceso ampliado a infra estructural logística (CDR y PUMs)", "✔️ Reuniones personalizadas y condiciones comerciales pref.", "✔️ Clean team", "✔️ PDP Premium en todos los canales (B2C, B2B, Agrowebs, Gestor Interno)", "✔️ (Costo Mensual) Clean team (OPCIONAL)USD 6.350"],
     setupCosts: ["✅ Setup Agroweb: USD 9.000", "✅ Customización Homepage + 3 landings: USD 5.900", "✅ Setup gestor interno: USD 5.000"],
     details: {
       discount: "-20%",
       subscription: "Semestral"
     },
     description: "Para referentes del mercado que buscan maximizar su crecimiento omnicanal y operar como socios estratégicos de Bipolos."
   }
 },
 // 3: EMPRESA GRANDE
 3: {
   // 1: GRAVEDAD
   1: {
     title: "🌑 Gravedad",
     subtitle: "Tu primer paso al universo digital",
     price: "USD 300",
     features: ["✔️ Marketplace B2C y B2B", "✔️ Publicación de productos en canal mayorista y minorista", "✔️ Cotizador activo y estadísticas básicas", "✔️ Participación en campañas generales de tráfico", "✔️ Soporte por email"],
     notIncluded: ["✖️ Setup Agroweb", "✖️ Customización Homepage + 3 landings", "✖️ Setup gestor interno"],
     details: {
       discount: "0%",
       subscription: "No aplica",
       bonus: "No aplica"
     },
     description: "Ideal para empresas que dan sus primeros pasos en el canal digital. Para iniciar a explorar sin compromiso."
   },
   // 2: ÓRBITA
   2: {
     title: "🛰️ Órbita",
     subtitle: "Herramientas clave para avanzar",
     price: "USD 2.950",
     features: ["✔️ Marketplace B2C y B2B", "✔️ Publicación ilimitada de productos", "✔️ Soporte por WhatsApp", "✔️ Plan de incentivos comerciales", "✔️ Reportes mensuales de performance", "✔️ Mejora de catálogo y acompañamiento operativo", "✔️ Participación en campañas destacadas", "✔️ Posicionamiento medio en resultados de búsqueda"],
     notIncluded: ["✖️ Setup Agroweb", "✖️ Customización Homepage + 3 landings", "✖️ Setup gestor interno"],
     details: {
       discount: "0%",
       subscription: "Mensual",
       bonus: "USD 950 si cumplís con las condiciones*"
     },
     description: "Ideal para empresas activas que quieren mejorar su gestión, visibilidad y rendimiento comercial."
   },
   // 3: GALAXIA
   3: {
     title: "🌌 Galaxia",
     subtitle: "Tu negocio se destaca en el canal digital",
     price: "USD 4.950",
     features: ["✔️ Marketplace B2C y B2B", "✔️ AgroWebs", "✔️ Gestor interno", "✔️ Acceso a tu propia AgroWeb personalizada", "✔️ Panel de gestión para tus vendedores", "✔️ Reuniones trimestrales de performance", "✔️ Posicionamiento destacado en newsletters", "✔️ Prioridad alta en resultados de búsqueda", "✔️ Acceso a consorcios de compra", "✔️ Mayor desc. en logística y serv."],
     setupCosts: ["✅ Setup Agroweb: USD 9.000", "✖️ Customización Homepage + 3 landings (no incluida)", "✅ Setup gestor interno: USD 5.000"],
     details: {
       discount: "-10%",
       subscription: "Trimestral"
     },
     description: "Ideal para empresas que buscan escalar, automatizar su operación y destacarse frente a la competencia."
   },
   // 4: INTERESTELAR
   4: {
     title: "🚀 Interestelar",
     subtitle: "Alianza estratégica, expansión sin límites",
     price: "USD 11.950",
     features: ["✔️ Marketplace B2C y B2B", "✔️ AgroWebs", "✔️ Gestor interno", "✔️ Consultor/acomercial dedicado/a", "✔️ Posicionamiento premium en homepage y listados", "✔️ Campañas de co-branding con Bipolos", "✔️ Participación en proyectos y clientes validados", "✔️ Acceso ampliado a infra estructural logística (CDR y PUMs)", "✔️ Reuniones personalizadas y condiciones comerciales pref.", "✔️ Clean team"],
     setupCosts: ["✅ Setup Agroweb: USD 9.000", "✅ Customización Homepage + 3 landings: USD 5.900", "✅ Setup gestor interno: USD 5.000"],
     details: {
       discount: "-20%",
       subscription: "Semestral"
     },
     description: "Para referentes del mercado que buscan maximizar su crecimiento omnicanal y operar como socios estratégicos de Bipolos."
   }
 }
};


// Función para calcular precio con descuento
const calculateDiscountedPrice = (originalPrice: string, priceLevel: CustomerType): string | null => {
  if (priceLevel === 1) return null; // Agronomía no tiene descuento
  
  const numericPrice = parseFloat(originalPrice.replace(/[^\d.]/g, ''));
  if (isNaN(numericPrice)) return null;
  
  const discountPercentage = priceLevel === 2 ? 0.5 : 0.35; // 50% para Empresa Chica, 35% para Empresa Grande
  const discountedPrice = numericPrice * (1 - discountPercentage);
  
  return `USD ${discountedPrice.toLocaleString()}`;
};

const getPlanBadge = (planType: PlanType, highlightedPlanType: PlanType) => {
  if (planType === highlightedPlanType) {
    return {
      badge: planType === 2 ? "MAS POPULAR" : "RECOMENDADO",
      badgeColor: planType === 2 ? "popular" as const : "recommended" as const
    };
  }
  return {};
};

// Helper para convertir índice numérico a nombre de plan
const getPlanNameByIndex = (planIndex: PlanType): string => {
  return PLAN_MAPPING[planIndex];
};

// Función principal que configura los planes con parámetros directos
const configurePlans = (customerType: CustomerType, highlightedPlan: PlanType) => {
  const plans = [];
  
  // Generar los 4 planes para el tipo de cliente seleccionado
  for (let planType = 1; planType <= 4; planType++) {
    const planConfig = PLAN_CONFIGURATIONS[customerType][planType as PlanType];
    const discountedPrice = planType > 1 ? calculateDiscountedPrice(planConfig.price, customerType) : null;
    
    plans.push({
      ...planConfig,
      discountedPrice,
      priceLevel: customerType,
      ...getPlanBadge(planType as PlanType, highlightedPlan)
    });
  }
  
  return plans;
};

const getHighlightedPlan = (customerType: CustomerType): PlanType => {
  return customerType === 3 ? 4 : 3;
};

// Configuración central - cambiar estos valores para modificar el comportamiento
const CONFIG = {
  priceLevel: 2 as CustomerType,        // 1=Agronomía, 2=Empresa Chica, 3=Empresa Grande
  activePlan: 4 as PlanType         // 1=Gravedad, 2=Órbita, 3=Galaxia, 4=Interestelar
};

//Si es agronomia o empresa chica el recomendado es Galaxia
//Si es empresa grande, el recomendado es interestelar
const highlightedPlan = getHighlightedPlan(CONFIG.priceLevel);

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Obtener el plan activo dinámicamente basado en CONFIG
  const currentUserPlan = getPlanNameByIndex(CONFIG.activePlan);

  // Usar configurePlans con parámetros desde CONFIG y desde const highlightedPlan
  const plans = configurePlans(CONFIG.priceLevel, highlightedPlan);
  console.log("Plans configured:", plans.map(p => ({ title: p.title, price: p.price, badge: p.badge })));
  
  // Función para determinar la visibilidad de botones basada en el plan activo
  const getButtonVisibility = (planIndex: number) => {
    const currentPlanIndex = CONFIG.activePlan - 1; // Convertir a índice base 0
    
    if (planIndex === currentPlanIndex) {
      return { showButton: true, isCurrentPlan: true };
    } else if (planIndex > currentPlanIndex) {
      return { showButton: true, isCurrentPlan: false };
    } else {
      return { showButton: false, isCurrentPlan: false };
    }
  };
  
  // Función para manejar la selección de planes
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
          {plans.map((plan, index) => {
            const buttonVisibility = getButtonVisibility(index);
            return (
              <PlanCard 
                key={plan.title} 
                title={plan.title} 
                subtitle={plan.subtitle} 
                price={plan.price} 
                discountedPrice={plan.discountedPrice} 
                priceLevel={plan.priceLevel} 
                features={plan.features} 
                notIncluded={plan.notIncluded} 
                setupCosts={plan.setupCosts} 
                details={plan.details} 
                badge={plan.badge} 
                badgeColor={plan.badgeColor} 
                isCurrentPlan={buttonVisibility.isCurrentPlan}
                showButton={buttonVisibility.showButton}
                onSelect={() => handlePlanSelect(plan.title)} 
              />
            );
          })}
        </div>
      </div>

      {/* Request Modal */}
      <PlanRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} planName={selectedPlan || ""} />
    </div>;
};
export default Index;
