import React from "react";
import Button from "@material-ui/core/Button";

const Diet1 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleDiet(props.value);
        }}
        disableElevation
      >
        Anything
      </Button>
    </div>
  );
};

export default Diet1;