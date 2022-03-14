const Textfield = ({type, value, onChange}) => {
  return(
    <div className="form-group">
      <label htmlFor="summoner-name">Summoner name:
      <input 
        type={type}
        value={value}
        onChange={onChange}
      />
      </label>
    </div>
  )
}

export default Textfield;