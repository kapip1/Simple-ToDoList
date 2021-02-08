import React from "react";

const EditTask = (props) => {
  const { handleEditBtnClick };
  return (
    <>
      <>
        <button onClick={handleEditBtnClick}>zatwierdz zmiane</button>
        <input
          ref={textInputRef}
          type="text"
          value={inputValue}
          onChange={handleChangeEditInput}
        />
      </>
    </>
  );
};
export default EditTask;
