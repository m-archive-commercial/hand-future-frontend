import crypto from "crypto";
import fs from "fs";
import https from "https";
import path from "path";

export interface IFileRemote2LocalRes {
  remoteUri: string;
  localUri: string;
  localPath: string;
  success: boolean;
}

export const fileRemote2Local = async (
  remoteUri: string,
): Promise<IFileRemote2LocalRes> => {
  const hash = crypto.createHash("sha256").update(remoteUri).digest("hex");

  const filesPath = path.resolve(process.cwd(), "public/uploaded");
  if (!fs.existsSync(filesPath))
    await fs.mkdirSync(filesPath, {
      recursive: true, // 这个选项即使文件夹已经存在也不会报错
    });

  const fileName = `${hash}.jpg`;
  const localPath = path.resolve(filesPath, fileName);
  const localUri = `/uploaded/${fileName}`;

  const res: IFileRemote2LocalRes = {
    remoteUri,
    localUri,
    localPath,
    success: false,
  };

  return new Promise((resolve, reject) => {
    // Use the https module to request the image
    const file = fs.createWriteStream(localPath);
    https
      .get(remoteUri, (response) => {
        response.pipe(file);

        file.on("finish", () => {
          file.close();
          res.success = true;
          console.log(`downloaded file: ${res.remoteUri} --> ${res.localUri}`);
          resolve(res);
        });
      })
      .on("error", (err) => {
        fs.unlink(localPath, () => {}); // Delete the file async. (but we don't check the result)
        console.error(
          `failed to download file from ${res.remoteUri}: `,
          err.message,
        );
        reject(res);
      });
  });
};
