---
title: Environments
---

One of the things that makes Zuplo different from most API gateways, and API management platforms is that you can rapidly deploy many environments. Some of our customers have as many as 250 concurrently deployed edge environments! This facilitates collaboration, where teams can collaborate on new features with a dedicated environment, deployed for no additional cost in under 20s.

## Environment Types

There are two distinct types of environment:

- **working-copy** - this is your development environment. You can think of this as your personal cloud laptop. To deploy to this environment you just need to save a change in portal.zuplo.com, that will automatically trigger a build and deploy of your working-copy. A working-copy environment typically ends in a `.dev` URL. These are _not_ deployed to the edge and run in a data-center. There are some subtle differences in behavior between edge deployments and working-copies, so it is important to test both before going to production. Note, every developer using Zuplo gets a private working-copy. These are not shared with anybody else. If you share a project with another person, they will have their own working-copy environment.

:::warning
Never use a working-copy environment in a production setting. They offer no SLA, and will often sleep after inactivity leading to slower cold-start times. There can be occasional downtime of a few seconds for upgrades.
:::

- **edge deployment** - these are real deployments that are deployed to the edge at 100s of data-centers around the world. They have 0ms startup time and offer very high availability due to their headless, distributed nature. You can deploy edge environments using our [GitHub integration](/docs/articles/source-control) or building a [custom CI/CD pipeline](/docs/articles/custom-ci-cd).

Edge deployments typically have a domain ending with `.app` but you can also configure [custom vanity domains](/docs/articles/custom-domains).

Edge deployments cannot be directly edited in portal.zuplo.com but they can be viewed - so you can see the source code currently deployed to an environment.

## Navigating Environments

At the top left corner of portal.zuplo.com you will see your **project/environment** selector. This consists of two selectors separated by a `/`.

On the left is the current project - you can change project by clicking on the project name (or create a new project).

One the right is the current **environment**. By default you will be looking at **working-copy** which is your private, editable, instance of the current project you are working on.

![Environments](./media/environments.png)

If you have other any **edge-deployments** you will see them listed alongside your working-copy. In this case we have two edge-deployments called `development` and `prod (main)`.

For users using [GitHub integration](/docs/articles/source-control) the name of the deployment matches the branch name (yes - creating a new environment is literally as easy as creating a new branch).

You can't edit the code of an edge-deployment in portal.zuplo.com but you can switch into those environments to perform a number of functions, such as:

- edit API consumers for this environment
- view analytics for this environment
- view Live Logs for this environment

## Different Backends per Environment

It's common to want a different backend for your production, staging and preview environments. This can be easily achieved by using [environment variables](./environment-variables.md) to specify the origin of the backend and then using that in your [URL Rewrite Handlers](../handlers/url-rewrite.md).

For example,

```json
${env.BASE_PATH}${pathname}
```

A url rewrite like this will combine the `BASE_PATH` environment variable, say `https://example.com` with the incoming path, e.g. `/foo/bar` to create a re-written URL:

```json
https://example.com/foo/bar
```
