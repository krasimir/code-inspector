/* eslint-disable max-len */
import React from 'react';
import Helmet from 'react-helmet';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BrandBar from 'calpamos/src/ui/BrandBar.jsx';
import theme from 'calpamos/src/theme';
import { Box, Text, Title, ExternalLink, Image } from 'calpamos/src/ui/primitives';
import { Container, Row, Col } from 'calpamos/src/ui/grid';
import { getContentOfType } from 'calpamos/src/content/selectors';
import { useCoBrandedHeader } from 'calpamos/src/whitelabel';

import withPrescreenerType from '../utils/withPrescreenerType';
import PrescreenerBrandBar from './PrescreenerBrandBar.jsx';

const { colors } = theme;

const popKeyframes = keyframes`
  0% { transform: scale(0.25); opacity: 0 }
  10% { transform: scale(1.25); opacity: 0.75 }
  20% { transform: scale(1); opacity: 1 }
  90% { transform: scale(1); }
  95% { transform: scale(1.25); }
  100% { transform: scale(1); }
`;

const IconWrapper = styled(Box).attrs({
  display: 'inline-block',
  height: '32px',
  p: 4,
  position: 'relative',
  mr: 4,
  width: '32px'
})`
  vertical-align: middle;
`;

const Icon = styled(Image).attrs({
  color: 'white',
  is: 'svg',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  m: 'auto'
})`
  animation: ${popKeyframes} 3s linear forwards;
  animation-delay: 150ms;
`;

const PageTitle = styled(Title).attrs({
  display: 'inline-block',
  small: true
})`
  vertical-align: middle;
`;

function Error({ content }) {
  return (
    <Box>
      <Helmet>
        <title>Antidote</title>
      </Helmet>
      {useCoBrandedHeader(content.whitelabelConfiguration) ? <PrescreenerBrandBar /> : <BrandBar />}

      <Container py={[4, null, 7]}>
        <Row>
          <Col width={[1, null, 3 / 4, 2 / 3]}>
            <IconWrapper>
              <Icon width='36' height='36' viewBox='0 0 1792 1792'>
                <path
                  fill={colors.error}
                  d='M896 128q209 0 385.5 103t279.5 279.5 103 385.5-103 385.5-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103zm128 1247v-190q0-14-9-23.5t-22-9.5h-192q-13 0-23 10t-10 23v190q0 13 10 23t23 10h192q13 0 22-9.5t9-23.5zm-2-344l18-621q0-12-10-18-10-8-24-8h-220q-14 0-24 8-10 6-10 18l17 621q0 10 10 17.5t24 7.5h185q14 0 23.5-7.5t10.5-17.5z'
                />
              </Icon>
            </IconWrapper>
            <PageTitle>Oops, something’s gone wrong!</PageTitle>
            <Text>
              Please wait five to ten minutes and go <ExternalLink href='javascript:history.back()'>back</ExternalLink>.
            </Text>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}

Error.propTypes = {
  content: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  content: getContentOfType(state, ownProps.prescreenerType)
});

export default withPrescreenerType(connect(mapStateToProps)(Error));