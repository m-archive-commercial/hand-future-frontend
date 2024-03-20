import { skipToken } from "@reduxjs/toolkit/query";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { IUserWithId } from "../schema/user";
import { useGetUserQuery } from "../store/states/api/userApi";

export const useUserId = (): string | undefined => {
  const { data } = useSession();
  return data?.user.id;
};

export const useUser = (): IUserWithId | null => {
  const [user, setUser] = useState<IUserWithId | null>(null);
  const userId = useUserId();

  const { data: userData } = useGetUserQuery(
    userId ? { id: userId } : skipToken,
  );
  // console.log({ userData })

  useEffect(() => {
    if (!userData) return;
    setUser(userData);
  }, [userData]);

  return user;
};

export const useSelf = (id: string | undefined): boolean => {
  const yourId = useUserId();
  return id ? yourId === id : false;
};

export const useAdmin = (): boolean => {
  const user = useUser();

  return user?.email === "877210964@qq.com" || user?.role === "admin";
};
