import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    title: "The Power of UI/UX: Creating Engaging Digital Experiences",
    description: "Explore the intersection of design and technology. Gain insights into how thoughtful UI/UX design can transform user interactions and elevate digital experiences.",
    date: "March 14th, 2025",
    gradient: "from-orange-400/20 to-orange-500/20",
  },
  {
    title: "Agile Development: The Key to Rapid Success",
    description: "Gain insights into the principles of agile development and how it can accelerate your product development cycles while maintaining quality.",
    date: "March 20th, 2025",
    gradient: "from-purple-400/20 to-purple-500/20",
  },
  {
    title: "Mobile App Serenity: What We'll See in 2025",
    description: "Discover the innovations of the app development landscape. Explore trends, technologies, and user expectations shaping mobile experiences in 2025.",
    date: "March 25th, 2025",
    gradient: "from-yellow-400/20 to-yellow-500/20",
  },
];

const BlogInsights = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12">Our lastest Insights</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${insight.gradient}`}></div>
                <h3 className="font-semibold text-xl">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{insight.date}</span>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
