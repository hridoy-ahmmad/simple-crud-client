import { GetUserById } from "@/app/lib/data";







const UserDetails = async ({ params }) => {
    const { id } = await params
    const user = await GetUserById(id)

    return (
        <div>
            details
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                    {/* Profile Icon Placeholder */}
                    <div className="shrink-0">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {user.name.charAt(0)}
                        </div>
                    </div>
                    <div>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900">
                            {user.name}
                        </h5>
                        <p className="text-sm text-gray-600 font-medium">
                            {user.email}
                        </p>
                        <p className="text-sm text-gray-600 font-medium">
                            {user._id}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;