import { P } from "@/data/portfolio";
import { allTags } from "../tags";
import WidgetBox from "./WidgetBox";

export default function AboutPanel() {
  return (
    <WidgetBox title="About">
      <div className="wbody">
        <div className="about">
          <div className="big">S</div>
          <div>
            <h4>{P.name}</h4>
            <p>{P.role} · {P.location}</p>
          </div>
        </div>
        <p style={{ margin: "14px 0 0", maxWidth: "62ch" }}>{P.bio}</p>
        <div className="stats">
          <div><b>{P.projects.length}</b><span>projects</span></div>
          <div><b>{allTags.length}</b><span>technologies used</span></div>
          <div><b>{P.projects.filter((p) => p.tags.includes("Python")).length}</b><span>Python projects</span></div>
        </div>
      </div>
    </WidgetBox>
  );
}
