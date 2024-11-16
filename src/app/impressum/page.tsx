"use client"

// src/components/Portfolio.tsx:
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export default function Component() {
  return (
    <>
      {/* Imprint Section */}
      <section
        id="imprint"
        className="flex min-h-screen items-center justify-center bg-primary/10 px-2 pb-12 pt-20"
      >
        <Card className="w-[896px] shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle className="section-title">Impressum</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6 text-foreground">
              <div>
                <h3 className="text-xl font-semibold text-accent">Kontakt</h3>
                <p className="mt-2">
                  Henning Sieh – IT Beratung
                  <br />
                  Espenpfad 6<br />
                  63477 Maintal
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>+49 170 2786754</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>kontakt@henningsieh.de</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent">
                  Bankverbindung
                </h3>
                <p className="mt-2">
                  Inhaber: Henning Sieh
                  <br />
                  IBAN: DE13 3701 9000 1010 2278 09
                  <br />
                  BIC: BUNQDE82
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent">
                  Steuerdaten
                </h3>
                <p className="mt-2">
                  USt-Id: DE279588258
                  <br />
                  Finanzamt Hanau
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
