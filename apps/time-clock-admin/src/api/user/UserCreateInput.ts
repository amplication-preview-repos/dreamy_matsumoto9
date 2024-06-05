import { InputJsonValue } from "../../types";
import { TimeEntryCreateNestedManyWithoutUsersInput } from "./TimeEntryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  timeEntries?: TimeEntryCreateNestedManyWithoutUsersInput;
  username: string;
};
