// Vendor Modules
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
// Utilities
import { ReactComponent as FragCluster } from '@images/frag-cluster1.svg'
import { ReactComponent as FlippedFragCluster } from '@images/frag-cluster2.svg'
// Styles
import styles from './case-studies-block.module.scss'

class CaseStudiesBlock extends React.Component {
  render() {
    const { caseStudies, className, sectionTitle, listingUrl } = this.props

    return (
      <div className={[styles.block, className].join(' ')}>
        {sectionTitle ? (
          <span className={styles.pageSectionTitle}>{sectionTitle}</span>
        ) : null}
        <div className={styles.blockList}>
          {(caseStudies || []).map((caseStudy, index) => {
            let imgurl = caseStudy.feedImage || caseStudy.homepageImage || require('../../images/default-featured.png')

            return (
              <Link
                key={`case-study-link-${index}`}
                className={styles.caseStudy}
                to={caseStudy.href}
              >
                <div className={styles.caseStudyMeta}>
                  <div className={styles.caseStudyMetaContainer}>
                    <span className={styles.caseStudyMetaClient}>
                      {caseStudy.client}
                    </span>
                    <h3 className={styles.caseStudyMetaTitle}>
                      {caseStudy.title}
                    </h3>
                    <p className={styles.caseStudyMetaDesc}>
                      {caseStudy.description}
                    </p>
                  </div>
                </div>

                <div className={styles.caseStudyImage}>
                  <FragCluster className={styles.caseStudyClusterIcon} />
                  <div
                    className={styles.caseStudyImageInner}
                    style={{
                      backgroundImage: `url(${imgurl})`,
                    }}
                  />
                </div>
              </Link>
            )
          })}
        </div>
        {listingUrl ? (
          <div className={styles.seeMore}>
            <Link to={listingUrl}>See more case studies</Link>
          </div>
        ) : null}
      </div>
    )
  }
}

CaseStudiesBlock.propTypes = {
  caseStudies: PropTypes.array.isRequired,
  className: PropTypes.string,
  listingUrl: PropTypes.string,
  sectionTitle: PropTypes.string,
}

CaseStudiesBlock.defaultProps = {
  className: '',
  caseStudies: [],
  sectionTitle: 'Work',
}

export default CaseStudiesBlock
