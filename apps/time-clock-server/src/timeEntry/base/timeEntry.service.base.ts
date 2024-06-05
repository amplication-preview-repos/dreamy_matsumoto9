/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  TimeEntry as PrismaTimeEntry,
  User as PrismaUser,
} from "@prisma/client";

export class TimeEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TimeEntryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.timeEntry.count(args);
  }

  async timeEntries<T extends Prisma.TimeEntryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeEntryFindManyArgs>
  ): Promise<PrismaTimeEntry[]> {
    return this.prisma.timeEntry.findMany<Prisma.TimeEntryFindManyArgs>(args);
  }
  async timeEntry<T extends Prisma.TimeEntryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeEntryFindUniqueArgs>
  ): Promise<PrismaTimeEntry | null> {
    return this.prisma.timeEntry.findUnique(args);
  }
  async createTimeEntry<T extends Prisma.TimeEntryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeEntryCreateArgs>
  ): Promise<PrismaTimeEntry> {
    return this.prisma.timeEntry.create<T>(args);
  }
  async updateTimeEntry<T extends Prisma.TimeEntryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeEntryUpdateArgs>
  ): Promise<PrismaTimeEntry> {
    return this.prisma.timeEntry.update<T>(args);
  }
  async deleteTimeEntry<T extends Prisma.TimeEntryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimeEntryDeleteArgs>
  ): Promise<PrismaTimeEntry> {
    return this.prisma.timeEntry.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.timeEntry
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}