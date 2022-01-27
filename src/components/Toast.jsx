import { useState } from 'react';

const Toast = ({message, colorScheme}) => {
  const [show, setShow] = useState(true);

  const hideToast = () => {
    setShow(false);
  }

  const toastClass = `toast align-items-center text-white bg-${colorScheme}`;

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 11}}>
      <div 
        className={toastClass}
        role="alert"
        style={
          {display: show ? "block" : "none"}
        }
      >
        <div class="d-flex">
          <div class="toast-body">
            {message}
         </div>
    <button 
      type="button" 
      class="btn-close btn-close-white me-2 m-auto" 
      data-bs-dismiss="toast"
      onClick={hideToast}
    >
    </button>
        </div>
      </div>
    </div>
  );
}

export default Toast;
