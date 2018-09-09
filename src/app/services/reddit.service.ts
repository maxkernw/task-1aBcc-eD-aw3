import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class RedditService extends HttpService {
    constructor(http: HttpClient) {
        super(http);
    }
}