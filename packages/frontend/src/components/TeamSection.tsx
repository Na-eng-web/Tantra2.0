import { abhiram, shivram, narendra } from "@/assets";

const teamMembers = [
  {
    name: "Narendra Sonvatkar",
    role: "Tech Lead",
    image: narendra,
  },
  {
    name: "Shivram Budrukkar",
    role: "Product Manager",
    image: shivram,
  },
  {
    name: "Abhiram Budrukkar",
    role: "QA Lead",
    image: abhiram,
  },
];

const TeamSection = () => {
  return (
    <section id="team-section" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600">The people who make it all happen</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-48 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 shadow-xl"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
