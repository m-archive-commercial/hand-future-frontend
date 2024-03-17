import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { UserAvatar } from "~/components/shared/BaseAvatar";
import { Section } from "~/components/shared/Section";
import { PartnerLink } from "~/components/specs/user/PartnerLink";
import { WorkPresentation } from "~/components/specs/work/WorkPresentation";
import { Label } from "~/components/ui/label";
import { BG_COVER_FALLBACK } from "~/config/cover";

import { normalizeImageUri } from "~/lib/image";

import { IUserWithId } from "../../../schema/user";
import { IWork } from "../../../schema/work";

export const HeroProfileReadMode = ({
  user,
  works,
}: {
  user: IUserWithId;
  works: IWork[];
}) => {
  return (
    <div className="w-full grow flex flex-col gap-2">
      {/* cover with frontend captains */}
      <div className="shadow-blackA7 w-full max-auto overflow-hidden rounded-md shadow-[0_2px_10px] relative">
        <AspectRatio.Root ratio={16 / 5}>
          <div
            style={{
              backgroundImage: `linear-gradient(to right, rgba(9, 50, 50, 0), rgba(9, 148, 143, 1)), url('${user.cover ? normalizeImageUri(user.cover) : BG_COVER_FALLBACK}')`,
              backgroundSize: "cover",
            }}
            className="h-full w-full"
          />
        </AspectRatio.Root>

        <div className="absolute p-12 left-0 bottom-0 max-w-screen-sm flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <UserAvatar user={user} />
            <h2 className={"font-bold text-lg"}>{user.name}</h2>
          </div>

          {user.title
            ?.split("\n")
            .map((line, index) => <p key={index}>{line}</p>)}

          <div className="mt-8 flex items-center gap-1">
            <Label>携手嘉宾</Label>
            {user?.partners?.length ? (
              user?.partners.map((id) => <PartnerLink id={id} key={id} />)
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
      {works.length ? (
        <div className="gap-4 grid md:grid-cols-2">
          {works.map((work) => (
            <WorkPresentation key={work.id} work={work} isEditable={false} />
          ))}
        </div>
      ) : (
        <div className="h-24 w-full flex justify-center items-center text-xl font-medium text-gray-500">
          暂无作品，赶快上传一个吧！
        </div>
      )}
    </div>
  );
};
