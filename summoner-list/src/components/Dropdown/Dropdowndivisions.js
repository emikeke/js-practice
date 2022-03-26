const DropdownDivisions = ({onChange, value}) => {
  return (
    <div className="dropdown-menu3">
      <select className="form-select" onChange={onChange} value={value} size="7" style={{width:"12rem"}} aria-label="Default select example">
        <option value="I">I</option>
        <option value="II">II</option>
        <option value="III">III</option>
        <option value="IV">IV</option>
      </select>
    </div>
  )
}
export default DropdownDivisions;