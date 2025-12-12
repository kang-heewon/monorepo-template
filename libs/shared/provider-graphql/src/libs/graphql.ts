/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: string; output: string; }
};

export type BillingPeriod = {
  readonly __typename?: 'BillingPeriod';
  readonly month: Scalars['Int']['output'];
  readonly year: Scalars['Int']['output'];
};

export type CancelSubscriptionInput = {
  readonly cancelImmediately?: InputMaybe<Scalars['Boolean']['input']>;
  readonly reason?: InputMaybe<Scalars['String']['input']>;
};

export type CompleteSlackInstallationInput = {
  readonly botAccessToken: Scalars['String']['input'];
  readonly botUserId: Scalars['String']['input'];
  readonly scope: Scalars['String']['input'];
  readonly slackTeamId: Scalars['String']['input'];
  readonly workspaceId: Scalars['String']['input'];
};

export type CompleteSlackInstallationPayload = {
  readonly __typename?: 'CompleteSlackInstallationPayload';
  readonly workspace: Workspace;
};

export type ConfirmCheckoutInput = {
  readonly checkoutId: Scalars['String']['input'];
};

export type ConfirmCheckoutResult = {
  readonly __typename?: 'ConfirmCheckoutResult';
  readonly subscription: Subscription;
};

export type CreateSubscriptionInput = {
  readonly cancelUrl?: InputMaybe<Scalars['String']['input']>;
  readonly currency: Scalars['String']['input'];
  readonly plan: Scalars['String']['input'];
  readonly seats?: InputMaybe<Scalars['Float']['input']>;
  readonly successUrl: Scalars['String']['input'];
};

export type CreateSubscriptionResult = {
  readonly __typename?: 'CreateSubscriptionResult';
  readonly checkoutId: Scalars['String']['output'];
  readonly checkoutUrl: Scalars['String']['output'];
};

export type CreateWikiDocumentInput = {
  readonly content: Scalars['String']['input'];
  readonly title: Scalars['String']['input'];
};

export type CreateWikiDocumentPayload = {
  readonly __typename?: 'CreateWikiDocumentPayload';
  readonly wikiDocument: WikiDocument;
};

export type CreateWorkspaceInput = {
  readonly name: Scalars['String']['input'];
};

export type CreateWorkspacePayload = {
  readonly __typename?: 'CreateWorkspacePayload';
  readonly viewer: Viewer;
};

export type DeleteWikiDocumentInput = {
  readonly id: Scalars['ID']['input'];
};

export type DeleteWikiDocumentPayload = {
  readonly __typename?: 'DeleteWikiDocumentPayload';
  readonly success: Scalars['Boolean']['output'];
};

export type Invoice = {
  readonly __typename?: 'Invoice';
  readonly billingOrderId?: Maybe<Scalars['String']['output']>;
  readonly billingPeriod: BillingPeriod;
  readonly createdAt: Scalars['DateTimeISO']['output'];
  readonly currency: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lineItems: ReadonlyArray<InvoiceLineItem>;
  readonly paidAt?: Maybe<Scalars['DateTimeISO']['output']>;
  readonly status: Scalars['String']['output'];
  readonly subscriptionId: Scalars['String']['output'];
  readonly subtotal: Scalars['Float']['output'];
  readonly taxAmount: Scalars['Float']['output'];
  readonly total: Scalars['Float']['output'];
  readonly updatedAt: Scalars['DateTimeISO']['output'];
  readonly workspaceId: Scalars['String']['output'];
};

export type InvoiceLineItem = {
  readonly __typename?: 'InvoiceLineItem';
  readonly amount: Scalars['Float']['output'];
  readonly description: Scalars['String']['output'];
  readonly quantity: Scalars['Float']['output'];
  readonly unitPrice: Scalars['Float']['output'];
};

export type KudosBalance = {
  readonly __typename?: 'KudosBalance';
  readonly dailyLimit: Scalars['Int']['output'];
  readonly remainingBalance: Scalars['Int']['output'];
  readonly usedToday: Scalars['Int']['output'];
};

export type KudosConfig = {
  readonly __typename?: 'KudosConfig';
  readonly createdAt: Scalars['DateTimeISO']['output'];
  readonly dailyLimit: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly kudosChannelId?: Maybe<Scalars['String']['output']>;
  readonly kudosEmoji: Scalars['String']['output'];
  readonly timezone: Scalars['String']['output'];
  readonly updatedAt: Scalars['DateTimeISO']['output'];
  readonly workspaceId: Scalars['String']['output'];
};

