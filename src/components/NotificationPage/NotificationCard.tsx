import React from "react";

type NotificationProps = {
    notification: {
        NotificationId: number;
        UserId: number;
        Message: string;
        IsRead: boolean;
        CreatedAt: string;
    };
}

export const NotificationCard: React.FC<NotificationProps> = ({ notification }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center relative">
            <div className="text-sm">
                <p>{notification.Message}</p>
                <p className="text-gray-500 text-xs">{notification.CreatedAt}</p>
            </div>
            <br />
            <div className="">
                <button className="bg-[#0A65CC] text-white px-4 py-2 rounded-lg">View</button>
                <button className="bg-[#FFFF] text-black px-4 py-2 rounded-lg">Decline</button>
            </div>
        </div>
    );
};
