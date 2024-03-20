import crypto from "crypto";
import fs from "fs";
import https from "https";
import path from "path";

export interface IFileRemote2LocalRes {
  remote: string;
  local: string;
  success: boolean;
}

export const fileRemote2Local = async (
  remote: string,
): Promise<IFileRemote2LocalRes> => {
  const hash = crypto.createHash("sha256").update(remote).digest("hex");

  const local = path.resolve(process.cwd(), `uploaded/${hash}.jpg`);
  const res: IFileRemote2LocalRes = { remote, local, success: false };

  return new Promise((resolve, reject) => {
    // Use the https module to request the image
    const file = fs.createWriteStream(local);
    https
      .get(remote, (response) => {
        response.pipe(file);

        file.on("finish", () => {
          file.close();
          res.success = true;
          console.log(`downloaded file: ${res.remote} --> ${res.local}`);
          resolve(res);
        });
      })
      .on("error", (err) => {
        fs.unlink(local, () => {}); // Delete the file async. (but we don't check the result)
        console.error(
          `failed to download file from ${res.remote}: `,
          err.message,
        );
        reject(res);
      });
  });
};
