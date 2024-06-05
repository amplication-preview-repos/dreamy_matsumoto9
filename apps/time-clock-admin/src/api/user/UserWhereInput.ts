import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TimeEntryListRelationFilter } from "../timeEntry/TimeEntryListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  timeEntries?: TimeEntryListRelationFilter;
  username?: StringFilter;
};
