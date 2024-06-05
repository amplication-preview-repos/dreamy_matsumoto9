import { JsonValue } from "type-fest";
import { TimeEntry } from "../timeEntry/TimeEntry";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  timeEntries?: Array<TimeEntry>;
  updatedAt: Date;
  username: string;
};
