// ─────────────────────────────────────────────────────────────────────────────
// Cloudpoint SOP Navigator — SOP Knowledge Base
//
// SOURCE OF TRUTH:
//   All SOP content below is derived directly from uploaded company documents.
//   No steps, policies, departments, or procedures have been invented.
//   Fields not present in the source document are marked:
//     "Not specified in source document."
//
// Future integration point:
//   Replace this local array with SOPs fetched from Google Drive, SharePoint,
//   Google Cloud Storage, or an internal document repository API.
//   Example:  const sops = await sopService.fetchFromGoogleDrive(folderId);
//             const sops = await sopService.fetchFromSharePoint(listUrl);
//   The SOP interface in src/types/sop.ts defines the required data shape.
// ─────────────────────────────────────────────────────────────────────────────

import type { SOP } from '../types/sop';

const NOT_IN_SOURCE = 'Not specified in source document.';

export const SOPS: SOP[] = [
  // ── SOP-201 ─────────────────────────────────────────────────────────────────
  // Source: "201- Creating Campaigns.docx"
  {
    id: 'SOP-201',
    title: 'Creating Campaigns',
    sourceFileName: '201- Creating Campaigns.docx',
    version: undefined,
    department: 'Sales & Marketing',
    owner: NOT_IN_SOURCE,
    category: 'Campaigns',
    workflowType: 'Campaign Management',
    tags: [
      'campaigns', 'marketing', 'sales', 'pipedrive', 'trello', 'bigtime',
      'scorecard', 'avaza', 'campaign setup', 'follow-up', 'marketing list',
      'campaign wrap up', 'MC', 'SL', 'TL',
    ],
    importedDate: '2026-06-23',
    reviewStatus: 'Draft / Source Imported',

    purpose:
      'Campaigns are the overarching method of generating new business. They are numbered and tracked in our Scorecard, Pipedrive, and Avaza to help simplify our Marketing processes and start to develop a true sense of return on our efforts.',

    whenToUse:
      'Use this SOP when planning, setting up, executing, or wrapping up a campaign. This SOP applies to the Sales & Marketing team as well as the team for whom the campaign is (Local Government, Infrastructure, Public Safety, or Campus Facilities). It covers planning, sending, and following up on the campaign, as well as updating the Scorecard and Pipedrive after the campaign.',

    requiredTools: [
      'Pipedrive',
      'Trello',
      'BigTime',
      'Scorecard (Marketing Campaigns)',
      'Google Shared Drive (G:\\Shared drives\\Marketing & promotions\\Campaigns\\)',
      'Avaza',
    ],

    rolesResponsibilities: [
      'MC (Marketing Coordinator) — manages campaign setup, materials, and Pipedrive updates',
      'SL (Sales Lead) — approves audience, message, methodology, and timeframe; completes follow-ups; updates results',
      'TL (Team Lead) — provides input on campaign direction; approves audience, message, methodology, and timeframe',
      'Office Manager — adds campaign number in BigTime; marks campaign complete in BigTime',
    ],

    inputsNeeded: [
      'Agreed-upon Audience, Message, Methodology, and Timeframe from SL and TL',
      'Campaign ID number from Scorecard',
      'Campaign title (succinct but recognizable, provided by Team Leader)',
      'Agreed-upon number of follow-up steps',
      'Start Date and End Date for the Campaign',
      'Marketing List (required fields from Suggested Pipedrive Fields for Campaign Marketing Lists)',
    ],

    steps: [
      // ── PHASE 1: Campaign Set Up ──────────────────────────────────────────
      '[Campaign Set Up] Add campaign to Scorecard to get Campaign ID number (Marketing Campaigns).',
      '[Campaign Set Up] Notify the Office Manager to add the campaign number in BigTime.',
      '[Campaign Set Up] Follow naming convention: "YYYY.##-Title of Campaign" (no spaces between the dash; title comes from Team Leader and should be succinct but recognizable — e.g., 2024.10-Esri UC). See the sales playbook for more information.',
      '[Campaign Set Up] Copy the Campaign Template Card in Trello on the Campaigns board.',
      '[Campaign Set Up] Create and attach a folder from the Shared Drive: G:\\Shared drives\\Marketing & promotions\\Campaigns\\current year Campaigns\\campaign numbered folder.',
      '[Campaign Set Up] Link the Campaign card to the "Current Campaigns" card on that Team\'s respective board.',
      '[Campaign Set Up] Adding Team Label should add the appropriate SL and TL to the Campaign Card.',
      '[Campaign Set Up] Choose a Start Date and End Date for the Campaign. The End Date should be set for when all planned steps or follow-ups are completed. Add these dates to the card.',
      '[Campaign Set Up] Add the agreed-upon number of "follow-up" steps in the "Campaign Activities" checklist.',

      // ── PHASE 2: Campaign Materials ───────────────────────────────────────
      '[Campaign Materials] Printed Materials need a minimum 2 weeks lead time to order and pickup.',
      '[Campaign Materials] Develop Marketing List — use required fields from Suggested Pipedrive Fields for Campaign Marketing Lists.',
      '[Campaign Materials] Review Marketing List (first review).',
      '[Campaign Materials] Review Marketing List (second review).',
      '[Campaign Materials] Develop Content.',
      '[Campaign Materials] Review / Edit Content.',
      '[Campaign Materials] Finalize Content.',

      // ── PHASE 3: Campaign Execution ───────────────────────────────────────
      '[Campaign] SL or MC — Import initial campaign activities into Pipedrive.',
      '[Campaign] SL or MC — Add Campaign number tag to Person in Pipedrive.',
      '[Campaign] SL or MC — Start Campaign (send email, mail letter, complete stop bys, etc.).',
      '[Campaign] SL or MC — Import follow-up campaign activities to Pipedrive if applicable.',
      '[Campaign] SL — Complete follow-ups.',
      '[Campaign] MC and SL — Update info of returned letters, bounced emails, etc.',
      '[Campaign] SL — Decide on resending campaign to returned contacts.',
      '[Campaign] MC — Update Pipedrive campaign tags and activities on any contacts that were added or removed after the initial activity went out.',

      // ── PHASE 4: Campaign Wrap Up ─────────────────────────────────────────
      '[Campaign Wrap Up] Double-check that all appropriate Deals and People are tagged with the Campaign in Pipedrive.',
      '[Campaign Wrap Up] Double-check that all appropriate Activities are logged from the Campaign in Pipedrive.',
      '[Campaign Wrap Up] Move the card from "Campaigns in Progress" to that year\'s Completed Campaigns list in Trello.',
      '[Campaign Wrap Up] SL — Update results in Marketing Campaigns (Scorecard).',
      '[Campaign Wrap Up] SL — Notify Office Manager to mark Campaign as complete in BigTime.',
    ],

    qualityChecks: [
      'Campaign ID number obtained from Scorecard before setup begins.',
      'Campaign named following the "YYYY.##-Title of Campaign" naming convention.',
      'Campaign card created in Trello with Start Date and End Date.',
      'Marketing List developed and reviewed before campaign begins.',
      'All campaign activities imported into Pipedrive.',
      'All Deals and People tagged with the Campaign in Pipedrive at wrap-up.',
      'All Activities logged from the Campaign in Pipedrive at wrap-up.',
      'Campaign card moved to Completed Campaigns in Trello.',
      'Results updated in Marketing Campaigns (Scorecard).',
      'Office Manager notified to mark Campaign complete in BigTime.',
    ],

    expectedOutput:
      'A fully executed campaign with all activities logged in Pipedrive, all contacts tagged, campaign results recorded in the Scorecard, campaign card archived in Trello, and BigTime updated to reflect campaign completion.',

    commonIssues: [
      {
        issue: 'Printed materials are not ready in time.',
        fix: 'Printed Materials need a minimum 2 weeks lead time. Plan and order printed materials at least 2 weeks before the campaign launch date.',
      },
      {
        issue: 'Campaign contacts are missing tags in Pipedrive after campaign launch.',
        fix: 'MC updates Pipedrive campaign tags and activities for any contacts added or removed after the initial activity. Review all contacts at campaign wrap-up.',
      },
    ],

    notes: [
      'Each Team\'s Sales Lead and Tech Lead, with input from the Marketing Team, will decide on the Audience, Message, Methodology, and Timeframe for each Campaign.',
      'The Standard Operating Folder is: https://drive.google.com/drive/folders/1Gg_3MEUdz_z4d0xgnZ78QNse8FonmaSP',
      'See the Sales Playbook for additional information on naming campaigns.',
    ],

    sourceSummary:
      'This SOP covers the end-to-end lifecycle of creating and executing a Cloudpoint sales and marketing campaign, from initial Scorecard registration and Trello setup, through campaign materials preparation and execution in Pipedrive, to campaign wrap-up and results tracking.',

    relatedSops: ['SOP-209', 'SOP-216', 'SOP-220'],
  },

  // ── SOP-209 ─────────────────────────────────────────────────────────────────
  // Source: "209- Creating and Sending Proposals and Quotes.docx"
  {
    id: 'SOP-209',
    title: 'Creating and Sending Proposals and Quotes',
    sourceFileName: '209- Creating and Sending Proposals and Quotes.docx',
    version: undefined,
    department: 'Sales & Marketing',
    owner: 'Business Development Manager',
    category: 'Proposals & Quotes',
    workflowType: 'Proposal & Quote Management',
    tags: [
      'proposals', 'quotes', 'pandadoc', 'pipedrive', 'zapier', 'slack',
      'adobe', 'client delivery', 'sales', 'deal', 'template', 'BDM',
      'send quote', 'send proposal', 'naming standards',
    ],
    importedDate: '2026-06-23',
    reviewStatus: 'Draft / Source Imported',

    purpose:
      'The purpose of this SOP is to outline the steps needed to create and send a proposal or quote.',

    whenToUse:
      'Use this SOP when creating and sending a quote or proposal to a client. Applies to all Sales and Marketing staff and team leaders who will be involved with creating and sending quotes or proposals.',

    requiredTools: [
      'Pipedrive Account',
      'PandaDoc Standard User Account',
      'Adobe',
      'Zapier (automation — copies completed PandaDoc PDF to Google Drive folder)',
      'Slack (receives automated notification when proposal/quote is sent)',
      'Google Drive — Proposals & Contracts folder',
      'Chrome — Sales Bookmark Folder (for Client Surveys)',
    ],

    rolesResponsibilities: [
      'Business Development Manager — responsible for maintaining this SOP',
      'Sales and Marketing Staff — create and send quotes and proposals',
      'Team Leaders (TL) — must approve document before it is sent to client; approve scope and pricing',
      'TL/TE/PMs — confer as needed to complete scope and pricing in document',
      'Marketing Team (marketing@cloudpointgeo.com) — may assist in starting the proposal',
      'Cloudpoint President or Vice President — must sign proposals before sending',
    ],

    inputsNeeded: [
      'Client meeting notes, survey results, and data saved in the Client\'s Folder in Proposals & Contracts (P&C)',
      'Completed client survey (if required) — found in Sales Bookmark Folder in Chrome under Client Surveys or on the COM Site',
      'Pipedrive Deal (created before or during this process)',
      'Agreed-upon scope and pricing (confirmed with TL/TE/PMs)',
      'Cloudpoint naming standards (found on COM Site)',
    ],

    steps: [
      // ── QUOTE PROCESS ─────────────────────────────────────────────────────
      '[Quote] Follow: Sales Proposal Process Diagram-20250429.pdf.',
      '[Quote] Depending on the Client\'s needs, complete one of the client surveys if required. Surveys are found in the Sales Bookmark Folder in Chrome under Client Surveys or on the COM Site.',
      '[Quote] After meeting with the Client, save all survey results, meeting notes, data, etc. in the Client\'s Folder in P&C.',
      '[Quote] Create a Deal in Pipedrive if not done already. (See video on how to create a Pipedrive deal.)',
      '[Quote] Use the \'Create Document\' function in the PandaDoc section of the left-hand sidebar of the Pipedrive deal.',
      '[Quote] Use a Template.',
      '[Quote] Remove Recipients in PandaDoc.',
      '[Quote] Add Collaborators.',
      '[Quote] Edit Document — Confer with the TL/TE/PMs as needed to complete the scope and pricing.',
      '[Quote] Get approval from the TL prior to sending.',
      '[Quote] Finalize document title following the Cloudpoint naming standards on the COM Site.',
      '[Quote] Add 90-day expiration date (unless a different date has been agreed upon and approved by the TL).',
      '[Quote] Final readthrough for Grammar, Syntax, and Format.',
      '[Quote] Download a .pdf of the document in PandaDoc.',
      '[Quote] Move downloaded .pdf into the Client\'s folder in Shared Drive > Proposals and Contracts.',
      '[Quote] Send Quote to Client via Pipedrive — CC TL, add PM as needed.',
      '[Quote] Follow up with the Client appropriately.',
      '[Quote] For Steps for Closing a Deal as Won, see SOP 209.2.',
      '[Quote] If no quote or proposal is sent to the client, the deal should be deleted. This should only happen under special circumstances.',

      // ── PROPOSAL PROCESS ──────────────────────────────────────────────────
      '[Proposal] Follow: Sales Proposal Process Diagram-20250429.pdf.',
      '[Proposal] Depending on the Client\'s needs, complete one of the client surveys if required. Surveys are found in the Sales Bookmark Folder in Chrome under Client Surveys or on the COM Site.',
      '[Proposal] After meeting with the Client, save all survey results, meeting notes, data, etc. in the Client\'s Folder in P&C.',
      '[Proposal] Create a Deal in Pipedrive if not done already.',
      '[Proposal] May request assistance in starting the proposal by contacting marketing@cloudpointgeo.com.',
      '[Proposal] Use the \'Create Document\' function in the PandaDoc section of the left-hand sidebar of the Pipedrive deal.',
      '[Proposal] Use a Template.',
      '[Proposal] Remove Recipients in PandaDoc.',
      '[Proposal] Add Collaborators.',
      '[Proposal] Edit Document — Confer with the TL/TE/PMs as needed to complete the scope and pricing.',
      '[Proposal] Get approval from the TL.',
      '[Proposal] Get a signature from the Cloudpoint President or Vice President.',
      '[Proposal] Finalize document title following the Cloudpoint naming standards on the COM Site.',
      '[Proposal] Final readthrough for Grammar, Syntax, and Format.',
      '[Proposal] Include Letters of Recommendation when appropriate.',
      '[Proposal] Download a .pdf of the document in PandaDoc.',
      '[Proposal] Move downloaded .pdf into the Client\'s folder in Shared Drive > Proposals and Contracts.',
      '[Proposal] Send Proposal to Client via Pipedrive — CC TL, add PM as needed.',
      '[Proposal] Follow up with the Client appropriately.',
      '[Proposal] For Steps for Closing a Deal as Won, see SOP 209.2.',
      '[Proposal] If no quote or proposal is sent to the client, the deal should be deleted. This should only happen under special circumstances.',
    ],

    qualityChecks: [
      'Client meeting notes and survey results saved in Client\'s Folder in P&C before document creation begins.',
      'Pipedrive Deal created before or during the process.',
      'Document created using the correct Template in PandaDoc.',
      'Scope and pricing confirmed with TL/TE/PMs.',
      'TL approval obtained before sending.',
      'For proposals: Cloudpoint President or Vice President signature obtained.',
      'Document title follows Cloudpoint naming standards.',
      'Expiration date set (90-day default or TL-approved alternate date).',
      'Final readthrough completed for Grammar, Syntax, and Format.',
      'PDF downloaded and moved to Client\'s folder in Shared Drive > Proposals and Contracts.',
      'Document sent via Pipedrive with TL CC\'d.',
    ],

    expectedOutput:
      'A reviewed, approved, and sent quote or proposal delivered to the client via Pipedrive. PDF copy stored in the Client\'s folder in Shared Drive > Proposals and Contracts. Follow-up scheduled. Zapier automation copies the completed PDF to the appropriate Google Drive folder. Pipedrive automation triggers follow-up activity scheduling and Slack notification to Sales and Marketing channel.',

    commonIssues: [
      {
        issue: 'Deal does not exist in Pipedrive before creating the document.',
        fix: 'Create a Deal in Pipedrive before or during the document creation process. See the Pipedrive deal creation video linked in the SOP.',
      },
      {
        issue: 'Proposal sent without required signatures.',
        fix: 'Proposals require signature from the Cloudpoint President or Vice President before sending. Quotes require TL approval. Do not send without completing the required approval step.',
      },
      {
        issue: 'Document title does not follow naming standards.',
        fix: 'Finalize document title following the Cloudpoint naming standards found on the COM Site before downloading or sending.',
      },
    ],

    notes: [
      'Automations: After a document is sent to the Client and its status has been changed to complete in PandaDoc, a copy of the .pdf is placed in the Google Drive folder for the Marketing Coordinator to distribute to the proper Client folder in Proposals & Contracts.',
      'Automations: After the "Send Quote" or "Send Proposal" Activity is marked Done in Pipedrive, an automation triggers follow-up activity scheduling for the Deal Owner and sends a Slack message to the Sales and Marketing Channel.',
      'Video guides are available on ScreenPal — links are in the source document.',
      'Reference: Cloudpoint COM Site naming standards — https://sites.google.com/a/cloudpointgeo.com/wiki/policies-procedures-standards/project-standards/naming-standards',
      'For Steps for Closing a Deal as Won, see SOP 209.2.',
    ],

    sourceSummary:
      'This SOP outlines the full process for creating and sending both quotes and proposals at Cloudpoint, covering document creation in PandaDoc, required approvals, naming standards, PDF storage in Google Drive, and client delivery via Pipedrive. Includes Zapier and Pipedrive automations that trigger on document completion.',

    relatedSops: ['SOP-201', 'SOP-216', 'SOP-220'],
  },

  // ── SOP-216 ─────────────────────────────────────────────────────────────────
  // Source: "216- Inbound Lead Qualification Process.docx"
  {
    id: 'SOP-216',
    title: 'Inbound Lead Qualification Process',
    sourceFileName: '216- Inbound Lead Qualification Process.docx',
    version: undefined,
    department: 'Sales & Marketing',
    owner: 'BDM and Marketing Coordinator',
    category: 'Lead Qualification',
    workflowType: 'Lead Management',
    tags: [
      'inbound leads', 'lead qualification', 'qualified lead', 'QL', 'MQL',
      'pipedrive', 'CRM', 'sales', 'follow-up', 'BDM', 'MC', 'SL', 'TL',
      'inquiry', 'response',
    ],
    importedDate: '2026-06-23',
    reviewStatus: 'Draft / Source Imported',

    purpose:
      'This SOP defines the process used internally for qualifying inbound leads and how to respond to them. Inbound leads come from numerous sources for various types of services across all teams.',

    whenToUse:
      'Use this SOP when an inbound inquiry is received and needs to be qualified and assigned. Applies to the Sales and Marketing Team.',

    requiredTools: [
      'Pipedrive (CRM)',
      'COM Site — Team Management Page (https://sites.google.com/a/cloudpointgeo.com/wiki/organizational-structure/team-management-list)',
    ],

    rolesResponsibilities: [
      'BDM (Business Development Manager) — responsible for keeping this SOP updated',
      'MC (Marketing Coordinator) — responsible for keeping this SOP updated',
      'SL (Sales Lead) — follows up with qualified lead within 24 hours',
      'TL (Team Lead) — follows up with qualified lead within 24 hours',
    ],

    inputsNeeded: [
      'Inbound inquiry (from any source)',
      'COM Site Team Management Page to identify correct Sales Lead for assignment',
    ],

    steps: [
      'Inquiry received.',
      'Determine if the inquiry is a QL (Qualified Lead).',
      'Review the COM Site Team Management Page (https://sites.google.com/a/cloudpointgeo.com/wiki/organizational-structure/team-management-list) and assign the lead to the proper Sales Lead.',
      'Pipedrive: add contact and request information if not in Pipedrive already. If contact exists in Pipedrive, update info as needed and pin a note with the inquiry information. Label person MQL.',
      'SL or TL follows up within 24 hours.',
    ],

    qualityChecks: [
      'Inquiry assessed and determination made on whether it is a Qualified Lead (QL).',
      'Lead assigned to the correct Sales Lead using the COM Site Team Management Page.',
      'Contact added or updated in Pipedrive with inquiry information pinned as a note.',
      'Person labeled as MQL in Pipedrive.',
      'SL or TL follow-up completed within 24 hours.',
    ],

    expectedOutput:
      'Qualified inbound lead entered in Pipedrive, labeled MQL, assigned to the correct Sales Lead, and followed up within 24 hours.',

    commonIssues: [
      {
        issue: 'Inquiry received but it is unclear which Sales Lead should be assigned.',
        fix: 'Review the COM Site Team Management Page to identify the correct Sales Lead for the inquiry type and team.',
      },
      {
        issue: 'Contact already exists in Pipedrive with outdated information.',
        fix: 'If contact exists in Pipedrive, update info as needed and pin a note with the new inquiry information. Do not create a duplicate contact.',
      },
    ],

    notes: [
      'The BDM and MC are jointly responsible for keeping this SOP updated.',
      'Automations referenced in the source document under "Standard Operating Folder" are noted but not detailed in the source — see the Automations section of the source document.',
      'Abbreviations: CM=Campaign Manager, EM=Executive Manager, IT=IT Admin, MC=Marketing Coordinator, NE=New Employee, OM=Office Manager, PM=Project Manager, SL=Sales Lead, SM=Staff Manager, TL=Team Lead.',
    ],

    sourceSummary:
      'This SOP defines Cloudpoint\'s internal process for receiving, qualifying, assigning, and following up on inbound leads. The five-step process covers inquiry receipt, lead qualification determination, Sales Lead assignment via the COM Site, Pipedrive CRM entry, and required 24-hour follow-up.',

    relatedSops: ['SOP-201', 'SOP-209'],
  },

  // ── SOP-220 ─────────────────────────────────────────────────────────────────
  // Source: "220-Marketing Content Review & Approval SOP.docx"
  {
    id: 'SOP-220',
    title: 'Marketing Content Review & Approval',
    sourceFileName: '220-Marketing Content Review & Approval SOP.docx',
    version: '1.0',
    department: 'Sales & Marketing',
    owner: 'VP of Sales',
    category: 'Content Review',
    workflowType: 'Content Approval',
    tags: [
      'content review', 'approval', 'marketing', 'brand', 'tier 1', 'tier 2', 'tier 3',
      'VP of sales', 'marketing coordinator', 'team leaders', 'pipedrive', 'pandadoc',
      'canva', 'adobe', 'wix', 'campaigns', 'website', 'social media', 'newsletter',
      'case studies', 'white papers', 'email campaigns', 'one-pagers', 'proposals',
    ],
    importedDate: '2026-06-23',
    reviewStatus: 'Approved',   // source document says "Approved By: VP of Sales"

    purpose:
      'This SOP defines a clear, consistent process for reviewing and approving marketing materials to ensure: brand consistency, technical accuracy, strategic alignment, and efficient decision-making without bottlenecks. The process is designed to scale as Cloudpoint grows while maintaining clarity around who owns the final approval.',

    whenToUse:
      'Use this SOP for all external-facing content, including but not limited to: website pages and landing pages, blog posts and thought leadership, social media content, one-pagers and sales collateral, case studies and white papers, proposals (marketing components), email campaigns and newsletters, and event and conference materials.',

    requiredTools: [
      'Pipedrive (CRM)',
      'PandaDoc (document creation & management)',
      'Google Shared Drive → 200_SMA_Sales and Marketing',
      'Canva or Adobe (designing marketing content)',
      'Wix (website hosting)',
      'Zoom (webinar hosting)',
      'Smartpress (printing hard copy materials)',
      'FedEx (printing hard copy materials)',
      'Allegra (printing hard copy materials)',
      'Vistaprint (printing banner displays and backdrops)',
      'Mailchimp (email marketing)',
      'PandaDoc — Approved Quote Template',
      'PandaDoc — Approved Proposal Template',
      'PandaDoc — Room Templates',
      'Cloudpoint Operations Manual (COM Site) — Branding guidelines',
    ],

    rolesResponsibilities: [
      'Marketing Coordinator — Owns brand standards, messaging, and visual consistency. Determines the approval tier for all content. Manages the review and approval workflow. Has final approval authority for Tier 1 content. Escalates all strategic alignment questions to the VP of Sales.',
      'Team Leaders (SMEs) — Own technical accuracy and service positioning. Review and approve factual claims. Confirm the relevance of recipient lists when applicable.',
      'VP of Sales — Owns strategic alignment and go-to-market consistency. Final approval authority for Tier 2 content. Resolves all escalated strategic questions.',
      'Marketing Leadership Group — Includes marketing staff and leadership team. Provides strategic oversight for company-wide initiatives. Final approval authority for Tier 3 content.',
    ],

    inputsNeeded: [
      'Content to be reviewed (draft or final version)',
      'Determination of content approval tier (Tier 1, 2, or 3) made by Marketing Coordinator',
      'Applicable checklist items for the content tier',
    ],

    steps: [
      // ── STEP 1: Determine Tier ─────────────────────────────────────────────
      '[Step 1 — Determine Content Approval Tier] Marketing Coordinator determines the content tier based on scope and impact, not format.',
      '[Tier 1 — Team-Specific Content] Applies to content supporting a single team or a specific service. Examples: team-specific landing pages or white pages, blog post aesthetics and grammar, case studies, team-specific emails with graphics, routine team web page updates.',
      '[Tier 1 — Approval Process] Team Leader reviews for technical accuracy and positioning.',
      '[Tier 1 — Approval Process] Marketing Coordinator reviews for branding, messaging, and clarity.',
      '[Tier 1 — Final Approval] Marketing Coordinator has final approval authority. If any strategic alignment concern exists, MC escalates to the VP of Sales.',
      '[Tier 2 — Cross-Team Campaigns or New Channels] Applies to content involving multiple teams and/or coordinated business development follow-up or new content channels. Examples: multi-service campaigns, industry-focused campaigns, company newsletter, cross-team event materials, cross-team landing pages and emails with graphics.',
      '[Tier 2 — Approval Process] Participating Team Leaders review relevant sections.',
      '[Tier 2 — Approval Process] Marketing Coordinator reviews branding and cohesion.',
      '[Tier 2 — Approval Process] VP of Sales reviews strategic alignment and GTM approach.',
      '[Tier 2 — Final Approval] VP of Sales has final approval authority.',
      '[Tier 3 — Company-Wide Initiatives] Applies to content representing Cloudpoint broadly or shaping company-wide positioning. Examples: company-wide campaigns, pricing discounts & company-wide promotions, major company white papers, homepage updates or major website changes, strategic announcements.',
      '[Tier 3 — Approval Process] Marketing Coordinator reviews execution readiness.',
      '[Tier 3 — Approval Process] Relevant Team Leaders review accuracy.',
      '[Tier 3 — Approval Process] Marketing Leadership Group reviews strategic alignment.',
      '[Tier 3 — Final Approval] Marketing Leadership Group has final approval authority.',

      // ── STEP 2: Strategic Escalation ──────────────────────────────────────
      '[Step 2 — Strategic Escalation Rule] The Marketing Coordinator does not resolve strategic alignment questions. Any strategic uncertainty must be escalated to the VP of Sales. Examples: unclear audience or market fit, messaging that shifts positioning, claims affecting partnerships or brand risk, campaigns impacting sales prioritization.',

      // ── STEP 3: Standard Review Checklist ─────────────────────────────────
      '[Step 3 — Content Quality Check] Verify: Technically accurate, claims are defensible, audience and intent are clear.',
      '[Step 3 — Brand & Design Check] Verify: Visuals meet brand standards, voice and tone are consistent, call to action (CTA) is appropriate.',
      '[Step 3 — Campaign-Specific Check] Apply any additional campaign-specific checklist items (TBD per source document).',

      // ── STEP 4: Weekly Marketing Meeting Usage ────────────────────────────
      '[Step 4 — Weekly Marketing Leadership Meeting] Use the weekly marketing leadership meeting only for: Tier 3 approvals/issues, strategic escalations past the VP of Sales, and review of campaign outcomes. It is NOT used for: line-by-line content review, visual or formatting feedback, or routine Tier 1 or Tier 2 approvals.',

      // ── STEP 5: Enforcement ───────────────────────────────────────────────
      '[Step 5 — Enforcement & Exceptions] Content may not be published or distributed without completing the required approval steps. Any exceptions must be approved by the VP of Sales. This SOP will be reviewed annually or as the organization scales.',
    ],

    qualityChecks: [
      'Content approval tier correctly determined by Marketing Coordinator.',
      'All required reviewers for the tier have completed their review.',
      'Standard review checklist completed: content quality, brand & design, and campaign-specific items.',
      'No strategic alignment questions resolved by MC without VP of Sales escalation.',
      'Final approval authority for the tier has signed off before publication or distribution.',
      'No content published or distributed without completing the required approval steps.',
    ],

    expectedOutput:
      'Marketing content reviewed and approved at the correct tier, with all required sign-offs documented. Content ready for publication or distribution. Final approval owner confirmed: Tier 1 = Marketing Coordinator, Tier 2 = VP of Sales, Tier 3 = Marketing Leadership Group.',

    commonIssues: [
      {
        issue: 'Strategic alignment questions arise during review and MC attempts to resolve them independently.',
        fix: 'The Marketing Coordinator does not resolve strategic alignment questions. Any strategic uncertainty must be escalated to the VP of Sales. This is a non-negotiable rule per the SOP.',
      },
      {
        issue: 'Content is published or distributed before completing the required approval steps.',
        fix: 'Content may not be published or distributed without completing the required approval steps. Any exceptions must be approved by the VP of Sales.',
      },
      {
        issue: 'Tier determination is unclear for a specific piece of content.',
        fix: 'Tier is determined by scope and impact, not format. Marketing Coordinator makes the tier determination. When in doubt, escalate to the VP of Sales.',
      },
    ],

    notes: [
      'Effective Date: 1/1/2026. Approved By: VP of Sales.',
      'Revision History: Version 1.0 — Initial SOP publication (1/10/2026).',
      'Automations: Zapier and Pipedrive (specific automation details referenced but not fully detailed in source document — see the Automations section of the source document).',
      'Checklists referenced in source: 220.1 — PandaDoc Content Updates; 220.2 — Whitepages; 220.3 — Banner/Displays.',
      'This SOP will be reviewed annually or as the organization scales.',
      'The weekly marketing leadership meeting is NOT a venue for line-by-line content review or routine Tier 1/2 approvals.',
    ],

    sourceSummary:
      'This formally approved SOP (Owner: VP of Sales, v1.0, effective 1/1/2026) establishes Cloudpoint\'s three-tier marketing content review and approval framework. Tier 1 content is owned by the Marketing Coordinator, Tier 2 by the VP of Sales, and Tier 3 by the Marketing Leadership Group. A non-negotiable strategic escalation rule requires all strategic alignment questions to go to the VP of Sales, not the Marketing Coordinator.',

    relatedSops: ['SOP-201', 'SOP-209'],
  },
];

export const CATEGORIES = [
  'All',
  'Campaigns',
  'Lead Qualification',
  'Proposals & Quotes',
  'Content Review',
  'Sales',
  'Marketing',
] as const;

export const SOURCE_NOTE =
  'SOP content is based on imported source documents and should be reviewed internally before production use.';
