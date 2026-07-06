import "./roleselection.css";

function RoleSelection({
  roles,
  selectedRole,
  handleRoleSelect,
  handleStartInterview,
}) {
  return (
    <section className="roles" id="roles">

      <div className="section-heading">
        <p className="badge">Choose Your Career Path</p>

        <h2>Select Your Target Role</h2>

        <p className="roles-subtitle">
          Every interview is tailored with role-specific questions to simulate
          real company interview experiences.
        </p>
      </div>

      <div className="role-grid">
        {roles.map((role) => (
          <div
            key={role.name}
            className={
              selectedRole === role.name
                ? "role-card selected"
                : "role-card"
            }
            onClick={() => handleRoleSelect(role.name)}
          >
            <div className="role-top">
              <span className="role-tag">AI Interview</span>
            </div>

            <h3>{role.name}</h3>

            <p>{role.description}</p>

            <div className="role-footer">
              <span>
                {selectedRole === role.name
                  ? "Selected"
                  : "Click to Select"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedRole && (
        <div className="selected-role-box">

          <h3>Ready to Begin?</h3>

          <p>
            You have selected <span>{selectedRole}</span>.
            Your AI interviewer will generate role-specific interview questions
            and provide detailed feedback after completion.
          </p>

          <button
            className="primary-btn"
            onClick={handleStartInterview}
          >
            Start Interview
          </button>

        </div>
      )}

    </section>
  );
}

export default RoleSelection;