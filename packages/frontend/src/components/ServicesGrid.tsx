import { Card, CardContent } from "@/components/ui/card";
import { Code2, TestTube2, BarChart3, Smartphone, Cloud, Palette, MonitorSmartphone } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Front-end",
    description: "Using the latest technologies and best practices to ensure high performance and user experience.",
  },
  {
    icon: Code2,
    title: "Back-end",
    description: "Create software software accurately and completely using test-driven development and continuous testing methods.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Gain actionable insights from your data through advanced analytics, visualization, and reporting.",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-black font-bold text-2xl mb-2">
            Our <span className="text-primary">multidisciplinary expert</span> are strategically assembled
          </p>
          <p className="text-black font-bold text-2xl">
            to conquer any challenge
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
