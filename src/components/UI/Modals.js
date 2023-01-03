import ReactDOM from "react-dom";

function ModalBackTracking(props) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>
  );
}

function ModalContent(props) {
  return (
    <>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        {props.children}
      </div>
    </>
  );
}

function Modals(props) {
  const portalElement = document.getElementById("overlay");

  return (
    <>
      {ReactDOM.createPortal(<ModalBackTracking />, portalElement)}
        {ReactDOM.createPortal(
            <ModalContent>{props.children}</ModalContent> , portalElement
        )}
    </>
  );
}

export default Modals;
