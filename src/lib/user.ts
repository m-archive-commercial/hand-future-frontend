import moment from "moment";
import {
  IHeroDetail,
  IHeroWithoutUser,
  IUserInNotion,
  IUserWithId,
} from "../schema/user";

export const user2hero = (user: IUserInNotion): IHeroWithoutUser => ({
  id: user.id,
  // title: user.properties.title.rich_text[0]?.plain_text,
  title: user.properties.title.rich_text[0]?.plain_text,
  name: user.properties.嘉宾姓名.title[0]?.plain_text,
  updatedAt: moment(user.last_edited_time).toDate(),
  createdAt: moment(user.created_time).toDate(),
  avatar: user.properties.照片.files[0]?.file?.url ?? null,
  cover: user.properties.照片.files[0]?.file?.url ?? null,
  cities: user.properties.坐标.select?.name ?? null,
});

export const user2heroRelation = (
  user: IUserInNotion,
): { fromId: string; toId: string }[] =>
  user.properties.携手嘉宾.relation.map((r) => ({
    fromId: user.id,
    toId: r.id,
  }));

export const hero2userWithId = (hero: IHeroDetail): IUserWithId => ({
  name: hero?.name ?? undefined,
  cover: hero?.cover ?? undefined,
  avatar: hero?.avatar ?? undefined,
  title: hero?.title ?? undefined,
  email: hero.user.email ?? undefined,
  id: hero.id,
  role: "user",
  cities: hero?.cities ?? undefined,
  description: "", // todo: user.hero
  partners: hero.to.map((h) => h.toId),
});
