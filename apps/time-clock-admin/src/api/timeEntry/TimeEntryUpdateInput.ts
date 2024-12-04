import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TimeEntryUpdateInput = {
  clockIn?: Date | null;
  clockOut?: Date | null;
  user?: UserWhereUniqueInput | null;
};
