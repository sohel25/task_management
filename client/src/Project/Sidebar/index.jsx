import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';

import { ProjectCategoryCopy } from '../../shared/constants/projects';
import { Icon, ProjectAvatar } from '../../shared/components';

import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
  ProjectCategory,
  Divider,
  LinkItem,
  LinkText,
  NotImplemented,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
};

const ProjectSidebar = ({ project }) => {
  // const match = useRouteMatch();

  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
          <ProjectName>
            {/* {project.name} */} Project name
          </ProjectName>
          <ProjectCategory>
            {/* {ProjectCategoryCopy[project.category]}
             */}
             Category
             project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>

      {renderLinkItem('project', 'Kanban Board', 'board', '/board')}
      {renderLinkItem('project', 'Project settings', 'settings', '/settings')}
      <Divider />
      {renderLinkItem('project', 'Releases', 'shipping')}
      {renderLinkItem('project', 'Issues and filters', 'issues')}
      {renderLinkItem('project', 'Pages', 'page')}
      {renderLinkItem('project', 'Reports', 'reports')}
      {renderLinkItem('project', 'Components', 'component')}
    </Sidebar>
  );
};

const renderLinkItem = (match, text, iconType, path) => {
  const isImplemented = !!path;

  const linkItemProps = isImplemented
    // ? { as: NavLink, exact: true, to: `${match.path}${path}` }
    // : { as: 'div' };

  return (
    <>

    {/* // <LinkItem {...linkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
      {!isImplemented && <NotImplemented>Not implemented</NotImplemented>}
    // </LinkItem> */}
    </>
  );
};

ProjectSidebar.propTypes = propTypes;

export default ProjectSidebar;
