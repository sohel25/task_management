// // function Example() {
// //     const [show, setShow] = useState(false);
  
// //     const handleClose = () => setShow(false);
// //     const handleShow = () => setShow(true);
  
// //     return (
// //       <>
// //         <Button variant="primary" onClick={handleShow}>
// //           Launch static backdrop modal
// //         </Button>
  
// //         <Modal
// //           show={show}
// //           onHide={handleClose}
// //           backdrop="static"
// //           keyboard={false}
// //         >
// //           <Modal.Header closeButton>
// //             <Modal.Title>Modal title</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>
// //             I will not close if you click outside me. Don't even try to press
// //             escape key.
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button variant="secondary" onClick={handleClose}>
// //               Close
// //             </Button>
// //             <Button variant="primary">Understood</Button>
// //           </Modal.Footer>
// //         </Modal>
// //       </>
// //     );
// //   }
  
// //   import React, { useState } from 'react'
// // import { render } from 'react-dom';
// // import { Button} from '../shared/components';
// import Modal from 'react-modal';
// // // import {render} from 'react-dom';
// //   const CreateModal = () => {
// //     const [show, setShow] = useState(false);
  
// //     const handleClose = () => setShow(false);
// //     const handleShow = () => setShow(true);
  
// //     return (
// //       <>
// //         <Button variant="primary" onClick={handleShow}>
// //           Launch static backdrop modal
// //         </Button>
  
// //         <Modal
// //           show={show}
// //           onHide={handleClose}
// //           backdrop="static"
// //           keyboard={false}
// //         >
// //           <Modal.Header closeButton>
// //             <Modal.Title>Modal title</Modal.Title>
// //           </Modal.Header>
// //           <Modal.Body>
// //             I will not close if you click outside me. Don't even try to press
// //             escape key.
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button variant="secondary" onClick={handleClose}>
// //               Close
// //             </Button>
// //             <Button variant="primary">Understood</Button>
// //           </Modal.Footer>
// //         </Modal>
// //       </>
// //     );
// //   }
  
// //   export default CreateModal
  
// //   render(<CreateModal />);

import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ActionButton, FormElement, FormHeading } from "../Project/IssueCreate/Styles";
// import { Form } from "../shared/components";
// import { Divider } from "../shared/components/Breadcrumbs/Styles";
// import { Actions } from "../shared/components/ConfirmModal/Styles";
import {
  IssueType,
  IssueStatus,
  IssuePriority,
  IssueTypeCopy,
  IssuePriorityCopy,
} from '../shared/constants/issues';
import {
  // FormHeading,
  // FormElement,
  SelectItem,
  SelectItemLabel,
  Divider,
  Actions,
  // ActionButton,
} from '../Project/IssueCreate/Styles';
// const propTypes = {
//   project: PropTypes.object.isRequired,
//   fetchProject: PropTypes.func.isRequired,
//   onCreate: PropTypes.func.isRequired,
//   modalClose: PropTypes.func.isRequired,
// };

// import Form from 'react-bootstrap/Form';
// import { Modal, Button, Form } from "react-bootstrap";
// import "./styles.css";
// import "bootstrap/dist/css/bootstrap.css";

const LoginForm = ({ onSubmit , modalClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form
  >
<Form>
  <Form.Group className="mb-3">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter Title" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter Description" />
  </Form.Group>
  <Form.Group className="mb-3"
        name="reporterId"
        label="Reporter"
        // options={userOptions(project)}
        // renderOption={renderUser(project)}
        // renderValue={renderUser(project)}
      > <Form.Label>Created By</Form.Label>

        </Form.Group>
        <Form.Group className="mb-3"
         isMulti
         name="userIds"
         label="Assignees"
         tio="People who are responsible for dealing with this issue."
      >
        <Form.Label>Assign to</Form.Label>
      {/* <Form.Select aria-label="Default select example"
      
      >
</Form.Select> */}
</Form.Group>
<Form.Group >
<Form.Label>Created at</Form.Label>
<Form.Control type="Date" />
</Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    {/* <FormElement>
      <FormHeading>Create issue</FormHeading>
      <Form.Field.Select
        name="type"
        label="Issue Type"
        tip="Start typing to get a list of possible matches."
        // options={typeOptions}
        // renderOption={renderType}
        // renderValue={renderType}
      />
      <Divider/>
      <Form.Field.Input
        name="title"
        label="Short Summary"
        tip="Concisely summarize the issue in one or two sentences."
      />
      <Form.Field.TextEditor
        name="description"
        label="Description"
        tip="Describe the issue in as much detail as you'd like."
      />
      <Form.Field.Select
        name="reporterId"
        label="Reporter"
        // options={userOptions(project)}
        // renderOption={renderUser(project)}
        // renderValue={renderUser(project)}
      />
      <Form.Field.Select
        isMulti
        name="userIds"
        label="Assignees"
        tio="People who are responsible for dealing with this issue."
        // options={userOptions(project)}
        // renderOption={renderUser(project)}
        // renderValue={renderUser(project)}
      />
      <Form.Field.Select
        name="priority"
        label="Priority"
        tip="Priority in relation to other issues."
        // options={priorityOptions}
        // renderOption={renderPriority}
        // renderValue={renderPriority}
      />
      <Actions>
        <ActionButton type="submit" variant="primary" 
        // isWorking={isCreating}
        >
          Create Issue
        </ActionButton>
        <ActionButton type="button" variant="empty" onClick={modalClose}>
          Cancel
        </ActionButton>
      </Actions>
    </FormElement> */}
  </Form>
  );
};

export default function CreateModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      {/* <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      > */}
        <Button variant="primary" onClick={handleShow}>
       Add New Task
        </Button>
      {/* </div> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onSubmit={onLoginFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
// ReactDOM.render(<CreateModal />, appElement);