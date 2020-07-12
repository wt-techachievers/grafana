import React, { PureComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { NavModel } from '@grafana/data';
import { config } from '@grafana/runtime';
// import { Icon } from '@grafana/ui';
import Page from '../Page/Page';
import { getNavModel } from 'app/core/selectors/navModel';
import { StoreState } from 'app/types';

interface ConnectedProps {
  navModel: NavModel;
}

interface OwnProps {}

type Props = ConnectedProps;

export class ErrorPage extends PureComponent<Props> {
  render() {
    const { navModel } = this.props;
    return (
      <Page navModel={navModel}>
        <Page.Contents>
          <div className="panel-container error-container">
            <div className="error-column">
              <h1 className="error-404 text-center">404</h1>
              <hr />
              <div className="error-row error-justify-center error-text">
                <div>
                  <img src="public/img/error-404.png" />
                </div>
                <div>
                  <h3>Sorry for the inconvenience</h3>
                  <p>
                    Please go back to your{' '}
                    <a href={config.appSubUrl} className="error-link">
                      home dashboard
                    </a>{' '}
                    and try again.
                  </p>
                  <p>
                    If the error persists, seek help on the{' '}
                    <a href="https://community.grafana.com" target="_blank" className="error-link">
                      community site
                    </a>
                    .
                  </p>
                  <div className="error-row">
                    <a href={config.appSubUrl} className="error-button">
                      Home Dashboard
                    </a>
                    <a href="https://community.grafana.com" target="_blank" className="error-button">
                      Community Site
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="text-center">
                Chances you are on the page you are looking for is <span className="error-link">0%</span>.
              </div>
            </div>
          </div>
        </Page.Contents>
      </Page>
    );
  }
}

const mapStateToProps: MapStateToProps<ConnectedProps, OwnProps, StoreState> = state => {
  return {
    navModel: getNavModel(state.navIndex, 'not-found'),
  };
};

export default connect(mapStateToProps)(ErrorPage);
