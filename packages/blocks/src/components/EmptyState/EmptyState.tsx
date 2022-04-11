import React from "react";
import { PlusIcon, RepositoryIcon } from "@mergestat/icons";
import { Button } from "../Button";

export const EmptyState: React.FC= () => {
  return (
    <div className="t-center">
      <div className="t-circle-icon">
        <RepositoryIcon className="t-icon"/>
      </div>
      <p>No repositories added yet</p>
      <Button skin="secondary" startIcon={<PlusIcon className="t-icon" />}>Add Repository</Button>
    </div>
  )
}
