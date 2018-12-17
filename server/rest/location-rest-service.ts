import {AbstractRestService} from "./abstract-rest-service";
import {AbstractDatabase} from "../database/abstract-database";
import {LocationDatabase} from "../database/location-database";

export class LocationRestService extends AbstractRestService {

    constructor(app,  database: AbstractDatabase) {
        super(app, database);
    }

}
