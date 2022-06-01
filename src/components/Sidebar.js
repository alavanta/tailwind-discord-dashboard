import React from 'react'
import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0
    flex flex-col
    bg-gray-900 text-white shadow-lg'>
        <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
        </div>
  )
}

const SideBarIcon = ({ icon,text='Tooltip 💡' }) => (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
