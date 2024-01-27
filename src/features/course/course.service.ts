import { CourseMySqlEntity } from "@database"
import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { FindOneCourseInput, FindManyCoursesInput } from "./inputs"

@Injectable()
export default class CourseService {
    constructor(
    @InjectRepository(CourseMySqlEntity)
    private readonly courseMySqlRepository: Repository<CourseMySqlEntity>,
    ) {}

    async findOneCourse(args: FindOneCourseInput): Promise<CourseMySqlEntity> {
        return await this.courseMySqlRepository.findOneBy(args)
    }

    async findManyCourses(args: FindManyCoursesInput): Promise<CourseMySqlEntity[]> {
        const founds = await this.courseMySqlRepository.findAndCount({
            relations: {
                creator: true
            }
        })
        console.dir(founds, { depth: null})
        return founds[0]
    }
}
