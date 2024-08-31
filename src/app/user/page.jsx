'use client'

import Template from "@/components/task";
import { useState } from "react";


export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      name: 'Design Landing Page',
      skills: ['HTML', 'CSS', 'JavaScript'],
      time: '4 hours',
      deadline: '2024-09-05',
      wage: 40,
      active: true,
      eligible: false
    },
    {
      name: 'Backend API Integration',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST'],
      time: '6 hours',
      deadline: '2024-09-07',
      wage: 50,
      active: false,
      eligible: false
    },
    {
      name: 'Database Optimization',
      skills: ['SQL'],
      time: '3 hours',
      deadline: '2024-09-06',
      wage: 35,
      active: false,
      eligible: true
    },
    {
      name: 'Mobile App Debugging',
      skills: ['React Native', 'Redux', 'Debugging'],
      time: '5 hours',
      deadline: '2024-09-08',
      wage: 45,
      active: true,
      eligible: false
    },
    {
      name: 'SEO Optimization',
      skills: ['SEO', 'Content Writing'],
      time: '2 hours',
      deadline: '2024-09-09',
      wage: 30,
      active: false,
      eligible: false
    },
    {
      name: 'Cloud Infrastructure Setup',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      time: '8 hours',
      deadline: '2024-09-10',
      wage: 60,
      active: false,
      eligible: true
    },
    {
      name: 'UI/UX Review',
      skills: ['Sketch', 'User Testing'],
      time: '3 hours',
      deadline: '2024-09-11',
      wage: 38,
      active: false,
      eligible: false
    },
    {
      name: 'Code Refactoring',
      skills: ['JavaScript', 'Best Practices'],
      time: '4 hours',
      deadline: '2024-09-12',
      wage: 42,
      active: true,
      eligible: false
    },
    {
      name: 'Security Audit',
      skills: ['Penetration Testing', 'Encryption'],
      time: '7 hours',
      deadline: '2024-09-13',
      wage: 55,
      active: false,
      eligible: true
    },
    {
      name: 'Content Creation',
      skills: ['Writing'],
      time: '3 hours',
      deadline: '2024-09-14',
      wage: 28,
      active: false,
      eligible: false
    }
  ]);


  return (
    <div className="relative">

      <div className="flex justify-between items-center p-6 sm:p-8 lg:p-10">
        <h1 className="text-yellow-400 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Tasks</h1>

        <div className="relative">
          <div className="flex">
            <button onClick={() => { setDropdownOpen(!dropdownOpen) }} className="w-12 h-12 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center shadow-lg focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 448 512" stroke="currentColor"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            </button>
          </div>

          {dropdownOpen && (
            <div className="p-20 absolute bg-white right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden z-20"></div>
          )}
        </div>
      </div>

      <div className="p-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tasks.map(i => <Template key={i.name} name={i.name} skills={i.skills} time={i.time} deadline={i.deadline} wage={i.wage} active={i.active} eligible={i.eligible} />)}
      </div>
    </div>
  );
}
