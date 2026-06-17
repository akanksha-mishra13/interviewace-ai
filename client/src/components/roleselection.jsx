function RoleSelection({
  roles,
  selectedRole,
  handleRoleSelect,
  handleStartInterview,
}) {
  return (
    <section className="roles" id="roles">
      <h2>Choose Your Interview Role</h2>

      <p className="roles-subtitle">
        Select one role to begin your mock interview preparation.
      </p>

      <div className="role-grid">
        {roles.map((role) => (
          <div
            key={role.name}
            className={
              selectedRole === role.name ? "role-card selected" : "role-card"
            }
            onClick={() => handleRoleSelect(role.name)}
          >
            <h3>{role.name}</h3>
            <p>{role.description}</p>
          </div>
        ))}
      </div>

      {selectedRole && (
        <div className="selected-role-box">
          <p>
            Selected Role: <span>{selectedRole}</span>
          </p>

          <button className="primary-btn" onClick={handleStartInterview}>
            Start {selectedRole} Interview
          </button>
        </div>
      )}
    </section>
  );
}

export default RoleSelection;