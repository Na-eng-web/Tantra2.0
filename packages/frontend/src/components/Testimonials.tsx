import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Trusted by Leading Organizations</h2>
          <p className="text-muted-foreground mb-8">
            Our TS+ Team Has experience in different areas
          </p>
          <p className="text-muted-foreground mb-8">
            to supercharge impact.
          </p>
          <Button className="rounded-full" size="lg">
            Our Approach
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
