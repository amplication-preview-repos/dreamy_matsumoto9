import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TimeEntryCreateInput = {
  clockIn?: Date | null;
  clockOut?: Date | null;
  user?: UserWhereUniqueInput | null;
};
