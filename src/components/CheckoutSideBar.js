import React from 'react';

function Sidebar({ isVisible, toggleSidebar, selectedServices }) {
  if (!isVisible) return null;

  return (
    <div className="sidebar">
      <button onClick={toggleSidebar}>Close</button>
      {selectedServices.map((service, index) => (
        <div key={index}>
          <h4>{service.name}</h4>
          <p>Price: {service.price}</p>
        </div>
      ))}
      <div>
        Total: ${selectedServices.reduce((acc, service) => acc + parseFloat(service.price), 0).toFixed(2)}
      </div>
    </div>
  );
}

export default Sidebar;