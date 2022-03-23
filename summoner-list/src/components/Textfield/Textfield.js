import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Textfield = ({type, value, onChange, id}) => {
  return(
    <div className="form-group col-md-3">
      <label htmlFor="summoner-name" className="form-label">
        <input className="form-control form-control-lg" id={id} type={type} value={value} onChange={onChange} />
        <div className="button-spacing">
          <Button variant="btn btn-secondary" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-1" />
        </div>
      </label>
    </div>
  )
}

export default Textfield;