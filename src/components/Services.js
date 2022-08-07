import React from 'react';
import Servicecomponent from './Servicecomponent';
import AC from '../Images/AC.png';
import refri from '../Images/refrigerator.png';
import cooler from '../Images/cooler.png';
import Washing_machine from '../Images/Washing-machine.png';
import Oven from '../Images/Oven.png';
 const Services = () => {
  const service=["AMC", "Wet Service", "Dry Service","Second Hand Ac"];
  const ser_list = service.map((ser, index)=><h1 key={index}>{ser}</h1>);
  return (
    <div className='container-fluid text-center'>
      <h1>Our Services</h1>
     <div className='container row mx-auto m-5'>
      <Servicecomponent title="AC Repairing" list1="Installation" list2="Dry Service" list3="Wet Service" img={AC}/>
      <Servicecomponent title="Refrigerator Repairing" list1="Service" list2="Gas Leakage" list3="Water Filter Replacement"  img={refri} />
      <Servicecomponent title="Cooler Repairing" list1="Service" list2="Part Requirements/Repair" img={cooler}/>
      <Servicecomponent title="Washing machine Repairing" list1="Water Drainer Problem" list2="Dryer Problem" list3="Washer Problem" img={Washing_machine}/>
      <Servicecomponent title="Oven Repairing" list1="Service/Repair" list2="Installation" list3="Part Requirements/Repair" img={Oven}/>
     </div>
      
    </div>
  )
}

export default Services;