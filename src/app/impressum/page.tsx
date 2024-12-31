"use client"

// src/components/Portfolio.tsx:
import { basicData } from "@/data"
import { Mail, Phone } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <>
      {/* Imprint Section */}
      <section id="imprint" className="flex min-h-screen items-center justify-center bg-primary/10 px-2 pb-12 pt-20">
        <Card className="w-[896px] shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle className="section-title">
              <h1>Impressum</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-8">
            <div className="space-y-6 text-foreground">
              {/*Kontakt*/}
              <div className="space-y-2">
                <div>
                  <h2 className="text-xl font-semibold text-accent">Kontakt</h2>
                  <p className="text-muted-foreground">Angaben gemäß § 5 TMG / Redaktionell verantwortlich</p>
                  <p className="mt-2">
                    {basicData.name} - {basicData.occupationalCategory}
                    <br />
                    {basicData.address.street}
                    <br />
                    {basicData.address.zipCode} {basicData.address.city}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-accent" />
                    <span>{basicData.address.landlinePhoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-accent" />
                    <span>{basicData.email}</span>
                  </div>
                </div>
              </div>

              {/*Umsatzsteuer-ID*/}
              <div>
                <h2 className="text-xl font-semibold text-accent">Umsatzsteuer-ID</h2>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz
                </p>
                <p className="mt-2">
                  USt-Id: {basicData.tax_info.tax_number_UStId}
                  <br />
                  {basicData.tax_info.tax_authority_city}
                </p>
              </div>

              {/*Bankverbindung*/}
              <div>
                <h3 className="text-xl font-semibold text-accent">Bankverbindung</h3>
                <p className="mt-2">
                  Inhaber: {basicData.bank_info.account.holder}
                  <br />
                  IBAN: {basicData.bank_info.account.iban}
                  <br />
                  Bank (BIC): {basicData.bank_info.name} ({basicData.bank_info.bic})
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
