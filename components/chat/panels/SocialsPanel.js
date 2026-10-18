import { P } from "@/data/portfolio";
import { I } from "../Icons";
import WidgetBox from "./WidgetBox";

export default function SocialsPanel() {
  return (
    <WidgetBox title="Socials" sample={P.socials.some((s) => /^Add /.test(s.handle))}>
      <div className="wbody">
        <div className="soc">
          {P.socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener">
              <span className="ic">{I[s.icon]}</span>
              <div><b>{s.name}</b><span>{s.handle}</span></div>
            </a>
          ))}
        </div>
      </div>
    </WidgetBox>
  );
}
