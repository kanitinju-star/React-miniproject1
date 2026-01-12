import React from 'react';
import Button from './Button';
import Header from './Header';

const ResultDisplay = ({ data, onReset }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg max-w-md w-full mx-auto border border-gray-100 overflow-hidden font-sans">
            <Header />

            <div className="p-6">
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 space-y-6">
                    <div className="flex items-center gap-2 text-green-700 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 className="text-xl font-bold">ส่งแบบสำรวจสำเร็จ!</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                            <span className="text-gray-500 text-sm">ชื่อ:</span>
                            <span className="font-medium text-gray-800">{data.name}</span>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                            <span className="text-gray-500 text-sm">อีเมล:</span>
                            <span className="font-medium text-gray-800">{data.email}</span>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] gap-4 items-baseline">
                            <span className="text-gray-500 text-sm">หนังที่เลือก:</span>
                            <span className="text-purple-600 font-semibold">{data.movie}</span>
                        </div>
                    </div>

                    <div className="pt-2">
                        <span className="text-gray-500 text-sm block mb-2">ความคิดเห็น:</span>
                        <div className="bg-white p-3 rounded border border-gray-100 text-gray-800 min-h-[40px]">
                            {data.comment || "-"}
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <Button onClick={onReset} className="w-full bg-gray-900 hover:bg-black text-white flex items-center justify-center gap-2 py-3 rounded-lg shadow-md transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        ทำแบบสำรวจใหม่
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default ResultDisplay;
