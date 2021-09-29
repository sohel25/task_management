import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route,Router ,useRouteMatch, useHistory } from 'react-router-dom';

import useMergeState from '../../shared/hooks/mergeState';
import { Breadcrumbs, Modal } from '../../shared/components';

import Header from './Header';
import Filters from './Filters';
import Lists from './Lists';
import IssueDetails from './IssueDetails';
import * as style from './style.css';
import { Icon, AboutTooltip } from '../../shared/components';

import { NavLeft, LogoLink, StyledLogo, Bottom, Item, ItemText } from '../NavbarLeft/Styles';

// const propTypes = {
//   project: PropTypes.object.isRequired,
//   fetchProject: PropTypes.func.isRequired,
//   updateLocalProjectIssues: PropTypes.func.isRequired,
// };

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

const ProjectBoard = ({ project, fetchProject, updateLocalProjectIssues ,issueCreateModalOpen}) => {
  // const match = useRouteMatch();
  // const history = useHistory();

  const [filters, mergeFilters] = useMergeState(defaultFilters);

  return (
    <Fragment className='fragment'>
      <Breadcrumbs items={['Projects', project, 'Kanban Board']} />
      <Header />
      <Filters
        projectUsers={project}
        // defaultFilters={defaultFilters}
        // filters={filters}
        // mergeFilters={mergeFilters}
      />
      <Lists
        // project={project}
        // filters={filters}
        // updateLocalProjectIssues={updateLocalProjectIssues}
      />
      
       {/* <Route
         path={`/`}
         render={routeProps => (
           <Modal
             isOpen
             testid="modal:issue-details"
             width={1040}
             withCloseIcon={false}
              // onClose={() => history.push('/')}
             renderContent={modal => (
              //  <IssueDetails
              //     issueId={routeProps.match.params.issueId}
              //    projectUsers={project}
              //    fetchProject={fetchProject}
              //    updateLocalProjectIssues={updateLocalProjectIssues}
              //    modalClose={modal.close}
              //  />
            //  )}
          //  />
        //  )}
      /> */}
       
      {/* <button className='btn dark'>  <Item onClick={issueCreateModalOpen}>
      <Icon type="plus" size={27} />
      <ItemText>Create Issue</ItemText>
    </Item></button> */}
     
    </Fragment>
  );
};

// ProjectBoard.propTypes = propTypes;

export default ProjectBoard;
