import { extras } from "../../data/extra";
import type { Extra } from "../../data/extra";
import ExtraCard from "./ExtraCard/ExtraCard";

const ViewExtraSection: React.FC = () => {
  return (
    <section id="extra">
      <h2 className="section-title">Extra</h2>
      <div className="grid-3-cols">
        {extras.map((extra: Extra, index: number) => (
          <ExtraCard
            key={index}
            imgSrc={extra.imgSrc}
            title={extra.title}
            description={extra.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ViewExtraSection;
