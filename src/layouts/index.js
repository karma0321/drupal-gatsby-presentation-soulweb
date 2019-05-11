import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, navigate, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Swipeable from 'react-swipeable';
import Transition from '../components/transition';
import logo from './soulweb-logo-small.png';

import './index.css';

const Header = ({ name1, name2, link1, link2, title, date }) => (
  <header>
    <div id="header-left">
      <div className="logo">
        <a href="https://soulweb.it" target="_blank">
          <img src={logo} alt="Soulweb Solutions Logo" />
        </a>
        <a href="mailto:info@soulweb.it" title="info@soulweb.it">info@soulweb.it</a>
      </div>
        <div className="names">
        <a href={link1} target="_blank"><span>{name1}</span></a>,&nbsp;
        <a href={link2} target="_blank"><span>{name2}</span></a>
      </div>
    </div>
    <div id="header-right">
      {title}<br/>
      <time>{date}</time>
    </div>
  </header>
);

class TemplateWrapper extends Component {
  NEXT = [13, 32, 39];
  PREV = 37;

  swipeLeft = () => {
    this.navigate({ keyCode: this.NEXT[0] });
  };

  swipeRight = () => {
    this.navigate({ keyCode: this.PREV });
  };

  navigate = ({ keyCode }) => {
    const now = this.props.data.slide.index;
    const slidesLength = this.props.slidesLength;

    if (now) {
      if (keyCode === this.PREV && now === 1) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1 && now === slidesLength) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1) {
        navigate(`/${now + 1}`);
      } else if (keyCode === this.PREV) {
        navigate(`/${now - 1}`);
      }
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.navigate);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.navigate);
  }

  render() {
    const { location, children, site } = this.props;

    return (
      <div>
        <Helmet
          title={`${site.siteMetadata.title} — ${site.siteMetadata.name}`}
        />
        <Header
          name1={site.siteMetadata.name1}
          name2={site.siteMetadata.name2}
          link1={site.siteMetadata.link1}
          link2={site.siteMetadata.link2}
          title={site.siteMetadata.title}
          date={site.siteMetadata.date}
        />
        <Swipeable
          onSwipedLeft={this.swipeLeft}
          onSwipedRight={this.swipeRight}
        >
          <Transition location={location}>
            <div id="slide" style={{'width': '100%'}}>{children}</div>
          </Transition>
        </Swipeable>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
};

export default props => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            name1
            name2
            link1
            link2
            title
            date
          }
        }
        allSlide {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={data => (
      <TemplateWrapper
        site={data.site}
        slidesLength={data.allSlide.edges.length}
        {...props}
      />
    )}
  />
);
