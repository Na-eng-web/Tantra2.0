import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-500">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Transform Your Vision into Reality? Let's Get Started!
          </h2>
          <Button size="lg" variant="secondary" className="rounded-full">
            Contact us
          </Button>
          
          <div className="pt-8">
            <div className="w-full max-w-md mx-auto h-64 rounded-3xl bg-white/20 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
