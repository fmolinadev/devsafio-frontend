import React, { useEffect, useState } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SlUser } from 'react-icons/sl';
import { GrDocumentTransfer } from 'react-icons/gr';
import {
  MdOutlineBookmarkAdded,
  MdOutlineEventAvailable
} from 'react-icons/md';
import { RiFolderUserLine } from 'react-icons/ri';
import { useAuth } from '../../context/authContext';
import apiClient from '../../services/api.service';
import Availability from '../../components/Modals/Availability';
import CvModal from '../../components/Modals/CvModal';
import { ProfilePersonal } from '../../components/Modals/ProfilePersonal';
import { RoleAndCurrentSalary } from '../../components/Modals/RoleAndCurrentSalary';
import WorkModal from '../../components/Modals/WorkModal';
import EducationModal from '../../components/Modals/EducationModal';
import DataSkills from '../../components/Modals/DataSkills';
import DeleteEducation from '../../components/Modals/DeleteEducation';
import AddEducation from '../../components/Modals/AddEducation';

export default function UserProfile() {
  const { userData, updateUser } = useAuth();
  const [profile, setProfile] = useState([]);
  const [education, setEducation] = useState([]);
  const [devLanguage, setLanguage] = useState([]);
  const [database, setDataBase] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await apiClient.get('/applicant');
      setProfile(res.data[0]);
      setEducation(res.data[1]);
      setLanguage(res.data[2]);
      setDataBase(res.data[3]);
      setTools(res.data[4]);
    }
    getData();
  }, []);

  const updateProfile = newState => {
    setProfile(prevState => ({ ...prevState, ...newState }));
  };

  const updateEducation = (values, id) => {
    setEducation(prevState =>
      prevState.map(e => (e.id === id ? { ...e, ...values } : e))
    );
  };

  const removeEducation = id => {
    setEducation(prevState => prevState.filter(element => element.id !== id));
  };

  const updateLanguagues = async () => {
    const res = await apiClient.get('/applicant');
    setLanguage(res.data[2]);
  };

  const updateDatabases = async () => {
    const res = await apiClient.get('/applicant');
    setDataBase(res.data[3]);
  };

  const updateTools = async () => {
    const res = await apiClient.get('/applicant');
    setTools(res.data[4]);
  };

  if (!userData)
    return (
      <div className="container m-8 ">
        <div className="alert bg-fill-light shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-primary">Cargado datos del usuario...</span>
          </div>
        </div>
      </div>
    );
  return (
    <div className="grid container mx-auto mr-10 md:w-screen md:mt-5 lg:my-10 ml-3 lg:mx-20 lg:w-screen m-5 lg:m-12">
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl md:mb-3 lg:mb-4 ">
        ¡Bienvenido!
      </h1>
      <br />
      <br />
      <div className="lg:flex lg:justify-between mb-2 lg:mb-6 ">
        <div className="flex gap-6 md:text-md lg:text-lg mb-2">
          <GrDocumentTransfer /> <h1 className="mr-2">sube tu Cv </h1>
        </div>
        <div className="flex ml-7 gap-8 justify-between">
          <h2 className="text-sm mr-7">{profile.cvUrl}</h2>
          <CvModal updateProfile={updateProfile} data={profile} />
        </div>
      </div>
      <hr className=" border-black" />
      <div className="grid grid-cols-2 gap-2 justify-between sm:grid-cols-3 lg:justify-between mb-2 mt-4 lg:mb-7 lg:gap-6 lg:mt-10">
        <div className="col-start-1">
          <SlUser className="w-11 h-11 mr-7" />
        </div>
        <div className="col-start-1 sm:col-start-2">
          <h1 className="font-bold text-xl">
            {userData.firstName} {userData.lastName}
          </h1>
          <p className="text-lg">{profile.country}</p>
        </div>
        <div className="flex justify-end">
          <ProfilePersonal
            updateProfile={updateProfile}
            data={profile}
            userData={userData}
            updateUser={data => updateUser({ ...userData, ...data })}
          />
        </div>
      </div>
      <div className="flex justify-start sm:justify-around md:justify-around gap-8 mb-2 mt-4 lg:mb-7 ">
        <div className="flex gap-5 mx-1 relative group ">
          <AiOutlineMail className="cursor-pointer w-6 h-6" />
          <span className="md:hidden item-center bg-gray-50 text-dark-text invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:visible absolute  -top-6 rounded-md">
            {userData.email}
          </span>
          <p className="hidden md:block">{userData.email}</p>
        </div>
        <div className="flex gap-5 mx-1 relative group ">
          <AiOutlinePhone className="cursor-pointer  w-6 h-6" />
          <span className="md:hidden  bg-gray-50 text-dark-text invisible transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:visible absolute -top-6 rounded-md">
            {profile.phoneNumber}
          </span>
          <p className="hidden md:block">{profile.phoneNumber}</p>
        </div>
        <a
          className="relative group"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          href={`${profile.linkedinUrl}`}
        >
          <BsLinkedin className=" rounded-3xl w-6 h-6" />
        </a>
        <a
          className="relative group"
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          href={`${profile.githubUrl}`}
        >
          <BsGithub className=" w-6 h-6" />
        </a>
      </div>
      <hr className=" border-black" />
      <div className="lg:flex lg:justify-between mb-4 lg:mb-7 mt-4 lg:mt-10">
        <div className="flex gap-5 text-lg">
          <MdOutlineBookmarkAdded />
          <h2>Experiencia Laboral</h2>
        </div>
        <div className="flex ml-10 gap-8 justify-between">
          <div className=" lg:text-end text-sm">
            <h2 className="font-bold">{profile.devExperience}</h2>
            <h2>Nivel Ingles: {profile.englishLevel}</h2>
          </div>
          <div>
            <WorkModal updateProfile={updateProfile} data={profile} />
          </div>
        </div>
      </div>
      <hr className="border-black" />
      <div className="lg:flex lg:justify-between mb-4 lg:mb-7 mt-4 lg:mt-10">
        <div className="flex gap-5 text-lg">
          <MdOutlineEventAvailable />
          <p>Disponibilidad</p>
        </div>
        <div className="flex gap-8 justify-between">
          <div className="text-start ml-10 lg:text-end text-sm">
            <h2 className="font-bold">{profile.workAvailability}</h2>
            <h2>Posibilidad de ingreso: {profile.availabilityStatus}</h2>
          </div>
          <div>
            <Availability updateProfile={updateProfile} data={profile} />
          </div>
        </div>
      </div>
      <hr className="border-black" />
      <div className="lg:flex lg:justify-between mb-4 lg:mb-7 mt-4 lg:mt-10">
        <div className="flex gap-6 text-lg">
          <RiFolderUserLine />
          <p>Rol y salario actual</p>
        </div>
        <div className="flex gap-8 justify-between">
          <div className="text-start ml-10 lg:text-end text-sm">
            <p className="font-bold">{profile.stack}</p>
            <p> Salario actual: USD {profile.currentSalary}</p>
          </div>
          <div>
            <RoleAndCurrentSalary
              updateProfile={updateProfile}
              data={profile}
            />
          </div>
        </div>
      </div>
      <hr className="border-black" />
      <div className="mb-4 p-1 lg:mb-7 mt-4 lg:mt-10">
        <div className="flex justify-between mb-8">
          <h1 className="text-2xl">Habilidades</h1>
          <DataSkills
            updateLanguagues={updateLanguagues}
            updateDatabases={updateDatabases}
            updateTools={updateTools}
          />
        </div>
        <div className="gap-5 lg:gap-12 grid-col">
          <div className=" flex flex-col">
            <h1 className="my-2">Avanzado</h1>
            <div className="flex flex-wrap space-x-2">
              {[devLanguage, database, tools].flatMap(category =>
                category
                  .filter(element => element.level === 3)
                  .map(element => (
                    <div className="md:flex lg:flex" key={element.id}>
                      <div
                        className="badge badge-outline border-light-purple p-1 pt-0 pb-0 h-fit w-fit rounded-md"
                        id={element.id}
                      >
                        {element.name}
                      </div>
                    </div>
                  ))
              )}
            </div>
            <h1 className="my-2">Experimentado</h1>
            <div className="flex flex-wrap space-x-2">
              {[devLanguage, database, tools].flatMap(category =>
                category
                  .filter(element => element.level === 2)
                  .map(element => (
                    <div className="md:flex lg:flex" key={element.id}>
                      <div
                        className="badge badge-outline border-light-purple p-1 pt-0 pb-0 h-fit w-fit rounded-md"
                        id={element.id}
                      >
                        {element.name}
                      </div>
                    </div>
                  ))
              )}
            </div>
            <h1 className=" my-2">Principiante</h1>
            <div className="flex flex-wrap space-x-2">
              {[devLanguage, database, tools].flatMap(category =>
                category
                  .filter(element => element.level === 1)
                  .map(element => (
                    <div className="md:flex lg:flex" key={element.id}>
                      <div
                        className="badge badge-outline border-light-purple p-1 pt-0 pb-0 h-fit w-fit rounded-md"
                        id={element.id}
                      >
                        {element.name}
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-black" />
      <div className="lg:flex-col p-1 mb-4 lg:mb-7 mt-4 lg:mt-10">
        <h1 className=" text-2xl mb-4">Educación</h1>
        <div className="flex justify-end mb-4">
          <AddEducation
            setEducation={setEducation}
            id={education.id}
            data={education}
          />
        </div>
        {education.map(element => (
          <div
            className=" flex justify-between my-4"
            value={element.id}
            key={element.id}
          >
            <div>
              {(element.startMonth !== null) & (element.startYear !== null) ? (
                <h1 className=" text-blue-700 text-sm font-bold">{`${element.startMonth} ${element.startYear} - ${element.endMonth} ${element.endYear}`}</h1>
              ) : (
                <h1 className=" text-blue-700 text-sm font-bold">
                  Fecha ingreso - Fecha egreso
                </h1>
              )}
              <h1 className="text-2xl">{element.name}</h1>
              <h1 className=" text-blue-700 text-sm font-bold">
                {element.instituteName}
              </h1>
            </div>
            <div className=" flex gap-5 justify-between">
              <EducationModal
                updateEducation={updateEducation}
                id={element.id}
                data={element}
              />
              <DeleteEducation
                removeEducation={removeEducation}
                id={element.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
