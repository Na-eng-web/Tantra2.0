import { Card, CardContent } from "@/components/ui/card";
import { Code2, TestTube2, Smartphone, Palette, Cloud, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const techServices = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Create custom software solutions to your specific business needs, goals, and workflows.",
    gradient: "from-green-400/20 to-green-500/20",
    slug: "custom-software-development",
  },
  {
    icon: TestTube2,
    title: "QA and Testing",
    description: "Create software software accurately and completely using test-driven.",
    gradient: "from-blue-400/20 to-blue-500/20",
    slug: "qa-and-testing",
  },
  {
    icon: Brain,
    title: "AI and Data Science",
    description: "Use emerging AI, machine learning, and data science capabilities to drive innovation.",
    gradient: "from-yellow-400/20 to-yellow-500/20",
    slug: "ai-and-data-science",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create beautiful, user-friendly, and intuitive interfaces that enhance user experience.",
    gradient: "from-orange-400/20 to-orange-500/20",
    slug: "ui-ux-design",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Building native & mobile applications for iOS and Android platforms.",
    gradient: "from-blue-400/20 to-blue-500/20",
    slug: "mobile-app-development",
  },
  {
    icon: Cloud,
    title: "Platform and Infrastructure",
    description: "From cloud platforms to on-prem, build the right infrastructure for your business.",
    gradient: "from-red-400/20 to-red-500/20",
    slug: "platform-and-infrastructure",
  },
];

const TechServices = () => {
  const navigate = useNavigate();
  return (
    <section id="tech-services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Empowering Your Digital Vision: Our
          </h2>
          <h2 className="text-4xl font-bold text-primary">
            Comprehensive Tech Services.
          </h2>
        </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {techServices.map((service, index) => (
             <div key={index}
                  className="rounded-2xl focus:outline-none"
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/services/${service.slug}`)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/services/${service.slug}`); }}
             >
               <Card className="hover:shadow-lg shadow-xl transition-all hover:-translate-y-1 rounded-2xl">
                 <CardContent className="p-8 space-y-4">
                   <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                     <service.icon className="h-8 w-8" />
                   </div>
                   <h3 className="font-semibold text-xl">{service.title}</h3>
                   <p className="text-muted-foreground">{service.description}</p>
                 </CardContent>
               </Card>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default TechServices;
