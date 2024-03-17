import { Hero } from "@prisma/client";

export interface IUserInNotion {
  object: "page";
  id: string; // uuid
  created_time: string; // e.g. 2023-04-08T15:34:00.000Z
  last_edited_time: string; // e.g. 2023-04-08T15:34:00.000Z
  cover: string | null;
  url: string; // e.g. https://www.notion.so/8ec935a3b0c643d68523416699cc6a7c
  public_url: string; // e.g. https://gkleifeng.notion.site/8ec935a3b0c643d68523416699cc6a7c
  properties: {
    照片: {
      id: string;
      type: "files";
      files: {
        name: string;
        type: "file";
        file?: {
          url: string; // e.g. https://prod-files-secure.s3.us-west-2.amazonaws.com/b70e5588-c1dc-40ae-b6d2-d79bb1ea42e3/2d727b13-485a-4916-b928-13cb6a23919c/%E8%BE%9B%E5%AD%90%E4%BF%8A.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240317T073630Z&X-Amz-Expires=3600&X-Amz-Signature=ba89dc7404b75197a1244f10c08f1853ed7f389e481004e660c0656b1a394f08&X-Amz-SignedHeaders=host&x-id=GetObject
          // todo: 一小时有效期？
          expiry_time: string; // e.g. 2024-03-17T08:36:30.869Z
        };
      }[];
    };
    title: {
      id: string;
      type: "rich_text";
      rich_text: {
        type: "text";
        text: {
          content: string;
          link: string | null;
        };
        plain_text: string;
        href: string | null;
      }[];
    };
    坐标: {
      id: string;
      type: "select";
      select?: {
        id: string;
        name: string; // e.g. 北京
      };
    };
    嘉宾姓名: {
      id: "title";
      type: "title";
      title: {
        type: "text";
        plain_text: string; // e.g. 辛子俊
      }[];
    };
  };
}

export type IHeroWithoutUser = Omit<Hero, "userId">;
