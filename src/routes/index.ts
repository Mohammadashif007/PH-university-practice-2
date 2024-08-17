import { Router } from "express";
import { StudentRoutes } from "../app/modules/student/student.route";

export const router = Router();

const moduleRoutes = [
    {
        path: "/student",
        route: StudentRoutes
    }
]

moduleRoutes.forEach(route => router.use(route.path, router.route))

