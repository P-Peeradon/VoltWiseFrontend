import React from 'react'
import Card from './ui/Card'

const ApplianceCard = ({ device, isSelected, onToggle, children }) => {
    return (
        <Card
            as="button"
            onClick={() => onToggle(device)}
            type="button"
            aria-pressed={isSelected}
            className={`group relative p-6 text-left transition-all duration-200 border-2 flex flex-col gap-4 min-h-40 w-full
                ${isSelected
                    ? 'bg-green-800 border-green-800 text-white shadow-lg'
                    : 'border-transparent hover:border-stone-200 text-stone-900 shadow-sm'
                }`
            }
        >
            {/* Icon Block */}
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors
                ${isSelected ? 'bg-white/20 text-white' : 'bg-green-800/10 text-green-800'}`}>
                <span className="text-[10px] font-bold">
                    {children}
                </span>
            </div>

            <div className="mt-auto">
                <h3 className="font-bold text-lg leading-tight">{device.label}</h3>
                <p className={`text-sm transition-opacity ${isSelected ? 'text-white/80' : 'text-neutral-500'}`}>
                    {device.sub}
                </p>
            </div>

            {/* Checkbox Indicator */}
            <div className={`absolute top-6 right-6 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                ${isSelected ? 'bg-white border-white scale-110' : 'bg-transparent border-stone-300'}`}>
                {isSelected && (
                    <svg className="w-3 h-3 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
        </Card>
    )
}

export default ApplianceCard
