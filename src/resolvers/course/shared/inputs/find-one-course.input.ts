import { Field, ID, InputType } from "@nestjs/graphql"

@InputType()
export default class FindOneCourseInput {
  @Field(() => ID)
      courseId: string
}
