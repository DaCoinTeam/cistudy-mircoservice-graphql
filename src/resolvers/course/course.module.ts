import { Module } from "@nestjs/common"
import {
    CourseMySqlEntity,
    EnrolledInfoEntity,
    SectionMySqlEnitiy,
    LectureMySqlEntity,
    ResourceMySqlEntity,
    UserMySqlEntity,
    SessionMySqlEntity,
} from "@database"
import CourseResolvers from "./course.resolvers"
import { TypeOrmModule } from "@nestjs/typeorm"
import CourseService from "./course.service"

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CourseMySqlEntity,
            EnrolledInfoEntity,
            SectionMySqlEnitiy,
            LectureMySqlEntity,
            ResourceMySqlEntity,
            SectionMySqlEnitiy,
            UserMySqlEntity,
            SessionMySqlEntity
        ]),
    ],
    providers: [CourseResolvers, CourseService],
})
export default class CourseModule {}
