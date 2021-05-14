import React from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../containers/Layout/PageWrapper";
import StudyList from "./StudyList";
import FileDetails from "./FileDetails";
import { setSidebarActive } from "../../store/ui/actions";
import { getPacsFilesRequest } from "../../store/workflows/actions";
import "./Workflows.scss";

const WorkflowsPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(
      setSidebarActive({
        activeGroup: "workflows_grp",
        activeItem: "my_workflows",
      })
    );
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getPacsFilesRequest());
  }, [dispatch]);

  return (
    <Wrapper>
      <StudyList />
      <FileDetails />
    </Wrapper>
  );
};

export default WorkflowsPage;