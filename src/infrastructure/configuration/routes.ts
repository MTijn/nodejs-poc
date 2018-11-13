import {TestResource} from "../resource/test.resource";

export class Routes {
    private testResource: TestResource;

    constructor() {
        this.testResource = new TestResource();
    }

    public routes(app, oidc): void {
        app.use(oidc.router);
        app.get("/", (req, res) => {
            if (req.userContext) {
                const userinfo = req.userContext.userinfo;
                res.send(`Hi ${userinfo.name}!`);
            } else {
                res.send('Hi!');
            }
        });
        app.get("/test", oidc.ensureAuthenticated(), this.testResource.test);
        app.get("/blaat", oidc.ensureAuthenticated(), this.testResource.createTrack);
        app.get('/logout', (req, res) => {
            req.logout();
            res.redirect('/');
        });
    }
}
