/**
 * SaveVault case study.
 * Copy is adapted from the project brief. Editorial instructions in that
 * brief are not published. Nothing here was confirmed in a SaveVault repository.
 */
export const savevault = {
    slug: 'savevault',
    name: 'SaveVault',
    tagline: 'Save anything worth remembering.',
    summary: 'Turn scattered product discoveries into structured, searchable information.',
    overview: 'SaveVault started as a personal automation project. Products found across social media, websites, videos, and other pages were easy to lose and slow to organize by hand. The aim was to capture a product, pull out the useful information, and keep a structured record.',
    type: 'Personal project',
    role: ['System design', 'Development', 'Automation'],
    focus: ['AI enrichment', 'Automation', 'Data extraction'],
    status: 'In development',
    timeline: '2025 — present',
    image: null,
    imageLabel: 'A screenshot or architecture graphic of SaveVault is not in the portfolio yet.',
    sections: [
        {
            type: 'prose',
            id: 'problem',
            title: 'The problem',
            lede: 'Product discovery was easy. Remembering and organizing it was not.',
            paragraphs: [
                'I kept finding products on social platforms, in videos, on blogs, and on websites that I wanted to come back to. Those discoveries did not live in one place. A saved post could stay buried in Instagram. A link could disappear into browser tabs or bookmarks. A screenshot had no searchable context.',
                'Writing the title, price, image, link, category, and notes into a database by hand made saving something feel like work. The original SaveVault brief named that directly: scattered discoveries made tracking ideas difficult, and the desired system would gather them automatically.',
                'The hard part was not saving a link. It was turning an inconsistent piece of internet content into a consistent, structured record.',
            ],
        },
        {
            type: 'prose',
            id: 'solution',
            title: 'The solution',
            lede: 'A capture and enrichment path for product discoveries.',
            paragraphs: [
                'SaveVault was designed to shorten the process to something close to find, share, enrich, and save. Someone provides a product URL or another supported input. The system retrieves what it can, extracts product metadata, normalizes the result, fills missing fields when it has a way to, and stores a structured item.',
                'The early concept asked for a title, price, image, link, and source platform, with room for notes, tags, or categories. It was meant for people who discover things online — shoppers, creators, researchers, and trend trackers — and want a personal catalog without rebuilding every entry.',
                'The first destination described in the brief was Notion. The idea later grew past basic bookmarking into a pipeline that interprets URLs, normalizes product information, and tries to fill in missing metadata.',
            ],
        },
        {
            type: 'workflow',
            id: 'workflow',
            title: 'How it works',
            lede: 'The notes describe a pipeline that separates capture from understanding the product.',
            note: 'This diagram follows SaveVault project materials, including later extraction instructions. It was not re-checked against a current code repository for this page.',
            steps: [
                {title: 'Capture', detail: 'A product URL. A Telegram bot is also described as a capture input.'},
                {title: 'Fetch', detail: 'Retrieve page metadata and product information.'},
                {title: 'Extract', detail: 'Title, description, price, canonical URL, images, and offers. Sources described include JSON-LD, Open Graph data, and crawl metadata.'},
                {title: 'Enrich', detail: 'Normalize the record, classify a category, and look for a representative image when the page does not provide a usable one.'},
                {title: 'Validate', detail: 'Deal with missing or malformed fields instead of trusting every extracted value.'},
                {title: 'Store', detail: 'Save a structured product record.'},
                {title: 'Browse', detail: 'Search, filter, organize, and reuse what was saved. This step is part of the intended experience.'},
            ],
        },
        {
            type: 'prose',
            id: 'role',
            title: 'My role and contributions',
            lede: 'I designed and built SaveVault as a personal project, from capture through enrichment and storage.',
            paragraphs: [
                'That included defining the saving experience, designing the structured data flow, configuring the automation, trying more than one way to capture a product, and writing instructions for AI extraction and normalization.',
                'I also connected external data sources, handled missing product information, and tested the flow against different kinds of URLs and pages.',
                'Later work focused on making metadata more reliable: which image to keep, how to resolve a bad URL, what to do when page metadata is incomplete, and how the system falls back when the first choice fails.',
            ],
        },
        {
            type: 'technologies',
            id: 'technologies',
            title: 'Technologies',
            note: 'These labels come from later SaveVault materials. They have not been checked against the current repository. Tools that appear only in the first proposal, and platform names that were guessed afterward, are left off this list.',
            items: [
                'n8n',
                'AI extraction and normalization',
                'HTTP retrieval',
                'JSON-LD',
                'Open Graph metadata',
                'Search-based image lookup',
            ],
        },
        {
            type: 'challenges',
            id: 'challenges',
            title: 'Challenges and engineering decisions',
            note: 'Taken from SaveVault project notes. Not re-checked in the application repository for this page.',
            items: [
                {
                    title: 'Inconsistent product pages',
                    problem: 'Pages do not expose product information in one shape. Some include JSON-LD. Others rely on Open Graph tags. Some image URLs are incomplete or malformed.',
                    approach: 'Read more than one metadata source, and fall back when a primary field fails, instead of assuming a single page structure.',
                    result: 'Extraction does not depend on every site using the same markup. No accuracy figure is claimed.',
                },
                {
                    title: 'Choosing a representative image',
                    problem: 'One URL can contain many images, including logos, low-quality assets, or paths that cannot be used.',
                    approach: 'Treat image selection as a ranked list of candidates. Notes on later work describe shared ranking and failover, so a failed choice can move to the next usable image.',
                    result: 'The first image returned is not automatically the one that gets saved. The ranking behavior itself was not confirmed in code here.',
                },
                {
                    title: 'More than one way in',
                    problem: 'The original blueprint anticipated links, screenshots, video captions, browser sharing, email forwarding, and other entry points. Those inputs are not all confirmed as built.',
                    approach: 'Separate capture from enrichment, so different triggers could feed the same normalization pipeline.',
                    result: 'The pipeline is designed so capture and enrichment are not the same step. The extra entry points remain anticipated, not a finished list of features.',
                },
                {
                    title: 'Automation that can be wrong',
                    problem: 'Automatic extraction is useful until the system confidently stores incorrect information.',
                    approach: 'Detect missing fields and leave a path for confirmation or editing. The original workflow called for missing fields to trigger that check, rather than treating model output as always trustworthy.',
                    result: 'AI is framed as one step in the pipeline. A specific review screen was not confirmed in a repository for this page.',
                },
            ],
        },
        {
            type: 'results',
            id: 'results',
            title: 'Results and lessons',
            groups: [
                {
                    title: 'Described functionality',
                    paragraphs: [
                        'The project notes describe SaveVault moving from a “save this product to Notion” idea to an extraction and enrichment flow: interpret a source URL, retrieve available metadata, normalize the product, and fill gaps when another source can.',
                        'No usage numbers, speed claims, or business results are stated, because none were verified.',
                    ],
                },
                {
                    title: 'Lessons',
                    items: [
                        'The hard part of this kind of automation is usually the variation in real inputs, not the act of triggering a workflow.',
                        'A reliable version needs validation, fallbacks, a structured schema, retries, and rules around model output.',
                        'Extraction, enrichment, storage, and presentation need clear boundaries.',
                        'AI is useful here for interpretation and enrichment. Deterministic logic is a better place for validation, routing, storage, and reliability.',
                    ],
                },
                {
                    title: 'Original roadmap',
                    paragraphs: [
                        'The first roadmap named duplicate detection, spending tracking, suggestions based on earlier saves, faster capture, and export. Those are future directions from that document, not a confirmed current plan, and they are not presented as built.',
                    ],
                },
            ],
        },
        {
            type: 'links',
            id: 'links',
            title: 'Explore the project',
            note: 'A live app, public repository, and workflow walkthrough are not linked yet.',
            links: [],
        },
    ],
}
