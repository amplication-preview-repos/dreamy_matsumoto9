import { SortOrder } from "../../util/SortOrder";

export type TimeEntryOrderByInput = {
  clockIn?: SortOrder;
  clockOut?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
