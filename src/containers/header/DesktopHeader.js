import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ResponsiveLayout, ContentLayout } from '../../components/layouts';
import { SkeletonMenu } from '../../components/skeletons';
import {
  APP_MENU,
  AUTH_MENU,
  USER_LOGGED_MENU,
  AUTH_MENU_ADDITIONAL,
  USER_NO_LOGGED_MENU,
} from '../../constants/routes';
import { sizes, colors } from '../../theme';

import { FixedBar } from './FixedBar';
import { DesktopMenu } from './DesktopMenu';
import { UserInfo } from './UserInfo';
import { ModalMenu } from './ModalMenu';

export const DesktopHeader = ({ logged, activePath, typePath, loaded, user = {} }) => {
  const [activeUserMenu, setActiveUserMenu] = React.useState(false);
  const [userMenuEl, setUserMenuEl] = React.useState(null);

  return (
    <React.Fragment>
      <FixedBar>
        <Container>
          <ContentLayout>
            <ResponsiveLayout>
              <Content>
                {loaded ? (
                  <React.Fragment>
                    {typePath === 'app' && (
                      <React.Fragment>
                        <div>
                          <DesktopMenu activePath={activePath} items={APP_MENU} />
                        </div>

                        <div>
                          {logged === true && (
                            <UserInfo
                              balance={user.balance}
                              onSelect={(e) => {
                                setActiveUserMenu(true);
                                setUserMenuEl(e.currentTarget);
                              }}
                            />
                          )}
                          {logged === false && <DesktopMenu activePath={activePath} items={USER_NO_LOGGED_MENU} />}
                        </div>
                      </React.Fragment>
                    )}

                    {typePath === 'auth' && (
                      <React.Fragment>
                        <div>
                          <DesktopMenu activePath={activePath} items={AUTH_MENU} />
                        </div>
                        <div>
                          <DesktopMenu activePath={activePath} items={AUTH_MENU_ADDITIONAL} />
                        </div>
                      </React.Fragment>
                    )}
                  </React.Fragment>
                ) : (
                  <SkeletonMenu />
                )}
              </Content>
            </ResponsiveLayout>
          </ContentLayout>
        </Container>
      </FixedBar>
      <ModalMenu
        items={USER_LOGGED_MENU}
        open={activeUserMenu}
        onClose={() => setActiveUserMenu(false)}
        onSelect={() => setActiveUserMenu(false)}
        anchorEl={userMenuEl}
      />
    </React.Fragment>
  );
};

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${sizes.headerHeight};
`;

DesktopHeader.propTypes = {
  logged: PropTypes.bool.isRequired,
  activePath: PropTypes.string.isRequired,
  typePath: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};
