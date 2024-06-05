import { User } from "../user/User";

export type TimeEntry = {
  clockIn: Date | null;
  clockOut: Date | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
