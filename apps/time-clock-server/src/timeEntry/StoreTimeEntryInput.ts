import { ArgsType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ArgsType()
class StoreTimeEntryInput {
    @Field(() => Date)
    @Type(() => Date)
    clockIn!: Date;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    clockOut?: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;
}

export { StoreTimeEntryInput as StoreTimeEntryInput };