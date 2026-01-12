import React from 'react';
import Button from './Button';

const ResultDisplay = ({ data, onReset }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-auto border border-gray-100">
            <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">ส่งแบบสำรวจสำเร็จ!</h2>
            <div className="space-y-4 text-gray-700">
                <div className="flex flex-col border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">ชื่อ</span>
                    <span className="font-medium">{data.name}</span>
                </div>
                <div className="flex flex-col border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">อีเมล</span>
                    <span className="font-medium">{data.email}</span>
                </div>
                <div className="flex flex-col border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">หนังที่ชอบ</span>
                    <span className="font-medium">{data.movie}</span>
                </div>
                <div className="flex flex-col border-b border-gray-100 pb-2">
                    <span className="text-sm text-gray-500">ความคิดเห็น</span>
                    <span className="font-medium">{data.comment || "-"}</span>
                </div>
            </div>
            <div className="mt-8">
                <Button onClick={onReset} className="w-full">
                    ทำแบบสำรวจใหม่
                </Button>
            </div>
        </div>
    );
};
export default ResultDisplay;
