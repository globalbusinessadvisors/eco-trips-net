import React from 'react';
import { AlertCircle, BookOpen, Award } from 'lucide-react';

const PlanBookFly = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Plan, book, fly with confidence</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow flex items-start space-x-3">
          <AlertCircle className="text-blue-500" />
          <div>
            <h3 className="font-semibold mb-2">Be in the know</h3>
            <p className="text-sm text-gray-600">Get alerts if flight prices drop or rise</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-start space-x-3">
          <BookOpen className="text-blue-500" />
          <div>
            <h3 className="font-semibold mb-2">Book smarter</h3>
            <p className="text-sm text-gray-600">Save up to 30% on select hotels after you book a flight</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow flex items-start space-x-3">
          <Award className="text-blue-500" />
          <div>
            <h3 className="font-semibold mb-2">Earn twice</h3>
            <p className="text-sm text-gray-600">Earn your airline miles on top of our rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanBookFly;