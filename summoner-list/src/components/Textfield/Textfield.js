import Button from "../Button/Button";

const Textfield = ({type, value, onChange, id}) => {
  return(
    <div className="mb-3">
      <label htmlFor="summoner-name" className="form-label">
      <input 
        className="form-control"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
      <Button buttonText="Submit"/>
      </label>
    </div>
  )
}

export default Textfield;