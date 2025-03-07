# cdktf + cdk8s starter template

WIP - this project is not fully functional out of the box.

It's a basic structure to let you create an integration between cdktf and cdk8s.

In addition, a config library is used to share types and functions between the two cdk projects.

I used a similar structure with great success in several companies, and I recommend you consider it if you're starting a new project that's intended to grow large (staging / production, multiple accounts, etc).

## Core Tech

- `pnpm` - workspaces for separating typescript projects
- `@cdklib/config` - for sharing types and functions between the two cdk projects
- `@cdklib/argo-synth` - for synthesizing the cdk8s apps into a directory structure for ArgoCD
- `cdktf` - to provision the infrastructure (vpc, eks cluster, etc)
- `cdk8s` - to deploy the app (backend services, ingress, etc)

## Multiple App support for cdktf

[cdktf.json](./cdk/tf/cdktf.json) requires an 'app' entrypoint.

You may decide if you want a single app or multiple apps in your cdktf project.

A single app will require you to prefix your stack names, e.g. `staging-<stack-name>`.

Multiple apps will require you to add a CDKTF_APP environment when running `cdktf`.

This repo takes the multiple app approach, based on `EnvId` naming. Look at [app directory](./cdk/tf/app) for the different environments.

Since some environments share the same logic, the [provisioners](./cdk/tf/src/provisioners/) directory includes logic for provisioning an environment based on type - for example, a cluster environment, a global environment (singletons), a management environment, etc.

I recommend using multiple apps for your cdktf project, to keep stack names short and avoid accidentally deploying to the wrong environment.

## Additional Notes

- Refer to [cdktf.json](./cdk/tf/cdktf.json) to add terraform providers and modules.
- Refer to [cdklib.d.ts](./tools/tsconfig/cdklib.d.ts) on EnvId definitions and fit to your needs
- Refer to [argocd/](./argocd/) for the GitOps resources generated through cdk8s.
- Refer to [cdk/k8s/cdk8s.yaml](./cdk/k8s/cdk8s.yaml) for kubernetes imports - which allow you to import kubernetes CRDs and have type-safety and intellisense (`@imports/*` alias).
