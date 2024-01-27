import { Field, InputType } from "@nestjs/graphql"

@InputType()
export default class CourseFilterModel {
    @Field(() => String, { nullable: true})
        category: string
}