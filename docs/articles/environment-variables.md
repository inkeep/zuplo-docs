---
title: Environment Variables
---

Environment variables are key-value pairs that are stored outside of source code. The values of environment variables can be applied to particular environments in order to change behavior or configuration.

Environment variables can be read into source code and many configuration files in your project. Variables are only applied to environments on new deployments. If you change an environment variable, you must redeploy the environment in order for the updated value to take effect.

Environment variables can be configuration or secrets. While all values are stored encrypted at rest, only non-secret values can be read. Secrets are write-only, meaning the value cannot be retrieved once it is set.

## Environment Variable Editor

To set environment variables in your project, open the <SettingsTabIcon /> **Settings** tab and then select the **Environment Variables** section.

To create a new variable, click **Add new variable**.

![](https://cdn.zuplo.com/assets/bec84962-0139-4371-b3fd-a30e70860169.png)

Enter the name and value of your environment variable and select if you would like the value to be a secret or a regular value.

## Environments

Environment variables can be applied to one or many different environments. You can select one or more environments in which to apply the variable.

| Environment  | Description                                                                                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Prod         | The environment that is deployed from your **default** branch in source control. This is usually called `main`.                                                                            |
| Preview      | Any environment that is deployed from source control that is **not the default** branch. (i.e. `staging` or `preview`). This also includes any branch that is created from a pull request. |
| Working Copy | Any environment that is deployed while developing with the portal. Each developer gets their own working copy. Working copies are always deployed to `zuplo.dev`                           |

For the **Preview** environment option, a specific named environment can be selected. For example, if you want a variable set only for the environment deployed from the `staging` branch in source control.

For the **Working Copy** option, developers can set a personal override. This value **ONLY** applies to the developer who set the value.

:::info

A single environment variable name cannot overlap environments. For example, if you set a variable named `MY_VAR` and select all the environments a second variable named `MY_VAR` cannot be set on say the **Production** environments.

:::

## Reserved Environment Variables

Environment variables cannot start with `ZUPLO` or `__ZUPLO`.

## Using Environment Variables

There are several places in Zuplo you can access environment variables.

### Code

Variables can be accessed in code by importing `@zuplo/runtime`.

```ts
import { environment } from "@zuplo/runtime";

const myVar = environment.MY_VAR;
```

### Configuration Files

Inside some configuration files, environment variables can be referenced with the pattern `$env(MY_VAR)`.

For example, in the `policies.json` file, an environment variable could be set on a policy option.

```json
{
  "name": "my-custom-code-inbound-policy",
  "policyType": "custom-code-inbound",
  "handler": {
    "export": "default",
    "module": "$import(./modules/YOUR_MODULE)",
    "options": {
      "config1": "$env(MY_CONFIG_VAR)",
      "config2": true
    }
  }
}
```

### Rewrite & Forwarding Handler

When referencing environment variables inside of the URL Rewrite handler and the URL Forward handler, variables are substituted using Javascript style string interpolation.

```txt
https://${env.API_URL}/path/to/call
```
