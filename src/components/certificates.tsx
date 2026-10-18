"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, CheckCircle2, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Certificates() {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized credentials, specialized technical courses, and competitive milestones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => {
            const image = PlaceHolderImages.find((p) => p.id === cert.imageUrl);
            return (
              <Card
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group cursor-pointer overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={cert.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-background text-foreground border border-border shadow-sm">
                        <ZoomIn className="w-3.5 h-3.5" /> View Certificate
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{cert.issuer}</span>
                    </div>
                    <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground pt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certificate Modal */}
        <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
          {selectedCert && (
            <DialogContent className="max-w-2xl p-6">
              <DialogHeader className="space-y-1 text-left">
                <div className="text-xs font-semibold text-primary">{selectedCert.issuer}</div>
                <DialogTitle className="text-xl font-bold font-headline">
                  {selectedCert.title}
                </DialogTitle>
                <div className="text-xs text-muted-foreground">Issued: {selectedCert.date}</div>
              </DialogHeader>

              <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden border border-border mt-3">
                {(() => {
                  const img = PlaceHolderImages.find((p) => p.id === selectedCert.imageUrl);
                  return img ? (
                    <Image
                      src={img.imageUrl}
                      alt={selectedCert.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 640px"
                    />
                  ) : null;
                })()}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
