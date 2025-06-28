// resources/js/Pages/Admin/Users.jsx
import { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Users({ auth }) {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
        fetchRoles();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch("/api/users", {
                headers: {
                    Authorization: `Bearer ${auth.user.api_token}`,
                    Accept: "application/json",
                },
            });
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const fetchRoles = async () => {
        try {
            const response = await fetch("/api/roles", {
                headers: {
                    Authorization: `Bearer ${auth.user.api_token}`,
                    Accept: "application/json",
                },
            });
            const data = await response.json();
            setRoles(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching roles:", error);
            setLoading(false);
        }
    };

    const assignRole = async (userId, roleName) => {
        try {
            const response = await fetch(`/api/users/${userId}/assign-role`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.user.api_token}`,
                    Accept: "application/json",
                },
                body: JSON.stringify({ role: roleName }),
            });

            if (response.ok) {
                fetchUsers(); // Refresh the users list
                alert("Role assigned successfully!");
            } else {
                alert("Error assigning role");
            }
        } catch (error) {
            console.error("Error assigning role:", error);
            alert("Error assigning role");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    User Management
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-medium mb-4">
                                Manage Users and Roles
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Current Role
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Assign Role
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {user.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {user.email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {user.roles?.length > 0
                                                        ? user.roles[0].name
                                                        : "No role"}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <select
                                                        onChange={(e) =>
                                                            assignRole(
                                                                user.id,
                                                                e.target.value
                                                            )
                                                        }
                                                        className="border border-gray-300 rounded-md px-3 py-2"
                                                        defaultValue={
                                                            user.roles?.length >
                                                            0
                                                                ? user.roles[0]
                                                                      .name
                                                                : ""
                                                        }
                                                    >
                                                        <option value="">
                                                            Select Role
                                                        </option>
                                                        {roles.map((role) => (
                                                            <option
                                                                key={role.id}
                                                                value={
                                                                    role.name
                                                                }
                                                            >
                                                                {role.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
