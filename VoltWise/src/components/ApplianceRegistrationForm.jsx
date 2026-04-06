import { useState } from 'react'
import ApplianceCard from './ApplianceCard';
import EVLogo from '../assets/ev.svg'
import BatteryLogo from '../assets/battery.svg'
import CookTopLogo from '../assets/cooktop.svg'
import IoTLogo from '../assets/iot_plug.svg'
import HotWaterLogo from '../assets/hot_water.svg'
import SolarLogo from '../assets/solar.svg'
import HeatPumpLogo from '../assets/hvac.svg'

const devices = [
    { id: 'ev', label: 'Electric Vehicle', sub: 'Smart Charging', logo: EVLogo },
    { id: 'solar', label: 'Solar Panels', sub: 'PV Generation', logo: SolarLogo },
    { id: 'battery', label: 'Home Battery', sub: 'Storage Capacity', logo: BatteryLogo },
    { id: 'heatpump', label: 'Heat Pump', sub: 'HVAC Systems', logo: HeatPumpLogo },
    { id: 'water', label: 'Hot Water', sub: 'Electric Storage', logo: HotWaterLogo },
    { id: 'plugs', label: 'Smart Plugs', sub: 'IOT Appliances', logo: IoTLogo },
    { id: 'cooktop', label: 'Induction Cooktop', sub: 'Kitchen Efficient', logo: CookTopLogo },
    { id: 'other', label: 'Other Device', sub: 'Custom Setup' },
];

const ApplianceRegistrationForm = () => {
    const [selectedDevices, setSelectedDevices] = useState([])
    const toggleDevice = (device) => {
        setSelectedDevices((prev) => 
        prev.includes(device) 
            ? prev.filter(item => item !== device) // Remove if exists
            : [...prev, device]                   // Add if new
        );
    };

    return (
        <form className="w-full max-w-4xl flex flex-col gap-8">
            {/* Header Section */}
            <header className="flex justify-between items-end w-full">
                <div>
                    <h2 className="text-stone-900 text-2xl font-bold">Household Devices</h2>
                    <p className="text-neutral-700 text-base">Select all that apply to your current residence.</p>
                </div>
                <div className="flex items-center gap-2 text-green-800 uppercase tracking-widest font-semibold text-sm">
                <span className="w-3 h-3 bg-green-800 rounded-full animate-pulse" />
                    Smart detection active
                </div>
            </header>

            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {devices.map((device) =>                 
                     (       
                        <ApplianceCard 
                            key={device.id}
                            device={device}
                            isSelected={selectedDevices.includes(device)}
                            onToggle={toggleDevice}
                        >
                           {device?.logo && <img src={device.logo} alt={device.sub} /> }
                        </ApplianceCard>
                    ))
                }
            </div>
        </form>
  );
}

export default ApplianceRegistrationForm
