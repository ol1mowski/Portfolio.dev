import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJs,
  FaDocker,
  FaDatabase,
  FaBootstrap,
  FaSass,
  FaWordpress,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
} from 'react-icons/si';

export const getTechIcon = (techName: string): React.ReactNode => {
  const tech = techName.toLowerCase();

  if (tech.includes('react')) return <FaReact />;
  if (tech.includes('node')) return <FaNodeJs />;
  if (tech.includes('css')) return <FaCss3Alt />;
  if (tech.includes('javascript') || tech.includes('js')) return <FaJs />;
  if (tech.includes('typescript') || tech.includes('ts')) return <SiTypescript />;
  if (tech.includes('next')) return <SiNextdotjs />;
  if (tech.includes('express')) return <SiExpress />;
  if (tech.includes('mongo')) return <SiMongodb />;
  if (tech.includes('postgres')) return <SiPostgresql />;
  if (tech.includes('mysql')) return <SiMysql />;
  if (tech.includes('docker')) return <FaDocker />;
  if (tech.includes('sql') || tech.includes('database')) return <FaDatabase />;
  if (tech.includes('bootstrap')) return <FaBootstrap />;
  if (tech.includes('tailwind')) return <SiTailwindcss />;
  if (tech.includes('sass')) return <FaSass />;
  if (tech.includes('wordpress')) return <FaWordpress />;
  if (tech.includes('figma')) return <FaFigma />;

  return <FaJs />;
};
