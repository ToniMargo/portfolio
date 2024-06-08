import UsesCard from "./UsesCard";
import { ITEMS } from "@/app/constants";

const UsesSection = () => {
  return (
    <section>
      {ITEMS.map((group, index) => (
        <div key={index} className="md:flex my-12">
          <h3 className="mb-3 md:mb-0 md:min-w-60 md:mr-8 font-bold">{group.groupName}</h3>
          <div className="md:pl-8">
            {group.items.map((item, itemIndex) => (
              <UsesCard key={itemIndex} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default UsesSection;
