import { PropsWithChildren } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const ConfigCard = ({
  title,
  children,
}: { title: string } & PropsWithChildren) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className={"flex flex-col gap-4"}>{children}</CardContent>
    </Card>
  );
};
