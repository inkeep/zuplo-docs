/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Overview",
      items: [
        "overview/index",
        "overview/what-is-zuplo",
        "overview/how-does-zuplo-work",
        "overview/should-you-use-zuplo",
        "overview/handlers",
        "overview/policies",
      ],
    },
    {
      type: "category",
      label: "Quick Starts",
      items: [
        "quickstarts/proxy-public-api",
        "quickstarts/use-api-key-authentication",
        "quickstarts/publish-developer-portal",
        "quickstarts/per-customer-rate-limits",
      ],
    },
    {
      type: "category",
      label: "Policies",
      link: { type: "doc", id: "policies/index" },
      items: [
        {
          type: "category",
          label: "Authentication",
          items: [
            "policies/api-key-auth-inbound",
            "policies/auth0-jwt-auth-inbound",
            "policies/aws-cognito-auth-inbound",
            "policies/basic-auth-inbound",
            "policies/open-id-jwt-auth-inbound",
            "policies/mtls-auth-inbound",
            "policies/hmac-auth-inbound",
          ],
        },
        {
          type: "category",
          label: "Security & Validation",
          items: [
            "policies/rate-limit-inbound",
            "policies/audit-log-inbound",
            "policies/validate-json-schema-inbound",
            "policies/request-validation-inbound",
          ],
        },
        {
          type: "category",
          label: "Billing & Quotas",
          items: ["policies/quota-inbound", "policies/billing-inbound"],
        },
        {
          type: "category",
          label: "Testing",
          items: [
            "policies/ab-test-inbound",
            "policies/mock-api-inbound",
            "policies/sleep-inbound",
          ],
        },
        {
          type: "category",
          label: "Request Filtering",
          items: [
            "policies/acl-policy-inbound",
            "policies/geo-location-inbound",
            "policies/ip-restriction-inbound",
            "policies/request-size-limit-inbound",
          ],
        },
        {
          type: "category",
          label: "Request Modification",
          items: [
            "policies/transform-body-inbound",
            "policies/remove-headers-inbound",
            "policies/clear-headers-inbound",
            "policies/change-method-inbound",
            "policies/add-query-param-inbound",
            "policies/formdata-to-json-inbound",
            "policies/redirect-response-inbound",
            "policies/remove-query-params-inbound",
            "policies/request-termination-inbound",
            "policies/set-headers-inbound",
          ],
        },
        {
          type: "category",
          label: "Response Modification",
          items: [
            "policies/transform-body-outbound",
            "policies/remove-headers-outbound",
            "policies/clear-headers-outbound",
            "policies/set-headers-outbound",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Handlers",
      items: [
        "handlers/url-rewrite",
        "handlers/aws-lambda",
        "handlers/custom-handler",
      ],
    },
    {
      type: "category",
      label: "Examples",
      items: [
        "examples/hello-world-api",
        "examples/archiving-requests-to-storage",
        "examples/gateway-over-airtable",
        "examples/gateway-over-salesforce",
        "examples/proxy-a-request-with-body",
        "examples/proxy-a-simple-get-request",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "runtime/zuplo-request",
        "runtime/zuplo-context",
        "runtime/web-standard-apis",
        "runtime/node-modules",
        "runtime/path-matching",
        "runtime/testing-your-api",
        "runtime/reusing-code",
        "runtime/safely-clone-a-request-or-response",
        "runtime/key-value-store",
      ],
    },
    {
      type: "doc",
      id: "sample-apis",
    },
  ],
};

module.exports = sidebars;
