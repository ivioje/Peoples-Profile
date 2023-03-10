import { useContext, useEffect } from 'react';
import { Context } from '../../context/Context';


export default function useOnClickOutside(ref) {

    const { toggleOrganisationView, setToggleOrganisationView } = useContext(Context)
  useEffect(
    () => {
      const listener = (e) => {
        // If the modal is open and the clicked target is not within the modal,
      // then close the modal
      if (toggleOrganisationView && ref.current && !ref.current.contains(e.target)) {
        setToggleOrganisationView(false)
      }
      };

      document.addEventListener("mousedown", listener)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", listener)
        }
    }, [ref])
}
