const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
const session = require("express-session");

export class Session {
    public session(app): any {
        app.use(session({
            cookie: { httpOnly: true },
            secret: process.env.session_secret
        }));
    }

    public oidc(): any {
        return new ExpressOIDC({
            issuer: process.env.openid_issuer,
            redirect_uri: process.env.openid_redirect_uri,
            client_id: process.env.openid_client_id,
            client_secret: process.env.openid_client_secret,
            routes: {
                callback: {defaultRedirect: process.env.openid_default_redirect}
            }
        });
    }
}
