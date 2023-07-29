import React from 'react';
import Image from "next/image";

const EmptyList = () => {
    return (
        <div className="flex  items-center justify-center">
            <Image src="https://www.filimo.com/assets/web/ui/img-QYm1wdoO0Ei8zOsNXwQ3NA/empty-list.svg" alt="emty-list" width="100" height="100" className="w-[15%]"/>
        </div>
    );
};

export default EmptyList;