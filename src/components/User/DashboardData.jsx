import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUserCheck } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import { RiContactsBookLine} from 'react-icons/ri'; 
import { VscTools } from 'react-icons/vsc';
import { CiDatabase } from 'react-icons/ci'; 
import {DiCodeBadge} from 'react-icons/di';
import { BsFileEarmarkPerson, BsPeople} from 'react-icons/bs';

export const DashboardUser = [
  {
    title: 'Home',
    icon: <AiOutlineHome />,
    path: 'welcome'
  },
  {
    title: 'Perfil',
    icon: <FiUserCheck />,
    path: 'profile'
  },
  {
    title: 'Test técnicos', 
    icon: <CgFileDocument />,
    path: 'test'
  }
];

export const DashboardAdmin =[
  {
    title: 'Home',
    icon: <AiOutlineHome />,
    path: 'profile'
  },
  {
    title: 'Postulaciones',
    icon: <BsFileEarmarkPerson/>,
    path:'applicant',
  },
  {
    title: 'Contacto empresa',
    icon: <RiContactsBookLine/>,
    path:'companies'
  },
  {
    title: 'Base de datos',
    icon: <CiDatabase/>,
    path:'database',
  },
  {
    title:'Herramientas',
    icon: <VscTools/>,
    path:'tools'
  },
  {
    title: 'Languajes',
    icon: <DiCodeBadge/>,
    path:'devlanguage',
  },
  {
    title:'Habilidades blandas',
    icon: <BsPeople/>,
    path:'softSkill'
  }

]