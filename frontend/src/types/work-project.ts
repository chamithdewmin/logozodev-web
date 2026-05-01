export type WorkProjectGalleryItem = {
  src: string
  caption?: string
}

export type WorkProject = {
  slug: string
  projectName: string
  shortTagline: string
  clientType: string
  serviceType: string
  serviceChips: string[]
  coverImageUrl: string
  overview: string
  challenge: string
  approach: string
  outcome: string
  result: string
  resultMetric?: string
  gallery: WorkProjectGalleryItem[]
}
