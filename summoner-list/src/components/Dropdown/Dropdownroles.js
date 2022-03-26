const DropdownRoles = ({onChange, value}) => {
  return (
    <div className="dropdown-menu2">
      <select className="form-select" onChange={onChange} value={value} size="7" style={{width:"12rem"}} aria-label="Default select example">
        <option className="dropdown-selected" selected>Select role(s): </option>
        <option value="1">Top</option>
        <option value="2">Mid</option>
        <option value="3">Jungle</option>
        <option value="4">AD Carry</option>
        <option value="5">Support</option>
      </select>
    </div>
  )
}
export default DropdownRoles;