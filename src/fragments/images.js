// Vendor Modules
import { graphql } from 'gatsby'

export const quarterImage = graphql`
  fragment quarterImage on Wagtail_ImageObjectType {
    src: rendition(format: "quarter") {
      url
      width
      height
    }
  }
`

export const iconImage = graphql`
  fragment iconImage on Wagtail_ImageObjectType {
    src: rendition(format: "icon") {
      url
      width
      height
    }
  }
`

export const largeIconImage = graphql`
  fragment largeIconImage on Wagtail_ImageObjectType {
    src: rendition(format: "large-icon") {
      url
      width
      height
    }
  }
`

export const fullImage = graphql`
  fragment fullImage on Wagtail_ImageObjectType {
    src: rendition(format: "full") {
      url
      width
      height
    }
  }
`

export const maxImage = graphql`
  fragment maxImage on Wagtail_ImageObjectType {
    src: rendition(format: "max") {
      url
      width
      height
    }
  }
`
