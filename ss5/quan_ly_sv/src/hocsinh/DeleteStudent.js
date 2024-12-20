
import React from "react";

const DeleteStudent = ({onShowModal, student, onDelete}) => {
  return (
    <>
    {console.log('---------delete render-----------')}
      <div className={`modal show d-block`} tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onShowModal}
              ></button>
            </div>
            <div className="modal-body">
              <p>Bạn có chắc muốn xoá Student: {student.name}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onShowModal}
              >
                Close
              </button>
              <button
                onClick={() => onDelete(student.id)}
                type="button"
                className="btn btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteStudent;
