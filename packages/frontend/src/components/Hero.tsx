import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { heroImage } from "@/assets";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              We build enterprise-ready websites and grow with your business.
            </h1>
            <p className="text-lg text-muted-foreground">
              Harnessing Innovation, Shaping Code at a Time
            </p>
            <Button size="lg" className="rounded-full gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Enterprise tech command center"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
