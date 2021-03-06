import {Session} from "./infrastructure/configuration/session";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./infrastructure/configuration/routes";
import {ConfigureHandlers} from "./infrastructure/configuration/handlers";

require('dotenv').load();

class App {

    public app: express.Application;
    public routes: Routes = new Routes();
    public session: Session = new Session();
    public oidc;
    public handlers: ConfigureHandlers = new ConfigureHandlers();

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.session.session(this.app);
        this.oidc = this.session.oidc();
        this.routes.routes(this.app, this.oidc);
        this.handlers.configure();
    }
}

export default new App().app;
