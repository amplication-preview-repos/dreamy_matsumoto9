import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TimeEntryResolverBase } from "./base/timeEntry.resolver.base";
import { TimeEntry } from "./base/TimeEntry";
import { TimeEntryService } from "./timeEntry.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TimeEntry)
export class TimeEntryResolver extends TimeEntryResolverBase {
  constructor(
    protected readonly service: TimeEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
