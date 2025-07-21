import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PricingComparison = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Comparación Detallada de Planes
          </h1>
          <p className="text-xl text-muted-foreground">
            Encuentra el plan perfecto según el tamaño de tu empresa
          </p>
        </div>

        {/* AGRONOMÍA */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground">
              <CardTitle className="text-2xl text-center">AGRONOMÍA</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left font-semibold">Características</th>
                      <th className="p-4 text-center font-semibold">
                        <div className="space-y-2">
                          <div className="font-bold text-lg">Gravedad</div>
                          <div className="text-2xl font-bold text-primary">Gratis</div>
                        </div>
                      </th>
                      <th className="p-4 text-center font-semibold">
                        <div className="space-y-2">
                          <div className="font-bold text-lg">Órbita</div>
                          <div className="text-2xl font-bold text-primary">USD 950</div>
                        </div>
                      </th>
                      <th className="p-4 text-center font-semibold relative">
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500">
                          Recomendado
                        </Badge>
                        <div className="space-y-2 pt-4">
                          <div className="font-bold text-lg">Galaxia</div>
                          <div className="text-2xl font-bold text-primary">USD 2.950</div>
                        </div>
                      </th>
                      <th className="p-4 text-center font-semibold">
                        <div className="space-y-2">
                          <div className="font-bold text-lg">Interestelar</div>
                          <div className="text-2xl font-bold text-primary">USD 4.950</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Marketplace B2C</td>
                      <td className="p-4 text-center">✓</td>
                      <td className="p-4 text-center">✓</td>
                      <td className="p-4 text-center">✓</td>
                      <td className="p-4 text-center">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Marketplace B2B</td>
                      <td className="p-4 text-center">✓</td>
                      <td className="p-4 text-center">✓</td>
                      <td className="p-4 text-center">✓</td>
                      <td className="p-4 text-center">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">AgroWebs</td>
                      <td className="p-4 text-center">✗</td>
                      <td className="p-4 text-center">✗</td>
                      <td className="p-4 text-center">✓</td>
                      <td className="p-4 text-center">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Gestor interno</td>
                      <td className="p-4 text-center">✗</td>
                      <td className="p-4 text-center">✗</td>
                      <td className="p-4 text-center">✓</td>
                      <td className="p-4 text-center">✓</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Setup</td>
                      <td className="p-4 text-center">Gratis</td>
                      <td className="p-4 text-center">USD 300</td>
                      <td className="p-4 text-center">USD 300</td>
                      <td className="p-4 text-center">USD 300</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Suscripción mínima</td>
                      <td className="p-4 text-center">Mensual</td>
                      <td className="p-4 text-center">Mensual</td>
                      <td className="p-4 text-center">Trimestral</td>
                      <td className="p-4 text-center">Semestral</td>
                    </tr>
                    <tr className="border-b bg-green-50">
                      <td className="p-4 font-semibold">Bonificaciones</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center text-sm">
                        <div className="text-green-600 font-semibold">USD 950</div>
                        <div className="text-xs">si cumplís con las condiciones*</div>
                      </td>
                      <td className="p-4 text-center text-sm">
                        <div className="text-green-600 font-semibold">USD 950</div>
                        <div className="text-xs">si cumplís con las condiciones**</div>
                      </td>
                      <td className="p-4 text-center text-sm">
                        <div className="text-green-600 font-semibold">USD 950</div>
                        <div className="text-xs">si cumplís con las condiciones***</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Condiciones para Agronomía */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Condiciones para Bonificaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>*Condiciones Plan Órbita:</strong> Especificar condiciones aquí</p>
              <p><strong>**Condiciones Plan Galaxia:</strong> Especificar condiciones aquí</p>
              <p><strong>***Condiciones Plan Interestelar:</strong> Especificar condiciones aquí</p>
            </CardContent>
          </Card>
        </div>

        {/* EMPRESA CHICA */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-blue-600 text-white">
              <CardTitle className="text-2xl text-center">EMPRESA CHICA</CardTitle>
              <div className="text-center text-sm">50% primeros suscriptores</div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left font-semibold">Características</th>
                      <th className="p-4 text-center font-semibold">
                        <div className="space-y-2">
                          <div className="font-bold text-lg">Gravedad</div>
                          <div className="text-lg text-muted-foreground">Precio normal: USD 300</div>
                          <div className="text-2xl font-bold text-green-600">USD 300</div>
                        </div>
                      </th>
                      <th className="p-4 text-center font-semibold">
                        <div className="space-y-2">
                          <div className="font-bold text-lg">Órbita</div>
                          <div className="text-lg text-muted-foreground">Precio normal: USD 2.950</div>
                          <div className="text-2xl font-bold text-green-600">USD 1.475</div>
                        </div>
                      </th>
                      <th className="p-4 text-center font-semibold relative">
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500">
                          Recomendado
                        </Badge>
                        <div className="space-y-2 pt-4">
                          <div className="font-bold text-lg">Galaxia</div>
                          <div className="text-lg text-muted-foreground">Precio normal: USD 4.950</div>
                          <div className="text-2xl font-bold text-green-600">USD 2.475</div>
                        </div>
                      </th>
                      <th className="p-4 text-center font-semibold">
                        <div className="space-y-2">
                          <div className="font-bold text-lg">Interestelar</div>
                          <div className="text-lg text-muted-foreground">Precio normal: USD 11.950</div>
                          <div className="text-2xl font-bold text-green-600">USD 5.975</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Setup</td>
                      <td className="p-4 text-center">USD 300</td>
                      <td className="p-4 text-center">USD 300</td>
                      <td className="p-4 text-center">USD 300</td>
                      <td className="p-4 text-center">USD 300</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Suscripción mínima</td>
                      <td className="p-4 text-center">Mensual</td>
                      <td className="p-4 text-center">Mensual</td>
                      <td className="p-4 text-center">Trimestral</td>
                      <td className="p-4 text-center">Anual</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* EMPRESA GRANDE */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-purple-600 text-white">
              <CardTitle className="text-2xl text-center">EMPRESA GRANDE</CardTitle>
              <div className="text-center text-sm">35% primeros suscriptores</div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left font-semibold">Características</th>
                      <th className="p-4 text-center font-semibold">
                        <div className="space-y-2">
                          <div className="font-bold text-lg">Gravedad</div>
                          <div className="text-lg text-muted-foreground">Precio normal: USD 300</div>
                          <div className="text-2xl font-bold text-green-600">USD 300</div>
                        </div>
                      </th>
                      <th className="p-4 text-center font-semibold">
                        <div className="space-y-2">
                          <div className="font-bold text-lg">Órbita</div>
                          <div className="text-lg text-muted-foreground">Precio normal: USD 2.950</div>
                          <div className="text-2xl font-bold text-green-600">USD 1.918</div>
                        </div>
                      </th>
                      <th className="p-4 text-center font-semibold">
                        <div className="space-y-2">
                          <div className="font-bold text-lg">Galaxia</div>
                          <div className="text-lg text-muted-foreground">Precio normal: USD 4.950</div>
                          <div className="text-2xl font-bold text-green-600">USD 3.218</div>
                        </div>
                      </th>
                      <th className="p-4 text-center font-semibold relative">
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500">
                          Recomendado
                        </Badge>
                        <div className="space-y-2 pt-4">
                          <div className="font-bold text-lg">Interestelar</div>
                          <div className="text-lg text-muted-foreground">Precio normal: USD 11.950</div>
                          <div className="text-2xl font-bold text-green-600">USD 7.768</div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Setup</td>
                      <td className="p-4 text-center">USD 300</td>
                      <td className="p-4 text-center">USD 300</td>
                      <td className="p-4 text-center">USD 300</td>
                      <td className="p-4 text-center">USD 300</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold">Suscripción mínima</td>
                      <td className="p-4 text-center">Mensual</td>
                      <td className="p-4 text-center">Mensual</td>
                      <td className="p-4 text-center">Trimestral</td>
                      <td className="p-4 text-center">Anual</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Precios competitivos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Precios más competitivos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">Descuentos B2C</h3>
                <div className="space-y-2">
                  <p>Galaxia: 15%</p>
                  <p>Interestelar: 20%</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Descuentos B2B</h3>
                <div className="space-y-2">
                  <p>Galaxia: 25%</p>
                  <p>Interestelar: 30%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricingComparison;