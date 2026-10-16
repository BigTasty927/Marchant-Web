import {projects} from '../projects.js'
import {savevault} from './savevault.js'

const studies = [savevault]

export const caseStudiesBySlug = Object.fromEntries(studies.map((study) => [study.slug, study]))

export function getCaseStudy(slug) {
    return caseStudiesBySlug[slug] || null
}

export function getCaseStudyNeighbors(slug) {
    const published = projects.filter((project) => caseStudiesBySlug[project.id])
    const index = published.findIndex((project) => project.id === slug)
    if (index === -1) {
        return {previous: null, next: null}
    }
    const previous = published[index - 1]
    const next = published[index + 1]
    return {
        previous: previous ? caseStudiesBySlug[previous.id] : null,
        next: next ? caseStudiesBySlug[next.id] : null,
    }
}
