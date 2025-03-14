## Using the Policy

Adding PropelAuth to your route takes just a few steps, but before you can add
the policy you'll need to have PropelAuth setup for API Authentication.

### Setup PropelAuth

You'll need a [PropelAuth](https://www.propelauth.com/) account to use this
policy. If you don't already have a client to call your API, the easiest thing
to do is start with one of the
[PropelAuth examples](https://docs.propelauth.com/example-apps/apps) such as the
[React example](https://www.propelauth.com/post/react-express-starter-app).
Follow the instructions for setting up the example, then you can change the
authenticated API the example calls with your Zuplo API or just use the example
to get an access token.

### Set Environment Variables

Before adding the policy, there are a few environment variables that will need
to be set that will be used in the PropelAuth JWT Policy.

1. In the [Zuplo Portal](https://portal.zuplo.com) open the **Environment
   Variables** section in the <SettingsTabIcon /> **Settings** tab.

2. Click **Add new Variable** and enter the name `PROPEL_AUTH_URL` in the name
   field. Set the value to your PropelAuth Auth URL. You can find this value in
   the **Backend Integration** tab in the PropelAuth portal.

3. Click **Add new Variable** and enter the name `PROPEL_VERIFIER_KEY` in the
   name field. Set the value to your PropelAuth Public (Verifier) Key. You can
   find this value in the **Backend Integration** tab in the PropelAuth portal.

### Add the PropelAuth JWT Policy

The next step is to add the PropelAuth JWT policy to a route in your project.

1. In the [Zuplo Portal](https://portal.zuplo.com) open the **Route Designer**
   in the <CodeEditorTabIcon /> **Files** tab then click **routes.oas.json**.

2. Select or create a route that you want to authenticate with PropelAuth.
   Expand the **Policies** section and click **Add Policy**. Search for and
   select the PropelAuth JWT Auth policy.

  <Screenshot src="https://cdn.zuplo.com/assets/7fc2c436-c0a2-42cb-95d8-8425c88f5948.png" />

3. With the policy selected, notice that there are two properties, `authUrl` and
   `verifierKey` that are pre-populated with environment variable names that you
   set in the previous section.

  <Screenshot src="https://cdn.zuplo.com/assets/49bd02eb-3d71-436b-a9bc-3ecca9222111.png" size="md" />
 
4. Click **OK** to save the policy.

### Test the Policy

Finally, you'll make two API requests to your route to test that authentication
is working as expected.

1. In the route designer on the route you added the policy, click the **Test**
   button. In the dialog that opens, click **Test** to make a request.

2. The API Gateway should respond with a **401 Unauthorized** response.

  <Screenshot src="https://cdn.zuplo.com/assets/626e10a2-2350-439a-9081-1ccf1fe90cad.png" size="md" />

3. Now to make an authenticated request, add a header to the request called
   `Authorization`. Set the value of the header to `Bearer YOUR_ACCESS_TOKEN`
   replacing `YOUR_ACCESS_TOKEN` with the value of the Auth0 access token you
   saved from the first section of this tutorial.

  <Screenshot src="https://cdn.zuplo.com/assets/1486821b-cade-4041-b05b-80d3366327a5.png" size="lg" />

4. Click the **Test** button and a **200 OK** response should be returned.

  <Screenshot src="https://cdn.zuplo.com/assets/8182f932-8db6-4456-842f-f65158b174c0.png" size="md" />

You have now setup PropelAuth JWT Authentication on your API Gateway.

See [this document](/docs/articles/oauth-authentication) for more information
about OAuth authorization in Zuplo.
