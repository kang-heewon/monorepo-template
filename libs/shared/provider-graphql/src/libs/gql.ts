/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation ConfirmCheckout($input: ConfirmCheckoutInput!) {\n    confirmCheckout(input: $input) {\n      subscription {\n        id\n        workspaceId\n        status\n        plan\n        currency\n      }\n    }\n  }\n": typeof types.ConfirmCheckoutDocument,
    "\n  mutation CreateSubscriptionOnSubscriptionSelectForm($input: CreateSubscriptionInput!) {\n    createSubscription(input: $input) {\n      checkoutUrl\n      checkoutId\n    }\n  }\n": typeof types.CreateSubscriptionOnSubscriptionSelectFormDocument,
    "\n  query GetKudosBalance {\n    kudosBalance {\n      dailyLimit\n      usedToday\n      remainingBalance\n    }\n  }\n": typeof types.GetKudosBalanceDocument,
    "\n  query KudosConfigOnKudosConfigForm {\n    kudosConfig {\n      id\n      dailyLimit\n      kudosEmoji\n      kudosChannelId\n      timezone\n    }\n  }\n": typeof types.KudosConfigOnKudosConfigFormDocument,
    "\n  mutation UpdateKudosConfigOnKudosConfigForm($input: UpdateKudosConfigInput!) {\n    updateKudosConfig(input: $input) {\n      config {\n        id\n        dailyLimit\n        kudosEmoji\n        kudosChannelId\n        timezone\n      }\n    }\n  }\n": typeof types.UpdateKudosConfigOnKudosConfigFormDocument,
    "\n  query KudosConfigAccessOnKudosSettingsLink {\n    kudosConfig {\n      id\n    }\n  }\n": typeof types.KudosConfigAccessOnKudosSettingsLinkDocument,
    "\n  query GetKudosLeaderboard($startDate: DateTimeISO!, $endDate: DateTimeISO!, $limit: Int!) {\n    kudosLeaderboard(startDate: $startDate, endDate: $endDate, limit: $limit) {\n      topSenders {\n        memberId\n        displayName\n        totalAmount\n      }\n      topReceivers {\n        memberId\n        displayName\n        totalAmount\n      }\n    }\n  }\n": typeof types.GetKudosLeaderboardDocument,
    "\n  query ViewerOnGlobalHeader {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n    }\n  }\n": typeof types.ViewerOnGlobalHeaderDocument,
    "\n  mutation CreateWorkspaceOnCreateWorkspaceForm($input: CreateWorkspaceInput!) {\n    createWorkspace(input: $input) {\n      viewer {\n        id\n        onboardingTasks {\n          type\n        }\n        workspace {\n          id\n          name\n        }\n      }\n    }\n  }\n": typeof types.CreateWorkspaceOnCreateWorkspaceFormDocument,
    "\n  query ViewerOnOnboardingRedirect {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n      onboardingTasks {\n        type\n      }\n    }\n  }\n": typeof types.ViewerOnOnboardingRedirectDocument,
    "\n  query ViewerOnWorkspaceRedirect {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n    }\n  }\n": typeof types.ViewerOnWorkspaceRedirectDocument,
    "\n  query ViewerOnInstallSlackButton {\n    viewer {\n      id\n      workspace {\n        id\n      }\n    }\n  }\n": typeof types.ViewerOnInstallSlackButtonDocument,
    "\n  mutation CreateWikiDocumentOnWikiCreateForm($input: CreateWikiDocumentInput!) {\n    createWikiDocument(input: $input) {\n      wikiDocument {\n        id\n      }\n    }\n  }\n": typeof types.CreateWikiDocumentOnWikiCreateFormDocument,
    "\n  fragment WikiDocumentOnWikiDetail on WikiDocument {\n    id\n    title\n    content\n    createdById\n    lastModifiedById\n    createdAt\n    updatedAt\n    viewCount\n    version\n    versions {\n      id\n      title\n      version\n      modifiedById\n      createdAt\n    }\n  }\n": typeof types.WikiDocumentOnWikiDetailFragmentDoc,
    "\n  query WikiDocumentOnWikiDetail($id: ID!) {\n    wikiDocument(id: $id) {\n      id\n      ...WikiDocumentOnWikiDetail\n    }\n  }\n": typeof types.WikiDocumentOnWikiDetailDocument,
    "\n  query WikiDocumentOnWikiEditForm($id: ID!) {\n    wikiDocument(id: $id) {\n      id\n      ...WikiDocumentOnWikiDetail\n    }\n  }\n": typeof types.WikiDocumentOnWikiEditFormDocument,
    "\n  mutation UpdateWikiDocumentOnWikiEditForm($input: UpdateWikiDocumentInput!) {\n    updateWikiDocument(input: $input) {\n      wikiDocument {\n        id\n        ...WikiDocumentOnWikiDetail\n      }\n    }\n  }\n": typeof types.UpdateWikiDocumentOnWikiEditFormDocument,
    "\n  query SearchWikiDocumentsOnWikiList($keyword: String!, $limit: Int!, $offset: Int!) {\n    searchWikiDocuments(keyword: $keyword, limit: $limit, offset: $offset) {\n      totalCount\n      nodes {\n        id\n        title\n        content\n        viewCount\n        createdAt\n        updatedAt\n        lastModifiedById\n        version\n      }\n    }\n  }\n": typeof types.SearchWikiDocumentsOnWikiListDocument,
};
const documents: Documents = {
    "\n  mutation ConfirmCheckout($input: ConfirmCheckoutInput!) {\n    confirmCheckout(input: $input) {\n      subscription {\n        id\n        workspaceId\n        status\n        plan\n        currency\n      }\n    }\n  }\n": types.ConfirmCheckoutDocument,
    "\n  mutation CreateSubscriptionOnSubscriptionSelectForm($input: CreateSubscriptionInput!) {\n    createSubscription(input: $input) {\n      checkoutUrl\n      checkoutId\n    }\n  }\n": types.CreateSubscriptionOnSubscriptionSelectFormDocument,
    "\n  query GetKudosBalance {\n    kudosBalance {\n      dailyLimit\n      usedToday\n      remainingBalance\n    }\n  }\n": types.GetKudosBalanceDocument,
    "\n  query KudosConfigOnKudosConfigForm {\n    kudosConfig {\n      id\n      dailyLimit\n      kudosEmoji\n      kudosChannelId\n      timezone\n    }\n  }\n": types.KudosConfigOnKudosConfigFormDocument,
    "\n  mutation UpdateKudosConfigOnKudosConfigForm($input: UpdateKudosConfigInput!) {\n    updateKudosConfig(input: $input) {\n      config {\n        id\n        dailyLimit\n        kudosEmoji\n        kudosChannelId\n        timezone\n      }\n    }\n  }\n": types.UpdateKudosConfigOnKudosConfigFormDocument,
    "\n  query KudosConfigAccessOnKudosSettingsLink {\n    kudosConfig {\n      id\n    }\n  }\n": types.KudosConfigAccessOnKudosSettingsLinkDocument,
    "\n  query GetKudosLeaderboard($startDate: DateTimeISO!, $endDate: DateTimeISO!, $limit: Int!) {\n    kudosLeaderboard(startDate: $startDate, endDate: $endDate, limit: $limit) {\n      topSenders {\n        memberId\n        displayName\n        totalAmount\n      }\n      topReceivers {\n        memberId\n        displayName\n        totalAmount\n      }\n    }\n  }\n": types.GetKudosLeaderboardDocument,
    "\n  query ViewerOnGlobalHeader {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n    }\n  }\n": types.ViewerOnGlobalHeaderDocument,
    "\n  mutation CreateWorkspaceOnCreateWorkspaceForm($input: CreateWorkspaceInput!) {\n    createWorkspace(input: $input) {\n      viewer {\n        id\n        onboardingTasks {\n          type\n        }\n        workspace {\n          id\n          name\n        }\n      }\n    }\n  }\n": types.CreateWorkspaceOnCreateWorkspaceFormDocument,
    "\n  query ViewerOnOnboardingRedirect {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n      onboardingTasks {\n        type\n      }\n    }\n  }\n": types.ViewerOnOnboardingRedirectDocument,
    "\n  query ViewerOnWorkspaceRedirect {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n    }\n  }\n": types.ViewerOnWorkspaceRedirectDocument,
    "\n  query ViewerOnInstallSlackButton {\n    viewer {\n      id\n      workspace {\n        id\n      }\n    }\n  }\n": types.ViewerOnInstallSlackButtonDocument,
    "\n  mutation CreateWikiDocumentOnWikiCreateForm($input: CreateWikiDocumentInput!) {\n    createWikiDocument(input: $input) {\n      wikiDocument {\n        id\n      }\n    }\n  }\n": types.CreateWikiDocumentOnWikiCreateFormDocument,
    "\n  fragment WikiDocumentOnWikiDetail on WikiDocument {\n    id\n    title\n    content\n    createdById\n    lastModifiedById\n    createdAt\n    updatedAt\n    viewCount\n    version\n    versions {\n      id\n      title\n      version\n      modifiedById\n      createdAt\n    }\n  }\n": types.WikiDocumentOnWikiDetailFragmentDoc,
    "\n  query WikiDocumentOnWikiDetail($id: ID!) {\n    wikiDocument(id: $id) {\n      id\n      ...WikiDocumentOnWikiDetail\n    }\n  }\n": types.WikiDocumentOnWikiDetailDocument,
    "\n  query WikiDocumentOnWikiEditForm($id: ID!) {\n    wikiDocument(id: $id) {\n      id\n      ...WikiDocumentOnWikiDetail\n    }\n  }\n": types.WikiDocumentOnWikiEditFormDocument,
    "\n  mutation UpdateWikiDocumentOnWikiEditForm($input: UpdateWikiDocumentInput!) {\n    updateWikiDocument(input: $input) {\n      wikiDocument {\n        id\n        ...WikiDocumentOnWikiDetail\n      }\n    }\n  }\n": types.UpdateWikiDocumentOnWikiEditFormDocument,
    "\n  query SearchWikiDocumentsOnWikiList($keyword: String!, $limit: Int!, $offset: Int!) {\n    searchWikiDocuments(keyword: $keyword, limit: $limit, offset: $offset) {\n      totalCount\n      nodes {\n        id\n        title\n        content\n        viewCount\n        createdAt\n        updatedAt\n        lastModifiedById\n        version\n      }\n    }\n  }\n": types.SearchWikiDocumentsOnWikiListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ConfirmCheckout($input: ConfirmCheckoutInput!) {\n    confirmCheckout(input: $input) {\n      subscription {\n        id\n        workspaceId\n        status\n        plan\n        currency\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation ConfirmCheckout($input: ConfirmCheckoutInput!) {\n    confirmCheckout(input: $input) {\n      subscription {\n        id\n        workspaceId\n        status\n        plan\n        currency\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateSubscriptionOnSubscriptionSelectForm($input: CreateSubscriptionInput!) {\n    createSubscription(input: $input) {\n      checkoutUrl\n      checkoutId\n    }\n  }\n"): (typeof documents)["\n  mutation CreateSubscriptionOnSubscriptionSelectForm($input: CreateSubscriptionInput!) {\n    createSubscription(input: $input) {\n      checkoutUrl\n      checkoutId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetKudosBalance {\n    kudosBalance {\n      dailyLimit\n      usedToday\n      remainingBalance\n    }\n  }\n"): (typeof documents)["\n  query GetKudosBalance {\n    kudosBalance {\n      dailyLimit\n      usedToday\n      remainingBalance\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query KudosConfigOnKudosConfigForm {\n    kudosConfig {\n      id\n      dailyLimit\n      kudosEmoji\n      kudosChannelId\n      timezone\n    }\n  }\n"): (typeof documents)["\n  query KudosConfigOnKudosConfigForm {\n    kudosConfig {\n      id\n      dailyLimit\n      kudosEmoji\n      kudosChannelId\n      timezone\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateKudosConfigOnKudosConfigForm($input: UpdateKudosConfigInput!) {\n    updateKudosConfig(input: $input) {\n      config {\n        id\n        dailyLimit\n        kudosEmoji\n        kudosChannelId\n        timezone\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateKudosConfigOnKudosConfigForm($input: UpdateKudosConfigInput!) {\n    updateKudosConfig(input: $input) {\n      config {\n        id\n        dailyLimit\n        kudosEmoji\n        kudosChannelId\n        timezone\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query KudosConfigAccessOnKudosSettingsLink {\n    kudosConfig {\n      id\n    }\n  }\n"): (typeof documents)["\n  query KudosConfigAccessOnKudosSettingsLink {\n    kudosConfig {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetKudosLeaderboard($startDate: DateTimeISO!, $endDate: DateTimeISO!, $limit: Int!) {\n    kudosLeaderboard(startDate: $startDate, endDate: $endDate, limit: $limit) {\n      topSenders {\n        memberId\n        displayName\n        totalAmount\n      }\n      topReceivers {\n        memberId\n        displayName\n        totalAmount\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetKudosLeaderboard($startDate: DateTimeISO!, $endDate: DateTimeISO!, $limit: Int!) {\n    kudosLeaderboard(startDate: $startDate, endDate: $endDate, limit: $limit) {\n      topSenders {\n        memberId\n        displayName\n        totalAmount\n      }\n      topReceivers {\n        memberId\n        displayName\n        totalAmount\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ViewerOnGlobalHeader {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query ViewerOnGlobalHeader {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateWorkspaceOnCreateWorkspaceForm($input: CreateWorkspaceInput!) {\n    createWorkspace(input: $input) {\n      viewer {\n        id\n        onboardingTasks {\n          type\n        }\n        workspace {\n          id\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateWorkspaceOnCreateWorkspaceForm($input: CreateWorkspaceInput!) {\n    createWorkspace(input: $input) {\n      viewer {\n        id\n        onboardingTasks {\n          type\n        }\n        workspace {\n          id\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ViewerOnOnboardingRedirect {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n      onboardingTasks {\n        type\n      }\n    }\n  }\n"): (typeof documents)["\n  query ViewerOnOnboardingRedirect {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n      onboardingTasks {\n        type\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ViewerOnWorkspaceRedirect {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query ViewerOnWorkspaceRedirect {\n    viewer {\n      id\n      workspace {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ViewerOnInstallSlackButton {\n    viewer {\n      id\n      workspace {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query ViewerOnInstallSlackButton {\n    viewer {\n      id\n      workspace {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateWikiDocumentOnWikiCreateForm($input: CreateWikiDocumentInput!) {\n    createWikiDocument(input: $input) {\n      wikiDocument {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateWikiDocumentOnWikiCreateForm($input: CreateWikiDocumentInput!) {\n    createWikiDocument(input: $input) {\n      wikiDocument {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment WikiDocumentOnWikiDetail on WikiDocument {\n    id\n    title\n    content\n    createdById\n    lastModifiedById\n    createdAt\n    updatedAt\n    viewCount\n    version\n    versions {\n      id\n      title\n      version\n      modifiedById\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  fragment WikiDocumentOnWikiDetail on WikiDocument {\n    id\n    title\n    content\n    createdById\n    lastModifiedById\n    createdAt\n    updatedAt\n    viewCount\n    version\n    versions {\n      id\n      title\n      version\n      modifiedById\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query WikiDocumentOnWikiDetail($id: ID!) {\n    wikiDocument(id: $id) {\n      id\n      ...WikiDocumentOnWikiDetail\n    }\n  }\n"): (typeof documents)["\n  query WikiDocumentOnWikiDetail($id: ID!) {\n    wikiDocument(id: $id) {\n      id\n      ...WikiDocumentOnWikiDetail\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query WikiDocumentOnWikiEditForm($id: ID!) {\n    wikiDocument(id: $id) {\n      id\n      ...WikiDocumentOnWikiDetail\n    }\n  }\n"): (typeof documents)["\n  query WikiDocumentOnWikiEditForm($id: ID!) {\n    wikiDocument(id: $id) {\n      id\n      ...WikiDocumentOnWikiDetail\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateWikiDocumentOnWikiEditForm($input: UpdateWikiDocumentInput!) {\n    updateWikiDocument(input: $input) {\n      wikiDocument {\n        id\n        ...WikiDocumentOnWikiDetail\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateWikiDocumentOnWikiEditForm($input: UpdateWikiDocumentInput!) {\n    updateWikiDocument(input: $input) {\n      wikiDocument {\n        id\n        ...WikiDocumentOnWikiDetail\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchWikiDocumentsOnWikiList($keyword: String!, $limit: Int!, $offset: Int!) {\n    searchWikiDocuments(keyword: $keyword, limit: $limit, offset: $offset) {\n      totalCount\n      nodes {\n        id\n        title\n        content\n        viewCount\n        createdAt\n        updatedAt\n        lastModifiedById\n        version\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchWikiDocumentsOnWikiList($keyword: String!, $limit: Int!, $offset: Int!) {\n    searchWikiDocuments(keyword: $keyword, limit: $limit, offset: $offset) {\n      totalCount\n      nodes {\n        id\n        title\n        content\n        viewCount\n        createdAt\n        updatedAt\n        lastModifiedById\n        version\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;