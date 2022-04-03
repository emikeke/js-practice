const DropdownRoles = ({onChange, value}) => {
  return (
    <div className="dropdown-menu2">
      <select className="form-select" onChange={onChange} value={value} size="7" style={{width:"12rem"}} aria-label="Default select example">
        <option value="top">Top</option>
        <option value="mid">Mid</option>
        <option value="jungle">Jungle</option>
        <option value="ad carry">AD Carry</option>
        <option value="support">Support</option>
      </select>
    </div>
  )
}
export default DropdownRoles;