
import React from 'react';
import { Link ,Router} from 'react-router-dom';
import CreateModal from '../../../components/CreateModal';
// import createModal from '../../../components/CreateModal'
import { Button } from '../../../shared/components';
import { Item } from '../../NavbarLeft/Styles';

import { Header, BoardName } from './Styles';

const ProjectBoardHeader = (issueCreateModalOpen) => (
  <>
  <Header>
    <BoardName>Kanban board</BoardName>

    {/* <Link to={'/create'}  >
      <Button className="btn primary">New Task</Button>
      </Link> */}
<CreateModal/>
  </Header>
      
      </>

);

export default ProjectBoardHeader;
