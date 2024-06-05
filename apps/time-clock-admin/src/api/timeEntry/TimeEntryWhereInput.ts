import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TimeEntryWhereInput = {
  clockIn?: DateTimeNullableFilter;
  clockOut?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
