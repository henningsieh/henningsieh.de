"use client"

// src/components/Portfolio.tsx:
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { basicData } from "@/data"
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
                  {basicData.websiteTitle}
                  <br />
                  {basicData.address.street}
                  <br />
                  {basicData.address.zipCode} {basicData.address.city}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>{basicData.telephone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>{basicData.email}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent">
                  Bankverbindung
                </h3>
                <p className="mt-2">
                  Inhaber: {basicData.bank.account.holder}
                  <br />
                  IBAN: {basicData.bank.account.iban}
                  <br />
                  Bank (BIC): {basicData.bank.name} ({basicData.bank.bic})
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-accent">
                  Steuerdaten
                </h3>
                <p className="mt-2">
                  USt-Id: {basicData.taxinfo.tax_number_UStId}
                  <br />
                  {basicData.taxinfo.tax_authority_city}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
