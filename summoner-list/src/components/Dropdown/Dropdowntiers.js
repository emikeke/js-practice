const DropdownTier = ({onChange, value}) => {
  return (
    <div className="dropdown-menu1">
      <select className="form-select" onChange={onChange} value={value} size="7" style={{width:"12rem"}} aria-label="Default select example">
        <option value="IRON">Iron</option>
        <option value="BRONZE">Bronze</option>
        <option value="SILVER">Silver</option>
        <option value="GOLD">Gold</option>
        <option value="PLATINUM">Platinum</option>
        <option value="DIAMOND">Diamond</option>
      </select>
    </div>
  )
}
export default DropdownTier;