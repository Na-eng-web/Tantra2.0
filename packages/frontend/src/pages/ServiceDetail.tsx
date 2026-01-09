import { useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Use per-service image from services data
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesMap } from "@/data/services";

type ServiceSlug = keyof typeof servicesMap;

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: ServiceSlug }>();

  const data = useMemo(() => (slug && servicesMap[slug]) || null, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {!data ? (
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-semibold">Service not found</h1>
              <p className="text-muted-foreground">The service you’re looking for doesn’t exist.</p>
              <Link to="/">
                <Button className="rounded-full">Back to Home</Button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-3 mb-6">
                <div className="w-full h-56 md:h-72 rounded-2xl overflow-hidden border">
                  <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <h1 className="text-4xl font-bold text-center">{data.title}</h1>
                <p className="text-muted-foreground text-center">{data.description}</p>

                <Card className="rounded-2xl w-full">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${data.gradient} flex items-center justify-center`}>
                      <data.icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-xl font-semibold">What we deliver</h2>
                    <p className="text-muted-foreground">{data.details}</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {data.points.map((pt, i) => (
                        <div key={i} className="p-4 rounded-xl border shadow-lg hover:shadow-xl transition-shadow bg-white">
                          <h3 className="font-semibold">{pt.title}</h3>
                          <p className="text-sm text-muted-foreground">{pt.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;