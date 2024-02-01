import { Module } from "@nestjs/common"
import { CourseModule } from "./course"
import { PostModule } from "./post"

@Module({
    providers: [CourseModule, PostModule],
})
export default class ResolversModule {}
