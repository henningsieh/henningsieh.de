"use client"

// src/components/Portfolio.tsx:
import { MailIcon, PhoneIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { basicData } from "@/data"

export default function Component() {
  return (
    <>
      {/* Imprint Section */}
      <section id="imprint" className="bg-primary/10 flex min-h-screen items-center justify-center px-2 pt-20 pb-12">
        <Card className="shadow-primary/10 w-[896px] shadow-lg">
          <CardHeader>
            <CardTitle className="section-title">
              <h1>Impressum</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-8">
            <div className="text-foreground space-y-6">
              {/*Kontakt*/}
              <div className="space-y-2">
                <div>
                  <h2 className="text-accent text-xl font-semibold">Kontakt</h2>
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
                    <PhoneIcon className="text-accent h-4 w-4" />
                    <span>{basicData.address.landlinePhoneNumber}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="text-accent h-4 w-4" />
                    <span>{basicData.email}</span>
                  </div>
                </div>
              </div>

              {/*Umsatzsteuer-ID*/}
              <div>
                <h2 className="text-accent text-xl font-semibold">Umsatzsteuer-ID</h2>
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
                <h3 className="text-accent text-xl font-semibold">Bankverbindung</h3>
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
