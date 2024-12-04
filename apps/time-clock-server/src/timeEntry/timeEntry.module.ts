import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TimeEntryModuleBase } from "./base/timeEntry.module.base";
import { TimeEntryService } from "./timeEntry.service";
import { TimeEntryController } from "./timeEntry.controller";
import { TimeEntryResolver } from "./timeEntry.resolver";

@Module({
  imports: [TimeEntryModuleBase, forwardRef(() => AuthModule)],
  controllers: [TimeEntryController],
  providers: [TimeEntryService, TimeEntryResolver],
  exports: [TimeEntryService],
})
export class TimeEntryModule {}
