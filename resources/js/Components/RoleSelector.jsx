// resources/js/Components/RoleSelector.jsx
import { useState } from "react";

export default function RoleSelector({ user, roles, onRoleChange }) {
    const [selectedRole, setSelectedRole] = useState(user.roles[0]?.name || "");

    const handleRoleChange = (e) => {
        const newRole = e.target.value;
        setSelectedRole(newRole);
        onRoleChange(user.id, newRole);
    };

    return (
        <select value={selectedRole} onChange={handleRoleChange}>
            <option value="">Select Role</option>
            {roles.map((role) => (
                <option key={role.id} value={role.name}>
                    {role.name}
                </option>
            ))}
        </select>
    );
}
