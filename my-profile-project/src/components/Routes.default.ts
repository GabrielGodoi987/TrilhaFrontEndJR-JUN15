import type {Routes} from "@/models/types/RouteType";
import {DefaultRoutes} from "@/models/DefaultRouters";

export const routes: Routes[] = [
    {
        name: "Home",
        path: DefaultRoutes.home
    },
    {
        name: 'Blog',
        path: DefaultRoutes.blog
    },
    {
        name: 'Login',
        path: DefaultRoutes.login
    }
]