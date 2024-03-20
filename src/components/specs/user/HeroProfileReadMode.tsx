import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { UserAvatar } from "~/components/shared/BaseAvatar";
import { Section } from "~/components/shared/Section";
import { PartnerLink } from "~/components/specs/user/PartnerLink";
import { WorkPresentation } from "~/components/specs/work/WorkPresentation";
import { Label } from "~/components/ui/label";
import { BG_COVER_FALLBACK } from "~/config/cover";

import { normalizeImageUri } from "~/lib/image";

import { IHeroDetail } from "../../../schema/user";

export const HeroProfileReadMode = ({ hero }: { hero: IHeroDetail }) => {
  return (
    <div className="w-full grow flex flex-col gap-2">
      {/* cover with frontend captains */}
      <div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">
        <AspectRatio.Root ratio={16 / 5}>
          <div
            style={{
              backgroundImage: `linear-gradient(to right, rgba(9, 50, 50, 0), rgba(9, 148, 143, 1)), url('${hero.cover ? normalizeImageUri(hero.cover) : BG_COVER_FALLBACK}')`,
              backgroundSize: "cover",
            }}
            className="h-full w-full"
          />
        </AspectRatio.Root>

        <div className="absolute p-12 left-0 bottom-0 max-w-screen-sm flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <UserAvatar user={hero} />
            <h2 className={"font-bold text-lg"}>{hero.name}</h2>
          </div>

          {hero.title
            ?.split("\n")
            .map((line, index) => <p key={index}>{line}</p>)}

          <div className="mt-8 flex items-center gap-1">
            <Label>携手嘉宾</Label>
            {hero?.toHeroes.length ? (
              hero?.toHeroes.map((heroRelation) => (
                <PartnerLink id={heroRelation.toId} key={heroRelation.toId} />
              ))
            ) : (
              <div className={"inline-flex items-center gap-1"}>
                <span className={"text-sm"}>我是一座静静的孤岛：）</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <Section title="作品集合" />

      {/*  works */}
      {hero.works.length ? (
        <div className="gap-4 grid md:grid-cols-2">
          {hero.works.map((work) => (
            <WorkPresentation key={work.id} work={work} isEditable={false} />
          ))}
        </div>
      ) : (
        <div className="h-24 w-full flex justify-center items-center text-xl font-medium text-gray-500">
          暂无作品
        </div>
      )}
    </div>
  );
};
