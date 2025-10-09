// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'hubspot-account-info-mcp/filtering';
import { Metadata, asTextContentResult } from 'hubspot-account-info-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import HubspotAccountInfo from 'hubspot-account-info';

export const metadata: Metadata = {
  resource: 'account_info.v3',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/account-info/v3/details',
  operationId: 'getAccountDetails',
};

export const tool: Tool = {
  name: 'retrieve_details_account_info_v3',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet account details\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/v3_retrieve_details_response',\n  $defs: {\n    v3_retrieve_details_response: {\n      type: 'object',\n      properties: {\n        companyCurrency: {\n          type: 'string'\n        },\n        portalId: {\n          type: 'integer'\n        },\n        timeZone: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: HubspotAccountInfo, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.accountInfo.v3.retrieveDetails()));
};

export default { metadata, tool, handler };
