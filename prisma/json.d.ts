declare global {
  // 要放在里面
  import { WorkSource } from "../src/schema/work";

  namespace PrismaJson {
    type WorkModel = WorkSource<any>;
  }
}
