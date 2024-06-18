import type {Routes} from "@/models/types/RouteType";
import {DefaultRoutes} from "@/models/DefaultRouters";

export const routes: Routes[] = [
    {
        name: "Home",
        path: DefaultRoutes.home
    }
]