/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "portfolio",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const domainName =
      $app.stage === "prod" ? "trcanrey.com" : "dev.trcarney.com";
    const domainRedirect =
      $app.stage === "prod" ? "www.trcarney.com" : "www.dev.trcarney.com";

    new sst.aws.Astro("Portfolio", {
      buildCommand: "pnpm run build",
      domain: {
        name: domainName,
        redirects: [domainRedirect],
      },
    });

    const apiUrl =
      $app.stage !== "prod" ? "devapi.trcarney.com" : "api.trcarney.com";
    const api = new sst.aws.ApiGatewayV2("PortfolioApi", {
      domain: {
        name: apiUrl,
      },
    });

    api.route("POST /contact", {
      handler: "backend/api/post-contact.go",
      runtime: "go",
      memory: "256 MB",
      timeout: "30 seconds",
      permissions: [{ actions: ["ses:*"], resources: ["*"] }],
    });
  },
});
