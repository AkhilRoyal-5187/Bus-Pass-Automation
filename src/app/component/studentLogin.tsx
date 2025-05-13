export const StudentLogin =() => {
    return(

        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1 className="text-2xl font-bold mb-4">Student Login</h1>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Username" className="border border-gray-300 p-2 rounded"/>
                <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded"/>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
            </form>
        </div>
    )
};