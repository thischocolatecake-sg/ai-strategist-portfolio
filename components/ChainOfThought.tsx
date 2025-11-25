import React from 'react';
import { CotStep } from '../types';

interface ChainOfThoughtProps {
  steps: CotStep[];
}

export const ChainOfThought: React.FC<ChainOfThoughtProps> = ({ steps }) => {
  return (
    <div className="mt-8">
      <h4 className="mb-6 font-mono text-sm uppercase tracking-widest text-emerald-500">
        // Chain of Thought
      </h4>
      <div className="relative border-l-2 border-white/10 pl-8 ml-2 space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-emerald-500" />
            
            <h5 className="mb-1 font-sans text-lg font-semibold text-white">
              {step.stepName}
            </h5>
            <p className="text-sm leading-relaxed text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};