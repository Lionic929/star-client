import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { ResponsiveLayout, ContentLayout } from '../../components/layouts';
import {
  APP_MENU,
  AUTH_MENU,
  USER_LOGGED_MENU,
  USER_NO_LOGGED_MENU,
  AUTH_MENU_ADDITIONAL,
} from '../../constants/routes';

import { SkeletonMenu } from '../../components/skeletons';

import { FixedBar } from './FixedBar';
import { Drawer } from './Drawer';
import { MobileMenu } from './MobileMenu';
import { sizes, colors } from '../../theme';

import { UserInfo } from './UserInfo';
import { UserIcon } from './UserIcon';
import { DesktopMenu } from './DesktopMenu';

export const MobileHeader = ({ logged, typePath, activePath, loaded, user = {} }) => {
  const [activeAppMenu, setActiveAppMenu] = React.useState(false);
  const [activeUserMenu, setActiveUserMenu] = React.useState(false);

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
                          <IconButton color="secondary" onClick={() => setActiveAppMenu(true)}>
                            <MenuIcon />
                          </IconButton>
                        </div>
                        {logged === true ? (
                          <UserInfo onSelect={() => setActiveUserMenu(true)} balance={user.balance} />
                        ) : (
                          <UserIcon onClick={() => setActiveUserMenu(true)} />
                        )}
                      </React.Fragment>
                    )}
                    {typePath === 'auth' && (
                      <React.Fragment>
                        <div>
                          <IconButton color="secondary" onClick={() => setActiveAppMenu(true)}>
                            <MenuIcon />
                          </IconButton>
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
      <Drawer open={activeAppMenu} onClose={() => setActiveAppMenu(false)}>
        <React.Fragment>
          {typePath === 'app' && (
            <MobileMenu items={APP_MENU} activePath={activePath} onSelect={() => setActiveAppMenu(false)} />
          )}
          {typePath === 'auth' && (
            <MobileMenu items={AUTH_MENU} activePath={activePath} onSelect={() => setActiveAppMenu(false)} />
          )}
        </React.Fragment>
      </Drawer>
      <Drawer anchor="right" open={activeUserMenu} onClose={() => setActiveUserMenu(false)}>
        {logged ? (
          <MobileMenu items={USER_LOGGED_MENU} activePath={activePath} onSelect={() => setActiveUserMenu(false)} />
        ) : (
          <MobileMenu items={USER_NO_LOGGED_MENU} activePath={activePath} onSelect={() => setActiveUserMenu(false)} />
        )}
      </Drawer>
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

MobileHeader.propTypes = {
  logged: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  activePath: PropTypes.string.isRequired,
  typePath: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};
