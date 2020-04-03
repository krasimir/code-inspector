/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { getContentOfType } from 'calpamos/src/content/selectors';
import { goToStep } from 'calpamos/src/questionnaire/actions';
import { prescreenerLandingPageShown } from 'calpamos/src/prescreener/actions';
import AntidoteLogo from 'calpamos/src/ui/icons/AntidoteLogo.jsx';
import Footer from 'calpamos/src/ui/Footer.jsx';
import LanguageSwitcher from 'calpamos/src/l10n/components/LanguageSwitcher.jsx';
import ScopeToMedia from 'calpamos/src/ui/ScopeToMedia.jsx';
import StyledContent from 'calpamos/src/content/components/StyledContent.jsx';
import defer from 'calpamos/src/utils/defer';
import {
  BRAND_BAR_HEIGHT,
  BRAND_BAR_HEIGHT_LG,
} from 'calpamos/src/ui/BrandBar.jsx';
import { Box, Title, Image } from 'calpamos/src/ui/primitives';
import { Container, Row, Col } from 'calpamos/src/ui/grid';
import { MATCH_QUESTION } from 'calpamos/src/questionnaire/constants';
import { fromMd, toMd } from 'calpamos/src/theme/constants';
import { linkReset, media } from 'calpamos/src/ui/utils';
import { styleProps } from 'calpamos/src/styled-system';
import { ViewContext } from 'calpamos/src/di';
import {
  useCoBrandedHeader,
  displayAdditionalFooterContent,
  getAdditionalFooterContent,
} from 'calpamos/src/whitelabel';
import LandingCapsules from '../LandingCapsules.jsx';
import LandingCapsulesNarrow from '../LandingCapsulesNarrow.jsx';
import { LandingPhotoNarrow, LandingPhotoWide } from '../LandingPhotos.jsx';
import {
  GENERIC_PRESCREENER,
  PRESCREENER_TYPES_MAPPING,
  TRIAL_STATUS,
  ACTIVE_TRIAL_STATUSES,
} from '../../constants';
import withPrescreenerType from '../../utils/withPrescreenerType';
import PrescreenerBrandBar from '../PrescreenerBrandBar.jsx';
import {
  TrialFinished,
  TrialPaused,
  TrialPausedDueToCorona,
} from './status.jsx';
import PrescreenerContent from './PrescreenerContent.jsx';

const components = {
  [MATCH_QUESTION]: defer(() =>
    import('calpamos/src/questionnaire/components/steps/MatchQuestion.jsx')
  ),
};
const LANDING_BG_COLOR = '#5C5E66';

// IMAGE FORMATTING
// For photos retrieved from Contentful
const jpgQuality = 40;
const smImgWidth = 960;
const lgImgWidth = 1920;
const progressiveJpg = src => `${src}?fm=jpg&q=${jpgQuality}&fl=progressive`;
const smallProgressiveJpg = src => `${progressiveJpg(src)}&w=${smImgWidth}`;
const largeProgressiveJpg = src => `${progressiveJpg(src)}&w=${lgImgWidth}`;

const LandingBrandBarWrapper = styled.div`
  line-height: 1;
  height: ${BRAND_BAR_HEIGHT}rem;
  z-index: 2;
  ${media.lg`
    height: ${BRAND_BAR_HEIGHT_LG}rem;
  `}
  ${styleProps}
`;

const LogoLink = styled.a`
  ${linkReset}
`;

