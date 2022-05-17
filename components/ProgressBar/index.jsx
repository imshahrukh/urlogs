import React from "react";
function Index({label, className, whiteBar}) {
    return (
        <div className={`w-full ${className}`}>
            <div className="container mx-auto flex justify-center py-2">
                <div className="w-full h-[10px] bg-gray-400 border border-gray-200 rounded-full">
                    <div className={`w-full bg-gray-200 h-[9px] rounded-full relative ${whiteBar}`}>
                        <div className="absolute right-0">
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right">{label}</div>
        </div>
    );
}
export default Index;
