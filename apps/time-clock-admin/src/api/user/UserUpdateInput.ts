import { InputJsonValue } from "../../types";
import { TimeEntryUpdateManyWithoutUsersInput } from "./TimeEntryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  timeEntries?: TimeEntryUpdateManyWithoutUsersInput;
  username?: string;
};
