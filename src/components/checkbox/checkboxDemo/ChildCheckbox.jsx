import ParentChildCheckbox from "./ParentChildCheckbox";
import {Link } from 'react-router-dom';

export default function ChildCheckbox() {
  const permissions = ["Read", "Write", "Delete"];

  return (<>
    <Link to="/checkbox">Checkbox</Link>
     <h2>Parent-Child Checkbox Example</h2>

    <div style={{ padding: "40px" }}>
      <ParentChildCheckbox
        parentLabel="Select All Permissions"
        childrenOptions={permissions}
      />
      
    </div>
    </>

  );
}