export type KudosLeaderboard = {
  readonly __typename?: 'KudosLeaderboard';
  readonly topReceivers: ReadonlyArray<KudosLeaderboardEntry>;
  readonly topSenders: ReadonlyArray<KudosLeaderboardEntry>;
};

export type KudosLeaderboardEntry = {
  readonly __typename?: 'KudosLeaderboardEntry';
  readonly displayName: Scalars['String']['output'];
  readonly memberId: Scalars['String']['output'];
  readonly totalAmount: Scalars['Int']['output'];
};

export type KudosRecord = {
  readonly __typename?: 'KudosRecord';
  readonly amount: Scalars['Int']['output'];
  readonly channelId: Scalars['String']['output'];
  readonly createdAt: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['ID']['output'];
  readonly message?: Maybe<Scalars['String']['output']>;
  readonly messageTs?: Maybe<Scalars['String']['output']>;
  readonly receiverId: Scalars['String']['output'];
  readonly senderId: Scalars['String']['output'];
  readonly workspaceId: Scalars['String']['output'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly cancelSubscription: Subscription;
  readonly completeSlackInstallation: CompleteSlackInstallationPayload;
  readonly confirmCheckout: ConfirmCheckoutResult;
  readonly createSubscription: CreateSubscriptionResult;
  readonly createWikiDocument: CreateWikiDocumentPayload;
  readonly createWorkspace: CreateWorkspacePayload;
  readonly deleteWikiDocument: DeleteWikiDocumentPayload;
  readonly sendKudos: SendKudosPayload;
  readonly uncancelSubscription: Subscription;
  readonly updateKudosConfig: UpdateKudosConfigPayload;
  readonly updateWikiDocument: UpdateWikiDocumentPayload;
};


export type MutationcancelSubscriptionArgs = {
  input: CancelSubscriptionInput;
};


export type MutationcompleteSlackInstallationArgs = {
  input: CompleteSlackInstallationInput;
};


export type MutationconfirmCheckoutArgs = {
  input: ConfirmCheckoutInput;
};


export type MutationcreateSubscriptionArgs = {
  input: CreateSubscriptionInput;
};


export type MutationcreateWikiDocumentArgs = {
  input: CreateWikiDocumentInput;
};


export type MutationcreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type MutationdeleteWikiDocumentArgs = {
  input: DeleteWikiDocumentInput;
};


export type MutationsendKudosArgs = {
  input: SendKudosInput;
};


export type MutationupdateKudosConfigArgs = {
  input: UpdateKudosConfigInput;
};


export type MutationupdateWikiDocumentArgs = {
  input: UpdateWikiDocumentInput;
};

export type NeedsSlackApp = OnboardingTask & {
  readonly __typename?: 'NeedsSlackApp';
  readonly type: OnboardingTaskType;
};

export type NeedsSubscription = OnboardingTask & {
  readonly __typename?: 'NeedsSubscription';
  readonly type: OnboardingTaskType;
};

export type NeedsWorkspace = OnboardingTask & {
  readonly __typename?: 'NeedsWorkspace';
  readonly type: OnboardingTaskType;
};

export type OnboardingTask = {
  readonly type: OnboardingTaskType;
};

export const OnboardingTaskType = {
  NeedsSlackApp: 'NeedsSlackApp',
  NeedsSubscription: 'NeedsSubscription',
  NeedsWorkspace: 'NeedsWorkspace'
} as const;

export type OnboardingTaskType = typeof OnboardingTaskType[keyof typeof OnboardingTaskType];
export type Query = {
  readonly __typename?: 'Query';
  readonly currentInvoicePreview: Invoice;
  readonly invoice?: Maybe<Invoice>;
  readonly invoices: ReadonlyArray<Invoice>;
  readonly kudosBalance: KudosBalance;
  readonly kudosConfig: KudosConfig;
  readonly kudosLeaderboard: KudosLeaderboard;
  readonly searchWikiDocuments: WikiDocumentConnection;
  readonly subscription?: Maybe<Subscription>;
  readonly viewer: Viewer;
  readonly wikiDocument?: Maybe<WikiDocument>;
};


export type QueryinvoiceArgs = {
  invoiceId: Scalars['ID']['input'];
};


export type QueryinvoicesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerykudosLeaderboardArgs = {
  endDate: Scalars['DateTimeISO']['input'];
  limit?: Scalars['Int']['input'];
  startDate: Scalars['DateTimeISO']['input'];
};


export type QuerysearchWikiDocumentsArgs = {
  keyword: Scalars['String']['input'];
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type QuerywikiDocumentArgs = {
  id: Scalars['ID']['input'];
};

export type SendKudosInput = {
  readonly amount: Scalars['Int']['input'];
  readonly channelId: Scalars['String']['input'];
  readonly message?: InputMaybe<Scalars['String']['input']>;
  readonly messageTs?: InputMaybe<Scalars['String']['input']>;
  readonly receiverIds: ReadonlyArray<Scalars['String']['input']>;
};

export type SendKudosPayload = {
  readonly __typename?: 'SendKudosPayload';
  readonly records: ReadonlyArray<KudosRecord>;
  readonly senderRemainingBalance: Scalars['Int']['output'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly billingCustomerId: Scalars['String']['output'];
  readonly billingSubscriptionId: Scalars['String']['output'];
  readonly cancelAtPeriodEnd: Scalars['Boolean']['output'];
  readonly createdAt: Scalars['DateTimeISO']['output'];
  readonly currency: Scalars['String']['output'];
  readonly currentPeriodEnd: Scalars['DateTimeISO']['output'];
  readonly currentPeriodStart: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['ID']['output'];
  readonly plan: Scalars['String']['output'];
  readonly seats: Scalars['Float']['output'];
  readonly status: Scalars['String']['output'];
  readonly updatedAt: Scalars['DateTimeISO']['output'];
  readonly workspaceId: Scalars['String']['output'];
};

export type UpdateKudosConfigInput = {
  readonly dailyLimit?: InputMaybe<Scalars['Int']['input']>;
  readonly kudosChannelId?: InputMaybe<Scalars['String']['input']>;
  readonly kudosEmoji?: InputMaybe<Scalars['String']['input']>;
  readonly timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateKudosConfigPayload = {
  readonly __typename?: 'UpdateKudosConfigPayload';
  readonly config: KudosConfig;
};

export type UpdateWikiDocumentInput = {
  readonly content: Scalars['String']['input'];
  readonly id: Scalars['ID']['input'];
  readonly title: Scalars['String']['input'];
};

export type UpdateWikiDocumentPayload = {
  readonly __typename?: 'UpdateWikiDocumentPayload';
  readonly wikiDocument: WikiDocument;
};

export type Viewer = {
  readonly __typename?: 'Viewer';
  readonly id: Scalars['ID']['output'];
  readonly onboardingTasks: ReadonlyArray<OnboardingTask>;
  readonly workspace?: Maybe<Workspace>;
};

export type WikiDocument = {
  readonly __typename?: 'WikiDocument';
  readonly content: Scalars['String']['output'];
  readonly createdAt: Scalars['DateTimeISO']['output'];
  readonly createdById: Scalars['ID']['output'];
  readonly id: Scalars['ID']['output'];
  readonly lastModifiedById: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Scalars['DateTimeISO']['output'];
  readonly version: Scalars['Int']['output'];
  readonly versions: ReadonlyArray<WikiVersion>;
  readonly viewCount: Scalars['Int']['output'];
};

export type WikiDocumentConnection = {
  readonly __typename?: 'WikiDocumentConnection';
  readonly nodes: ReadonlyArray<WikiDocument>;
  readonly totalCount: Scalars['Int']['output'];
};

export type WikiVersion = {
  readonly __typename?: 'WikiVersion';
  readonly content: Scalars['String']['output'];
  readonly createdAt: Scalars['DateTimeISO']['output'];
  readonly id: Scalars['ID']['output'];
  readonly modifiedById: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
  readonly version: Scalars['Int']['output'];
};

export type Workspace = {
  readonly __typename?: 'Workspace';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly slackTeamId?: Maybe<Scalars['String']['output']>;
};

export type ConfirmCheckoutMutationVariables = Exact<{
  input: ConfirmCheckoutInput;
}>;


export type ConfirmCheckoutMutation = { readonly __typename?: 'Mutation', readonly confirmCheckout: { readonly __typename?: 'ConfirmCheckoutResult', readonly subscription: { readonly __typename?: 'Subscription', readonly id: string, readonly workspaceId: string, readonly status: string, readonly plan: string, readonly currency: string } } };

export type CreateSubscriptionOnSubscriptionSelectFormMutationVariables = Exact<{
  input: CreateSubscriptionInput;
}>;


export type CreateSubscriptionOnSubscriptionSelectFormMutation = { readonly __typename?: 'Mutation', readonly createSubscription: { readonly __typename?: 'CreateSubscriptionResult', readonly checkoutUrl: string, readonly checkoutId: string } };

export type GetKudosBalanceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetKudosBalanceQuery = { readonly __typename?: 'Query', readonly kudosBalance: { readonly __typename?: 'KudosBalance', readonly dailyLimit: number, readonly usedToday: number, readonly remainingBalance: number } };

export type KudosConfigOnKudosConfigFormQueryVariables = Exact<{ [key: string]: never; }>;


export type KudosConfigOnKudosConfigFormQuery = { readonly __typename?: 'Query', readonly kudosConfig: { readonly __typename?: 'KudosConfig', readonly id: string, readonly dailyLimit: number, readonly kudosEmoji: string, readonly kudosChannelId?: string | null, readonly timezone: string } };

export type UpdateKudosConfigOnKudosConfigFormMutationVariables = Exact<{
  input: UpdateKudosConfigInput;
}>;


export type UpdateKudosConfigOnKudosConfigFormMutation = { readonly __typename?: 'Mutation', readonly updateKudosConfig: { readonly __typename?: 'UpdateKudosConfigPayload', readonly config: { readonly __typename?: 'KudosConfig', readonly id: string, readonly dailyLimit: number, readonly kudosEmoji: string, readonly kudosChannelId?: string | null, readonly timezone: string } } };

export type KudosConfigAccessOnKudosSettingsLinkQueryVariables = Exact<{ [key: string]: never; }>;


export type KudosConfigAccessOnKudosSettingsLinkQuery = { readonly __typename?: 'Query', readonly kudosConfig: { readonly __typename?: 'KudosConfig', readonly id: string } };

export type GetKudosLeaderboardQueryVariables = Exact<{
  startDate: Scalars['DateTimeISO']['input'];
  endDate: Scalars['DateTimeISO']['input'];
  limit: Scalars['Int']['input'];
}>;


export type GetKudosLeaderboardQuery = { readonly __typename?: 'Query', readonly kudosLeaderboard: { readonly __typename?: 'KudosLeaderboard', readonly topSenders: ReadonlyArray<{ readonly __typename?: 'KudosLeaderboardEntry', readonly memberId: string, readonly displayName: string, readonly totalAmount: number }>, readonly topReceivers: ReadonlyArray<{ readonly __typename?: 'KudosLeaderboardEntry', readonly memberId: string, readonly displayName: string, readonly totalAmount: number }> } };

export type ViewerOnGlobalHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerOnGlobalHeaderQuery = { readonly __typename?: 'Query', readonly viewer: { readonly __typename?: 'Viewer', readonly id: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string } | null } };

export type CreateWorkspaceOnCreateWorkspaceFormMutationVariables = Exact<{
  input: CreateWorkspaceInput;
}>;


export type CreateWorkspaceOnCreateWorkspaceFormMutation = { readonly __typename?: 'Mutation', readonly createWorkspace: { readonly __typename?: 'CreateWorkspacePayload', readonly viewer: { readonly __typename?: 'Viewer', readonly id: string, readonly onboardingTasks: ReadonlyArray<
        | { readonly __typename?: 'NeedsSlackApp', readonly type: OnboardingTaskType }
        | { readonly __typename?: 'NeedsSubscription', readonly type: OnboardingTaskType }
        | { readonly __typename?: 'NeedsWorkspace', readonly type: OnboardingTaskType }
      >, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string } | null } } };

export type ViewerOnOnboardingRedirectQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerOnOnboardingRedirectQuery = { readonly __typename?: 'Query', readonly viewer: { readonly __typename?: 'Viewer', readonly id: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string } | null, readonly onboardingTasks: ReadonlyArray<
      | { readonly __typename?: 'NeedsSlackApp', readonly type: OnboardingTaskType }
      | { readonly __typename?: 'NeedsSubscription', readonly type: OnboardingTaskType }
      | { readonly __typename?: 'NeedsWorkspace', readonly type: OnboardingTaskType }
    > } };

export type ViewerOnWorkspaceRedirectQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerOnWorkspaceRedirectQuery = { readonly __typename?: 'Query', readonly viewer: { readonly __typename?: 'Viewer', readonly id: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string } | null } };

export type ViewerOnInstallSlackButtonQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerOnInstallSlackButtonQuery = { readonly __typename?: 'Query', readonly viewer: { readonly __typename?: 'Viewer', readonly id: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string } | null } };

export type CreateWikiDocumentOnWikiCreateFormMutationVariables = Exact<{
  input: CreateWikiDocumentInput;
}>;


export type CreateWikiDocumentOnWikiCreateFormMutation = { readonly __typename?: 'Mutation', readonly createWikiDocument: { readonly __typename?: 'CreateWikiDocumentPayload', readonly wikiDocument: { readonly __typename?: 'WikiDocument', readonly id: string } } };

export type WikiDocumentOnWikiDetailFragment = { readonly __typename?: 'WikiDocument', readonly id: string, readonly title: string, readonly content: string, readonly createdById: string, readonly lastModifiedById: string, readonly createdAt: string, readonly updatedAt: string, readonly viewCount: number, readonly version: number, readonly versions: ReadonlyArray<{ readonly __typename?: 'WikiVersion', readonly id: string, readonly title: string, readonly version: number, readonly modifiedById: string, readonly createdAt: string }> } & { ' $fragmentName'?: 'WikiDocumentOnWikiDetailFragment' };

export type WikiDocumentOnWikiDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type WikiDocumentOnWikiDetailQuery = { readonly __typename?: 'Query', readonly wikiDocument?: (
    { readonly __typename?: 'WikiDocument', readonly id: string }
    & { ' $fragmentRefs'?: { 'WikiDocumentOnWikiDetailFragment': WikiDocumentOnWikiDetailFragment } }
  ) | null };

export type WikiDocumentOnWikiEditFormQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type WikiDocumentOnWikiEditFormQuery = { readonly __typename?: 'Query', readonly wikiDocument?: (
    { readonly __typename?: 'WikiDocument', readonly id: string }
    & { ' $fragmentRefs'?: { 'WikiDocumentOnWikiDetailFragment': WikiDocumentOnWikiDetailFragment } }
  ) | null };

export type UpdateWikiDocumentOnWikiEditFormMutationVariables = Exact<{
  input: UpdateWikiDocumentInput;
}>;


export type UpdateWikiDocumentOnWikiEditFormMutation = { readonly __typename?: 'Mutation', readonly updateWikiDocument: { readonly __typename?: 'UpdateWikiDocumentPayload', readonly wikiDocument: (
      { readonly __typename?: 'WikiDocument', readonly id: string }
      & { ' $fragmentRefs'?: { 'WikiDocumentOnWikiDetailFragment': WikiDocumentOnWikiDetailFragment } }
    ) } };

export type SearchWikiDocumentsOnWikiListQueryVariables = Exact<{
  keyword: Scalars['String']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type SearchWikiDocumentsOnWikiListQuery = { readonly __typename?: 'Query', readonly searchWikiDocuments: { readonly __typename?: 'WikiDocumentConnection', readonly totalCount: number, readonly nodes: ReadonlyArray<{ readonly __typename?: 'WikiDocument', readonly id: string, readonly title: string, readonly content: string, readonly viewCount: number, readonly createdAt: string, readonly updatedAt: string, readonly lastModifiedById: string, readonly version: number }> } };

export const WikiDocumentOnWikiDetailFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WikiDocumentOnWikiDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WikiDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdById"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedById"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"versions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedById"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<WikiDocumentOnWikiDetailFragment, unknown>;
export const ConfirmCheckoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ConfirmCheckout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ConfirmCheckoutInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmCheckout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workspaceId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"plan"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}}]}}]}}]}}]} as unknown as DocumentNode<ConfirmCheckoutMutation, ConfirmCheckoutMutationVariables>;
export const CreateSubscriptionOnSubscriptionSelectFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSubscriptionOnSubscriptionSelectForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSubscriptionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkoutUrl"}},{"kind":"Field","name":{"kind":"Name","value":"checkoutId"}}]}}]}}]} as unknown as DocumentNode<CreateSubscriptionOnSubscriptionSelectFormMutation, CreateSubscriptionOnSubscriptionSelectFormMutationVariables>;
export const GetKudosBalanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetKudosBalance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kudosBalance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dailyLimit"}},{"kind":"Field","name":{"kind":"Name","value":"usedToday"}},{"kind":"Field","name":{"kind":"Name","value":"remainingBalance"}}]}}]}}]} as unknown as DocumentNode<GetKudosBalanceQuery, GetKudosBalanceQueryVariables>;
export const KudosConfigOnKudosConfigFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"KudosConfigOnKudosConfigForm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kudosConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dailyLimit"}},{"kind":"Field","name":{"kind":"Name","value":"kudosEmoji"}},{"kind":"Field","name":{"kind":"Name","value":"kudosChannelId"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}}]}}]}}]} as unknown as DocumentNode<KudosConfigOnKudosConfigFormQuery, KudosConfigOnKudosConfigFormQueryVariables>;
export const UpdateKudosConfigOnKudosConfigFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateKudosConfigOnKudosConfigForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateKudosConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateKudosConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dailyLimit"}},{"kind":"Field","name":{"kind":"Name","value":"kudosEmoji"}},{"kind":"Field","name":{"kind":"Name","value":"kudosChannelId"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateKudosConfigOnKudosConfigFormMutation, UpdateKudosConfigOnKudosConfigFormMutationVariables>;
export const KudosConfigAccessOnKudosSettingsLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"KudosConfigAccessOnKudosSettingsLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kudosConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<KudosConfigAccessOnKudosSettingsLinkQuery, KudosConfigAccessOnKudosSettingsLinkQueryVariables>;
export const GetKudosLeaderboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetKudosLeaderboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTimeISO"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"kudosLeaderboard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topSenders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"topReceivers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmount"}}]}}]}}]}}]} as unknown as DocumentNode<GetKudosLeaderboardQuery, GetKudosLeaderboardQueryVariables>;
export const ViewerOnGlobalHeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ViewerOnGlobalHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ViewerOnGlobalHeaderQuery, ViewerOnGlobalHeaderQueryVariables>;
export const CreateWorkspaceOnCreateWorkspaceFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWorkspaceOnCreateWorkspaceForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateWorkspaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"onboardingTasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"workspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateWorkspaceOnCreateWorkspaceFormMutation, CreateWorkspaceOnCreateWorkspaceFormMutationVariables>;
export const ViewerOnOnboardingRedirectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ViewerOnOnboardingRedirect"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"onboardingTasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<ViewerOnOnboardingRedirectQuery, ViewerOnOnboardingRedirectQueryVariables>;
export const ViewerOnWorkspaceRedirectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ViewerOnWorkspaceRedirect"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ViewerOnWorkspaceRedirectQuery, ViewerOnWorkspaceRedirectQueryVariables>;
export const ViewerOnInstallSlackButtonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ViewerOnInstallSlackButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"workspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ViewerOnInstallSlackButtonQuery, ViewerOnInstallSlackButtonQueryVariables>;
export const CreateWikiDocumentOnWikiCreateFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateWikiDocumentOnWikiCreateForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateWikiDocumentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWikiDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wikiDocument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateWikiDocumentOnWikiCreateFormMutation, CreateWikiDocumentOnWikiCreateFormMutationVariables>;
export const WikiDocumentOnWikiDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WikiDocumentOnWikiDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wikiDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WikiDocumentOnWikiDetail"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WikiDocumentOnWikiDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WikiDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdById"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedById"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"versions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedById"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<WikiDocumentOnWikiDetailQuery, WikiDocumentOnWikiDetailQueryVariables>;
export const WikiDocumentOnWikiEditFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WikiDocumentOnWikiEditForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wikiDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WikiDocumentOnWikiDetail"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WikiDocumentOnWikiDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WikiDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdById"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedById"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"versions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedById"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<WikiDocumentOnWikiEditFormQuery, WikiDocumentOnWikiEditFormQueryVariables>;
export const UpdateWikiDocumentOnWikiEditFormDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateWikiDocumentOnWikiEditForm"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateWikiDocumentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateWikiDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wikiDocument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"WikiDocumentOnWikiDetail"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WikiDocumentOnWikiDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WikiDocument"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdById"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedById"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"versions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedById"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<UpdateWikiDocumentOnWikiEditFormMutation, UpdateWikiDocumentOnWikiEditFormMutationVariables>;
export const SearchWikiDocumentsOnWikiListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchWikiDocumentsOnWikiList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchWikiDocuments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedById"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]}}]} as unknown as DocumentNode<SearchWikiDocumentsOnWikiListQuery, SearchWikiDocumentsOnWikiListQueryVariables>;