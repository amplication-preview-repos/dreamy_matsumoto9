import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimeEntryService } from "./timeEntry.service";
import { TimeEntryControllerBase } from "./base/timeEntry.controller.base";

@swagger.ApiTags("timeEntries")
@common.Controller("timeEntries")
export class TimeEntryController extends TimeEntryControllerBase {
  constructor(
    protected readonly service: TimeEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