const LandingPage = ({
  content,
  match,
  prescreenerType,
  goToStep,
  prescreenerLandingPageShown,
}) => {
  useEffect(() => {
    prescreenerLandingPageShown();
    goToStep(0);
  }, [goToStep, prescreenerLandingPageShown]);

  const isGenericPrescreener = prescreenerType === GENERIC_PRESCREENER;
  const isRunning =
    !content.status || ACTIVE_TRIAL_STATUSES.includes(content.status);
  const inactiveStatusComponents = {
    [TRIAL_STATUS.FINISHED]: <TrialFinished />,
    [TRIAL_STATUS.PAUSED]: <TrialPaused />,
    [TRIAL_STATUS.PAUSED_DUE_TO_CORONA]: <TrialPausedDueToCorona />,
  };
  return (
    <>
      <Helmet>
        <title>{content.landingHeading}</title>
      </Helmet>
      {useCoBrandedHeader(content.whitelabelConfiguration) && (
        <PrescreenerBrandBar />
      )}

      <Box bg={LANDING_BG_COLOR} pb={13} position="relative">
        {!useCoBrandedHeader(content.whitelabelConfiguration) && (
          <LandingBrandBarWrapper
            position={
              content.landingPhoto ? ['absolute', null, 'relative'] : 'relative'
            }
            top={0}
          >
            <Container height="100%">
              <Row height="100%" align="center" justify="space-between">
                <Col width={1}>
                  <LogoLink href="/">
                    <AntidoteLogo width={120} reverse mono />
                  </LogoLink>
                </Col>
              </Row>
            </Container>
          </LandingBrandBarWrapper>
        )}

        {content.landingPhoto ? (
          <>
            <ScopeToMedia queryString={toMd}>
              <LandingPhotoNarrow
                src={smallProgressiveJpg(content.landingPhoto.fields.file.url)}
              />
            </ScopeToMedia>

            <ScopeToMedia queryString={toMd}>
              <LandingCapsulesNarrow
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
              />
            </ScopeToMedia>

            <ScopeToMedia queryString={fromMd}>
              <LandingPhotoWide
                src={largeProgressiveJpg(content.landingPhoto.fields.file.url)}
                position="absolute"
                top={0}
                bottom={0}
                left="50%"
                right={0}
              />
            </ScopeToMedia>

            <ScopeToMedia queryString={fromMd}>
              <LandingCapsules
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
              />
            </ScopeToMedia>
          </>
        ) : (
          <LandingCapsules
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
          />
        )}
        <Container
          pt={[
            7,
            null,
            useCoBrandedHeader(content.whitelabelConfiguration) ? 10 : null,
          ]}
          position="relative"
          z={1}
        >
          <Row>
            <Col width={[1, null, 1 / 2]}>
              <Title large color="white" mt={0}>
                {content.landingHeading}
              </Title>
              <Box color="white" mb={9}>
                {isRunning && (
                  <StyledContent
                    dangerouslySetInnerHTML={{ __html: content.landingBody }}
                  />
                )}
                {!isRunning && inactiveStatusComponents[content.status]}
              </Box>
            </Col>
            {content.landingIcon && !content.landingPhoto && (
              <Col width={[null, null, 1 / 2]} ta="right">
                <ScopeToMedia queryString={fromMd}>
                  <Image
                    width="60%"
                    src={content.landingIcon.fields.file.url}
                    alt={content.landingIcon.fields.description}
                  />
                </ScopeToMedia>
              </Col>
            )}
          </Row>
        </Container>
      </Box>
      {isRunning && (
        <PrescreenerContent
          isGenericPrescreener={isGenericPrescreener}
          content={content}
          match={match}
          prescreenerType={prescreenerType}
          components={components}
        />
      )}

      {content && content.locales && content.locales.length > 1 && (
        <ViewContext.Consumer dependencies={['settings']}>
          {({ settings }) => {
            const prescreenerTypeUrlFragment = Object.keys(
              PRESCREENER_TYPES_MAPPING
            ).find(
              fragment =>
                PRESCREENER_TYPES_MAPPING[fragment] === prescreenerType
            );

            return (
              <LanguageSwitcher
                remainderPath={`/${content.name}`}
                rootPath={`${settings.rootPath}/${prescreenerTypeUrlFragment}`}
              />
            );
          }}
        </ViewContext.Consumer>
      )}

      <Footer
        extraContent={
          displayAdditionalFooterContent(content.whitelabelConfiguration) && (
            <StyledContent
              is="p"
              small
              dangerouslySetInnerHTML={{
                __html: getAdditionalFooterContent(
                  content.whitelabelConfiguration
                ),
              }}
            />
          )
        }
        footerMessage={
          <FormattedMessage
            id="prescreener.footerMessage"
            defaultMessage="Find out more about Antidote"
          />
        }
      />
    </>
  );
};

LandingPage.defaultProps = {
  content: {
    landingPhoto: {
      fields: {
        file: {
          url: '',
        },
      },
    },
    landingIcon: {
      fields: {
        file: {
          url: '',
        },
      },
    },
  },
};

LandingPage.propTypes = {
  prescreenerType: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  goToStep: PropTypes.func.isRequired,
  prescreenerLandingPageShown: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  content: getContentOfType(state, ownProps.prescreenerType),
});
const mapDispatchToProps = dispatch => ({
  goToStep: idx => dispatch(goToStep(idx)),
  prescreenerLandingPageShown: () => dispatch(prescreenerLandingPageShown()),
});

const LandingPageConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);

export default withPrescreenerType(LandingPageConnected);
