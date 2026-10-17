/**
 * SaveVault case study.
 * Technical claims follow the audit of BigTasty927/SaveVault main at c974f48.
 * A live deployment was not checked, so the page does not claim one.
 */
export const savevault = {
    slug: 'savevault',
    name: 'SaveVault',
    tagline: 'Your discoveries, organized.',
    summary: 'An intelligent product wishlist that transforms scattered online discoveries into a structured, searchable personal collection.',
    overview: 'Paste a product URL. SaveVault extracts the product information it can find, enriches the record, and saves the item to a collection you can browse, filter, and edit.',
    type: 'Personal project',
    role: ['System design', 'Development'],
    focus: ['Metadata extraction', 'Image handling', 'Product data'],
    status: 'Built — further improvements planned',
    timeline: '2025 — 2026',
    image: null,
    imageLabel: 'A screenshot of the SaveVault wishlist is not in the portfolio yet.',
    sections: [
        {
            type: 'prose',
            id: 'problem',
            title: 'The problem',
            lede: 'Product discovery was easy. Keeping it was not.',
            paragraphs: [
                'I kept finding products on social platforms, in videos, on blogs, and on other websites. Those finds did not stay in one place. A saved post could remain buried. A link disappeared into tabs or bookmarks. A screenshot had no context I could search later.',
                'Copying the title, price, image, and link into a list by hand made saving something feel like work.',
                'The hard part was not storing a link. It was turning an inconsistent product page into one record I could browse later.',
            ],
        },
        {
            type: 'prose',
            id: 'solution',
            title: 'The solution',
            lede: 'A personal wishlist that starts with a product URL.',
            paragraphs: [
                'You paste a link. SaveVault accepts it and finishes the work in the background. It retrieves the page in a way that fits the retailer, reads the product information available there, and enriches secondary details.',
                'The item is saved into the collection. You can browse it, filter it, and edit it afterward.',
            ],
        },
        {
            type: 'workflow',
            id: 'workflow',
            title: 'How it works',
            lede: 'From a pasted link to an item in the collection.',
            steps: [
                {title: 'Paste a link', detail: 'You add a product URL in the Inbox.'},
                {title: 'Continue in the background', detail: 'The app accepts the request and finishes the processing after it responds.'},
                {title: 'Retrieve the page', detail: 'It fetches product data along the path that fits that retailer. Some stores use a dedicated source, then a direct fetch. Others start from the page itself.'},
                {title: 'Read the details', detail: 'It extracts the product information on the page, including HTML, JSON-LD, and Open Graph data. Shopify product data is used where that applies.'},
                {title: 'Enrich secondary fields', detail: 'A model classifies the product and fills in secondary details. It does not invent the title.'},
                {title: 'Check title, price, and image', detail: 'Explicit rules decide whether the title can be trusted, how to treat disagreeing prices, and which image is usable.'},
                {title: 'Save the item', detail: 'The product is written to PostgreSQL as a wishlist item.'},
                {title: 'Browse, filter, and edit', detail: 'You look through the collection, narrow it, and change an item after it has been saved.'},
            ],
        },
        {
            type: 'prose',
            id: 'role',
            title: 'My role and contributions',
            lede: 'I designed and built SaveVault as a personal wishlist, from the paste box through storage.',
            paragraphs: [
                'That included the collection screens, retailer-specific retrieval, and the rules for titles, prices, and images.',
                'Later work focused on images. Malformed image URLs are rejected, candidates are ranked, and a failed choice can fall through to another usable image.',
            ],
        },
        {
            type: 'technologies',
            id: 'technologies',
            title: 'Technologies',
            lede: 'The stack behind the current application.',
            groups: [
                {title: 'Frontend', items: ['React', 'Vite', 'Tailwind']},
                {title: 'Backend', items: ['Vercel API']},
                {title: 'Database', items: ['PostgreSQL', 'Drizzle']},
                {title: 'AI', items: ['OpenAI']},
                {title: 'Extraction', items: ['HTML', 'JSON-LD', 'Open Graph', 'Shopify', 'Apify']},
                {title: 'Image handling', items: ['Candidate ranking', 'Validation', 'Optional Vercel Blob']},
            ],
            note: 'An older n8n webhook remains in the server. It is a legacy integration, not the current architecture.',
        },
        {
            type: 'challenges',
            id: 'challenges',
            title: 'Challenges and engineering decisions',
            lede: 'Three choices decide whether a saved product is worth keeping.',
            items: [
                {
                    title: 'Inconsistent retailer metadata',
                    problem: 'Product pages do not share one format. Some expose structured data. Others rely on page metadata. Different retailers also need different ways to fetch the page.',
                    approach: 'Read JSON-LD and Open Graph, and retrieve data through a path chosen for that store. StockX and eBay use a dedicated source, then a direct fetch, and do not also call the generic paid fetcher. Amazon starts from the page, then a generic fetcher.',
                    result: 'The pipeline does not assume every store uses the same markup or the same fetch.',
                },
                {
                    title: 'Broken or unsuitable product images',
                    problem: 'A page can offer many images, including logos, weak assets, or URLs that are not actually usable. The first one is often the wrong one.',
                    approach: 'Reject malformed image URLs, rank the remaining candidates, and try up to five. Each candidate is checked for the host, a successful response, the content type, the size, and the file signature. When image storage is configured, a usable file can be stored.',
                    result: 'A dead first image is not kept as the product image. If every attempt fails, the item is still saved with no image.',
                },
                {
                    title: 'AI interpretation and deterministic checks',
                    problem: 'A model can fill a record confidently and still get the title or price wrong.',
                    approach: 'The model enriches secondary fields and does not create the title. If no authoritative title remains, the save fails. Disagreeing top price candidates are dropped rather than averaged. The model may supply a price only when the page produced none. A missing price does not block the save.',
                    result: 'Classification can come from the model. Title, conflicting prices, and image acceptance stay with explicit rules. You edit the item after it is saved.',
                },
            ],
        },
        {
            type: 'results',
            id: 'results',
            title: 'Results and lessons',
            groups: [
                {
                    title: 'What it does',
                    paragraphs: [
                        'SaveVault takes a pasted product URL and turns it into a wishlist item. It extracts the metadata it can find, enriches secondary fields, stores an image when one passes the checks, and writes the item to PostgreSQL.',
                        'The collection can be browsed, filtered, searched, and sorted. You can open an item, look through categories, brands, and price bands, mark what you want most, and edit the details afterward.',
                    ],
                },
                {
                    title: 'Lessons',
                    items: [
                        'The hard part is the variation between retailer pages, not the act of receiving a URL.',
                        'Retrieval and enrichment need to stay separate. How a page is fetched depends on the store. Understanding the product comes after that.',
                        'Unreliable metadata needs explicit rules. A weak title fails the save, disagreeing prices are dropped, and a bad image is skipped.',
                        'AI is useful for classification and other secondary fields. It is a poor sole authority for the title, a conflicting price, or the choice of image.',
                        'Fallback behavior has to stop somewhere. Other image candidates can be tried. A failed enrichment is not retried yet.',
                    ],
                },
                {
                    title: 'Planned next',
                    paragraphs: [
                        'Still ahead: a Telegram capture path, removing the legacy n8n integration, retrying a failed enrichment, turning on the inactive Amazon fetcher, stronger checks when fetching images, and a second model. None of that is part of the current application.',
                    ],
                },
            ],
        },
        {
            type: 'links',
            id: 'links',
            title: 'Explore the project',
            note: 'A public demo is not linked yet.',
            links: [],
        },
    ],
}
