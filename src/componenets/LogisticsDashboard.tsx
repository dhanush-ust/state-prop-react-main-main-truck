import React, { useState } from 'react';

import '../App.css';
import WarehouseInventory from './WarehouseInventory';
import DeliveryStatus from './DeliveryStatus';

const LogisticsDashboard: React.FC = () => {
  const [warehouseItems, setWarehouseItems] = useState<number>(100);
  const [isTruckLeft, setIsTruckLeft] = useState<boolean>(false);
  const [NumTruckLeft, setNumTruckLeft] = useState<number>(0);

  const handleTruckDeparture = (dispatchAmount: number) => {
    if (warehouseItems > 0) { 
      const itemsToDispatch = Math.min(dispatchAmount, warehouseItems); 
      setWarehouseItems(warehouseItems - itemsToDispatch); 
      setNumTruckLeft(NumTruckLeft + 1);
      setIsTruckLeft(true); 
    }
  };

  return (
    <div className="dashboard">
      <h1>Logistics Dashboard</h1>
      <div className="dashboard-content">
        <WarehouseInventory itemCount={warehouseItems} />
        <DeliveryStatus isTruckLeft={isTruckLeft} NumTruckLeft={NumTruckLeft} warehouseItems={warehouseItems} onTruckDeparture={handleTruckDeparture} />
      </div>
    </div>
  );
};

export default LogisticsDashboard;
