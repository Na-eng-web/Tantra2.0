import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { logo } from "@/assets";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const scrollToTeamSection = () => {
    const teamSection = document.getElementById("team-section");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTechServices = () => {
    const techServicesSection = document.getElementById("tech-services");
    if (techServicesSection) {
      techServicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Tantra Systems Logo" className="w-14 h-14" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={handleHomeClick}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={scrollToTechServices}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={scrollToTeamSection}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </button>
          </div>

          <Link to="/contact">
            <Button className="rounded-full">Contact us</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
