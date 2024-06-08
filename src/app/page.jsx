import Hero from "@/components/Hero";
import ArticleSection from "@/components/ArticleSection";
import WorkWidget from "@/components/WorkWidget";
import SignupWidget from "@/components/SignupWidget";
import SkillsWidget from "@/components/SkillsWidget";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Hero Section */}
      <div className="md:col-span-2 w-full">
        <Hero />
      </div>

      {/* Article Section */}
      <div className="md:col-span-2/3">
        <ArticleSection />
      </div>

      {/* Right Column */}
      <div className="md:col-span-1/3">
        <div className="flex justify-center grid gap-12">
          {/* Work Widget */}
          <div>
            <SignupWidget />
          </div>
          <div>
            <WorkWidget />
          </div>
          <div className="mb-12">
            <SkillsWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
